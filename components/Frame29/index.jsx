import React from "react";
import "./Frame29.css";

function Frame29(props) {
  const { children, className } = props;

  return (
    <div className={`frame-67 border-1px-charade ${className || ""}`}>
      <div className="buy-premium3 roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame29;
