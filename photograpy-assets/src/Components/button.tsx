/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

const style = css`
  border: 1px solid #dd5a1b;
  border-radius: 0.4rem;
  color: #ffffff;
  background-color: #dd5a1b;
  padding: 0.4rem 0.6rem;
  margin: 1rem;
`;

interface IButtonProps {
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  message: string;
}

export const Button: FunctionComponent<IButtonProps> = ({
  message,
  onClick,
}) => {
  return (
    <React.Fragment>
      <button css={style} onClick={(e) => onClick(e)}>
        {message}
      </button>
    </React.Fragment>
  );
};
