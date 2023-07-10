import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "@/astro-boilerplate-components/index";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>rodvicj</GradientText> 👋
        </>
      }
      description={
        <>
          An aspiring{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            web developer
          </a>{" "}
          from philippines. welcome to my{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            portfolio
          </a>{" "}
          website where I showcase my projects.{" "}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
