import TimeAgo from "react-timeago";
import React, {useEffect, useMemo, useState} from "react";
import styles from "./styles.module.scss";
import {useStoryContext} from "hooks/useStoryContext";
import {APIClient} from "lib/api";
import {IStoryDetails} from "lib/api/responseTypes";
import {UserDetail} from "./UserDetail";

export const StoryDetailsContent: React.FC = () => {
  // States
  const [story, setStory] = useState<IStoryDetails>();

  // Hooks

  const {id} = useStoryContext();

  useEffect(() => {
    const getData = async () => {
      if (!id) {
        return;
      }
      const story = await APIClient.getStoryDetail(id);
      setStory(story);
    };

    getData();
  }, [id]);

  // Memos

  const contentStyles = useMemo(() => {
    const windowHeight = window.innerHeight - 270;

    return {
      minHeight: windowHeight,
    };
  }, []);

  if (!story) {
    return null;
  }

  return (
    <section className={styles.DetailsPageContent}>
      <div className={styles.content} style={contentStyles}>
        <div className={styles.story}>
          <a href={story.url} target="_blank" rel="noreferrer">
            <h1>{story.title}</h1>
          </a>
          <div className={styles.storyInfo}>
            <span>
              Created <TimeAgo date={story.time * 1000} live={false} />
            </span>
            <span>Score {story.score}</span>
            <span>Comments {story.kids.length}</span>
          </div>
        </div>
        <UserDetail userName={story.by} />
      </div>
    </section>
  );
};
