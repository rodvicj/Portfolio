import type { MarkdownInstance } from "astro";
import { format } from "date-fns";

import type { IFrontmatter } from "../types/IFrontMatter";
import { Technology } from "./Technology";

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <>
    <a
      // className="overflow-hidden rounded-md bg-slate-800 hover:translate-y-1"
      className="flex h-full grow rounded-md bg-slate-800 hover:translate-y-1"
      href={props.instance.url}
    >
      <div className="flex grow flex-col">
        <div className="aspect-h-2 aspect-w-3">
          <img
            className="size-full object-cover object-center"
            src={props.instance.frontmatter.imgSrc}
            alt={props.instance.frontmatter.imgAlt}
            loading="lazy"
          />
        </div>

        <div className="flex grow flex-col p-4">
          <div className="mb-2 text-center">
            <h2 className="text-2xl font-semibold">
              {props.instance.frontmatter.title}
            </h2>
            <div className="text-xs text-gray-400">
              {format(
                new Date(props.instance.frontmatter.pubDate),
                "LLL d, yyyy"
              )}
            </div>
          </div>

          <div className="flex h-full flex-col justify-between">
            <div className="text-center">
              <div className="text-left text-base">
                {props.instance.frontmatter.description}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 pt-4">
              <Technology tags={props.instance.frontmatter.tags} />
            </div>
          </div>
        </div>
      </div>
    </a>
  </>
);

export { BlogCard };
