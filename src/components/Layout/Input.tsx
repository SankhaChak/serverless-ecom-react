import { InputHTMLAttributes, forwardRef, Ref } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
}

const Input: React.FC<Props> = forwardRef(
  (
    { label, error, type = "text", ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="form__input-container">
        <label htmlFor={label} className="form__input-label">
          {label ? label.charAt(0).toUpperCase() + label.slice(1) : ""}
        </label>
        <input
          ref={ref}
          type={type}
          id={label}
          name={label}
          placeholder={`Your ${label}`}
          className="input"
          {...props}
        />
        {error && <p className="paragraph paragraph--error-small">{error}</p>}
      </div>
    );
  }
);

export default Input;
