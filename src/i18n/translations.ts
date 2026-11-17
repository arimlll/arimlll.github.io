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
    'home.sub': '微信公众号 @啊睿猫 ·「黄河长江不会倒流」',

    // Post Card & Meta
    'post.words': '字',
    'post.minRead': '约 {min} 分钟',
    'post.readingTime': '约 {min} 分钟阅读',
    'post.originalSource': '本文最初来源：',
    'post.copyrightNotice': '💡 版权声明：本文采用 AGPL-3.0 许可协议，转载请注明出处。',
    'post.comments': '评论',
    'post.backToTop': '回到顶部',
    'post.copyCode': '复制代码',
    'post.copied': '已复制!',

    // Guestbook
    'guestbook.title': '留言墙',
    'guestbook.desc': '雁过留痕，风过留声。欢迎在此畅所欲言、交流讨论。',

    // Search
    'search.title': '搜索',
    'search.desc': '按文章标题、标签或描述搜索文章。',
    'search.placeholder': '输入关键词搜索...',
    'search.clear': '清除',
    'search.found': '找到 {count} 篇相关文章',
    'search.noResults': '没有找到匹配的文章，换个关键词试试？',

    // Tags
    'tags.title': '标签',
    'tags.desc': '按标签浏览文章。',
    'tags.postsCount': '{count} 篇文章',
    'tags.allTags': '全部标签',
    'tags.tagged': '标签为',

    // Blog
    'blog.title': '博客文章',
    'blog.desc': '记录思考、随笔与分享。',

    // 404
    '404.title': '页面未找到',
    '404.desc': '抱歉，您访问的页面不存在或已被移除。',
    '404.backHome': '返回首页',

    // Footer
    'footer.rssCopied': 'RSS 链接已复制！',
    'footer.moreSites': '更多站点',

    // Switchers
    'theme.toggle': '切换明暗主题',
    'lang.select': '切换语言',
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
    'home.sub': 'WeChat @啊睿猫 · "Yellow River and Yangtze will not flow backwards"',

    // Post Card & Meta
    'post.words': 'words',
    'post.minRead': '~{min} min read',
    'post.readingTime': '~{min} min read',
    'post.originalSource': 'Originally published at: ',
    'post.copyrightNotice': '💡 Copyright: Licensed under AGPL-3.0. Please cite source when reposting.',
    'post.comments': 'Comments',
    'post.backToTop': 'Back to top',
    'post.copyCode': 'Copy code',
    'post.copied': 'Copied!',

    // Guestbook
    'guestbook.title': 'Guestbook',
    'guestbook.desc': 'Leave a trace, leave a sound. Welcome to share your thoughts and discussions.',

    // Search
    'search.title': 'Search',
    'search.desc': 'Search articles by title, tags, or description.',
    'search.placeholder': 'Type keywords to search...',
    'search.clear': 'Clear',
    'search.found': 'Found {count} articles',
    'search.noResults': 'No matching articles found. Try another keyword?',

    // Tags
    'tags.title': 'Tags',
    'tags.desc': 'Browse articles by tags.',
    'tags.postsCount': '{count} posts',
    'tags.allTags': 'All Tags',
    'tags.tagged': 'Tagged with',

    // Blog
    'blog.title': 'Blog Posts',
    'blog.desc': 'Notes, essays, reflections and ideas.',

    // 404
    '404.title': 'Page Not Found',
    '404.desc': 'Sorry, the page you visited does not exist or has been removed.',
    '404.backHome': 'Back to Home',

    // Footer
    'footer.rssCopied': 'RSS link copied!',
    'footer.moreSites': 'More Sites',

    // Switchers
    'theme.toggle': 'Toggle theme',
    'lang.select': 'Change language',
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
    'home.sub': 'WeChat @啊睿猫 ·「黄河と長江は逆流しない」',

    // Post Card & Meta
    'post.words': '文字',
    'post.minRead': '約 {min} 分',
    'post.readingTime': '約 {min} 分で読めます',
    'post.originalSource': '初出記事：',
    'post.copyrightNotice': '💡 著作権：AGPL-3.0 ライセンスに基づき公開されています。転載時は出典を明記してください。',
    'post.comments': 'コメント',
    'post.backToTop': 'トップへ戻る',
    'post.copyCode': 'コードをコピー',
    'post.copied': 'コピーしました!',

    // Guestbook
    'guestbook.title': 'ゲストブック',
    'guestbook.desc': '足跡を残し、風に声を。ご意見や交流を心より歓迎いたします。',

    // Search
    'search.title': '検索',
    'search.desc': '記事のタイトル、タグ、説明で検索できます。',
    'search.placeholder': 'キーワードを入力して検索...',
    'search.clear': 'クリア',
    'search.found': '{count} 件の記事が見つかりました',
    'search.noResults': '一致する記事は見つかりませんでした。別のキーワードをお試しください。',

    // Tags
    'tags.title': 'タグ',
    'tags.desc': 'タグで記事を一覧表示します。',
    'tags.postsCount': '{count} 件の記事',
    'tags.allTags': 'すべてのタグ',
    'tags.tagged': 'タグ：',

    // Blog
    'blog.title': 'ブログ記事',
    'blog.desc': '考察、随筆、日常の記録。',

    // 404
    '404.title': 'ページが見つかりません',
    '404.desc': '申し訳ありません。アクセスしたページは存在しないか、移動した可能性があります。',
    '404.backHome': 'ホームに戻る',

    // Footer
    'footer.rssCopied': 'RSSリンクをコピーしました！',
    'footer.moreSites': '関連サイト',

    // Switchers
    'theme.toggle': 'テーマ切替',
    'lang.select': '言語切替',
  },
};
