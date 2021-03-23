import React from "react";
import "./Frame32.css";

function Frame32(props) {
  const { children, className } = props;

  return (
    <div className={`frame19 ${className || ""}`}>
      <div className="included-in-basic3 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame32;
