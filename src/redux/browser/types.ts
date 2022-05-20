export enum ENUM_SELECTED_TAB {
  latest = "latest",
  starred = "starred",
}

export interface IState {
  wantsDarkMode: boolean;
  selectedTab: ENUM_SELECTED_TAB;
}

export enum ActionType {
  SET_WANTS_DARK_MODE = "Browser - Set Wants Dark Mode",
  SET_SELECTED_TAB = "Browser - Set Selected Tab",
}

export interface ISetWantsDarkModePayload {
  wantsDarkMode: boolean;
}

export interface ISetSelectedTabPayload {
  selectedTab: ENUM_SELECTED_TAB;
}
