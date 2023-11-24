import React from "react";
import classes from "./card.module.css";

function Card(props) {
  return <div className={classes.root}>{props.children}</div>;
}
export default Card;
