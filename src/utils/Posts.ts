import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '@/astro-boilerplate-components/index';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
