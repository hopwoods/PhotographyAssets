/** @jsx jsx */
import { FunctionComponent, useEffect, useState, useCallback } from "react";
import { jsx, css } from "@emotion/core";
import React from "react";
import { Button, TextBox } from ".";
import { useStateContext, Actions } from "../../GlobalState";
import { IMessage } from ".";

const divStyle = css`
  border-radius: 0.4em;
  padding: 0.4em 0.6em;
  margin: 1em;
`;

const h5Style = css`
  margin: 0.25em;
`;

export const MessageSender: FunctionComponent = () => {
  //Global State
  const { globalState: state, dispatch } = useStateContext();
  const buttonText = state.sendMessageButton;

  //Local State
  const [message, setMessage] = useState("Default Value");
  const [text, setbuttonText] = useState(`${buttonText} ${message}`);

  const newMessage: IMessage = {
    message: message,
  };

  const updateMessage = useCallback(
    () => dispatch(Actions.SetMessage(newMessage)),
    [dispatch, newMessage]
  );

  const logClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      updateMessage();
      console.log(`Message sent is: ${message}`);
    },
    [message, updateMessage]
  );

  useEffect(() => {
    setbuttonText(`${buttonText} ${message}`);
  }, [message, buttonText]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      <div css={divStyle}>
        <h4 css={h5Style}>Type a message to send and click the button</h4>
        <TextBox
          onChange={(e) => handleChange(e)}
          name="Message"
          label="Message"
          displayLabel={true}
          placeholder="Enter Message"
        />
        <Button primary={true} type="solid" onClick={(e) => logClick(e)}>
          {text}
        </Button>
      </div>
    </React.Fragment>
  );
};
