import React from "react";
import "./Frame17.css";

function Frame17(props) {
  const { children, className } = props;

  return (
    <div className={`frame-422 border-1px-charade ${className || ""}`}>
      <div className="buy-essential2 roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame17;
