import React from "react";
import Frame20 from "../Frame20";
import Frame13 from "../Frame13";
import "./Frame25.css";

function Frame25(props) {
  const { frame20Props, frame13Props } = props;

  return (
    <div className="frame17">
      <Frame20 className="frame-18">{frame20Props.children}</Frame20>
      <Frame13 src={frame13Props.src} className="frame-49" />
    </div>
  );
}

export default Frame25;
