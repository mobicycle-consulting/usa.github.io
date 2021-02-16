// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vT2hQ48dTqvVqB6oYdpEi1
// Component: R1roHljYXf
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_mobicycle_usa.module.css"; // plasmic-import: vT2hQ48dTqvVqB6oYdpEi1/projectcss
import sty from "./PlasmicHome2.module.css"; // plasmic-import: R1roHljYXf/css

export const PlasmicHome2__VariantProps = new Array();

export const PlasmicHome2__ArgProps = new Array();

function PlasmicHome2__RenderFunc(props) {
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
      internalArgPropNames: PlasmicHome2__ArgProps,
      internalVariantPropNames: PlasmicHome2__VariantProps
    });

    return PlasmicHome2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome2";
  } else {
    func.displayName = `PlasmicHome2.${nodeName}`;
  }
  return func;
}

export const PlasmicHome2 = Object.assign(
  // Top-level PlasmicHome2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHome2
    internalVariantProps: PlasmicHome2__VariantProps,
    internalArgProps: PlasmicHome2__ArgProps
  }
);

export default PlasmicHome2;
/* prettier-ignore-end */
