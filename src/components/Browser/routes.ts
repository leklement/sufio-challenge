import {createUrl, RouteParams} from "../../lib/helpers/routes";

/* Params
-------------------------------------------------------------------------*/

export interface NewsRouteParams extends RouteParams {}

// User

export interface StoryDetailRouteParams extends RouteParams {
  id: string;
}

/* Routes
-------------------------------------------------------------------------*/

export const news = (params: {} | undefined) => {
  return createUrl(`/news`, params);
};

/* Routes
-------------------------------------------------------------------------*/

export const storyDetail = (params: StoryDetailRouteParams | undefined) => {
  return createUrl(`/story/:id`, params);
};
