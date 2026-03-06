import { visit } from 'unist-util-visit';

function countWords(text) {
  if (!text) return 0;
  // 移除多余空白
  const cleanText = text.trim();
  // 中文字符计数
  const chineseChars = cleanText.match(/[\u4e00-\u9fa5]/g) || [];
  // 中文标点计数
  const chinesePunctuation = cleanText.match(/[\u3000-\u303f\uff00-\uffef]/g) || [];
  // 英文单词计数
  const englishWords = cleanText.match(/[a-zA-Z]+/g) || [];
  // 英文标点计数
  const englishPunctuation = cleanText.match(/[.,;:!?()"'\-\[\]{}<>`~@#$%^&*+=_|/\\]/g) || [];
  // 数字计数
  const numbers = cleanText.match(/\d+/g) || [];
  return chineseChars.length + chinesePunctuation.length + englishWords.length + englishPunctuation.length + numbers.length;
}

export default function remarkWordCount() {
  return function (tree, file) {
    let wordCount = 0;
    
    // 统计正文内容
    visit(tree, ['text', 'code'], (node) => {
      wordCount += countWords(node.value);
    });
    
    // 统计 frontmatter 中的 title 和 description
    const frontmatter = file.data?.astro?.frontmatter || {};
    wordCount += countWords(frontmatter.title);
    wordCount += countWords(frontmatter.description);
    
    // 使用 Astro 推荐的方式注入 frontmatter 数据
    if (!file.data.astro) {
      file.data.astro = {};
    }
    if (!file.data.astro.frontmatter) {
      file.data.astro.frontmatter = {};
    }
    file.data.astro.frontmatter.wordCount = wordCount;
  };
}
