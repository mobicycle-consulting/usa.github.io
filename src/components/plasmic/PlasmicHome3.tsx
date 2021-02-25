
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
    // plasmic-unformatted
    import * as React from "react";
    
    import * as p from  "@plasmicapp/react-web";
    import {hasVariant, classNames, wrapWithClassName, createPlasmicElementProxy, makeFragment, MultiChoiceArg, SingleBooleanChoiceArg, SingleChoiceArg, pick, omit, useTrigger, StrictProps, deriveRenderOpts, ensureGlobalVariants} from "@plasmicapp/react-web";
    import Header from "..//Header";  // plasmic-import: VzjRiKj8lhN/component
import Features from "..//Features";  // plasmic-import: vajCZel_JAG/component
import PricingTableHeader from "..//PricingTableHeader";  // plasmic-import: LSgneob4-QJ/component
import PricingTableProducts from "..//PricingTableProducts";  // plasmic-import: j_QrHh39o2Vz/component
import Footer from "..//Footer";  // plasmic-import: ZTC6UxPS4pr/component
    
    
    import "@plasmicapp/react-web/lib/plasmic.css";
    import  "./plasmic__default_style.css"; // plasmic-import: global/defaultcss
    import  "./plasmic_final_not_exported.css"; // plasmic-import: cB98qoa8i3odyeQmSRqxXv/projectcss
    import  "./PlasmicHome3.css" // plasmic-import: TZVlN0wNrC/css
  
    
    

    
    export type PlasmicHome3__VariantMembers = {
      
    };
    export type PlasmicHome3__VariantsArgs = {};
    type VariantPropType = keyof PlasmicHome3__VariantsArgs;
    export const PlasmicHome3__VariantProps = new Array<VariantPropType>();
  

    
    export type PlasmicHome3__ArgsType = {};
    type ArgPropType = keyof PlasmicHome3__ArgsType;
    export const PlasmicHome3__ArgProps = new Array<ArgPropType>();
  

    export type PlasmicHome3__OverridesType = {
    root?: p.Flex<"div">;
header?: p.Flex<typeof Header>;
features?: p.Flex<typeof Features>;
pricingTableHeader?: p.Flex<typeof PricingTableHeader>;
pricingTableProducts?: p.Flex<typeof PricingTableProducts>;
footer?: p.Flex<typeof Footer>;
  };

    
    export interface DefaultHome3Props {
      
      className?: string;
    }
  

    
    function PlasmicHome3__RenderFunc(
      props: {
        variants: PlasmicHome3__VariantsArgs,
        args: PlasmicHome3__ArgsType
        overrides: PlasmicHome3__OverridesType
        forNode?: string
      }
    ) {
      const {variants, args, overrides, forNode} = props;

      
      
      return (
        <React.Fragment>
    
    
    
      <div className={"plasmic_page_wrapper"}>
        
  <div
    
    data-plasmic-name={"root"}
    data-plasmic-override={overrides.root}
    data-plasmic-root={true}
    data-plasmic-for-node={forNode}
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "root_reset_cB98qoa8i3odyeQmSRqxXv", "Home3__root__kvLpK")}
    
    >
          
  <Header
    
    data-plasmic-name={"header"}
    data-plasmic-override={overrides.header}
    
    
    
    className={classNames("__wab_instance", "Home3__header__om7Tx")}
    
    />
  

  <Features
    
    data-plasmic-name={"features"}
    data-plasmic-override={overrides.features}
    
    
    
    className={classNames("__wab_instance", "Home3__features__ufPhe")}
    
    />
  

  <PricingTableHeader
    
    data-plasmic-name={"pricingTableHeader"}
    data-plasmic-override={overrides.pricingTableHeader}
    
    
    
    className={classNames("__wab_instance", "Home3__pricingTableHeader__oKi9G")}
    
    />
  

  <PricingTableProducts
    
    data-plasmic-name={"pricingTableProducts"}
    data-plasmic-override={overrides.pricingTableProducts}
    
    
    
    className={classNames("__wab_instance", "Home3__pricingTableProducts__buWg")}
    
    />
  

  <Footer
    
    data-plasmic-name={"footer"}
    data-plasmic-override={overrides.footer}
    
    
    
    className={classNames("__wab_instance", "Home3__footer__dc8Ru")}
    
    />
  
        </div>
  
      </div>
    
  </React.Fragment>
      ) as React.ReactElement | null;
    }

    
    const PlasmicDescendants = {
      root: ["root", "header", "features", "pricingTableHeader", "pricingTableProducts", "footer"],
header: ["header"],
features: ["features"],
pricingTableHeader: ["pricingTableHeader"],
pricingTableProducts: ["pricingTableProducts"],
footer: ["footer"],
    } as const;
    type NodeNameType = keyof typeof PlasmicDescendants;
    type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number];
    type NodeDefaultElementType = {
      root: "div";
header: typeof Header;
features: typeof Features;
pricingTableHeader: typeof PricingTableHeader;
pricingTableProducts: typeof PricingTableProducts;
footer: typeof Footer
    };
  

    
    type ReservedPropsType = "variants" | "args" | "overrides";
    type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicHome3__OverridesType, DescendantsType<T>>;
    type NodeComponentProps<T extends NodeNameType> = (
      // Explicitly specify variants, args, and overrides as objects
      & {
        variants?: PlasmicHome3__VariantsArgs;
        args?: PlasmicHome3__ArgsType;
        overrides?: NodeOverridesType<T>;
      }
      // Specify variants directly as props
      & Omit<PlasmicHome3__VariantsArgs, ReservedPropsType>
      // Specify args directly as props
      & Omit<PlasmicHome3__ArgsType, ReservedPropsType>
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
          internalArgPropNames: PlasmicHome3__ArgProps,
          internalVariantPropNames: PlasmicHome3__VariantProps,
        });

        return PlasmicHome3__RenderFunc({
          variants, args, overrides, forNode: nodeName
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
        internalArgProps: PlasmicHome3__ArgProps,
      }
    );
  

    export default PlasmicHome3;
    /* prettier-ignore-end */
  