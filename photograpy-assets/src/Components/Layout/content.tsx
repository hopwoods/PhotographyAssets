/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

const style = css`
  grid-column: 1 / span 1;
  padding: 1rem;
`;

export const Content: FunctionComponent = ({ children }) => {
  return <article css={style}>{children}</article>;
};
