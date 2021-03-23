import React from "react";
import "./Frame30.css";

function Frame30(props) {
  const { children, className } = props;

  return (
    <div className={`frame-69 border-1px-charade ${className || ""}`}>
      <div className="buy-essential3 roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame30;
