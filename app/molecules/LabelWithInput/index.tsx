import type { ChangeEventHandler } from "react";
import ErrorText from "../../atoms/ErrorText";
import Input from "../../atoms/Input";

interface LabelWithInputProps {
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  title: string;
  name: string;
  type: string;
  placeholder: string;
  error: string;
}

const LabelWithInput = ({
  onChange,
  title,
  name,
  type,
  placeholder,
  error,
}: LabelWithInputProps) => {
  function renderError() {
    if (!error) return;
    return <ErrorText>{error}</ErrorText>;
  }
  return (
    <label>
      <h2 className="label-with-input__titleForInput">{title}</h2>
      <Input
        className="label-with-input__input"
        type={type ?? ""}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {renderError()}
    </label>
  );
};

export default LabelWithInput;
