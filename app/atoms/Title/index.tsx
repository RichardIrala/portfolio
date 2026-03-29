import type React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="title__title">{children}</h1>;
};

export default Title;
