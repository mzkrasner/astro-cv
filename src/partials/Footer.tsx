import { Section } from 'astro-boilerplate-components';

import { SiteConfig } from '@/utils/SiteConfig';

import { FooterCopyright } from './FooterCopyright';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={SiteConfig.site_name} />
  </Section>
);

export { Footer };
