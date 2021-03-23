import React from "react";
import "./Solutions.css";

function Solutions(props) {
  const { hardware, software, analytics, className } = props;

  return (
    <div className={`solutions2 ${className || ""}`}>
      <div className="overlap-group42">
        <div className="hardware roboto-normal-mischka-16px">{hardware}</div>
        <div className="software roboto-normal-mischka-16px">{software}</div>
        <div className="analytics roboto-normal-mischka-16px">{analytics}</div>
      </div>
    </div>
  );
}

export default Solutions;
