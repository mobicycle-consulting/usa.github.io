import React from "react";
import "./Frame2.css";

function Frame2(props) {
  const { children, className } = props;

  return (
    <div className={`frame-40 border-1px-charade ${className || ""}`}>
      <div className="buy-basic roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame2;
