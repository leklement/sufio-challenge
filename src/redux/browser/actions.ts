import {createAction} from "redux-actions";
import {ActionType, ISetWantsDarkModePayload} from "./types";

export const setWantsDarkMode = createAction<ISetWantsDarkModePayload>(
  ActionType.SET_WANTS_DARK_MODE,
);
