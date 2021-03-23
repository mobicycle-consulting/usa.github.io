import React from "react";
import Frame11 from "../Frame11";
import Frame7 from "../Frame7";
import "./Frame10.css";

function Frame10(props) {
  const { frame11Props, frame7Props } = props;

  return (
    <div className="frame6">
      <Frame11>{frame11Props.children}</Frame11>
      <Frame7 src={frame7Props.src} className="frame-142" />
    </div>
  );
}

export default Frame10;
