import React from "react";
import Frame24 from "../Frame24";
import Frame7 from "../Frame7";
import "./Frame23.css";

function Frame23(props) {
  const { frame24Props, frame7Props } = props;

  return (
    <div className="frame15">
      <Frame24>{frame24Props.children}</Frame24>
      <Frame7 src={frame7Props.src} className="frame-2" />
    </div>
  );
}

export default Frame23;
