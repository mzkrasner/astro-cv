import { ColorTags, Project, Section } from 'astro-boilerplate-components';

import { GradientText } from './GradientText';
import { Tags } from './Tags';

const ProjectList = () => (
  <>
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
          link="https://xkite.io"
          img={{
            src: '/assets/images/xkite2.png',
            alt: 'xkite kafka prototyping',
          }}
          category={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
              <Tags color={ColorTags.LIME}>Next.js</Tags>
              <Tags color={ColorTags.EMERALD}>Material UI</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.AMBER}>Kafka</Tags>
              <Tags color={ColorTags.BLUE}>Docker</Tags>
              <Tags color={ColorTags.PINK}>Spring Boot</Tags>
            </div>
          }
        />
        <Project
          name="Amongus AI"
          description="A realtime chat application with AI-powered chat participants. Can you guess who's human and who's not?"
          link="/"
          img={{ src: '/assets/images/open-source.png', alt: 'Open source' }}
          category={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
              <Tags color={ColorTags.LIME}>Websockets</Tags>
              <Tags color={ColorTags.EMERALD}>Bootstrap</Tags>
              <Tags color={ColorTags.ROSE}>JavaScript</Tags>
              <Tags color={ColorTags.AMBER}>PostgreSQL</Tags>
              <Tags color={ColorTags.BLUE}>Webpack</Tags>
              <Tags color={ColorTags.PINK}>Express.js</Tags>
            </div>
          }
        />
        <Project
          name="ONUS"
          description="An open-sourced & free project management fullstack framework. "
          link="/"
          img={{ src: '/assets/images/open-source.png', alt: 'Open source' }}
          category={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
              <Tags color={ColorTags.EMERALD}>Bootstrap</Tags>
              <Tags color={ColorTags.ROSE}>JavaScript</Tags>
              <Tags color={ColorTags.AMBER}>PostgreSQL</Tags>
              <Tags color={ColorTags.LIME}>MongoDB</Tags>
              <Tags color={ColorTags.BLUE}>Webpack</Tags>
              <Tags color={ColorTags.PINK}>Express.js</Tags>
            </div>
          }
        />
      </div>
    </Section>
    <Section
      title={
        <>
          <GradientText>Publications</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <Project
          name="xkite makes it easy to prototype, test and deploy Apache Kafka"
          description="Explore an overview of our public beta release! Learn about our core features
          and, functionalities, and our three-pronged approach to make it easier for development teams
          to work with Apache Kafka. "
          link="https://medium.com/@xkite/xkite-makes-it-easy-to-prototype-test-and-deploy-apache-kafka-15519ba67be7"
          img={{
            src: '/assets/images/medium.png',
            alt: 'xkite kafka prototyping',
          }}
          category={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            ></div>
          }
        />
      </div>
    </Section>
  </>
);

export { ProjectList };
