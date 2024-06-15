import React from "react";
import Title from "../components/title/Title";
import { IOptionWithIcon } from "../components/sidenav/IOptionWithIcon";
import { scroll } from "../styles/scroll/scroll-contants";

const PageTemplate = ({
  option,
  children,
}: {
  option: IOptionWithIcon;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-full">
      <Title title={option.title} />
      <div className={`px-4 pt-4 overflow-auto ${scroll}`}>{children}</div>
    </div>
  );
};

export default PageTemplate;
