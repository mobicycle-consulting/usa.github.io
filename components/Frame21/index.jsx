import React from "react";
import Frame22 from "../Frame22";
import Frame9 from "../Frame9";
import "./Frame21.css";

function Frame21(props) {
  const { frame22Props, frame9Props } = props;

  return (
    <div className="frame13">
      <Frame22>{frame22Props.children}</Frame22>
      <Frame9 src={frame9Props.src} className="frame-310" />
    </div>
  );
}

export default Frame21;
