import React from "react";
import {AppLayout} from "../Browser/AppLayout";

import styles from "./styles.module.scss";
import {StoryDetailsContent} from "./StoryDetailsContent";

/* Template
-------------------------------------------------------------------------*/

const StoryDetailsPage = () => {
  // Render

  return (
    <AppLayout mainSectionClass={styles.StoryDetailsPage}>
      <div className={styles.detailsPage}>
        <StoryDetailsContent />
      </div>
    </AppLayout>
  );
};

export default StoryDetailsPage;
