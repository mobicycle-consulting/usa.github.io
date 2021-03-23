import React from "react";
import Frame35 from "../Frame35";
import Frame9 from "../Frame9";
import "./Frame34.css";

function Frame34(props) {
  const { frame35Props, frame9Props } = props;

  return (
    <div className="frame21">
      <Frame35>{frame35Props.children}</Frame35>
      <Frame9 src={frame9Props.src} className="frame-1" />
    </div>
  );
}

export default Frame34;
