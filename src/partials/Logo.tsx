import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: string;
  color1: string;
  color2: string;
};

const Logo = (props: ILogoProps) => (
  <div
    className={`flex items-center bg-gradient-to-br from-${props.color1}-500 to-${props.color2}-400 bg-clip-text text-xl font-bold text-transparent`}
  >
    {props.icon}

    {props.name}
  </div>
);

export { Logo };
