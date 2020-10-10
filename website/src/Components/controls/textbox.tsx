/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";

export interface ITextBoxProps {
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  name: string;
  label: string;
  displayLabel: boolean;
  placeholder: string;
}

export const TextBox: FunctionComponent<ITextBoxProps> = ({
  onChange,
  name,
  label,
  displayLabel,
  placeholder,
}) => {
  const themeColors = useTheme();
  const style = css`
    font-size: 1em;
    color: ${themeColors.text};
    outline: 0 !important;
    background: no-repeat bottom, 50% calc(100% - 1px);
    background-size: 0 100%, 100% 100%;
    background-color: ${themeColors.darkShades};
    border: 0;
    border-top-color: none !important;
    border-bottom: 1px solid ${themeColors.Grey3};
    transition: background 0s ease-out;
    height: 2.2em;
    padding: 0.4em 0.7em;
    border-radius: 0;
    box-shadow: none;
    &:focus {
      background-image: linear-gradient(
          0deg,
          ${themeColors.primary} 2px,
          rgba(156, 39, 176, 0) 0
        ),
        linear-gradient(0deg, #d2d2d2 0px, rgba(209, 209, 209, 0) 0);
      border-color: transparent !important;
      background-size: 100% 100%, 100% 100%;
      transition-duration: 0.2s;
      box-shadow: none;
    }
    &:disabled,
    &[readonly] {
      cursor: not-allowed;
      background-color: #fff;
      color: #bbb;
    }
  `;

  return (
    <React.Fragment>
      <input
        id={name}
        name={name}
        css={style}
        type="text"
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
      {displayLabel ? <label htmlFor={name}>{label}</label> : null}
    </React.Fragment>
  );
};
