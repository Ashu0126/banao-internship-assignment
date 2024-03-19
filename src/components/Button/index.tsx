import React from "react";
import style from "./index.module.scss";

const Button = (props: any) => {
  const { btnIcon, children, variant, onClick } = props;

  return (
    <button className={`${style.btn} ${style[variant]}`} onClick={onClick}>
      <img src={btnIcon} alt="" />
      {children}
    </button>
  );
};

export default Button;
