import {createAction} from "redux-actions";
import {ActionType, ISetWantsDarkModePayload, ISetSelectedTabPayload} from "./types";

export const setWantsDarkMode = createAction<ISetWantsDarkModePayload>(
  ActionType.SET_WANTS_DARK_MODE,
);

export const setSelectedTab = createAction<ISetSelectedTabPayload>(
  ActionType.SET_SELECTED_TAB,
);
