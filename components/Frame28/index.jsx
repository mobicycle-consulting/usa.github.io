import React from "react";
import "./Frame28.css";

function Frame28(props) {
  const { children, className } = props;

  return (
    <div className={`frame-65 border-1px-charade ${className || ""}`}>
      <div className="buy-basic3 roboto-normal-white-14px">{children}</div>
    </div>
  );
}

export default Frame28;
