import React from "react";
import "./Frame18.css";

function Frame18(props) {
  const { children, className } = props;

  return (
    <div className={`frame-442 border-1px-charade ${className || ""}`}>
      <div className="buy-premium2 roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame18;
