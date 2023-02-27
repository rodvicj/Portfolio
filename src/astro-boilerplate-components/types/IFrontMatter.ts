export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
}

// TODO: Add interface for projects

export interface IFrontmatterProject {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
}

//   name="Project 2"
//   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//   bibendum. Nunc non posuere consectetur, justo erat semper enim, non
//   hendrerit dui odio id enim."
//   link="/"
//   img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
//   category={
//     <>
//       <Tags color={ColorTags.VIOLET}>Next.js</Tags>
//       <Tags color={ColorTags.EMERALD}>Blog</Tags>
//       <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
//     </>
//   }
// />


// Workaround to import Astro type. Otherwise, it'll have some compilation errors
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Page<T> = import('astro').Page<T>;
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type MarkdownInstance<T> = import('astro').MarkdownInstance<T>;

export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
