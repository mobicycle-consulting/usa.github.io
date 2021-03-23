import React from "react";
import TypePrimarySizexsIconFalseStateDefa5 from "../TypePrimarySizexsIconFalseStateDefa5";
import TypePrimarySizexsIconFalseStateDefa6 from "../TypePrimarySizexsIconFalseStateDefa6";
import Buttons from "../Buttons";
import "./IPhone11414.css";

function IPhone11414(props) {
  const {
    color_Logo_Transparent2,
    text19,
    overlapGroup1,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    text18,
    rectangle,
    text15,
    typePrimarySizexsIconFalseStateDefa5Props,
    typePrimarySizexsIconFalseStateDefa6Props,
    buttonsProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="iphone-11-414 screen ">
        <div className="overlap-group6">
          <div className="video3">
            <iframe
              style={{ border: 0 }}
              width="100%"
              height="100%"
              src="https://player.vimeo.com/video/340108769?autoplay=1"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="nav-bar4">
            <div className="overlap-group14">
              <img className="colorlogotransparent-24" src={color_Logo_Transparent2} />
              <div className="rectangle-134"></div>
              <p className="text-19 valign-text-middle">{text19}</p>
              <TypePrimarySizexsIconFalseStateDefa5 className="type-primary-si-e-state-default11">
                {typePrimarySizexsIconFalseStateDefa5Props.children}
              </TypePrimarySizexsIconFalseStateDefa5>
              <TypePrimarySizexsIconFalseStateDefa6 className="type-primary-si-e-state-default14">
                {typePrimarySizexsIconFalseStateDefa6Props.children}
              </TypePrimarySizexsIconFalseStateDefa6>
            </div>
          </div>
        </div>
        <div className="content4">
          <div className="overlap-group1-12" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <div className="content-13">
              <div className="overlap-group24">
                <Buttons
                  typePrimarySizexsIconFalseStateDefa3Props={buttonsProps.typePrimarySizexsIconFalseStateDefa3Props}
                  typePrimarySizexsIconFalseStateDefa4Props={buttonsProps.typePrimarySizexsIconFalseStateDefa4Props}
                  className="buttons3"
                />
                <p className="text-16">
                  <span className="span05">{spanText}</span>
                  <span className="span15">{spanText2}</span>
                </p>
                <div className="text-17">
                  <span className="span06">{spanText3}</span>
                  <span className="span16">{spanText4}</span>
                </div>
              </div>
              <div className="text-18">{text18}</div>
              <img className="rectangle3" src={rectangle} />
            </div>
          </div>
        </div>
        <div className="footer4">
          <p className="text-15">{text15}</p>
        </div>
      </div>
    </div>
  );
}

export default IPhone11414;
