import type { JSX } from "react";
import type { LayoutProps } from "../../types/skills/skill-types";

const Layout = ({ title, children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
