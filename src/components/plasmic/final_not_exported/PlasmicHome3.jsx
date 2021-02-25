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
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: VzjRiKj8lhN/component
import Features from "../../Features"; // plasmic-import: vajCZel_JAG/component
import PricingTableHeader from "../../PricingTableHeader"; // plasmic-import: LSgneob4-QJ/component
import PricingTableProducts from "../../PricingTableProducts"; // plasmic-import: j_QrHh39o2Vz/component
import Footer from "../../Footer"; // plasmic-import: ZTC6UxPS4pr/component
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_final_not_exported.module.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
import sty from "./PlasmicHome3.module.css"; // plasmic-import: TZVlN0wNrC/css

export const PlasmicHome3__VariantProps = new Array();

export const PlasmicHome3__ArgProps = new Array();

function PlasmicHome3__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
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
          className={classNames("__wab_instance", sty.pricingTableProducts)}
        />

        <Footer
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          className={classNames("__wab_instance", sty.footer)}
        />
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
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
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome3__ArgProps,
      internalVariantPropNames: PlasmicHome3__VariantProps
    });

    return PlasmicHome3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome3";
  } else {
    func.displayName = `PlasmicHome3.${nodeName}`;
  }
  return func;
}

export const PlasmicHome3 = Object.assign(
  // Top-level PlasmicHome3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    features: makeNodeComponent("features"),
    pricingTableHeader: makeNodeComponent("pricingTableHeader"),
    pricingTableProducts: makeNodeComponent("pricingTableProducts"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome3
    internalVariantProps: PlasmicHome3__VariantProps,
    internalArgProps: PlasmicHome3__ArgProps
  }
);

export default PlasmicHome3;
/* prettier-ignore-end */
