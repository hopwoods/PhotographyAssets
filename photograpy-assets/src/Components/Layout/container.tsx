/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies, Gradients, cssGradients } from "../../style";
import { useStateContext } from "../../GlobalState";
import useTheme from "../../Hooks/useTheme";

export const Container: FunctionComponent = ({ children }) => {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;

  const gradients: cssGradients = {
    gradient1: darkMode ? Gradients.DarkGradient1 : Gradients.LightGradient1,
    gradient2: darkMode ? Gradients.DarkGradient2 : Gradients.LightGradient2,
    textGradient: darkMode
      ? Gradients.DarkTextGradient
      : Gradients.LightTextGradient,
  };

  const themeColors = useTheme();
  const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  font-family: ${FontFamilies.primary}
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${themeColors.text};
  background-color: ${gradients.gradient2};
  display: grid;
  grid-template-columns: minmax(50px, 1fr);
  grid-template-rows:
    minmax(5rem, 0.1fr)
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
    font-weight: 700;
      background: ${gradients.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    
  }
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
`;
  return <div css={style}>{children}</div>;
};
