import {combineReducers} from "redux";
import {reducer as browser} from "./browser/reducer";
import {reducer as stories} from "./stories/reducer";
import {AppState} from "./types";

export const reducer = combineReducers<AppState>({
  browser,
  stories,
});
