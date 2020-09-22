/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

const style = css`
  border: 1px solid #bebebe;
  border-radius: 0.4rem;
  color: #333;
  background-color: #fefefe;
  padding: 0.4rem 0.6rem;
  margin: 1rem;
  &:focus: {
    outline: #dedede auto 1px;
  }
`;

interface ITextBoxProps {
  onChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const TextBox: FunctionComponent<ITextBoxProps> = ({ onChange }) => {
  return (
    <input
      css={style}
      type="text"
      onChange={(e) => onChange(e)}
      placeholder="Enter Message"
    />
  );
};
