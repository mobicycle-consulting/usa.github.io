import React from "react";
import "./Frame13.css";

function Frame13(props) {
  const { src, className } = props;

  return (
    <div className={`frame9 ${className || ""}`}>
      <img className="vector3" src={src} />
    </div>
  );
}

export default Frame13;
