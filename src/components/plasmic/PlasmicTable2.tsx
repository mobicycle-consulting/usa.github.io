
    // @ts-nocheck
    /* eslint-disable */
    /* tslint:disable */
    /* prettier-ignore-start */
    /** @jsxRuntime classic */
    /** @jsx createPlasmicElementProxy */
    /** @jsxFrag React.Fragment */
    // This class is auto-generated by Plasmic; please do not edit!
    // Plasmic Project: cB98qoa8i3odyeQmSRqxXv
    // Component: uyExJbZ7mqv6
    // plasmic-unformatted
    import * as React from "react";
    
    import * as p from  "@plasmicapp/react-web";
    import {hasVariant, classNames, wrapWithClassName, createPlasmicElementProxy, makeFragment, MultiChoiceArg, SingleBooleanChoiceArg, SingleChoiceArg, pick, omit, useTrigger, StrictProps, deriveRenderOpts, ensureGlobalVariants} from "@plasmicapp/react-web";
    
    
    
    import "@plasmicapp/react-web/lib/plasmic.css";
    import  "./plasmic__default_style.css"; // plasmic-import: global/defaultcss
    import  "./plasmic_final_not_exported.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
    import  "./PlasmicTable2.css" // plasmic-import: uyExJbZ7mqv6/css
  
    
    

    
    export type PlasmicTable2__VariantMembers = {
      
    };
    export type PlasmicTable2__VariantsArgs = {};
    type VariantPropType = keyof PlasmicTable2__VariantsArgs;
    export const PlasmicTable2__VariantProps = new Array<VariantPropType>();
  

    
    export type PlasmicTable2__ArgsType = {};
    type ArgPropType = keyof PlasmicTable2__ArgsType;
    export const PlasmicTable2__ArgProps = new Array<ArgPropType>();
  

    export type PlasmicTable2__OverridesType = {
    table?: p.Flex<"div">;
  };

    
    export interface DefaultTable2Props {
      
      className?: string;
    }
  

    
    function PlasmicTable2__RenderFunc(
      props: {
        variants: PlasmicTable2__VariantsArgs,
        args: PlasmicTable2__ArgsType
        overrides: PlasmicTable2__OverridesType
        forNode?: string
      }
    ) {
      const {variants, args, overrides, forNode} = props;

      
      
      return (
        
  <div
    
    data-plasmic-name={"table"}
    data-plasmic-override={overrides.table}
    data-plasmic-root={true}
    data-plasmic-for-node={forNode}
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "root_reset_cB98qoa8i3odyeQmSRqxXv", "Table2__table___1AXkX")}
    
    />
  
      ) as React.ReactElement | null;
    }

    
    const PlasmicDescendants = {
      table: ["table"],
    } as const;
    type NodeNameType = keyof typeof PlasmicDescendants;
    type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number];
    type NodeDefaultElementType = {
      table: "div"
    };
  

    
    type ReservedPropsType = "variants" | "args" | "overrides";
    type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicTable2__OverridesType, DescendantsType<T>>;
    type NodeComponentProps<T extends NodeNameType> = (
      // Explicitly specify variants, args, and overrides as objects
      & {
        variants?: PlasmicTable2__VariantsArgs;
        args?: PlasmicTable2__ArgsType;
        overrides?: NodeOverridesType<T>;
      }
      // Specify variants directly as props
      & Omit<PlasmicTable2__VariantsArgs, ReservedPropsType>
      // Specify args directly as props
      & Omit<PlasmicTable2__ArgsType, ReservedPropsType>
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
          internalArgPropNames: PlasmicTable2__ArgProps,
          internalVariantPropNames: PlasmicTable2__VariantProps,
        });

        return PlasmicTable2__RenderFunc({
          variants, args, overrides, forNode: nodeName
        });
      };
      if (nodeName === "table") {
        func.displayName = "PlasmicTable2";
      } else {
        func.displayName = `PlasmicTable2.${nodeName}`;
      }
      return func;
    }

    export const PlasmicTable2 = Object.assign(
      // Top-level PlasmicTable2 renders the root element
      makeNodeComponent("table"),
      {
        // Helper components rendering sub-elements
        

        // Metadata about props expected for PlasmicTable2
        internalVariantProps: PlasmicTable2__VariantProps,
        internalArgProps: PlasmicTable2__ArgProps,
      }
    );
  

    export default PlasmicTable2;
    /* prettier-ignore-end */
  