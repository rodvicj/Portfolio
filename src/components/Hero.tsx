import {
  GradientText,
  HeroAvatar,
  // HeroSocial,
  Section,
} from "@/astro-boilerplate-components/index";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Rodvicj</GradientText> 👋
        </>
      }
      description={
        <>
          A <span className="text-cyan-400">web developer</span> from
          Philippines, welcome to my{" "}
          <span className="text-cyan-400">portfolio</span> website where I show
          some of my projects.{" "}
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
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
