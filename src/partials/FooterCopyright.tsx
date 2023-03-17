type IFooterCopyrightProps = {
  site_name: string;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const FooterCopyright = (_props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-gray-200">
      Built with Astro, React, TypeScript, & Tailwind
    </div>
  </div>
);

export { FooterCopyright };
