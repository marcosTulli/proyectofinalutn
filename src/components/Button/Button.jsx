import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="customButton btn-primary font-upper btn-md">
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
