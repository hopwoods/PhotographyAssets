/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { useStateContext } from "../GlobalState";

const divStyle = css`
  border: 1px solid #d6d6d6;
  border-radius: 0.4rem;
  color: #333;
  background-color: #fefefe;
  padding: 0.4rem 0.6rem;
  margin: 1rem;
`;

const pStyle = css`
  font-size: 1rem;
`;

export interface IMessage {
  message: string;
}

export const MessageBox: FunctionComponent = () => {
  const { state } = useStateContext();
  const { messageText } = state;

  return (
    <React.Fragment>
      <div css={divStyle} id="MessageBox">
        <h5>Message Received</h5>
        <p css={pStyle}>{messageText.message}</p>
      </div>
    </React.Fragment>
  );
};
