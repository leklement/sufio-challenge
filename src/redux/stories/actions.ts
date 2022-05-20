import {createAction} from "redux-actions";
import {
  ActionType,
  IAddStarredStory,
  IRemoveStarredStory,
  ISetStoriesPayload,
} from "./types";

export const setStories = createAction<ISetStoriesPayload>(ActionType.SET_STORIES);

export const addStarredStory = createAction<IAddStarredStory>(
  ActionType.ADD_STARRED_STORY,
);
export const removeStarredStory = createAction<IRemoveStarredStory>(
  ActionType.REMOVE_STARRED_STORY,
);
