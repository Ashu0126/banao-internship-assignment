import React from "react";
import style from "./index.module.scss";

const Button = (props: any) => {
  const { btnIcon, children, className, outline = false, onClick } = props;

  return (
    <button
      className={`${style.btn} ${outline && style.outline} ${className}`}
      onClick={onClick}
    >
      {btnIcon && <img src={btnIcon} alt="" />}
      <p>{children}</p>
    </button>
  );
};

export default Button;
