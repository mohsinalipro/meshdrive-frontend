import React from "react";

export default props => {
  return (
    <span
      className={
        "fas fa-" + props.icon + (props.className ? " " + props.className : "")
      }
    />
  );
};
