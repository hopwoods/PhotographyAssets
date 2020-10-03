/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors } from "../../style";

const style = css`
  grid-area: footer;
  justify-self: stretch;
  background-color: ${ThemeColors.lightAccent};
  border-top: 3px solid ${ThemeColors.Grey1};
  color: ${ThemeColors.text};
  padding: 0.4rem;
  font-size: 0.9rem;
`;

export const Footer: FunctionComponent = ({ children }) => {
  return (
    <footer css={style}>
      I am the Footer
      {children}
    </footer>
  );
};
