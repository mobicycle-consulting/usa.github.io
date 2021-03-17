// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cB98qoa8i3odyeQmSRqxXv
// Component: TZVlN0wNrC
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: VzjRiKj8lhN/component
import Features from "../../Features"; // plasmic-import: vajCZel_JAG/component
import PricingTableHeader from "../../PricingTableHeader"; // plasmic-import: LSgneob4-QJ/component
import PricingTableProducts from "../../PricingTableProducts"; // plasmic-import: j_QrHh39o2Vz/component
import Footer from "../../Footer"; // plasmic-import: ZTC6UxPS4pr/component
import HeaderTablet from "../../HeaderTablet"; // plasmic-import: GZSOtiGoasF/component
import FeaturesTablet from "../../FeaturesTablet"; // plasmic-import: RYoTzvmBRcs/component
import PricingTableProductsTablet from "../../PricingTableProductsTablet"; // plasmic-import: JvsjNxa923YH/component
import FooterTablet from "../../FooterTablet"; // plasmic-import: suCoex1ZEws/component
import HeaderMobile from "../../HeaderMobile"; // plasmic-import: oCLcySiUeWw/component
import FeaturesMobile from "../../FeaturesMobile"; // plasmic-import: 4A7zd1YDe1h/component
import PricingTableProductsMobile from "../../PricingTableProductsMobile"; // plasmic-import: fBw8AMOyHNK2/component
import FooterMobile from "../../FooterMobile"; // plasmic-import: I8ww9lcEFKJ/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: dBHaNQuMtgO0A/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_mc_usa.module.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: TZVlN0wNrC/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          {(
            hasVariant(globalVariants, "screen", "mobile")
              ? false
              : hasVariant(globalVariants, "screen", "iPadMini")
              ? false
              : hasVariant(globalVariants, "screen", "tablet")
              ? false
              : hasVariant(globalVariants, "screen", "iMac")
              ? true
              : hasVariant(globalVariants, "screen", "surfacePro4")
              ? true
              : hasVariant(globalVariants, "screen", "iPhoneSe")
              ? false
              : hasVariant(globalVariants, "screen", "iPhone11ProMax")
              ? false
              : true
          ) ? (
            <div
              data-plasmic-name={"desktop"}
              data-plasmic-override={overrides.desktop}
              className={classNames(defaultcss.all, sty.desktop)}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <Features
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames("__wab_instance", sty.features)}
              />

              <PricingTableHeader
                data-plasmic-name={"pricingTableHeader"}
                data-plasmic-override={overrides.pricingTableHeader}
                className={classNames("__wab_instance", sty.pricingTableHeader)}
              />

              <PricingTableProducts
                data-plasmic-name={"pricingTableProducts"}
                data-plasmic-override={overrides.pricingTableProducts}
                className={classNames(
                  "__wab_instance",
                  sty.pricingTableProducts
                )}
              />

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobile")
              ? false
              : hasVariant(globalVariants, "screen", "iPadMini")
              ? true
              : hasVariant(globalVariants, "screen", "macBook")
              ? false
              : hasVariant(globalVariants, "screen", "surfacePro4")
              ? true
              : hasVariant(globalVariants, "screen", "iPhoneSe")
              ? false
              : hasVariant(globalVariants, "screen", "iPhone11ProMax")
              ? false
              : false
          ) ? (
            <div
              data-plasmic-name={"tablet"}
              data-plasmic-override={overrides.tablet}
              className={classNames(defaultcss.all, sty.tablet)}
            >
              <HeaderTablet
                data-plasmic-name={"headerTablet"}
                data-plasmic-override={overrides.headerTablet}
                className={classNames("__wab_instance", sty.headerTablet)}
              />

              <FeaturesTablet
                data-plasmic-name={"featuresTablet"}
                data-plasmic-override={overrides.featuresTablet}
                className={classNames("__wab_instance", sty.featuresTablet)}
              />

              <PricingTableProductsTablet
                data-plasmic-name={"pricingTableProductsTablet"}
                data-plasmic-override={overrides.pricingTableProductsTablet}
                className={classNames(
                  "__wab_instance",
                  sty.pricingTableProductsTablet
                )}
              />

              <FooterTablet
                data-plasmic-name={"footerTablet"}
                data-plasmic-override={overrides.footerTablet}
                className={classNames("__wab_instance", sty.footerTablet)}
              />
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "iPadMini")
              ? false
              : hasVariant(globalVariants, "screen", "tablet")
              ? false
              : hasVariant(globalVariants, "screen", "macBook")
              ? false
              : hasVariant(globalVariants, "screen", "iMac")
              ? false
              : true
          ) ? (
            <div
              data-plasmic-name={"mobile"}
              data-plasmic-override={overrides.mobile}
              className={classNames(defaultcss.all, sty.mobile)}
            >
              <HeaderMobile
                data-plasmic-name={"headerMobile"}
                data-plasmic-override={overrides.headerMobile}
                className={classNames("__wab_instance", sty.headerMobile)}
              />

              <FeaturesMobile
                data-plasmic-name={"featuresMobile"}
                data-plasmic-override={overrides.featuresMobile}
                className={classNames("__wab_instance", sty.featuresMobile)}
              />

              <PricingTableProductsMobile
                data-plasmic-name={"pricingTableProductsMobile"}
                data-plasmic-override={overrides.pricingTableProductsMobile}
                className={classNames(
                  "__wab_instance",
                  sty.pricingTableProductsMobile
                )}
              />

              <FooterMobile
                data-plasmic-name={"footerMobile"}
                data-plasmic-override={overrides.footerMobile}
                className={classNames("__wab_instance", sty.footerMobile)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "desktop",
    "header",
    "features",
    "pricingTableHeader",
    "pricingTableProducts",
    "footer",
    "tablet",
    "headerTablet",
    "featuresTablet",
    "pricingTableProductsTablet",
    "footerTablet",
    "mobile",
    "headerMobile",
    "featuresMobile",
    "pricingTableProductsMobile",
    "footerMobile"
  ],

  desktop: [
    "desktop",
    "header",
    "features",
    "pricingTableHeader",
    "pricingTableProducts",
    "footer"
  ],

  header: ["header"],
  features: ["features"],
  pricingTableHeader: ["pricingTableHeader"],
  pricingTableProducts: ["pricingTableProducts"],
  footer: ["footer"],
  tablet: [
    "tablet",
    "headerTablet",
    "featuresTablet",
    "pricingTableProductsTablet",
    "footerTablet"
  ],

  headerTablet: ["headerTablet"],
  featuresTablet: ["featuresTablet"],
  pricingTableProductsTablet: ["pricingTableProductsTablet"],
  footerTablet: ["footerTablet"],
  mobile: [
    "mobile",
    "headerMobile",
    "featuresMobile",
    "pricingTableProductsMobile",
    "footerMobile"
  ],

  headerMobile: ["headerMobile"],
  featuresMobile: ["featuresMobile"],
  pricingTableProductsMobile: ["pricingTableProductsMobile"],
  footerMobile: ["footerMobile"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    desktop: makeNodeComponent("desktop"),
    header: makeNodeComponent("header"),
    features: makeNodeComponent("features"),
    pricingTableHeader: makeNodeComponent("pricingTableHeader"),
    pricingTableProducts: makeNodeComponent("pricingTableProducts"),
    footer: makeNodeComponent("footer"),
    tablet: makeNodeComponent("tablet"),
    headerTablet: makeNodeComponent("headerTablet"),
    featuresTablet: makeNodeComponent("featuresTablet"),
    pricingTableProductsTablet: makeNodeComponent("pricingTableProductsTablet"),
    footerTablet: makeNodeComponent("footerTablet"),
    mobile: makeNodeComponent("mobile"),
    headerMobile: makeNodeComponent("headerMobile"),
    featuresMobile: makeNodeComponent("featuresMobile"),
    pricingTableProductsMobile: makeNodeComponent("pricingTableProductsMobile"),
    footerMobile: makeNodeComponent("footerMobile"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
