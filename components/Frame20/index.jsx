import React from "react";
import "./Frame20.css";

function Frame20(props) {
  const { children, className } = props;

  return (
    <div className={`frame12 ${className || ""}`}>
      <div className="included-in-basic2 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame20;
