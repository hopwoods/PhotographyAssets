/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors, FontFamilies } from "../../style";

const style = css`
  grid-column: 1 / span 1;
  justify-self: stretch;
  background-color: ${ThemeColors.Grey3};
  border-top: 3px solid ${ThemeColors.darkShades};
  color: ${ThemeColors.Grey2};
  padding: 0.4rem;
  font-size: 0.9rem;
  font-family: ${FontFamilies.secondary}
  font-weight: 300;
`;

export const Footer: FunctionComponent = ({ children }) => {
  return (
    <footer css={style}>
      I am the Footer
      {children}
    </footer>
  );
};
