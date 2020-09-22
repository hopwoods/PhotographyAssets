import React, { useContext } from "react";
import { IMessage } from "../Components";
import { Action } from "../GlobalState";

export interface StateContext {
  buttonText: string;
  messageText: IMessage;
}
export interface Store {
  state: StateContext;
  dispatch: React.Dispatch<Action>;
}

const defaultMessage: IMessage = {
  message: "",
};

export const defaultState: StateContext = {
  buttonText: "Send message: ",
  messageText: defaultMessage,
};

export const AppContext = React.createContext<Store>({
  state: defaultState,
  dispatch: () => null,
});

export const useStateContext = () => useContext(AppContext);
