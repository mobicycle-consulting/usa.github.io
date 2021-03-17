// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cB98qoa8i3odyeQmSRqxXv
// Component: 8JL1OXjjFv
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_mc_usa.module.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
import * as sty from "./PlasmicPricingTableTablet.module.css"; // plasmic-import: 8JL1OXjjFv/css

export const PlasmicPricingTableTablet__VariantProps = new Array();

export const PlasmicPricingTableTablet__ArgProps = new Array();

function PlasmicPricingTableTablet__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"table"}
      data-plasmic-override={overrides.table}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.table)}
    />
  );
}

const PlasmicDescendants = {
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricingTableTablet__ArgProps,
      internalVariantPropNames: PlasmicPricingTableTablet__VariantProps
    });

    return PlasmicPricingTableTablet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "table") {
    func.displayName = "PlasmicPricingTableTablet";
  } else {
    func.displayName = `PlasmicPricingTableTablet.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingTableTablet = Object.assign(
  // Top-level PlasmicPricingTableTablet renders the root element
  makeNodeComponent("table"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPricingTableTablet
    internalVariantProps: PlasmicPricingTableTablet__VariantProps,
    internalArgProps: PlasmicPricingTableTablet__ArgProps
  }
);

export default PlasmicPricingTableTablet;
/* prettier-ignore-end */
