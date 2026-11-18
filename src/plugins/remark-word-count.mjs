import { visit } from 'unist-util-visit';

/**
 * 依据语种精确统计：
 * 1. wordCount：字数 / 词数（包含标点符号）
 * 2. readingTime：预估阅读时间（分钟，不包含标点符号）
 */
function analyzeTextForLang(text, lang) {
  if (!text) return { wordCount: 0, readingTime: 1 };
  const clean = text.trim();

  if (lang === 'en') {
    // 英文单词与数字（不含标点）
    const words = clean.match(/\b[a-zA-Z0-9]+(?:['’\-][a-zA-Z0-9]+)*\b/g) || [];
    // 标点符号与特殊符号
    const punct = clean.match(/[\p{P}\p{S}]/gu) || [];
    // 英文成人标准默读速率：200 WPM（仅按可读单词计算，不计入标点）
    const readingTime = Math.max(1, Math.ceil(words.length / 200));
    // 字数统计：包含标点符号
    const wordCount = words.length + punct.length;
    return { wordCount, readingTime };
  } else if (lang === 'ja') {
    // 日文全部字符（包含汉字、假名、数字、英文字母及句读标点，去除空白）
    const totalChars = clean.replace(/\s+/g, '');
    // 纯文本字符（去除所有标点符号与特殊记号）
    const textOnlyChars = totalChars.replace(/[\p{P}\p{S}\u3000-\u303f\uff00-\uffef]/gu, '');
    // 日文标准默读速率：400 字符/分钟（仅按纯文字计算，不计入标点）
    const readingTime = Math.max(1, Math.ceil(textOnlyChars.length / 400));
    // 字数统计：包含标点符号（即日本出版通常所指“文字数”）
    const wordCount = totalChars.length;
    return { wordCount, readingTime };
  } else {
    // 中文 CJK 汉字
    const cjk = clean.match(/[\u4e00-\u9fa5\u3400-\u4dbf]/g) || [];
    // 英文单词
    const enWords = clean.match(/\b[a-zA-Z]+(?:['’\-][a-zA-Z]+)*\b/g) || [];
    // 独立数字
    const numbers = clean.match(/\d+/g) || [];
    // 标点符号（含中英文标点）
    const punct = clean.match(/[\p{P}\p{S}\u3000-\u303f\uff00-\uffef]/gu) || [];
    // 可读内容（不包含标点符号）
    const readingUnits = cjk.length + enWords.length + numbers.length;
    // 中文标准默读速率：300 字/分钟（仅按可读文字计算，不计入标点）
    const readingTime = Math.max(1, Math.ceil(readingUnits / 300));
    // 字数统计：包含标点符号
    const wordCount = cjk.length + enWords.length + numbers.length + punct.length;
    return { wordCount, readingTime };
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
    const { wordCount, readingTime } = analyzeTextForLang(fullText, lang);

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
