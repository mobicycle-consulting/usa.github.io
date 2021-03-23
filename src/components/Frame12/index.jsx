import React from "react";
import Frame6 from "../Frame6";
import Frame13 from "../Frame13";
import "./Frame12.css";

function Frame12(props) {
  const { frame6Props, frame13Props } = props;

  return (
    <div className="frame8">
      <Frame6 className="frame-13">{frame6Props.children}</Frame6>
      <Frame13 src={frame13Props.src} />
    </div>
  );
}

export default Frame12;
