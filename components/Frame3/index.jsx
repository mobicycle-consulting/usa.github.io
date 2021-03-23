import React from "react";
import "./Frame3.css";

function Frame3(props) {
  const { children, className } = props;

  return (
    <div className={`frame-42 border-1px-charade ${className || ""}`}>
      <div className="buy-premium roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame3;
