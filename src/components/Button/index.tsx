import React from "react";
import style from "./index.module.scss";

const Button = (props: any) => {
  const {
    href,
    btnIcon,
    children,
    className,
    outline = false,
    onClick,
  } = props;
  if (href) {
    return (
      <a
        href={href}
        className={`${style.btn} ${outline && style.outline} ${className}`}
      >
        {btnIcon && <img src={btnIcon} alt="" />}
        <p>{children}</p>
      </a>
    );
  } else {
    return (
      <button
        className={`${style.btn} ${outline && style.outline} ${className}`}
        onClick={onClick}
      >
        {btnIcon && <img src={btnIcon} alt="" />}
        <p>{children}</p>
      </button>
    );
  }
};

export default Button;
