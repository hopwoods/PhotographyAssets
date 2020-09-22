import React, { FunctionComponent, useContext, useReducer } from "react";
import { IMessage } from "../Components";
import { reducer, Action } from "../GlobalState";

export interface StateContext {
  buttonText: string;
  messageText: IMessage;
}

export interface Store {
  state: StateContext;
  dispatch: React.Dispatch<Action>;
}

const defaultMessage: IMessage = {
  message: "Hey Stuart",
};

const defaultState: StateContext = {
  buttonText: "Send message: ",
  messageText: defaultMessage,
};

const myContext = React.createContext<Store>({
  state: defaultState,
  dispatch: () => null,
});

export const useStateContext = () => useContext(myContext);

export const StateProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return <myContext.Provider value={{ state, dispatch }} children={children} />;
};
