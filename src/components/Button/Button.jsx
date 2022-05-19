import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

function getButtonStyles(variant) {
  return classes[variant];
}

const Button = ({ children, variant = "primary", onClick }) => {
  const className = getButtonStyles(variant);
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
};

export default Button;
