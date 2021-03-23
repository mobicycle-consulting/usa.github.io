import React from "react";
import "./Frame19.css";

function Frame19(props) {
  const { children, className } = props;

  return (
    <div className={`frame-462 ${className || ""}`}>
      <div className="e-waste-code-finder2 roboto-normal-pale-sky-14px">{children}</div>
    </div>
  );
}

export default Frame19;
