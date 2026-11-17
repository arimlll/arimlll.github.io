import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
});

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const baseUrl = context.site
    ? context.site.toString().replace(/\/$/, '')
    : 'https://arimlll.github.io';

  const items = posts.map((post) => {
    // Render markdown to HTML with raw HTML support
    const rawHtml = parser.render(post.body || '');

    // Sanitize HTML safely while preserving content tags and styles
    const sanitizedHtml = sanitizeHtml(rawHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'code', 'kbd', 'del', 'ins',
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        '*': ['class', 'id', 'aria-hidden'],
        a: ['href', 'name', 'target', 'rel', 'title'],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
      },
    });

    // Resolve relative URLs to absolute URLs for RSS readers
    const resolvedHtml = sanitizedHtml
      .replace(/(src|href)="\/([^"]*)"/g, `$1="${baseUrl}/$2"`);

    const slug = post.slug || post.id;

    return {
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${slug}/`,
      categories: post.data.tags || [],
      author: '啊睿猫',
      content: resolvedHtml,
    };
  });

  return rss({
    title: '啊睿猫 | Ariml\'s Blog',
    description: '啊睿猫的个人博客，分享法律和生活。',
    site: context.site!,
    stylesheet: '/rss-style.xsl',
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      content: 'http://purl.org/rss/1.0/modules/content/',
    },
    items,
    customData: [
      '<language>zh-cn</language>',
      `<atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />`,
      '<image>',
      `  <url>${baseUrl}/rss_cover.jpg</url>`,
      '  <title>啊睿猫 | Ariml\'s Blog</title>',
      `  <link>${baseUrl}/</link>`,
      '</image>',
    ].join('\n'),
  });
}
