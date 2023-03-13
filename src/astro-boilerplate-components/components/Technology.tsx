import { ColorTags, Tags } from "@/astro-boilerplate-components/index";

type TechStackProps = {
  tags: string[];
};

const Technology = (props: TechStackProps) => (
  <>
    {props.tags.map((tag: string) => (
        <Tags key={tag} color={ColorTags[tag.toUpperCase()] ?? ColorTags["SLATE"]}>
          {tag}
        </Tags>
      )
    )}
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
