import React, { useContext } from "react";
import { IMessage, ButtonProps } from "../Components/controls";
import { Action } from ".";

interface Globals {
  darkMode: boolean;
}

export interface StateContext {
  sendMessageButton: ButtonProps;
  sentMessage: IMessage;
  globals: Globals;
}

export interface Store {
  globalState: StateContext;
  dispatch: React.Dispatch<Action>;
}

const defaultMessage: IMessage = {
  message: "",
};

export const defaultState: StateContext = {
  sendMessageButton: { label: "Send message: " },
  sentMessage: defaultMessage,
  globals: { darkMode: true },
};

export const AppContext = React.createContext<Store>({
  globalState: defaultState,
  dispatch: () => null,
});

export const useStateContext = () => useContext(AppContext);
