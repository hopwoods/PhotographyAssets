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
  const { globalState } = useStateContext();
  const { sentMessage } = globalState;
  let hidden = null;
  if (sentMessage.message === "") {
    hidden = css`
      display: none;
      visible: false;
    `;
  }

  return (
    <React.Fragment>
      <div css={[divStyle, hidden]} id="MessageBox">
        <h5>Message Received</h5>
        <p css={pStyle}>{sentMessage.message}</p>
      </div>
    </React.Fragment>
  );
};
