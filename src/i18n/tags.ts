export interface TagGroup {
  id: string;
  zh: string;
  en: string;
  ja: string;
}

export const TAG_GROUPS: TagGroup[] = [
  { id: 'essays', zh: '随笔', en: 'Essays', ja: '随筆' },
  { id: 'announcements', zh: '公告', en: 'Announcements', ja: 'お知らせ' },
  { id: 'law', zh: '法律', en: 'Law', ja: '法律' },
];

/**
 * Normalizes a tag string by matching against defined TagGroups.
 * If unmatched, returns a synthetic group where id = tag.toLowerCase(), zh = en = ja = tag.
 */
export function getTagGroup(tag: string): TagGroup {
  const normalized = tag.trim().toLowerCase();
  for (const group of TAG_GROUPS) {
    if (
      group.id.toLowerCase() === normalized ||
      group.zh.toLowerCase() === normalized ||
      group.en.toLowerCase() === normalized ||
      group.ja.toLowerCase() === normalized
    ) {
      return group;
    }
  }
  return { id: tag.toLowerCase(), zh: tag, en: tag, ja: tag };
}

/**
 * Returns the localized tag name for a given tag or groupId.
 */
export function getLocalizedTagName(tagOrId: string, lang: 'zh' | 'en' | 'ja'): string {
  const group = getTagGroup(tagOrId);
  return group[lang] || group.zh;
}

export interface UnifiedTagItem {
  group: TagGroup;
  count: number;
  posts: any[];
}

/**
 * Merges posts by TagGroup and returns deduplicated tag items with count of unique base articles.
 */
export function getUnifiedTags(posts: any[]): UnifiedTagItem[] {
  const map = new Map<string, { group: TagGroup; baseSlugs: Set<string>; posts: any[] }>();

  posts.forEach(post => {
    const rawSlug = post.slug || post.id || '';
    const baseSlug = rawSlug.replace(/-(en|ja)$/, '');
    const tags: string[] = post.data?.tags || [];

    tags.forEach(tag => {
      const group = getTagGroup(tag);
      if (!map.has(group.id)) {
        map.set(group.id, {
          group,
          baseSlugs: new Set(),
          posts: [],
        });
      }
      const entry = map.get(group.id)!;
      entry.baseSlugs.add(baseSlug);
      if (!entry.posts.includes(post)) {
        entry.posts.push(post);
      }
    });
  });

  return Array.from(map.values())
    .map(entry => ({
      group: entry.group,
      count: entry.baseSlugs.size,
      posts: entry.posts,
    }))
    .sort((a, b) => b.count - a.count);
}
