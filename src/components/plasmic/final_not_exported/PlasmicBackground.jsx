// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cB98qoa8i3odyeQmSRqxXv
// Component: ZUhz2WklPN
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_final_not_exported.module.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
import sty from "./PlasmicBackground.module.css"; // plasmic-import: ZUhz2WklPN/css

export const PlasmicBackground__VariantProps = new Array();

export const PlasmicBackground__ArgProps = new Array();

function PlasmicBackground__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBackground__ArgProps,
      internalVariantPropNames: PlasmicBackground__VariantProps
    });

    return PlasmicBackground__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBackground";
  } else {
    func.displayName = `PlasmicBackground.${nodeName}`;
  }
  return func;
}

export const PlasmicBackground = Object.assign(
  // Top-level PlasmicBackground renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBackground
    internalVariantProps: PlasmicBackground__VariantProps,
    internalArgProps: PlasmicBackground__ArgProps
  }
);

export default PlasmicBackground;
/* prettier-ignore-end */
