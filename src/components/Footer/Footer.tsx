import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {TabSelector} from "components/TabSelector/TabSelector";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  className?: string;
}

/* Template
-------------------------------------------------------------------------*/

export const Footer: React.FC<Props> = (props) => {
  const {className} = props;

  // Render

  return (
    <div className={cx(styles.Footer, className)}>
      <span className={styles.title}>Hacker News</span>
      <TabSelector classNames={styles.tabSelector} />
    </div>
  );
};
