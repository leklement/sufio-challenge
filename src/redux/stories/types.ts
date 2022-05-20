import {IStoryDetails} from "lib/api/responseTypes";

export interface IState {
  stories: IStoryDetails[] | undefined;
  starred: IStoryDetails[] | undefined;
}

export enum ActionType {
  SET_STORIES = "Stories - Set stories",
  ADD_STARRED_STORY = "Stories - Add starred story",
  REMOVE_STARRED_STORY = "Stories - Remove starred story",
}

export interface ISetStoriesPayload {
  stories: IStoryDetails[] | undefined;
}

export interface IAddStarredStory {
  story: IStoryDetails;
}

export interface IRemoveStarredStory {
  story: IStoryDetails;
}
