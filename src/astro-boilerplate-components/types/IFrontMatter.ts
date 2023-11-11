import type { MarkdownInstance } from 'astro';

export interface IFrontmatter {
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

export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;

// export interface MarkdownInstance<T extends Record<string, any>> {
//   /* Any data specified in this file's YAML frontmatter */
//   frontmatter: T;
//   /* The file path of this file */
//   file: string;
//   /* The rendered path of this file */
//   url: string | undefined;
//   /* Astro Component that renders the contents of this file */
//   Content: AstroComponent;
//   /* Function that returns an array of the h1...h6 elements in this file */
//   getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
// }
