import React, {useCallback} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {ListItem} from "./ListItem";
import {useDispatch} from "react-redux";
import * as StarredActions from "redux/stories/actions";
import {IStoryDetails} from "lib/api/responseTypes";

import {useNavigate} from "react-router-dom";
import {storyUrl} from "components/Browser/routeHelpers";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  stories: IStoryDetails[] | undefined;
  emptyLable: string;
  className?: string;
}

/* Template
-------------------------------------------------------------------------*/

export const StoriesList: React.FC<Props> = (props) => {
  const {stories, emptyLable, className} = props;

  // Hooks

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handlers

  const handleAdd = useCallback(
    (story: IStoryDetails) => {
      dispatch(StarredActions.addStarredStory({story}));
    },
    [dispatch],
  );

  const handleRemove = useCallback(
    (story: IStoryDetails) => {
      dispatch(StarredActions.removeStarredStory({story}));
    },
    [dispatch],
  );

  const handleRedirect = useCallback((id: string) => {
    navigate(storyUrl(id));
  }, []);

  // Render

  if (!stories) {
    return <div className={styles.empty}>{emptyLable}</div>;
  }

  return (
    <section className={cx(styles.StoriesList, className)}>
      {stories.map((story, key) => {
        return (
          <ListItem
            key={key}
            story={story}
            rank={key + 1}
            onClick={() => handleRedirect("" + story.id)}
            onAdd={() => handleAdd(story)}
            onRemove={() => handleRemove(story)}
          />
        );
      })}
    </section>
  );
};
