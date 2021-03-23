import React from "react";
import "./Frame39.css";

function Frame39(props) {
  const { transparency, text106, className } = props;

  return (
    <div className={`frame-822 ${className || ""}`}>
      <div className="frame-832">
        <div className="transparency roboto-normal-mirage-18px">{transparency}</div>
      </div>
      <div className="frame-84">
        <p className="text-106">{text106}</p>
      </div>
    </div>
  );
}

export default Frame39;
