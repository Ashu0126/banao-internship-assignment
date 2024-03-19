import React from "react";
import style from "./index.module.scss";

const Input = (props: any) => {
  const { placeholder, type = "text" } = props;

  return (
    <input className={style.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
