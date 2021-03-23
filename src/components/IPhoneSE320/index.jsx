import React from "react";
import TypePrimarySizexsIconFalseStateDefa from "../TypePrimarySizexsIconFalseStateDefa";
import TypePrimarySizexsIconFalseStateDefa2 from "../TypePrimarySizexsIconFalseStateDefa2";
import TypePrimarySizexsIconFalseStateDefa3 from "../TypePrimarySizexsIconFalseStateDefa3";
import TypePrimarySizexsIconFalseStateDefa4 from "../TypePrimarySizexsIconFalseStateDefa4";
import "./IPhoneSE320.css";

function IPhoneSE320(props) {
  const {
    color_Logo_Transparent2,
    mobicycle,
    text1,
    content,
    overlapGroup1,
    text4,
    text3,
    spanText,
    spanText2,
    typePrimarySizexsIconFalseStateDefaProps,
    typePrimarySizexsIconFalseStateDefa2Props,
    typePrimarySizexsIconFalseStateDefa3Props,
    typePrimarySizexsIconFalseStateDefa4Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="iphone-se-320 screen ">
        <div className="nav-bar">
          <div className="overlap-group3">
            <img className="colorlogotransparent-2" src={color_Logo_Transparent2} />
            <div className="rectangle-13"></div>
            <div className="mobi-cycle valign-text-middle">{mobicycle}</div>
            <TypePrimarySizexsIconFalseStateDefa>
              {typePrimarySizexsIconFalseStateDefaProps.children}
            </TypePrimarySizexsIconFalseStateDefa>
            <TypePrimarySizexsIconFalseStateDefa2>
              {typePrimarySizexsIconFalseStateDefa2Props.children}
            </TypePrimarySizexsIconFalseStateDefa2>
          </div>
        </div>
        <div className="video-180">
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
        <div className="overlap-group">
          <div className="footer">
            <p className="text-1">{text1}</p>
          </div>
          <div className="content" style={{ backgroundImage: `url(${content})` }}>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="text-4 roboto-normal-mirage-18px">{text4}</div>
              <p className="text-3 valign-text-middle">{text3}</p>
              <div className="overlap-group2">
                <div className="buttons">
                  <TypePrimarySizexsIconFalseStateDefa3>
                    {typePrimarySizexsIconFalseStateDefa3Props.children}
                  </TypePrimarySizexsIconFalseStateDefa3>
                  <TypePrimarySizexsIconFalseStateDefa4>
                    {typePrimarySizexsIconFalseStateDefa4Props.children}
                  </TypePrimarySizexsIconFalseStateDefa4>
                </div>
                <p className="text-2">
                  <span className="span0">{spanText}</span>
                  <span className="span1">{spanText2}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhoneSE320;
