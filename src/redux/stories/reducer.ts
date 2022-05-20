import {Action, handleActions} from "redux-actions";
import {
  ActionType,
  IAddStarredStory,
  IRemoveStarredStory,
  ISetStoriesPayload,
  IState,
} from "./types";

const initialState: IState = {
  starred: undefined,
  stories: undefined,
};

type Payload = IAddStarredStory | IRemoveStarredStory | ISetStoriesPayload;

export const reducer = handleActions<IState, Payload>(
  {
    [ActionType.SET_STORIES]: (
      state: IState,
      action: Action<ISetStoriesPayload>,
    ): IState => {
      const {stories} = action.payload;

      return {
        ...state,
        stories,
      };
    },
    [ActionType.ADD_STARRED_STORY]: (
      state: IState,
      action: Action<IAddStarredStory>,
    ): IState => {
      const {story} = action.payload;

      return {
        ...state,
        starred: state.starred ? [...state.starred, story] : [story],
      };
    },
    [ActionType.REMOVE_STARRED_STORY]: (
      state: IState,
      action: Action<IRemoveStarredStory>,
    ): IState => {
      const {story} = action.payload;
      const starred = state.starred?.filter((starred) => starred.id !== story.id);
      return {
        ...state,
        starred,
      };
    },
  },
  initialState,
);
