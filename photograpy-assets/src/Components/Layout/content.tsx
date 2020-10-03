/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors } from "../../style";

const style = css`
  grid-area: content;
`;

export const Content: FunctionComponent = ({ children }) => {
  return <article css={style}>{children}</article>;
};
