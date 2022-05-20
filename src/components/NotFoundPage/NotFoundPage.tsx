import React from "react";
import {AppLayout} from "../Browser/AppLayout";
import styles from "./styles.module.scss";

export const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className={styles.NotFoundPage}>
        <div className={styles.graphic} />

        <p className={styles.body}>
          The page you are looking for isn't available.
          <br />
          Please return to the homepage.
        </p>
      </div>
    </AppLayout>
  );
};
