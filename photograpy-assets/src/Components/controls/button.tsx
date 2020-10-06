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
    border: 0;
    border-radius: 0.4rem;
    color: ${themeColors.white};
    background-color: ${themeColors.primary};
    margin: 1rem;
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
    border: 0;
    border-radius: 0.4rem;
    color: ${themeColors.primary};
    margin: 1rem;
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
          font-size: 0.7rem;
          padding: 0.4rem 0.8rem;
        `;

      case "medium":
        return css`
          font-size: 0.8rem;
          padding: 0.6rem 1.2rem;
        `;

      case "large":
        return css`
          font-size: 1rem;
          padding: 0.8rem 1.6rem;
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
