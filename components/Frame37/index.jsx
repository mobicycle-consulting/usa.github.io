import React from "react";
import Frame32 from "../Frame32";
import Frame14 from "../Frame14";
import Frame35 from "../Frame35";
import Frame9 from "../Frame9";
import Frame33 from "../Frame33";
import "./Frame37.css";

function Frame37(props) {
  const {
    advancedMobibins,
    frame32Props,
    frame14Props,
    frame35Props,
    frame9Props,
    frame33Props,
    frame142Props,
    className,
  } = props;

  return (
    <div className={`frame-74 ${className || ""}`}>
      <div className="overlap-group-72">
        <div className="frame-284">
          <Frame32 className="frame-23">{frame32Props.children}</Frame32>
          <Frame14 src={frame14Props.src} className="frame-2" />
        </div>
        <div className="frame-75">
          <div className="advanced-mobi-bins3 roboto-normal-pale-sky-14px">{advancedMobibins}</div>
        </div>
      </div>
      <div className="overlap-group-7">
        <div className="frame-28">
          <Frame35 className="frame-26">{frame35Props.children}</Frame35>
          <Frame9 src={frame9Props.src} className="frame-1" />
        </div>
        <div className="frame-76">
          <Frame33 className="frame-24">{frame33Props.children}</Frame33>
          <Frame14 src={frame142Props.src} className="frame-2" />
        </div>
      </div>
    </div>
  );
}

export default Frame37;
