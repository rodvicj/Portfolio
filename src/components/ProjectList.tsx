import type { MarkdownInstance } from "astro";

import type { IFrontmatter } from "@/astro-boilerplate-components/index";
import {
  GradientText,
  Project,
  Section,
} from "@/astro-boilerplate-components/index";

type IRecentProjectsProps = {
  projectList: MarkdownInstance<IFrontmatter>[];
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
      {props.projectList.map((project) => (
        <Project key={project.url} instance={project} />
      ))}
    </div>
  </Section>
);

export { ProjectList };
