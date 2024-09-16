import React from "react";
import "./styles.css";

function HeadLine(props) {
  return (
    <h2>
      {props.title} <span>{props.subTitle}</span>
    </h2>
  );
}

export default HeadLine;
