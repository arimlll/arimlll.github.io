import { visit } from 'unist-util-visit';

/**
 * 依据语种精确统计正文字数 / 单词数 / 字符数
 */
function countWordsForLang(text, lang) {
  if (!text) return 0;
  const clean = text.trim();

  if (lang === 'en') {
    // 英文：统计真实英文单词数（字母数字序列，支持词内连字符和撇号），标点符号不计入单词
    const words = clean.match(/\b[a-zA-Z0-9]+(?:['’\-][a-zA-Z0-9]+)*\b/g) || [];
    return words.length;
  } else if (lang === 'ja') {
    // 日文：按照日本出版和组版规范统计“文字数”（去除所有空白，包含汉字、平假名、片假名、英数与句读符号）
    return clean.replace(/\s+/g, '').length;
  } else {
    // 中文：CJK 汉字 + 全角中文标点 + 英文单词 + 数字
    const cjk = clean.match(/[\u4e00-\u9fa5\u3400-\u4dbf]/g) || [];
    const enWords = clean.match(/\b[a-zA-Z0-9]+(?:['’\-][a-zA-Z0-9]+)*\b/g) || [];
    const cjkPunct = clean.match(/[\u3000-\u303f\uff00-\uffef]/g) || [];
    const numbers = clean.match(/\d+/g) || [];
    return cjk.length + enWords.length + cjkPunct.length + numbers.length;
  }
}

/**
 * 依据真实语种阅读速率计算预估阅读时间（分钟）
 */
function calculateReadingTime(wordCount, lang) {
  if (!wordCount || wordCount <= 0) return 1;

  if (lang === 'en') {
    // 英文国际通用成人默读速率：200 WPM (Words Per Minute)
    return Math.max(1, Math.ceil(wordCount / 200));
  } else if (lang === 'ja') {
    // 日文标准默读速率：400 文字/分（论说文、学术专业文标准速率）
    return Math.max(1, Math.ceil(wordCount / 400));
  } else {
    // 中文标准默读速率：300 字/分钟
    return Math.max(1, Math.ceil(wordCount / 300));
  }
}

export default function remarkWordCount() {
  return function (tree, file) {
    const frontmatter = file.data?.astro?.frontmatter || {};

    // 智能识别语言：优先从 frontmatter.lang 读取，其次由文件名后缀推断，默认中文
    let lang = frontmatter.lang;
    if (!lang && file.history && file.history.length > 0) {
      const filePath = file.history[0];
      if (filePath.includes('-en.')) lang = 'en';
      else if (filePath.includes('-ja.')) lang = 'ja';
    }
    if (!lang) lang = 'zh';

    const textChunks = [];

    // 统计标题（若含有 <ruby> 注音则清理假名，避免重复统计）
    if (frontmatter.title) {
      const cleanTitle = frontmatter.title
        .replace(/<rt>[\s\S]*?<\/rt>/gi, '')
        .replace(/<rp>[\s\S]*?<\/rp>/gi, '')
        .replace(/<[^>]+>/g, ' ');
      textChunks.push(cleanTitle);
    }

    // 状态标记：是否处于 <rt>...</rt> 或 <rp>...</rp> 假名注音内部
    let inRt = false;

    // 遍历 AST：提取 text, code, inlineCode，以及包含 <ruby> 等正文 HTML 节点的文字
    visit(tree, ['text', 'code', 'inlineCode', 'html'], (node) => {
      if (!node.value) return;

      if (node.type === 'html') {
        const val = node.value;
        // 遇到假名标签开闭，更新状态
        if (/<rt\b|<rp\b/i.test(val)) {
          inRt = true;
        }
        if (/<\/rt>|<\/rp>/i.test(val)) {
          inRt = false;
        }

        // 若整块 HTML 中包含非假名的纯文本内容（如单个 HTML 块）
        const strippedHtml = val
          .replace(/<rt>[\s\S]*?<\/rt>/gi, '')
          .replace(/<rp>[\s\S]*?<\/rp>/gi, '')
          .replace(/<[^>]+>/g, ' ')
          .trim();
        if (strippedHtml) {
          textChunks.push(strippedHtml);
        }
      } else {
        // text, code, inlineCode：只有在非注音假名时才统计
        if (!inRt) {
          textChunks.push(node.value);
        }
      }
    });

    const fullText = textChunks.join(' ');
    const wordCount = countWordsForLang(fullText, lang);
    const readingTime = calculateReadingTime(wordCount, lang);

    if (!file.data.astro) {
      file.data.astro = {};
    }
    if (!file.data.astro.frontmatter) {
      file.data.astro.frontmatter = {};
    }

    file.data.astro.frontmatter.wordCount = wordCount;
    file.data.astro.frontmatter.readingTime = readingTime;
  };
}
