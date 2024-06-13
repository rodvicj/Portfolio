import { format } from "date-fns";

import type { IFrontmatter } from "@/astro-boilerplate-components/index";

import { Technology } from "./Technology";

type IPostHeaderProps = {
  content: IFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => (
  <>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

    <div className="my-2 text-center text-sm text-gray-400">
      By {props.author} on{" "}
      {format(new Date(props.content.pubDate), "LLL d, yyyy")}
    </div>
    {/* TODO: create a flex container and make children direction row */}

    <div className="flex flex-col items-center justify-center gap-y-2 md:flex-row">
      <div className="ml-3 flex flex-wrap gap-2">
        <Technology tags={props.content.tags} />
      </div>
    </div>
  </>
);

export { PostHeader };
