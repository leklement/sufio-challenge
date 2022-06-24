import {Action, handleActions} from "redux-actions";
import {ActionType, ISetWantsDarkModePayload, IState} from "./types";

const initialState: IState = {
  wantsDarkMode: false,
};

type Payload = ISetWantsDarkModePayload;

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
  },
  initialState,
);
