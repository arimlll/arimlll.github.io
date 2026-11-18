export type Lang = 'zh' | 'en' | 'ja';

export interface LanguageOption {
  code: Lang;
  label: string;
  short: string;
  native: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'zh', label: '简体中文', short: '中', native: '简体中文' },
  { code: 'en', label: 'English', short: 'EN', native: 'English' },
  { code: 'ja', label: '日本語', short: '日', native: '日本語' },
];

export const UI_TRANSLATIONS: Record<Lang, Record<string, string>> = {
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.tags': '标签',
    'nav.guestbook': '留言',
    'nav.search': '搜索',

    // Home
    'home.recentPosts': '最新文章',
    'home.viewAll': '全部文章',
    'home.motto': '「黄河长江不会倒流」',
    'home.badgeHtml': '微信公众号 <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener" class="hero-link">@啊睿猫</a>',
    'home.scrollDown': '向下滚动查看',
    'home.typeHint': '点击或直接敲键盘即可打字',
    'home.subHtml': '微信公众号 <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener" class="hero-link">@啊睿猫</a> ·「黄河长江不会倒流」',

    // Post Card & Meta
    'post.backToList': '返回文章列表',
    'post.updatedPrefix': '(更新于 ',
    'post.words': '字',
    'post.minRead': '约 {min} 分钟',
    'post.readingPrefix': '约 ',
    'post.readingSuffix': ' 分钟阅读',
    'post.readingTime': '约 {min} 分钟阅读',
    'post.originalSource': '本文最初来源：',
    'post.copyrightNotice': '💡 版权声明：本文采用 <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">AGPL-3.0</a> 许可协议，转载请注明出处。',
    'post.comments': '评论',
    'post.backToTop': '回到顶部',
    'post.copyCode': '复制代码',
    'post.copied': '已复制!',

    // Guestbook
    'guestbook.title': '留言墙',
    'guestbook.desc': '雁过留痕，风过留声。欢迎在此畅所欲言、交流讨论。',

    // Search
    'search.title': '搜索文章',
    'search.desc': '按标题、摘要或标签实时检索全站文章',
    'search.placeholder': '输入关键词搜索（快捷键 / 聚焦）...',
    'search.clear': '清除',
    'search.found': '找到 {count} 篇相关文章',
    'search.noResults': '没有找到相关文章，请尝试更换关键词',

    // Tags
    'tags.title': '标签归档',
    'tags.desc': '按文章标签分类浏览，快速查找感兴趣的话题。',
    'tags.backToTags': '返回标签列表',
    'tags.postsCount': '{count} 篇文章',
    'tags.allTags': '全部标签',
    'tags.tagged': '标签为',

    // Blog
    'blog.title': '博客文章',
    'blog.desc': '记录思考、随笔与分享。',
    'blog.totalPrefix': '共 ',
    'blog.totalSuffix': ' 篇文章',

    // 404
    '404.title': '抱歉，您访问的页面不存在',
    '404.desc': '该页面可能已被移动、删除，或输入的链接地址有误。',
    '404.backHome': '返回首页',
    '404.browseAll': '浏览所有文章',

    // Footer
    'footer.rights': '保留所有权利。',
    'footer.novelLink': '一些蠢小说',
    'footer.copyRss': '点击复制 RSS 订阅地址',
    'footer.rssCopied': 'RSS 订阅地址已复制',
    'footer.moreSites': '更多站点',

    // Switchers
    'theme.toggle': '切换明暗主题',
    'lang.select': '切换语言',
    'font.decrease': '缩小字号 (A-)',
    'font.increase': '放大字号 (A+)',
    'font.reset': '恢复默认字号 (100%)',
    'furigana.hide': '隐藏假名',
    'furigana.show': '显示假名',
    'furigana.toggle': '开关假名标注',
    'tategaki.hintVertical': '竖排（从右向左滚动）',
    'tategaki.hintHorizontal': '横排（从上向下滚动）',
    'tategaki.toHorizontal': '横排阅读',
    'tategaki.toVertical': '竖排阅读',
    'tategaki.toggle': '切换横竖排版',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    'nav.guestbook': 'Guestbook',
    'nav.search': 'Search',

    // Home
    'home.recentPosts': 'Recent Posts',
    'home.viewAll': 'All Posts',
    'home.motto': '"Yellow River and Yangtze will not flow backwards"',
    'home.badgeHtml': 'WeChat Official Account <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener" class="hero-link">@啊睿猫</a>',
    'home.scrollDown': 'Scroll to explore',
    'home.typeHint': 'Click or type on keyboard to write',
    'home.subHtml': 'WeChat Official Account <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener" class="hero-link">@啊睿猫</a> · "Yellow River and Yangtze will not flow backwards"',

    // Post Card & Meta
    'post.backToList': 'Back to articles',
    'post.updatedPrefix': '(Updated on ',
    'post.words': 'words',
    'post.minRead': '~{min} min read',
    'post.readingPrefix': '~',
    'post.readingSuffix': ' min read',
    'post.readingTime': '~{min} min read',
    'post.originalSource': 'Originally published at: ',
    'post.copyrightNotice': '💡 Copyright Notice: This article is licensed under <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">AGPL-3.0</a>. Please cite source when reposting.',
    'post.comments': 'Comments',
    'post.backToTop': 'Back to top',
    'post.copyCode': 'Copy code',
    'post.copied': 'Copied!',

    // Guestbook
    'guestbook.title': 'Guestbook',
    'guestbook.desc': 'Leave a trace, leave a sound. Welcome to share your thoughts and discussions.',

    // Search
    'search.title': 'Search Articles',
    'search.desc': 'Real-time search across all articles by title, excerpt, or tags',
    'search.placeholder': 'Type keywords to search (Press / to focus)...',
    'search.clear': 'Clear',
    'search.found': 'Found {count} related articles',
    'search.noResults': 'No matching articles found. Try another keyword.',

    // Tags
    'tags.title': 'Tags Archive',
    'tags.desc': 'Browse articles by tags to quickly discover relevant topics.',
    'tags.backToTags': 'Back to tags list',
    'tags.postsCount': '{count} posts',
    'tags.allTags': 'All Tags',
    'tags.tagged': 'Tagged with',

    // Blog
    'blog.title': 'Blog Posts',
    'blog.desc': 'Notes, essays, reflections and ideas.',
    'blog.totalPrefix': 'Total ',
    'blog.totalSuffix': ' articles',

    // 404
    '404.title': 'Sorry, the page does not exist',
    '404.desc': 'This page may have been moved, deleted, or you might have mistyped the URL.',
    '404.backHome': 'Back to Home',
    '404.browseAll': 'Browse all posts',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.novelLink': 'Some Silly Novels',
    'footer.copyRss': 'Click to copy RSS feed URL',
    'footer.rssCopied': 'RSS feed URL copied!',
    'footer.moreSites': 'More Sites',

    // Switchers
    'theme.toggle': 'Toggle theme',
    'lang.select': 'Change language',
    'font.decrease': 'Decrease font size (A-)',
    'font.increase': 'Increase font size (A+)',
    'font.reset': 'Reset font size (100%)',
    'furigana.hide': 'Hide Furigana',
    'furigana.show': 'Show Furigana',
    'furigana.toggle': 'Toggle Furigana',
    'tategaki.hintVertical': 'Vertical (Scroll right to left)',
    'tategaki.hintHorizontal': 'Horizontal (Scroll top to bottom)',
    'tategaki.toHorizontal': 'Read horizontally',
    'tategaki.toVertical': 'Read vertically',
    'tategaki.toggle': 'Toggle vertical/horizontal reading',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.blog': 'ブログ',
    'nav.tags': 'タグ',
    'nav.guestbook': 'ゲストブック',
    'nav.search': '検索',

    // Home
    'home.recentPosts': '最新記事',
    'home.viewAll': 'すべての記事',
    'home.motto': '「黄河と長江は逆流しない」',
    'home.badgeHtml': 'WeChat 公式アカウント <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener" class="hero-link">@啊睿猫</a>',
    'home.scrollDown': 'スクロールして記事を読む',
    'home.typeHint': 'クリックまたはキーボードで文字入力できます',
    'home.subHtml': 'WeChat 公式アカウント <a href="https://mp.weixin.qq.com" target="_blank" rel="noopener" class="hero-link">@啊睿猫</a> ·「黄河と長江は逆流しない」',

    // Post Card & Meta
    'post.backToList': '記事一覧に戻る',
    'post.updatedPrefix': '(更新日: ',
    'post.words': '文字',
    'post.minRead': '約 {min} 分',
    'post.readingPrefix': '約 ',
    'post.readingSuffix': ' 分で読めます',
    'post.readingTime': '約 {min} 分で読めます',
    'post.originalSource': '初出記事：',
    'post.copyrightNotice': '💡 著作権声明：本記事は <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">AGPL-3.0</a> ライセンスに基づき公開されています。転載時は出典を明記してください。',
    'post.comments': 'コメント',
    'post.backToTop': 'トップへ戻る',
    'post.copyCode': 'コードをコピー',
    'post.copied': 'コピーしました!',

    // Guestbook
    'guestbook.title': 'ゲストブック',
    'guestbook.desc': '足跡を残し、風に声を。ご意見や交流を心より歓迎いたします。',

    // Search
    'search.title': '記事を検索',
    'search.desc': 'タイトル、概要、タグから記事をリアルタイム検索',
    'search.placeholder': 'キーワードを入力して検索（/ キーでフォーカス）...',
    'search.clear': 'クリア',
    'search.found': '{count} 件の関連記事が見つかりました',
    'search.noResults': '該当する記事は見つかりませんでした。別のキーワードをお試しください。',

    // Tags
    'tags.title': 'タグアーカイブ',
    'tags.desc': 'タグで記事を分類し、興味のあるトピックをすばやく探せます。',
    'tags.backToTags': 'タグ一覧に戻る',
    'tags.postsCount': '{count} 件の記事',
    'tags.allTags': 'すべてのタグ',
    'tags.tagged': 'タグ：',

    // Blog
    'blog.title': 'ブログ記事',
    'blog.desc': '考察、随筆、日常の記録。',
    'blog.totalPrefix': '全 ',
    'blog.totalSuffix': ' 件の記事',

    // 404
    '404.title': '申し訳ありません。ページが見つかりません',
    '404.desc': 'このページは移動もしくは削除されたか、URLが正しくない可能性があります。',
    '404.backHome': 'ホームに戻る',
    '404.browseAll': 'すべての記事を閲覧',

    // Footer
    'footer.rights': '無断転載を禁じます。',
    'footer.novelLink': 'くだらない小説集',
    'footer.copyRss': 'クリックしてRSS購読URLをコピー',
    'footer.rssCopied': 'RSS購読URLをコピーしました！',
    'footer.moreSites': '関連サイト',

    // Switchers
    'theme.toggle': 'テーマ切替',
    'lang.select': '言語切替',
    'font.decrease': '文字サイズを小さく (A-)',
    'font.increase': '文字サイズを大きく (A+)',
    'font.reset': '標準サイズに戻す (100%)',
    'furigana.hide': 'ルビを隠す',
    'furigana.show': 'ルビを表示',
    'furigana.toggle': 'ルビ（ふりがな）表示切替',
    'tategaki.hintVertical': '縦書き（右から左へスクロール）',
    'tategaki.hintHorizontal': '横書き（上から下へスクロール）',
    'tategaki.toHorizontal': '横書きで読む',
    'tategaki.toVertical': '縦書きで読む',
    'tategaki.toggle': '縦書き・横書き切替',
  },
};
