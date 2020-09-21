/** @jsx jsx */
import React, { FC, ReactElement } from "react";
import { jsx, css } from "@emotion/core";

export interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const style = css`
  border: 1px solid #dd5a1b;
  border-radius: 0.4rem;
  color: #ffffff;
  background-color: #dd5a1b;
  padding: 0.4rem 0.6rem;
  margin: 1rem;
`;

export const Button: FC<IButtonProps> = ({ text, onClick }): ReactElement => {
  const logClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("Button Clicked");
  };
  return (
    <button css={style} onClick={(e) => logClick(e)}>
      {text}
    </button>
  );
};
