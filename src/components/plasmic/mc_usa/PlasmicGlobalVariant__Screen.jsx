// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);
/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */

export function ScreenVariantProvider(props) {
  console.warn(
    "DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."
  );
  return props.children;
}

export const useScreenVariants = p.createUseScreenVariants(false, {
  mobile: "(max-width:511px)",
  tv4K: "(max-width:3840px)",
  surfaceBook: "(max-width:1500px)",
  macBookPro: "(max-width:1440px)",
  surfacePro4: "(max-width:1368px)",
  iMac: "(max-width:1280px)",
  macBook: "(max-width:1152px)",
  tablet: "(max-width:1024px)",
  iPadPro11: "(max-width:834px)",
  iPadMini: "(max-width:768px)",
  iPhone11ProMax: "(max-width:414px)",
  googlePixel: "(max-width:411px)",
  iPhone11ProX: "(max-width:375px)",
  android: "(max-width:360px)",
  iPhoneSe: "(max-width:320px)",
});

export default ScreenContext;
/* prettier-ignore-end */
