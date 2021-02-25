
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
    // plasmic-unformatted
    import * as React from "react";
    
    import * as p from  "@plasmicapp/react-web";
    import {hasVariant, classNames, wrapWithClassName, createPlasmicElementProxy, makeFragment, MultiChoiceArg, SingleBooleanChoiceArg, SingleChoiceArg, pick, omit, useTrigger, StrictProps, deriveRenderOpts, ensureGlobalVariants} from "@plasmicapp/react-web";
    
    
    
    import "@plasmicapp/react-web/lib/plasmic.css";
    import  "./plasmic__default_style.css"; // plasmic-import: global/defaultcss
    import  "./plasmic_final_not_exported.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
    import  "./PlasmicBackground.css" // plasmic-import: ZUhz2WklPN/css
  
    
    

    
    export type PlasmicBackground__VariantMembers = {
      
    };
    export type PlasmicBackground__VariantsArgs = {};
    type VariantPropType = keyof PlasmicBackground__VariantsArgs;
    export const PlasmicBackground__VariantProps = new Array<VariantPropType>();
  

    
    export type PlasmicBackground__ArgsType = {};
    type ArgPropType = keyof PlasmicBackground__ArgsType;
    export const PlasmicBackground__ArgProps = new Array<ArgPropType>();
  

    export type PlasmicBackground__OverridesType = {
    root?: p.Flex<"div">;
  };

    
    export interface DefaultBackgroundProps {
      
      className?: string;
    }
  

    
    function PlasmicBackground__RenderFunc(
      props: {
        variants: PlasmicBackground__VariantsArgs,
        args: PlasmicBackground__ArgsType
        overrides: PlasmicBackground__OverridesType
        forNode?: string
      }
    ) {
      const {variants, args, overrides, forNode} = props;

      
      
      return (
        
  <div
    
    data-plasmic-name={"root"}
    data-plasmic-override={overrides.root}
    data-plasmic-root={true}
    data-plasmic-for-node={forNode}
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "root_reset_cB98qoa8i3odyeQmSRqxXv", "Background__root__dKTho")}
    
    />
  
      ) as React.ReactElement | null;
    }

    
    const PlasmicDescendants = {
      root: ["root"],
    } as const;
    type NodeNameType = keyof typeof PlasmicDescendants;
    type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number];
    type NodeDefaultElementType = {
      root: "div"
    };
  

    
    type ReservedPropsType = "variants" | "args" | "overrides";
    type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicBackground__OverridesType, DescendantsType<T>>;
    type NodeComponentProps<T extends NodeNameType> = (
      // Explicitly specify variants, args, and overrides as objects
      & {
        variants?: PlasmicBackground__VariantsArgs;
        args?: PlasmicBackground__ArgsType;
        overrides?: NodeOverridesType<T>;
      }
      // Specify variants directly as props
      & Omit<PlasmicBackground__VariantsArgs, ReservedPropsType>
      // Specify args directly as props
      & Omit<PlasmicBackground__ArgsType, ReservedPropsType>
      // Specify overrides for each element directly as props
      & Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType>
      // Specify props for the root element
      & Omit<Partial<React.ComponentProps<NodeDefaultElementType[T]>>, ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>>
    );
    function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
      type PropsType = NodeComponentProps<NodeName> & {key?: React.Key};
      const func = function<T extends PropsType>(props: T & StrictProps<T, PropsType>) {
        const {variants, args, overrides} = deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBackground__ArgProps,
          internalVariantPropNames: PlasmicBackground__VariantProps,
        });

        return PlasmicBackground__RenderFunc({
          variants, args, overrides, forNode: nodeName
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
        internalArgProps: PlasmicBackground__ArgProps,
      }
    );
  

    export default PlasmicBackground;
    /* prettier-ignore-end */
  