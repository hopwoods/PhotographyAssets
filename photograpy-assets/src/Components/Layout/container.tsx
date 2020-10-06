/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies } from "../../style";
import useTheme from "../../Hooks/useTheme";

export const Container: FunctionComponent = ({ children }) => {
  const themeColors = useTheme();
  const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  font-family: ${FontFamilies.primary}
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${themeColors.text};
  background-color: ${themeColors.bodyBackground};
  display: grid;
  grid-template-columns: minmax(50px, 1fr);
  grid-template-rows:
    minmax(50px, 0.1fr)
    1fr
    minmax(20px, 0.1fr);
  grid-gap: 0em;
  height: 100vh;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FontFamilies.secondary};
    font-weight: 400;
    color: ${themeColors.primary};
  }
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
`;
  return <div css={style}>{children}</div>;
};
