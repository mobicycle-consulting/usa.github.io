import React from "react";
import "./Frame22.css";

function Frame22(props) {
  const { children, className } = props;

  return (
    <div className={`frame14 ${className || ""}`}>
      <div className="text-63 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame22;
