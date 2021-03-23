import React from "react";
import "./ABOUT.css";

function ABOUT(props) {
  const { whereWeWork, whatIsEwaste, whyIsEwaste, className } = props;

  return (
    <div className={`about2 ${className || ""}`}>
      <div className="overlap-group52">
        <div className="rectangle5"></div>
        <div className="where-we-work roboto-normal-mischka-16px">{whereWeWork}</div>
        <div className="what-is-ewaste roboto-normal-mischka-16px">{whatIsEwaste}</div>
        <div className="why-is-ewaste roboto-normal-mischka-16px">{whyIsEwaste}</div>
      </div>
    </div>
  );
}

export default ABOUT;
