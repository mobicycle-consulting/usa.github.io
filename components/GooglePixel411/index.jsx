import React from "react";
import TypePrimarySizexsIconFalseStateDefa5 from "../TypePrimarySizexsIconFalseStateDefa5";
import TypePrimarySizexsIconFalseStateDefa6 from "../TypePrimarySizexsIconFalseStateDefa6";
import TypePrimarySizexsIconFalseStateDefa3 from "../TypePrimarySizexsIconFalseStateDefa3";
import TypePrimarySizexsIconFalseStateDefa4 from "../TypePrimarySizexsIconFalseStateDefa4";
import "./GooglePixel411.css";

function GooglePixel411(props) {
  const {
    color_Logo_Transparent2,
    text14,
    content,
    spanText,
    spanText2,
    text13,
    rectangle,
    spanText3,
    spanText4,
    text10,
    typePrimarySizexsIconFalseStateDefa5Props,
    typePrimarySizexsIconFalseStateDefa6Props,
    typePrimarySizexsIconFalseStateDefa3Props,
    typePrimarySizexsIconFalseStateDefa4Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="google-pixel-411 screen ">
        <div className="overlap-group5">
          <div className="video2">
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
          <div className="nav-bar3">
            <div className="overlap-group13">
              <img className="colorlogotransparent-23" src={color_Logo_Transparent2} />
              <div className="rectangle-133"></div>
              <p className="text-14 valign-text-middle">{text14}</p>
              <TypePrimarySizexsIconFalseStateDefa5 className="type-primary-si-e-state-default10">
                {typePrimarySizexsIconFalseStateDefa5Props.children}
              </TypePrimarySizexsIconFalseStateDefa5>
              <TypePrimarySizexsIconFalseStateDefa6 className="type-primary-si-e-state-default13">
                {typePrimarySizexsIconFalseStateDefa6Props.children}
              </TypePrimarySizexsIconFalseStateDefa6>
            </div>
          </div>
        </div>
        <div className="content3">
          <div className="overlap-group23">
            <img className="content-12" src={content} />
            <div className="content-2">
              <div className="flex-row">
                <div className="overlap-group1-1">
                  <p className="text-12">
                    <span className="span03">{spanText}</span>
                    <span className="span13">{spanText2}</span>
                  </p>
                  <div className="text-13 roboto-bold-mirage-14px">{text13}</div>
                </div>
                <img className="rectangle2" src={rectangle} />
              </div>
              <div className="overlap-group32">
                <div className="buttons5">
                  <TypePrimarySizexsIconFalseStateDefa3 className="type-primary-si-e-state-default5">
                    {typePrimarySizexsIconFalseStateDefa3Props.children}
                  </TypePrimarySizexsIconFalseStateDefa3>
                  <TypePrimarySizexsIconFalseStateDefa4 className="type-primary-si-e-state-default8">
                    {typePrimarySizexsIconFalseStateDefa4Props.children}
                  </TypePrimarySizexsIconFalseStateDefa4>
                </div>
                <p className="text-11">
                  <span className="span04">{spanText3}</span>
                  <span className="span14">{spanText4}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer3">
          <div className="overlap-group1-2">
            <p className="text-10">{text10}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GooglePixel411;
