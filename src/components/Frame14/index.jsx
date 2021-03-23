import React from "react";
import "./Frame14.css";

function Frame14(props) {
  const { src, className } = props;

  return (
    <div className={`frame10 ${className || ""}`}>
      <img className="vector4" src={src} />
    </div>
  );
}

export default Frame14;
