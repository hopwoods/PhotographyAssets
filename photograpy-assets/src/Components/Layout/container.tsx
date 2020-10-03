/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors } from "../../style";

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${ThemeColors.text};
  background-color: ${ThemeColors.bodyBackground};
  display: grid;
  grid-template-columns: repeat(16, minmax(50px, 0.1fr));
  grid-template-rows:
    minmax(50px, 0.15fr)
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
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    color: ${ThemeColors.primary};
  }
`;

export const Container: FunctionComponent = ({ children }) => {
  return <div css={style}>{children}</div>;
};
