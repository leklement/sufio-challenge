import React from "react";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {AppLayout} from "../Browser/AppLayout";
import {NewsPageContent} from "./NewsPageContent";
import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

const NewsPage = () => {
  // Hooks

  useDocumentTitle("Dashboard");

  // Render

  return (
    <AppLayout mainSectionClass={styles.NewsPageMain}>
      <div className={styles.newsPage}>
        <NewsPageContent />
      </div>
    </AppLayout>
  );
};

export default NewsPage;
