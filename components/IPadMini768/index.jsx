import React from "react";
import TypePrimarySizexsIconFalseStateDefa5 from "../TypePrimarySizexsIconFalseStateDefa5";
import TypePrimarySizexsIconFalseStateDefa6 from "../TypePrimarySizexsIconFalseStateDefa6";
import Buttons from "../Buttons";
import "./IPadMini768.css";

function IPadMini768(props) {
  const {
    color_Logo_Transparent2,
    text9,
    text5,
    overlapGroup2,
    text8,
    text7,
    spanText,
    spanText2,
    rectangle,
    typePrimarySizexsIconFalseStateDefa5Props,
    typePrimarySizexsIconFalseStateDefa6Props,
    buttonsProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="ipad-mini-768 screen ">
        <div className="overlap-group4">
          <div className="video">
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
          <div className="nav-bar2">
            <div className="overlap-group22">
              <img className="colorlogotransparent-22" src={color_Logo_Transparent2} />
              <div className="rectangle-132"></div>
              <TypePrimarySizexsIconFalseStateDefa5>
                {typePrimarySizexsIconFalseStateDefa5Props.children}
              </TypePrimarySizexsIconFalseStateDefa5>
              <TypePrimarySizexsIconFalseStateDefa6>
                {typePrimarySizexsIconFalseStateDefa6Props.children}
              </TypePrimarySizexsIconFalseStateDefa6>
              <div className="text-9 valign-text-middle">{text9}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group12">
          <div className="footer2">
            <p className="text-5">{text5}</p>
          </div>
          <div className="content2">
            <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="content-1">
                <div className="flex-col">
                  <div className="text-8 roboto-normal-mirage-36px">{text8}</div>
                  <div className="text-7 valign-text-middle">{text7}</div>
                  <p className="text-6">
                    <span className="span02">{spanText}</span>
                    <span className="span12">{spanText2}</span>
                  </p>
                  <Buttons
                    typePrimarySizexsIconFalseStateDefa3Props={buttonsProps.typePrimarySizexsIconFalseStateDefa3Props}
                    typePrimarySizexsIconFalseStateDefa4Props={buttonsProps.typePrimarySizexsIconFalseStateDefa4Props}
                  />
                </div>
                <img className="rectangle" src={rectangle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPadMini768;
