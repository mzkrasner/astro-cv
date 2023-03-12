import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import { GradientText } from './GradientText';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mark</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a software engineer with experience in fullstack{' '}
          <a className="text-emerald-400 ">Javascript & Typescript</a>{' '}
          development, with a passion for distributed system design. Current
          engineer on <a className="text-emerald-400 ">xkite</a> , a
          comprehensive prototyping, testing, and monitoring suite for Apache
          Kafka.
        </>
      }
      avatar={
        <img
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="h-100 w-80"
          src="/assets/images/avatar2.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/linkedin.png" alt="linkedIn icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
