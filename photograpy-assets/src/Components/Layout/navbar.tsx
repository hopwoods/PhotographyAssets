/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors } from "../../style";

const style = css`
  grid-area: header;
  justify-self: stretch;
  background-color: ${ThemeColors.primary};
  color: ${ThemeColors.textInverse};
`;

export const Navbar: FunctionComponent = ({ children }) => {
  return (
    <nav css={style}>
      I am the NavBar
      {children}
    </nav>
  );
};
