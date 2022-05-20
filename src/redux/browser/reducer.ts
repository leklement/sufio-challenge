import {Action, handleActions} from "redux-actions";
import {
  ActionType,
  ENUM_SELECTED_TAB,
  ISetWantsDarkModePayload,
  ISetSelectedTabPayload,
  IState,
} from "./types";

const initialState: IState = {
  wantsDarkMode: false,
  selectedTab: ENUM_SELECTED_TAB.latest,
};

type Payload = ISetWantsDarkModePayload | ISetSelectedTabPayload;

export const reducer = handleActions<IState, Payload>(
  {
    [ActionType.SET_WANTS_DARK_MODE]: (
      state: IState,
      action: Action<ISetWantsDarkModePayload>,
    ): IState => {
      const {wantsDarkMode} = action.payload;

      return {
        ...state,
        wantsDarkMode,
      };
    },
    [ActionType.SET_SELECTED_TAB]: (
      state: IState,
      action: Action<ISetSelectedTabPayload>,
    ): IState => {
      const {selectedTab} = action.payload;

      return {
        ...state,
        selectedTab,
      };
    },
  },
  initialState,
);
