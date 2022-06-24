import {IState as IBrowserState} from "./browser/types";
import {IState as IShoppingState} from "./shopping/types";

export interface AppState {
  browser: IBrowserState;
  shopping: IShoppingState;
}
