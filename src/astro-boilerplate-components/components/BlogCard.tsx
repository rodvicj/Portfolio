import type { MarkdownInstance } from "astro";
import { format } from "date-fns";
import { Technology } from "./Technology";

import type { IFrontmatter } from "../types/IFrontMatter";

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCard = (props: IBlogCardProps) => (
  <>
    <a className="hover:translate-y-1 overflow-hidden rounded-md bg-slate-800" href={props.instance.url}>
      <div>
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="h-full w-full object-cover object-center"
            src={props.instance.frontmatter.imgSrc}
            alt={props.instance.frontmatter.imgAlt}
            loading="lazy"
          />
        </div>

        <div className="px-3 pt-4 pb-6 text-center">
          <h2 className="text-xl font-semibold">
            {props.instance.frontmatter.title}
          </h2>

          <div className="mt-1 text-xs text-gray-400">
            {format(
              new Date(props.instance.frontmatter.pubDate),
              "LLL d, yyyy"
            )}
          </div>
          <div className="mt-2 text-sm">
            {props.instance.frontmatter.description}
          </div>
        </div>


      <div className="ml-3 flex flex-wrap gap-2 px-3 pt-4 pb-6">
        <Technology tags={props.instance.frontmatter.tags} />
      </div>


      </div>
    </a>
  </>
);

export { BlogCard };

// TODO: Fix the inconsistent size of blogpost card container in the index page
// NOTE: Maybe it's in the BlogGallery component

// instance of elt {                                                                                                                                                                                │
//     │  frontmatter: [Getter],                                                                                                                                                                         │
//     │  file: [Getter],                                                                                                                                                                                │
//     │  url: [Getter],                                                                                                                                                                                 │
//     │  rawContent: [Getter],                                                                                                                                                                          │
//     │  compiledContent: [Getter],                                                                                                                                                                     │
//     │  '$$loadMetadata': [Getter],                                                                                                                                                                    │
//     │  Content: [Getter],                                                                                                                                                                             │
//     │  getHeaders: [Getter],                                                                                                                                                                          │
//     │  default: [AsyncFunction: load],                                                                                                                                                                │
//     │  [Symbol(Symbol.toStringTag)]: 'Module'                                                                                                                                                         │
//     │}
