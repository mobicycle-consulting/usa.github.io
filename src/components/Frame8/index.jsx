import React from "react";
import "./Frame8.css";

function Frame8(props) {
  const { children, className } = props;

  return (
    <div className={`frame4 ${className || ""}`}>
      <div className="text-37 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame8;
