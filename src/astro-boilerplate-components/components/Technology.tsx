import { ColorTags, Tags } from "@/astro-boilerplate-components/index";

type TechStackProps = {
  tags: string[];
};

type ColorTagsType = {
  SLATE: string;
  GRAY: string;
  ZINC: string;
  NEUTRAL: string;
  STONE: string;
  RED: string;
  ORANGE: string;
  AMBER:string;
  YELLOW: string;
  LIME: string;
  GREEN:string;
  EMERALD: string;
  TEAL: string;
  CYAN: string;
  SKY:string;
  BLUE: string;
  INDIGO: string;
  VIOLET: string;
  PURPLE: string;
  FUCHSIA: string;
  PINK: string;
  ROSE: string;
}

const CT = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
}


const randomProperty = (obj: ColorTagsType) => {
  let colors: string[] = Object.keys(obj);
  // console.log("colors", colors);
  let color = colors.length * Math.random() << 0;
  // console.log("colors[color]", colors[color]);
  // return colors[colors.length * Math.random() << 0]]
  return colors[color];
};

// console.log("Random ColorTags", randomProperty(CT));
const rose = randomProperty(CT) ?? "PINK";

// {rose = randomProperty(CT)}

const Technology = (props: TechStackProps) => (
  <>
    {props.tags.map((tag) => (
      <Tags color={ColorTags[rose]}>{tag}</Tags>
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
