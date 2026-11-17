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
 * Waline 免登录评论与留言墙系统配置
 *
 * 只要在此处填入部署好的 Waline 服务端地址（如 Vercel / Zeabur / Cloudflare 等）：
 * 示例: serverURL: 'https://waline-ariml.vercel.app'
 *
 * 填入后，全站所有文章的【评论区】与【留言墙】将全部自动生效，访客均可免登录直接发言！
 */
export const WALINE_CONFIG = {
  // 服务端地址（部署好后填入即可）
  serverURL: '',
  // 表情包配置
  emoji: [
    '//unpkg.com/@waline/emojis@1.2.0/weibo',
    '//unpkg.com/@waline/emojis@1.2.0/bilibili',
  ],
  // 必须填写的项：仅需输入昵称，无需邮箱与个人网站，彻底免登录
  requiredMeta: ['nick'],
};
