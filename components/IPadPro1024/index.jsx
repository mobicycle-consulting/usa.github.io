import React from "react";
import TypePrimarySizexlIconFalseStateDefa from "../TypePrimarySizexlIconFalseStateDefa";
import TypePrimarySizexlIconFalseStateDefa2 from "../TypePrimarySizexlIconFalseStateDefa2";
import Footer from "../Footer";
import Buttons from "../Buttons";
import "./IPadPro1024.css";

function IPadPro1024(props) {
  const {
    color_Logo_Transparent2,
    text24,
    content,
    text23,
    text22,
    spanText,
    spanText2,
    rectangle,
    text20,
    typePrimarySizexlIconFalseStateDefaProps,
    typePrimarySizexlIconFalseStateDefa2Props,
    footerProps,
    buttonsProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="ipad-pro-1024 screen ">
        <div className="ipad-pro-1024-item">
          <div className="overlap-group62">
            <img className="colorlogotransparent-25" src={color_Logo_Transparent2} />
            <div className="rectangle-135"></div>
            <TypePrimarySizexlIconFalseStateDefa>
              {typePrimarySizexlIconFalseStateDefaProps.children}
            </TypePrimarySizexlIconFalseStateDefa>
            <TypePrimarySizexlIconFalseStateDefa2>
              {typePrimarySizexlIconFalseStateDefa2Props.children}
            </TypePrimarySizexlIconFalseStateDefa2>
            <div className="text-24 valign-text-middle">{text24}</div>
          </div>
        </div>
        <div className="ipad-pro-1024-item">
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
        <div className="content5">
          <div className="overlap-group15">
            <img className="content-14" src={content} />
            <Footer {...footerProps} />
            <div className="content-22">
              <div className="flex-col2">
                <h1 className="text-23">{text23}</h1>
                <div className="text-22 valign-text-middle">{text22}</div>
                <p className="text-21">
                  <span className="span07">{spanText}</span>
                  <span className="span17">{spanText2}</span>
                </p>
                <Buttons
                  typePrimarySizexsIconFalseStateDefa3Props={buttonsProps.typePrimarySizexsIconFalseStateDefa3Props}
                  typePrimarySizexsIconFalseStateDefa4Props={buttonsProps.typePrimarySizexsIconFalseStateDefa4Props}
                  className="buttons4"
                />
              </div>
              <img className="rectangle4" src={rectangle} />
            </div>
          </div>
        </div>
        <div className="footer5">
          <div className="overlap-group7">
            <p className="text-20">{text20}</p>
            <div className="rectangle-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPadPro1024;
