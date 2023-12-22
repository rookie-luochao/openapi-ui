import { CSSObject } from "@emotion/react";
import { Property } from "csstype";

interface IFlexOptions {
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  alignSelf?: Property.AlignSelf;
  flexWrap?: Property.FlexWrap;
  flexFlow?: Property.FlexFlow;
  alignContent?: Property.AlignContent;
}

export const flexOpts = (flexOpts: IFlexOptions = {}): CSSObject => ({
  display: "flex",
  ...flexOpts,
});

export const flexCenterOpts = (arg: IFlexOptions = {}): CSSObject => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...arg,
  };
};

export const flexBetweenCenterOpts = (arg: IFlexOptions = {}): CSSObject => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...arg,
  };
};
