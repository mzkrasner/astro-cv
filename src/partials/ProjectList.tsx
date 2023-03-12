import {
  ColorTags,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import { GradientText } from './GradientText';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Work</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="xkite"
        description="A comprehensive prototyping, monitoring, and testing suite built for Apache Kafka. Built for minimal developer dependencies
        and highly flexible configuration options to bootstrap your next microservices product."
        link="/"
        img={{
          src: '/assets/images/xkite2.png',
          alt: 'xkite kafka prototyping',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.LIME}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Material UI</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.AMBER}>Kafka</Tags>
            <Tags color={ColorTags.BLUE}>Docker</Tags>
            <Tags color={ColorTags.PINK}>Spring Boot</Tags>
          </>
        }
      />
      <Project
        name="Amongus AI"
        description="A realtime chat application with AI-powered chat participants. Can you guess who's human and who's not?"
        link="/"
        img={{ src: '/assets/images/open-source.png', alt: 'Open source' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.LIME}>Websockets</Tags>
            <Tags color={ColorTags.EMERALD}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.AMBER}>PostgreSQL</Tags>
            <Tags color={ColorTags.BLUE}>Webpack</Tags>
            <Tags color={ColorTags.PINK}>Express.js</Tags>
          </>
        }
      />
      <Project
        name="ONUS"
        description="An open-sourced & free project management fullstack framework. "
        link="/"
        img={{ src: '/assets/images/open-source.png', alt: 'Open source' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.EMERALD}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.AMBER}>PostgreSQL</Tags>
            <Tags color={ColorTags.LIME}>MongoDB</Tags>
            <Tags color={ColorTags.BLUE}>Webpack</Tags>
            <Tags color={ColorTags.PINK}>Express.js</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
