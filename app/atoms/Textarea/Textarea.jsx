function Textarea({ placeholder, type, name, onChange, className}) {
    const base = "textarea__textarea ";
    const textareaClass = !className ? base : base + className;
    return (
      <textarea
        rows="6"
        className={textareaClass}
        type={type ?? "text"}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    )
    }
    
    export default Textarea;