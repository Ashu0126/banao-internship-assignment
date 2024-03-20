import React from "react";

const Heading = (props) => {
  const { icon, text } = props;
  return (
    <h3>
      <img src={icon} alt="" />
      {text}
    </h3>
  );
};

export default Heading;
