/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css, keyframes } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";
import { getGradients } from "../../functions";
import { useStateContext } from "../../GlobalState";
import { FontFamilies } from "../../style";

export interface ITextBoxProps {
  onChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const Logo: FunctionComponent = () => {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;
  const gradients = getGradients(darkMode);
  const themeColors = useTheme();
  const animation = keyframes`
  {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
  }
`;

  const style = css`  
    position: relative;
    color: ${themeColors.text};
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 400;  
    
    &::before {
        content: "";
        position: absolute;
        height: 3px;
        right: 0px;
        bottom: -3px;
        left: 0px;
        background: ${gradients.textGradient};
    }

    &:hover {
      background: ${gradients.textGradient2};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${animation} 1s ease infinite;
      &
    }

    

    
  `;

  return <h2 css={style}>Photography Assets</h2>;
};
