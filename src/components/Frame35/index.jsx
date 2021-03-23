import React from "react";
import "./Frame35.css";

function Frame35(props) {
  const { children, className } = props;

  return (
    <div className={`frame22 ${className || ""}`}>
      <div className="included-in-premium3 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame35;
