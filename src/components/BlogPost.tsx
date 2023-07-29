import type { ReactNode } from 'react';

import type { IFrontmatter } from '@/astro-boilerplate-components/index';
import {
  PostContent,
  PostHeader,
  Section,
} from '@/astro-boilerplate-components/index';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
