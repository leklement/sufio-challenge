import * as Routes from "components/Browser/routes";

export const storyUrl = (id: string) => {
  return Routes.storyDetail({
    id,
  });
};

export const newsUrl = () => {
  return Routes.news({});
};
