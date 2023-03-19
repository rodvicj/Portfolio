import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/astro-boilerplate-components/index';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
      </a>
      <NavMenu>
        <NavMenuItem href="/projects">Projects</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/about">About</NavMenuItem>
        <NavMenuItem href="/posts/post-1">post-1</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
