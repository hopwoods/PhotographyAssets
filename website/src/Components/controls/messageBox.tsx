/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { useStateContext } from "../../GlobalState";

const divStyle = css`
  border-radius: 0.4em;
  padding: 0.4em 0.6em;
  margin: 1em;
`;

const pStyle = css`
  font-size: 1em;
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
        <h4>Message Received</h4>
        <p css={pStyle}>{sentMessage.message}</p>
      </div>
    </React.Fragment>
  );
};
