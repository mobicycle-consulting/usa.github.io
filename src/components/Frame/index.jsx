import React from "react";
import "./Frame.css";

function Frame(props) {
  const { children, className } = props;

  return (
    <div className={`frame-38 ${className || ""}`}>
      <p className="text-26 roboto-normal-pale-sky-14px">{children}</p>
    </div>
  );
}

export default Frame;
