import React from "react";
import "./Frame38.css";

function Frame38(props) {
  const { whereverYouAre, text102, className } = props;

  return (
    <div className={`frame-78 ${className || ""}`}>
      <div className="frame-79">
        <div className="wherever-you-are roboto-normal-mirage-18px">{whereverYouAre}</div>
      </div>
      <div className="frame-80">
        <p className="text-102">{text102}</p>
      </div>
    </div>
  );
}

export default Frame38;
