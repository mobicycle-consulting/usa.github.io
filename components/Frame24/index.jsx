import React from "react";
import "./Frame24.css";

function Frame24(props) {
  const { children, className } = props;

  return (
    <div className={`frame16 ${className || ""}`}>
      <div className="included-in-premium2 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame24;
