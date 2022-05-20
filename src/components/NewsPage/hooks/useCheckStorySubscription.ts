import {useSelector} from "react-redux";
import {AppState} from "redux/types";

export const useCheckStorySubscription = (storyId: number): boolean => {
  const starredStories = useSelector((state: AppState) => state.stories.starred);

  return starredStories
    ? starredStories.some((starred) => starred.id === storyId)
    : false;
};
