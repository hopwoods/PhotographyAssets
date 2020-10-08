import { IMessage } from "../Components/controls";

export enum ActionType {
  SET_MESSAGE = "Set Message",
  TOGGLE_DARKMODE = "Toggle Dark Mode",
}

export type Action =
  | { type: ActionType.SET_MESSAGE; payload: IMessage }
  | { type: ActionType.TOGGLE_DARKMODE; payload: boolean };

interface ISetMessage {
  type: ActionType.SET_MESSAGE;
  payload: IMessage;
}
const SetMessage = (value: IMessage): ISetMessage => ({
  type: ActionType.SET_MESSAGE,
  payload: value,
});

interface IToggleDarkMode {
  type: ActionType.TOGGLE_DARKMODE;
  payload: boolean;
}

const ToggleDarkMode = (value: boolean): IToggleDarkMode => ({
  type: ActionType.TOGGLE_DARKMODE,
  payload: value,
});

export const Actions = {
  SetMessage,
  ToggleDarkMode,
};
