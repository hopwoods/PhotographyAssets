/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from "react";
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
  const buttonText = "Send Message: ";
  const [message, setMessage] = useState("Default Value");
  const [text, setbuttonText] = useState(`${buttonText} ${message}`);
  const { dispatch } = useStateContext();
  const newMessage: IMessage = {
    message: message,
  };
  const logClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(`Message sent is: ${message}`);
    dispatch(Actions.SetMessage(newMessage));
  };

  useEffect(() => {
    setbuttonText(`${buttonText} ${message}`);
  }, [message]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setMessage(newValue);
    console.log(newValue);
  };

  return (
    <React.Fragment>
      <div css={divStyle}>
        <h5 css={h5Style}>Type a message to send and click the button</h5>
        <TextBox onChange={(e) => handleChange(e)} />
        <Button message={text} onClick={(e) => logClick(e)} />
      </div>
    </React.Fragment>
  );
};
