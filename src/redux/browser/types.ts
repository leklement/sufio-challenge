export interface IState {
  wantsDarkMode: boolean;
}

export enum ActionType {
  SET_WANTS_DARK_MODE = "Browser - Set Wants Dark Mode",
}

export interface ISetWantsDarkModePayload {
  wantsDarkMode: boolean;
}
