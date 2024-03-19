import React from "react";
import style from "./index.module.scss";
import Button from "../Button";

const Card = (props: any) => {
  const { icon, cardTitle, cardDescription, btnText } = props;

  return (
    <div className={style.card}>
      <div>
        <h4>
          {icon && <img src={icon} alt="" />}
          {cardTitle}
        </h4>
        <p>{cardDescription}</p>
      </div>
      <Button>{btnText}</Button>
    </div>
  );
};

export default Card;
