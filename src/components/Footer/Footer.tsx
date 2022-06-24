import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

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
      <span className={styles.title}>Sufio Challenge</span>
    </div>
  );
};
