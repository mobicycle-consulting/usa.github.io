import React from "react";
import "./Frame6.css";

function Frame6(props) {
  const { children, className } = props;

  return (
    <div className={`frame2 ${className || ""}`}>
      <div className="included-in-basic roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame6;
