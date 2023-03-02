import { GradientText, Project, Section } from '@/astro-boilerplate-components/index';
import type { MarkdownInstance } from 'astro';
import type { IFrontmatterProject } from '@/astro-boilerplate-components/index';

type IRecentProjectsProps = {
  projectList: MarkdownInstance<IFrontmatterProject>[];
};


// type IProjectProps = {
//   name: string;
//   description: string;
//   imgSrc: string;
//   imgAlt: string;
//   pubDate: string;
//   tags: string[];
// };

const ProjectList = (props: IRecentProjectsProps) => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    {props.projectList.map((project) => (
      <Project key={project.url} instance={project} />
    ))}
  </Section>
);

export { ProjectList };
