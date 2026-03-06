import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await post.render();
      const contentHtml = sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      });
      
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
        content: contentHtml,
      };
    })
  );

  return rss({
    title: '啊睿猫 | Ariml\'s Blog',
    description: '啊睿猫的个人博客，分享法律和生活。',
    site: context.site!,
    items,
    customData: `<language>zh-cn</language>`,
  });
}
