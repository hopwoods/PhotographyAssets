/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";
import { FontFamilies } from "../../style";

export interface ButtonProps {
  // Is this the principal call to action on the page?
  primary: boolean;

  //What background colour to use
  backgroundColor?: string;

  //What Text colour to use
  color?: string;

  //How large should the button be?
  size?: "small" | "medium" | "large";

  //Type: solid, outline, text
  type: "solid" | "outline" | "text";

  //Optional click handler
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  primary = true,
  size = "medium",
  backgroundColor,
  color,
  type = "solid",
  children,
  ...props
}) => {
  const themeColors = useTheme();

  const common = css`
    outline: 0;
    border: 0;
    border-radius: 0.4em;
    font-weight: 400;
    font-family: ${FontFamilies.secondary};
    cursor: pointer;
    display: inline-block;
    line-height: 1.5;
  `;

  const Primary = css`
    color: ${color ? color : themeColors.white};
    background-color: ${backgroundColor
      ? backgroundColor
      : themeColors.primary};
    &:hover {
      color: ${color ? color : themeColors.white};
      background-color: ${backgroundColor
        ? backgroundColor
        : themeColors.primaryShades};
    }
  `;

  const Secondary = css`
    background-color: ${backgroundColor
      ? backgroundColor
      : themeColors.darkAccent};
    color: ${color ? color : themeColors.Grey2};
    &:hover {
      color: ${color ? color : themeColors.text};
      background-color: ${backgroundColor
        ? backgroundColor
        : themeColors.darkAccent};
    }
  `;

  const mode = primary ? Primary : Secondary;
  const Size = (size: string) => {
    switch (size) {
      case "small":
        return css`
          font-size: 0.9rem;
          padding: 0.3em 0.6em;
        `;

      case "medium":
        return css`
          font-size: 1rem;
          padding: 0.5em 1em;
        `;

      case "large":
        return css`
          font-size: 1.1rem;
          padding: 0.7em 1.4em;
        `;

      default:
        throw new Error("Not among allowed sizes");
    }
  };

  const Type = (type: string) => {
    switch (type) {
      case "solid":
        return css`
          background-color: ${backgroundColor};
        `;

      case "outline":
        return css`
          background-color: transparent !important;
          border: 1px solid ${color ? color : themeColors.primary} !important;
          color: ${color ? color : themeColors.primary};
          &:hover {
            color: ${color ? color : themeColors.primaryShades};
            border: 1px solid ${color ? color : themeColors.primaryShades} !important;
          }
        `;

      case "text":
        return css`
          background-color: transparent !important;
          border: 0 !important;
          color: ${color ? color : themeColors.primary};
          &:hover {
            color: ${color ? color : themeColors.primaryShades};
          }
        `;

      default:
        throw new Error("Not among allowed types");
    }
  };

  return (
    <React.Fragment>
      <button
        style={{ backgroundColor }}
        css={[common, mode, Size(size), Type(type)]}
        {...props}
      >
        {children}
      </button>
    </React.Fragment>
  );
};
