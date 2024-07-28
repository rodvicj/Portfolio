export interface HeaderItem {
  name: string;
  link: string;
  icon?: string; // Optional property for social links
  target?: string; // Optional property for target attribute
}

export const Header: HeaderItem[] = [
  { name: "home", link: "/" },
  { name: "projects", link: "/projects" },
  {
    name: "github",
    link: "http://www.github.com/rodvicj",
    icon: "fa-brands fa-github text-2xl",
    target: "_blank",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/rodvicj",
    icon: "fa-brands fa-linkedin text-2xl",
    target: "_blank",
  },
];
