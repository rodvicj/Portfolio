import { ColorTags, Tags } from "@/astro-boilerplate-components/index";

type TechStackProps = {
  tags: string[];
};

const Technology = (props: TechStackProps) => (
  <>
    {props.tags.map(
      (tag: string) =>
        (
          <Tags key={tag} color={`${ColorTags[tag.toUpperCase()]}`}>
            {tag}
          </Tags>
        ) ?? <></>
    )}
  </>
);

export { Technology };
