/**
 * 博客站点全局配置
 */
export const SITE = {
  title: '啊睿猫 | Ariml\'s Blog',
  description: '啊睿猫的个人博客 | Ariml\'s Blog',
  url: 'https://arimlll.github.io',
  author: '啊睿猫',
};

/**
 * Cusdis 零运维免登录评论与留言墙系统配置（推荐）
 *
 * 官方云托管，永久免费，无需云服务器、无需数据库、免绑信用卡。
 * 前往 https://cusdis.com 使用 GitHub 登录，点击 "Add App"，
 * 将生成的 APP ID 填入下方 appId 中即可全站一键激活！
 */
export const CUSDIS_CONFIG = {
  // 从 cusdis.com 获取的 App ID（例如: "d4f6a7b8-xxxx-xxxx-xxxx-xxxxxxxxxxxx"）
  appId: '',
  host: 'https://cusdis.com',
};

/**
 * Waline 备用配置
 */
export const WALINE_CONFIG = {
  serverURL: '',
  emoji: [
    '//unpkg.com/@waline/emojis@1.2.0/weibo',
    '//unpkg.com/@waline/emojis@1.2.0/bilibili',
  ],
  requiredMeta: ['nick'],
};
