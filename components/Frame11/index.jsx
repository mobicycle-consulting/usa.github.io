import React from "react";
import "./Frame11.css";

function Frame11(props) {
  const { children, className } = props;

  return (
    <div className={`frame7 ${className || ""}`}>
      <div className="included-in-premium roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame11;
