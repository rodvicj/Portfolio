import type { ReactNode } from "react";

import type { Values } from "../types/TypeUnion";

type IColorTags = {
  [key: string]: string;
  SLATE: string;
  GRAY: string;
  ZINC: string;
  NEUTRAL: string;
  STONE: string;
  RED: string;
  HTML: string;
  AMBER: string;
  JAVASCRIPT: string;
  LIME: string;
  DJANGO: string;
  REACTJS: string;
  CSS: string;
  TAILWINDCSS: string;
  PYTHON: string;
  TYPESCRIPT: string;
  ASTROJS: string;
  BOOTSTRAP: string;
  PURPLE: string;
  FUCHSIA: string;
  PINK: string;
  ROSE: string;
};

export const ColorTags: IColorTags = {
  SLATE: "SLATE",
  GRAY: "GRAY",
  ZINC: "ZINC",
  NEUTRAL: "NEUTRAL",
  STONE: "STONE",
  RED: "RED",
  HTML: "ORANGE",
  AMBER: "AMBER",
  JAVASCRIPT: "YELLOW",
  LIME: "LIME",
  DJANGO: "GREEN",
  TAILWINDCSS: "EMERALD",
  CSS: "TEAL",
  REACTJS: "CYAN",
  PYTHON: "SKY",
  TYPESCRIPT: "BLUE",
  ASTROJS: "INDIGO",
  BOOTSTRAP: "VIOLET",
  PURPLE: "PURPLE",
  FUCHSIA: "FUCHSIA",
  PINK: "PINK",
  ROSE: "ROSE",
} as const;

type ITagsProps = {
  color: Values<typeof ColorTags>;
  children: ReactNode;
};

const colorToClassMap = {
  [ColorTags.SLATE]: "bg-slate-400 text-slate-900",
  [ColorTags.GRAY]: "bg-gray-400 text-gray-900",
  [ColorTags.ZINC]: "bg-zinc-400 text-zinc-900",
  [ColorTags.NEUTRAL]: "bg-neutral-400 text-neutral-900",
  [ColorTags.STONE]: "bg-stone-400 text-stone-900",
  [ColorTags.RED]: "bg-red-400 text-red-900",
  [ColorTags.HTML]: "bg-orange-400 text-orange-900",
  [ColorTags.AMBER]: "bg-amber-400 text-amber-900",
  [ColorTags.JAVASCRIPT]: "bg-yellow-400 text-yellow-900",
  [ColorTags.LIME]: "bg-lime-400 text-lime-900",
  [ColorTags.DJANGO]: "bg-green-400 text-green-900",
  [ColorTags.TAILWINDCSS]: "bg-emerald-400 text-emerald-900",
  [ColorTags.CSS]: "bg-teal-400 text-teal-900",
  [ColorTags.REACTJS]: "bg-cyan-400 text-cyan-900",
  [ColorTags.PYTHON]: "bg-sky-400 text-sky-900",
  [ColorTags.TYPESCRIPT]: "bg-blue-400 text-blue-900",
  [ColorTags.ASTROJS]: "bg-indigo-400 text-indigo-900",
  [ColorTags.BOOTSTRAP]: "bg-violet-400 text-violet-900",
  [ColorTags.PURPLE]: "bg-purple-400 text-purple-900",
  [ColorTags.FUCHSIA]: "bg-fuchsia-400 text-fuchsia-900",
  [ColorTags.PINK]: "bg-pink-400 text-pink-900",
  [ColorTags.ROSE]: "bg-rose-400 text-rose-900",
};

const Tags = (props: ITagsProps) => (
  <div
    className={`h-6 rounded-md p-1 text-xs font-semibold ${
      colorToClassMap[props.color]
    }`}
  >
    {props.children}
  </div>
);

export { Tags };
