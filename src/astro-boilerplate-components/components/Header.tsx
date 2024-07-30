export interface HeaderItem {
  name: string;
  link: string;
  class?: string; // Optional property for social links
  target?: string; // Optional property for target attribute
}

export const Header: HeaderItem[] = [
  { name: "home", link: "/" },
  { name: "projects", link: "/projects" },
  {
    name: "github",
    link: "http://www.github.com/rodvicj",
    class: "text-2xl",
    target: "_blank",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/rodvicj",
    class: "text-2xl  md:-ml-6",
    target: "_blank",
  },
];
