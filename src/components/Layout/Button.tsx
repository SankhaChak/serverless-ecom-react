import { ButtonHTMLAttributes, forwardRef, Ref } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  loading?: boolean;
  spinnerColor?: string;
  spinnerHeight?: number;
  spinnerWidth?: number;
}

const Button = forwardRef(
  (
    {
      children,
      height = "2.7rem",
      width = "9rem",
      loading,
      disabled,
      style,
      className,
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`btn ${className}`}
        disabled={disabled}
        style={{
          cursor: loading ? "not-allowed" : "pointer",
          height,
          width,
          ...style,
        }}
      >
        {children}
      </button>
    );
  }
);

export default Button;
