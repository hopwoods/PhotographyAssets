import { StateContext } from "../GlobalState";
import { Action, ActionType } from "../GlobalState";

export const reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, messageText: action.payload };

    default:
      throw new Error("Not among actions");
  }
};
