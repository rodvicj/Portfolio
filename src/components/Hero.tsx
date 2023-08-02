import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from '@/astro-boilerplate-components/index';

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
          A <a className="hover:none text-cyan-400">web developer</a> from
          Philippines, welcome to my{' '}
          <a className="hover:none text-cyan-400">portfolio</a> website, the
          place where I showcase some of my projects.{' '}
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
          <a
            href="https://www.linkedin.com/in/rodvicj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
