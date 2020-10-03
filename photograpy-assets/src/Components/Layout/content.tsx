/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

const style = css`
  grid-area: content;
`;

export const Content: FunctionComponent = ({ children }) => {
  return <article css={style}>{children}</article>;
};
