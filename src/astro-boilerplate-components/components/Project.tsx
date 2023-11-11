import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatter } from '../types/IFrontMatter';
import { Technology } from './Technology';

type IProjectProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const Project = (props: IProjectProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={props.instance.url}>
        <img
          className="h-36 w-36 hover:translate-y-1"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row">
        <a className="hover:text-cyan-400" href={props.instance.url}>
          <div className="text-xl font-semibold">
            {props.instance.frontmatter.title}
          </div>
        </a>
        <div className="ml-3 flex flex-wrap gap-2">
          <Technology tags={props.instance.frontmatter.tags} />
        </div>
      </div>
      <div className="mt-1 text-xs text-gray-400">
        {format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy')}
      </div>
      <p className="mt-3 text-gray-400">
        {props.instance.frontmatter.description}
      </p>
    </div>
  </div>
);

export { Project };
