import React from "react";
import classes from "./Content.module.css";
const Content = (props) => {
  return (
    <img
      src={props.image}
      alt={props.alt}
      className={`${classes.rowPosters} ${
        props.isLargeRow && classes.rowPosterLarge
      }`}
      onClick={() => props.onClick(props.movie)}
    />
  );
};

export default Content;
