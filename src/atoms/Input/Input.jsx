function Input({ placeholder, type, name, onChange, className}) {
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
)
}

export default Input;