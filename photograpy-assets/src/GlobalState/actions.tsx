import { IMessage } from "../Components/controls";

export enum ActionType {
  SET_MESSAGE = "Set Message",
  SEND_MESSAGE = "Send Message",
}

export type Action =
  | { type: ActionType.SET_MESSAGE; payload: IMessage }
  | { type: ActionType.SEND_MESSAGE };

interface ISetMessage {
  type: ActionType.SET_MESSAGE;
  payload: IMessage;
}

const SetMessage = (value: IMessage): ISetMessage => ({
  type: ActionType.SET_MESSAGE,
  payload: value,
});

export const Actions = {
  SetMessage,
};
