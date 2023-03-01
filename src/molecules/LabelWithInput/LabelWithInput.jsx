import ErrorText from "../../atoms/ErrorText/ErrorText";
import Input from "../../atoms/Input/Input"

const LabelWithInput = ({ onChange, title, name, type, placeholder, error }) => {
  function renderError() {
    if (!error) return;
    return <ErrorText>{error}</ErrorText>
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
  )
}

export default LabelWithInput;