/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";
import { FontFamilies } from "../../style";

export interface ButtonProps {
  // Is this the principal call to action on the page?
  primary?: boolean;

  //What background color to use
  backgroundColor?: string;

  //How large should the button be?
  size?: "small" | "medium" | "large";

  //Button contents
  label: string;

  //Optional click handler
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const themeColors = useTheme();

  const Primary = css`
    outline: 0;
    border: 0;
    border-radius: 0.4em;
    color: ${themeColors.white};
    background-color: ${themeColors.primary};
    margin: 1em;
    font-weight: 400;
    font-family: ${FontFamilies.secondary};
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    &:hover {
      color: ${themeColors.white};
      background-color: ${themeColors.primaryShades};
    }
  `;

  const Seconday = css`
    outline: 0;
    border: 0;
    border-radius: 0.4em;
    color: ${themeColors.primary};
    margin: 1em;
    font-weight: 600;
    font-family: ${FontFamilies.secondary};
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    &:hover {
      color: ${themeColors.text};
      background-color: ${themeColors.darkAccent};
    }
  `;

  const mode = primary ? Primary : Seconday;
  const Size = (size: string) => {
    switch (size) {
      case "small":
        return css`
          font-size: 0.9em;
          padding: 0.4em 0.8em;
        `;

      case "medium":
        return css`
          font-size: 1em;
          padding: 0.6em 1.2em;
        `;

      case "large":
        return css`
          font-size: 1.1em;
          padding: 0.8em 1.6em;
        `;

      default:
        throw new Error("Not among allowed sizes");
    }
  };
  return (
    <React.Fragment>
      <button style={{ backgroundColor }} css={[mode, Size(size)]} {...props}>
        {label}
      </button>
    </React.Fragment>
  );
};
