import type React from "react";

const ErrorText = ({ children }: { children: React.ReactNode }) => {
  return <span className="error-text__error">{children}</span>;
};

export default ErrorText;
