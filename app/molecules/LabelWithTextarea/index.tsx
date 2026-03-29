import type React from "react";
import ErrorText from "../../atoms/ErrorText";
import Textarea from "../../atoms/Textarea";

interface LabelWithTextarea {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  name: string;
  type: string;
  placeholder: string;
  error: string;
}

const LabelWithTextarea = ({
  onChange,
  title,
  name,
  type,
  placeholder,
  error,
}: LabelWithTextarea) => {
  function renderError() {
    if (!error) return;
    return <ErrorText>{error}</ErrorText>;
  }
  return (
    <label>
      <h2 className="label-with-textarea__titleForTextarea">{title}</h2>
      <Textarea
        className="label-with-textarea__textarea"
        type={type ?? ""}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {renderError()}
    </label>
  );
};

export default LabelWithTextarea;
