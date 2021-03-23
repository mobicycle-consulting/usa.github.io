import React from "react";
import Frame20 from "../Frame20";
import Frame13 from "../Frame13";
import Frame22 from "../Frame22";
import Frame14 from "../Frame14";
import Frame24 from "../Frame24";
import Frame7 from "../Frame7";
import "./Frame26.css";

function Frame26(props) {
  const {
    advancedMobibins,
    frame20Props,
    frame13Props,
    frame22Props,
    frame14Props,
    frame24Props,
    frame7Props,
    className,
  } = props;

  return (
    <div className={`frame-493 ${className || ""}`}>
      <div className="frame-502">
        <div className="advanced-mobi-bins2 roboto-normal-pale-sky-14px">{advancedMobibins}</div>
      </div>
      <div className="frame-243">
        <Frame20 className="frame-18">{frame20Props.children}</Frame20>
        <Frame13 src={frame13Props.src} className="frame-4" />
      </div>
      <div className="frame-24">
        <Frame22 className="frame-20">{frame22Props.children}</Frame22>
        <Frame14 src={frame14Props.src} className="frame-5" />
      </div>
      <div className="frame-24">
        <Frame24 className="frame-22">{frame24Props.children}</Frame24>
        <Frame7 src={frame7Props.src} className="frame-2" />
      </div>
    </div>
  );
}

export default Frame26;
