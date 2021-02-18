// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LogoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 40"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.73 35.547a5.04 5.04 0 00.342-1.966 11.27 11.27 0 011.447-5.305 11.21 11.21 0 013.78-3.979 4.878 4.878 0 001.88-6.802 4.843 4.843 0 00-1.88-1.789 14.535 14.535 0 01-1.28-.997l-1.021-1a10.651 10.651 0 01-2.934-7.29 5.03 5.03 0 00-3.056-4.773 4.988 4.988 0 00-3.899.002 5.007 5.007 0 00-2.715 2.806 5.052 5.052 0 00-.341 1.966 4.969 4.969 0 002.532 4.266c3.074 1.945 5.213 5.664 5.213 9.322a10.618 10.618 0 01-2.88 7.24l-2.325 2.066a4.961 4.961 0 00-2.534 4.267 5.035 5.035 0 003.056 4.773 4.99 4.99 0 005.54-1.127 5.054 5.054 0 001.075-1.68zM25.52 9.2a5.045 5.045 0 01.624-6.352 4.992 4.992 0 016.323-.627 5.025 5.025 0 011.845 2.258 5.053 5.053 0 01-1.087 5.482 4.988 4.988 0 01-5.457 1.091A5.013 5.013 0 0125.52 9.2zm1.382 20.198a4.996 4.996 0 012.782-.848v-.003a5 5 0 013.54 1.476 5.05 5.05 0 01.625 6.352A5.013 5.013 0 0131.6 38.23a4.987 4.987 0 01-5.457-1.091 5.053 5.053 0 01-1.086-5.484 5.026 5.026 0 011.845-2.258zm14.753-12.2c.55.827.844 1.799.844 2.793a5.05 5.05 0 01-1.469 3.558 5.004 5.004 0 01-3.54 1.475 4.99 4.99 0 01-2.782-.848 5.025 5.025 0 01-1.845-2.257 5.052 5.052 0 011.086-5.484 4.987 4.987 0 015.459-1.091 5.012 5.012 0 012.247 1.854z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.475 15.809a4.993 4.993 0 012.783-.848 5.003 5.003 0 013.539 1.476 5.048 5.048 0 01.625 6.35 5.014 5.014 0 01-2.248 1.854 5.001 5.001 0 01-5.457-1.091 5.052 5.052 0 01-1.087-5.483 5.026 5.026 0 011.845-2.258z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
