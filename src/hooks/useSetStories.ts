import {APIClient} from "lib/api";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as StoriesActions from "redux/stories/actions";
import {AppState} from "redux/types";

interface IOptions {
  storyIds: number[] | undefined;
}

export const useSetStories = (options: IOptions) => {
  const {storyIds} = options;

  // Selectors

  const stories = useSelector((state: AppState) => state.stories.stories);

  // Hooks

  const dispatch = useDispatch();

  // Effects

  useEffect(() => {
    const getData = async () => {
      if (!storyIds) {
        dispatch(
          StoriesActions.setStories({
            stories: undefined,
          }),
        );
        return;
      }

      if (stories) {
        return;
      }

      const response = await APIClient.getStories(storyIds?.slice(0, 20));

      dispatch(
        StoriesActions.setStories({
          stories: response,
        }),
      );
    };

    getData();
  }, [storyIds]);

  return {stories};
};
