import React from "react";
import style from "./index.module.scss";
import Button from "../Button";
import AudioPlayer from "../AudioPlayer";

const Card = (props: any) => {
  const {
    icon,
    cardTitle,
    cardDescription,
    btnText,
    audioSrc,
    person,
    className,
    href,
  } = props;

  return (
    <div className={`${style.card} ${className}`}>
      <div>
        <h4>
          {icon && <img src={icon} alt="" />}
          {cardTitle}
        </h4>
        <p>{cardDescription}</p>
      </div>
      {btnText && (
        <Button outline={true} href={href}>
          {btnText}
        </Button>
      )}
      {person && (
        <div className={style.person}>
          <AudioPlayer audioSrc={audioSrc} personPhoto={person?.photo} />
          <div className={style.personInfo}>
            <img src={person?.photo} alt="photo" />
            <div className={style.info}>
              <h6>{person?.name}</h6>
              <p>{person?.designation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
