import React from "react";
import "./Frame7.css";

function Frame7(props) {
  const { src, className } = props;

  return (
    <div className={`frame3 ${className || ""}`}>
      <img className="vector" src={src} />
    </div>
  );
}

export default Frame7;
