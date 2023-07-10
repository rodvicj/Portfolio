export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  tags: string[];
}

export interface IFrontmatterProject {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  tags: string[];
}

// Workaround to import Astro type. Otherwise, it'll have some compilation errors
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Page<T> = import('astro').Page<T>;
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
// export type MarkdownInstance<T> = import('astro').MarkdownInstance<T>;

// export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
