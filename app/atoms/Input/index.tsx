import type { ChangeEventHandler } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  className: string;
}

function Input({ placeholder, type, name, onChange, className }: InputProps) {
  const base = "input__input ";
  const inputClass = !className ? base : base + className;

  return (
    <input
      className={inputClass}
      type={type ?? "text"}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
