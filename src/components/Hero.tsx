import {
  GradientText,
  HeroAvatar,
  // HeroSocial,
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
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
