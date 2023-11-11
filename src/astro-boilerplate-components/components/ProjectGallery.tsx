import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '@/astro-boilerplate-components/index';

import { Project } from './Project';

type IRecentProjectsProps = {
  projectList: MarkdownInstance<IFrontmatter>[];
};

// TODO: Make it accomodate Projects
const ProjectGallery = (props: IRecentProjectsProps) => (
  <div className="flex flex-col gap-6">
    {props.projectList.map((project) => (
      <Project key={project.url} instance={project} />
    ))}
  </div>
);

export { ProjectGallery };

// <Project
//   name={props.projectList.name}
//   description={props.projectList.description}
//   link="/"
//   imgsrc={props.projectList.imgSrc}
//   imgalt={props.projectList.imgAlt}
//   category={
//     <>
//   {props.projectList.tags.map((tag: string) => {
//       <Tags color={ColorTags.FUCHSIA}>{tag}</Tags>
//   })}
//     </>
//   }
// />
