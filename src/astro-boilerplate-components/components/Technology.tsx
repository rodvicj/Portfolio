import { ColorTags, Tags } from "@/astro-boilerplate-components/index";
import { ReactNode } from "react";

type TechStackProps = {
  tags: string[];
};

console.log("tag.lower()", "TAG".toLowerCase());
const Technology = (props: TechStackProps) => (
  <>
    {props.tags.map((tag): ReactNode => (
      <Tags color={ColorTags[tag]}>{tag}</Tags>
    ))}
  </>
);

export { Technology };

// TODO: create fixed colors for technology stacks

// {/* <> */}
// {/*   <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
// {/*   <Tags color={ColorTags.LIME}>Web design</Tags> */}
// {/*   <Tags color={ColorTags.SKY}>Tailwind.css</Tags> */}
// {/*   <Tags color={ColorTags.ROSE}>TypeScript</Tags> */}
// {/* </> */}
