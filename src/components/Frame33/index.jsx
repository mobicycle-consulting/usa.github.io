import React from "react";
import "./Frame33.css";

function Frame33(props) {
  const { children, className } = props;

  return (
    <div className={`frame20 ${className || ""}`}>
      <div className="text-89 roboto-normal-mirage-16px">{children}</div>
    </div>
  );
}

export default Frame33;
