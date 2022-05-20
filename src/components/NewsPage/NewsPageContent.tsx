import {APIClient} from "lib/api";
import React, {useEffect, useMemo, useState} from "react";
import cx from "classnames";
import {useSelector} from "react-redux";
import {ENUM_SELECTED_TAB} from "redux/browser/types";
import {AppState} from "redux/types";
import {StoriesList} from "./StoriesList";
import styles from "./styles.module.scss";
import {useSetStories} from "hooks/useSetStories";
import {Button} from "components/Button";
import {ButtonColor} from "components/Button/types";

/* Template
-------------------------------------------------------------------------*/

export const NewsPageContent: React.FC = () => {
  // States

  const [storyIds, setStoryIds] = useState<number[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [isExpanded, setExpanded] = useState<boolean>(false);

  // Selectors

  const starredStories = useSelector((state: AppState) => state.stories.starred);
  const selectedTab = useSelector((state: AppState) => state.browser.selectedTab);

  // Hooks

  const {stories} = useSetStories({storyIds});

  // Effects

  useEffect(() => {
    const getData = async () => {
      try {
        const storyIds = await APIClient.getStoryIds();
        setStoryIds(storyIds);
        setError(undefined);
      } catch (err) {
        setError(err.message);
        setStoryIds(undefined);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Memos

  const selectedTabStories = useMemo(() => {
    return selectedTab === ENUM_SELECTED_TAB.latest ? stories : starredStories;
  }, [selectedTab, starredStories, stories]);

  const contentStyles = useMemo(() => {
    const windowHeight = window.innerHeight - 270;

    return {
      minHeight: windowHeight,
    };
  }, []);

  // Render

  if (error) {
    return <div>{`There is a problem fetching the post data - ${error}`}</div>;
  }

  return (
    <section className={styles.NewsPageContent}>
      <div
        className={cx(styles.content, {
          [styles.loading]: loading,
          [styles.emptyContent]: !loading && !stories?.length,
        })}
        style={contentStyles}
      >
        {loading ? (
          <div className={styles.loading}>A moment please...</div>
        ) : (
          <StoriesList
            stories={selectedTabStories?.slice(0, isExpanded ? 20 : 12)}
            emptyLable={
              selectedTab === ENUM_SELECTED_TAB.latest
                ? "There is no news"
                : "There is no starred news"
            }
          />
        )}

        {selectedTabStories && selectedTabStories.length > 12 && (
          <Button
            label={isExpanded ? "Show less" : "Show more"}
            color={ButtonColor.ORANGE}
            className={styles.button}
            onClick={() => setExpanded(!isExpanded)}
          />
        )}
      </div>
    </section>
  );
};
