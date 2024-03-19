import React from "react";
import style from "./index.module.scss";

const Button = (props: any) => {
  const { btnIcon, children, className, outline = false, onClick } = props;

  return (
    <button
      className={`${style.btn} ${outline && style.outline} ${className}`}
      onClick={onClick}
    >
      <img src={btnIcon} alt="" />
      {children}
    </button>
  );
};

export default Button;
