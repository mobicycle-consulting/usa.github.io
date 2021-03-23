import React from "react";
import Solutions from "../Solutions";
import ABOUT from "../ABOUT";
import "./Footer.css";

function Footer(props) {
  const {
    solutions,
    pricing,
    documentation,
    guides,
    support,
    marketplaces,
    about,
    solutionsProps,
    solutions2Props,
    aBOUTProps,
    className,
  } = props;

  return (
    <div className={`footer6 ${className || ""}`}>
      <div className="overlap-group8">
        <div className="flex-col-1">
          <div className="solutions roboto-normal-santas-gray-14px">{solutions}</div>
          <Solutions
            hardware={solutionsProps.hardware}
            software={solutionsProps.software}
            analytics={solutionsProps.analytics}
          />
        </div>
        <div className="overlap-group25">
          <div className="support">
            <div className="pricing">{pricing}</div>
            <div className="support-item roboto-normal-mischka-16px">{documentation}</div>
            <div className="support-item roboto-normal-mischka-16px">{guides}</div>
          </div>
          <div className="support-1 roboto-normal-santas-gray-14px">{support}</div>
          <Solutions
            hardware={solutions2Props.hardware}
            software={solutions2Props.software}
            analytics={solutions2Props.analytics}
            className="marketplaced"
          />
          <div className="marketplaces roboto-normal-santas-gray-14px">{marketplaces}</div>
        </div>
        <div className="flex-col-2">
          <div className="about roboto-normal-santas-gray-14px">{about}</div>
          <ABOUT
            whereWeWork={aBOUTProps.whereWeWork}
            whatIsEwaste={aBOUTProps.whatIsEwaste}
            whyIsEwaste={aBOUTProps.whyIsEwaste}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
