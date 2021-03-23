import React from "react";
import Frame32 from "../Frame32";
import Frame14 from "../Frame14";
import "./Frame36.css";

function Frame36(props) {
  const { frame32Props, frame14Props } = props;

  return (
    <div className="frame23">
      <Frame32 className="frame-23">{frame32Props.children}</Frame32>
      <Frame14 src={frame14Props.src} className="frame-211" />
    </div>
  );
}

export default Frame36;
