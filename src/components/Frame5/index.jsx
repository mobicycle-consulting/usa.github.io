import React from "react";
import "./Frame5.css";

function Frame5(props) {
  const { children, className } = props;

  return (
    <div className={`frame-46 ${className || ""}`}>
      <div className="e-waste-code-finder roboto-normal-pale-sky-14px">{children}</div>
    </div>
  );
}

export default Frame5;
