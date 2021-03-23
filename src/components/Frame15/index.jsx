import React from "react";
import Frame6 from "../Frame6";
import Frame13 from "../Frame13";
import Frame11 from "../Frame11";
import Frame7 from "../Frame7";
import Frame8 from "../Frame8";
import Frame14 from "../Frame14";
import "./Frame15.css";

function Frame15(props) {
  const {
    advancedMobibins,
    frame6Props,
    frame13Props,
    frame11Props,
    frame7Props,
    frame8Props,
    frame14Props,
    className,
  } = props;

  return (
    <div className={`frame-492 ${className || ""}`}>
      <div className="overlap-group-7">
        <div className="frame-222">
          <Frame6 className="frame-13">{frame6Props.children}</Frame6>
          <Frame13 src={frame13Props.src} className="frame-20" />
        </div>
        <div className="frame-50">
          <div className="advanced-mobi-bins roboto-normal-pale-sky-14px">{advancedMobibins}</div>
        </div>
      </div>
      <div className="overlap-group-7">
        <div className="frame-22">
          <Frame11 className="frame-18">{frame11Props.children}</Frame11>
          <Frame7 src={frame7Props.src} className="frame-14" />
        </div>
        <div className="frame-51">
          <Frame8 className="frame-15">{frame8Props.children}</Frame8>
          <Frame14 src={frame14Props.src} className="frame-212" />
        </div>
      </div>
    </div>
  );
}

export default Frame15;
