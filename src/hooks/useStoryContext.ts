import {StoryDetailRouteParams} from "components/Browser/routes";
import {useMemo} from "react";
import {useParams} from "react-router-dom";

export const useStoryContext = () => {
  const params = useParams<StoryDetailRouteParams>();

  return useMemo(() => {
    const {id} = params;
    return {id};
  }, [params]);
};
