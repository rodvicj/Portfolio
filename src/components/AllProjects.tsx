import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '@/astro-boilerplate-components/index';
import {
  BlogGallery,
  GradientText,
  Section,
} from '@/astro-boilerplate-components/index';

type IAllPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const AllProjects = (props: IAllPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>

        <div className="text-sm">
          <a href="/projects">View all Projects →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { AllProjects };
