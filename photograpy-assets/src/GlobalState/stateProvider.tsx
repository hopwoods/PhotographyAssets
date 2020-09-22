import React, { FunctionComponent, useReducer } from "react";
import { AppContext, reducer, defaultState } from "../GlobalState";

export const StateProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <AppContext.Provider value={{ state, dispatch }} children={children} />
  );
};
