import React from "react";
import style from "./index.module.scss";
import Button from "../Button";

const Card = (props: any) => {
  const { icon, cardTitle, cardDescription } = props;

  return (
    <div className={style.card}>
      <h4>
        {icon && <img src={icon} alt="" />}
        {cardTitle}
      </h4>
      <p>{cardDescription}</p>
      <Button>Meet up</Button>
    </div>
  );
};

export default Card;
