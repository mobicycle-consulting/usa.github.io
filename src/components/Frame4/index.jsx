import React from "react";
import "./Frame4.css";

function Frame4(props) {
  const { children, className } = props;

  return (
    <div className={`frame-44 border-1px-charade ${className || ""}`}>
      <div className="buy-essential roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame4;
