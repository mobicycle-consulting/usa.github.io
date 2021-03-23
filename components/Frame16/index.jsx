import React from "react";
import "./Frame16.css";

function Frame16(props) {
  const { children, className } = props;

  return (
    <div className={`frame-402 border-1px-charade ${className || ""}`}>
      <div className="buy-basic2 roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame16;
