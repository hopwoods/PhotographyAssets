/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies } from "../../style";
import useTheme from "../../Hooks/useTheme";

export const Footer: FunctionComponent = ({ children }) => {
  const GetYear = () => {
    var date = new Date();
    return date.getFullYear();
  };

  const themeColors = useTheme();
  const style = css`
  grid-column: 1 / span 1;
  justify-self: stretch;
  background-color: ${themeColors.Grey3};
  border-top: 3px solid ${themeColors.darkShades};
  color: ${themeColors.Grey2};
  padding: 0.4rem;
  font-size: 0.9rem;
  font-family: ${FontFamilies.secondary}
  font-weight: 300;
`;

  return (
    <footer css={style}>
      &copy; Stuart Hopwood {GetYear()}
      {children}
    </footer>
  );
};
