/** @jsx jsx */
import { FunctionComponent, useEffect, useState, useCallback } from "react";
import { jsx, css } from "@emotion/core";
import React from "react";
import { Button, TextBox } from "../Components/";
import { useStateContext, Actions } from "../GlobalState";
import { IMessage } from "../Components/";

const divStyle = css`
  border: 1px solid #cecece;
  border-radius: 0.4rem;
  color: #0f0f0f;
  background-color: #fefefe;
  padding: 0.4rem 0.6rem;
  margin: 1rem;
`;

const h5Style = css`
  margin: 0.25rem;
`;

export const MessageSender: FunctionComponent = () => {
  //Global State
  const { state, dispatch } = useStateContext();
  const { buttonText } = state;

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

  const logClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(`Message sent is: ${message}`);
    updateMessage();
  };

  useEffect(() => {
    setbuttonText(`${buttonText} ${message}`);
  }, [message, buttonText]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      <div css={divStyle}>
        <h5 css={h5Style}>Type a message to send and click the button</h5>
        <TextBox onChange={(e) => handleChange(e)} />
        <Button primary={true} label={text} onClick={(e) => logClick(e)} />
      </div>
    </React.Fragment>
  );
};
