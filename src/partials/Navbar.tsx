import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

import { Logo } from './Logo';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<img src="/assets/images/icon.svg" />}
          name="Mark's Personal Site"
          color1="lime"
          color2="emerald"
        />
      </a>

      <NavMenu>
        {/* <NavMenuItem href="/posts">Blogs</NavMenuItem> */}
        <NavMenuItem href="https://github.com/mzkrasner/">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/krasnermark/">
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
