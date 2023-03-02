import { ColorTags, Tags } from "@/astro-boilerplate-components/index";
import { ReactNode } from "react";

type TechStackProps = {
  tags: string[];
};

console.log("tag.lower()", "TAG".toLowerCase());
const Technology = (props: TechStackProps) => (
  <>
    {props.tags.map((tag): ReactNode => {
      return (
        <>
      <Tags color={ColorTags[tag.toUpperCase()]}>{tag}</Tags>
      {console.log("colorsags[tag]", ColorTags[tag.toUpperCase()])}
      </>
      )
    })}
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
