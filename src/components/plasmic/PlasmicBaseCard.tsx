
    // @ts-nocheck
    /* eslint-disable */
    /* tslint:disable */
    /* prettier-ignore-start */
    /** @jsxRuntime classic */
    /** @jsx createPlasmicElementProxy */
    /** @jsxFrag React.Fragment */
    // This class is auto-generated by Plasmic; please do not edit!
    // Plasmic Project: cB98qoa8i3odyeQmSRqxXv
    // Component: 2y0k2cwVaTHJA
    // plasmic-unformatted
    import * as React from "react";
    
    import * as p from  "@plasmicapp/react-web";
    import {hasVariant, classNames, wrapWithClassName, createPlasmicElementProxy, makeFragment, MultiChoiceArg, SingleBooleanChoiceArg, SingleChoiceArg, pick, omit, useTrigger, StrictProps, deriveRenderOpts, ensureGlobalVariants} from "@plasmicapp/react-web";
    
    
    
    import "@plasmicapp/react-web/lib/plasmic.css";
    import  "./plasmic__default_style.css"; // plasmic-import: global/defaultcss
    import  "./plasmic_final_not_exported.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
    import  "./PlasmicBaseCard.css" // plasmic-import: 2y0k2cwVaTHJA/css
  
    
    

    
    export type PlasmicBaseCard__VariantMembers = {
      _long: "_long";
    };
    export type PlasmicBaseCard__VariantsArgs = {
    _long?: SingleBooleanChoiceArg<"_long">
  };
    type VariantPropType = keyof PlasmicBaseCard__VariantsArgs;
    export const PlasmicBaseCard__VariantProps = new Array<VariantPropType>("_long");
  

    
    export type PlasmicBaseCard__ArgsType = {
    children?: React.ReactNode;
iconBack?: React.ReactNode
  };
    type ArgPropType = keyof PlasmicBaseCard__ArgsType;
    export const PlasmicBaseCard__ArgProps = new Array<ArgPropType>("children","iconBack");
  

    export type PlasmicBaseCard__OverridesType = {
    root?: p.Flex<"div">;
svg?: p.Flex<"svg">;
  };

    
    export interface DefaultBaseCardProps {
      children?: React.ReactNode;
iconBack?: React.ReactNode;
_long?: SingleBooleanChoiceArg<"_long">
      className?: string;
    }
  

    
    function PlasmicBaseCard__RenderFunc(
      props: {
        variants: PlasmicBaseCard__VariantsArgs,
        args: PlasmicBaseCard__ArgsType
        overrides: PlasmicBaseCard__OverridesType
        forNode?: string
      }
    ) {
      const {variants, args, overrides, forNode} = props;

      
      
      return (
        
  <p.Stack
    as={"div"}
    data-plasmic-name={"root"}
    data-plasmic-override={overrides.root}
    data-plasmic-root={true}
    data-plasmic-for-node={forNode}
    hasGap={true}
    className={classNames("plasmic_default__all", "plasmic_default__div", "root_reset_cB98qoa8i3odyeQmSRqxXv", "BaseCard__root__bsEkz", { "BaseCard__root___long__bsEkzjsSPh": hasVariant(variants, "_long", "_long") })}
    
    >
          
  <div
    
    
    
    
    
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "BaseCard__box__rwqEp", { "BaseCard__box___long__rwqEPjsSPh": hasVariant(variants, "_long", "_long") })}
    
    >
          <p.PlasmicSlot
      defaultContents={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      value={args.children}
      className={classNames("BaseCard__slotChildren__lzjeE", { "BaseCard__slotChildren___long__lzjeEjsSPh": hasVariant(variants, "_long", "_long") })} />
        </div>
  
{ (hasVariant(variants, "_long", "_long") ? true : false) ? (
  <div
    
    
    
    
    
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "BaseCard__box__i9PjM", { "BaseCard__box___long__i9PjMjsSPh": hasVariant(variants, "_long", "_long") })}
    
    >
          <p.PlasmicSlot
      defaultContents={
  <svg
    
    data-plasmic-name={"svg"}
    data-plasmic-override={overrides.svg}
    
    
    
    className={classNames("plasmic_default__all", "plasmic_default__svg", "BaseCard__svg__wXBpf")}
role={"img"}
    
    />
  }
      value={args.iconBack}
       />
        </div>
  ) : null }
        </p.Stack>
  
      ) as React.ReactElement | null;
    }

    
    const PlasmicDescendants = {
      root: ["root", "svg"],
svg: ["svg"],
    } as const;
    type NodeNameType = keyof typeof PlasmicDescendants;
    type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number];
    type NodeDefaultElementType = {
      root: "div";
svg: "svg"
    };
  

    
    type ReservedPropsType = "variants" | "args" | "overrides";
    type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicBaseCard__OverridesType, DescendantsType<T>>;
    type NodeComponentProps<T extends NodeNameType> = (
      // Explicitly specify variants, args, and overrides as objects
      & {
        variants?: PlasmicBaseCard__VariantsArgs;
        args?: PlasmicBaseCard__ArgsType;
        overrides?: NodeOverridesType<T>;
      }
      // Specify variants directly as props
      & Omit<PlasmicBaseCard__VariantsArgs, ReservedPropsType>
      // Specify args directly as props
      & Omit<PlasmicBaseCard__ArgsType, ReservedPropsType>
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
          internalArgPropNames: PlasmicBaseCard__ArgProps,
          internalVariantPropNames: PlasmicBaseCard__VariantProps,
        });

        return PlasmicBaseCard__RenderFunc({
          variants, args, overrides, forNode: nodeName
        });
      };
      if (nodeName === "root") {
        func.displayName = "PlasmicBaseCard";
      } else {
        func.displayName = `PlasmicBaseCard.${nodeName}`;
      }
      return func;
    }

    export const PlasmicBaseCard = Object.assign(
      // Top-level PlasmicBaseCard renders the root element
      makeNodeComponent("root"),
      {
        // Helper components rendering sub-elements
        svg: makeNodeComponent("svg"),

        // Metadata about props expected for PlasmicBaseCard
        internalVariantProps: PlasmicBaseCard__VariantProps,
        internalArgProps: PlasmicBaseCard__ArgProps,
      }
    );
  

    export default PlasmicBaseCard;
    /* prettier-ignore-end */
  