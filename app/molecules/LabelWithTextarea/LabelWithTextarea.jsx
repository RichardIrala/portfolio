import ErrorText from "../../atoms/ErrorText/ErrorText";
import Textarea from "../../atoms/Textarea/Textarea";

const LabelWithTextarea = ({ onChange, title, name, type, placeholder, error }) => {
  function renderError() {
    if (!error) return;
    return <ErrorText>{error}</ErrorText>
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
  )
}

export default LabelWithTextarea;