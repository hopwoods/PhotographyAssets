/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

export const Content: FunctionComponent = ({ children }) => {
  const style = css`
    grid-column: 1 / span 1;
    padding: 1rem;
  `;
  return <article css={style}>{children}</article>;
};
