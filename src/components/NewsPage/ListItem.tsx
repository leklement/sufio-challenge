import React, {useMemo} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {IStoryDetails} from "lib/api/responseTypes";
import {fromUrl, parseDomain} from "parse-domain";
import {Button} from "components/Button";
import {ButtonColor, ButtonSize} from "components/Button/types";
import {Star} from "components/Icon";
import {useCheckStorySubscription} from "./hooks/useCheckStorySubscription";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  story: IStoryDetails;
  rank: number;
  className?: string;

  onClick: () => void;
  onAdd: () => void;
  onRemove: () => void;
}

/* Template
-------------------------------------------------------------------------*/

export const ListItem: React.FC<Props> = (props) => {
  const {story, rank, className, onClick, onAdd, onRemove} = props;

  // Hooks

  const isStarred = useCheckStorySubscription(story.id);

  // Memos

  const hostname = useMemo(() => {
    if (!story) {
      return "unkown";
    }

    const {hostname} = parseDomain(fromUrl(story?.url));
    return hostname as string;
  }, [story]);

  // Render

  if (!story) {
    return null;
  }

  return (
    <div className={cx(styles.ListItem, className)} onClick={onClick}>
      <div className={styles.rank}>{rank}.</div>
      <div>
        <div className={styles.row}>
          <div className={styles.title}>{story.title}</div>
          <div className={styles.hostname}>
            <span>({hostname})</span>
          </div>
        </div>
        <div className={styles.row}>
          <p>{story.score}&ensp;|&ensp;</p>
          <p>by {story.by}&ensp;|&ensp;</p>
          <p>{story.time} hours ago&ensp;|&ensp;</p>
          {story.kids ? <p>comments {story.kids.length}&ensp;|&ensp;</p> : null}
          <Button
            color={ButtonColor.TRANSPARENT}
            size={ButtonSize.EXTRA_SMALL}
            label={"save"}
            stopPropagation={true}
            accessory={
              <Star className={cx(styles.star, {[styles.starred]: isStarred})} />
            }
            onClick={isStarred ? onRemove : onAdd}
          />
        </div>
      </div>
    </div>
  );
};
