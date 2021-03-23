import React from "react";
import "./Frame9.css";

function Frame9(props) {
  const { src, className } = props;

  return (
    <div className={`frame5 ${className || ""}`}>
      <img className="vector2" src={src} />
    </div>
  );
}

export default Frame9;
