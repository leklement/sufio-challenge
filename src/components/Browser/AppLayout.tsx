import React, {useEffect, useRef} from "react";
import cx from "classnames";
import {Header} from "components/Header";
import styles from "./styles.module.scss";
import {Footer} from "components/Footer/Footer";

interface Props {
  title: string;
  hiddenHeader?: boolean;
  mainSectionClass?: string;
  children?: React.ReactElement;
}

export const AppLayoutDOM: {mainDiv?: HTMLDivElement} = {};

export const AppLayout: React.FC<Props> = (props) => {
  const {mainSectionClass, title, hiddenHeader} = props;

  // Refs

  const mainRef = useRef<HTMLDivElement | null>(null);

  // Effects

  useEffect(() => {
    AppLayoutDOM.mainDiv = mainRef.current ?? undefined;
  });

  // Render

  return (
    <div className={styles.AppLayout}>
      {!hiddenHeader && (
        <div className={styles.header}>
          <Header title={title} />
        </div>
      )}

      <div ref={mainRef} className={cx(styles.main, mainSectionClass)}>
        {props.children}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
