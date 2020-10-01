import { StateContext } from ".";
import { Action, ActionType } from ".";

export const reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, sentMessage: action.payload };

    default:
      throw new Error("Not among actions");
  }
};
