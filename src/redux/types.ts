import {IState as IBrowserState} from "./browser/types";
import {IState as IStoriesState} from "./stories/types";

export interface AppState {
  browser: IBrowserState;
  stories: IStoriesState;
}
