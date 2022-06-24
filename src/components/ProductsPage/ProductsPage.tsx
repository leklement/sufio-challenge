import React from "react";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {AppLayout} from "../Browser/AppLayout";
import {ProductsPageContent} from "./ProductsPageContent";
import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

const ProductsPage = () => {
  // Hooks

  useDocumentTitle("Dashboard");

  // Render

  return (
    <AppLayout title="Products" mainSectionClass={styles.NewsPageMain}>
      <div className={styles.newsPage}>
        <ProductsPageContent />
      </div>
    </AppLayout>
  );
};

export default ProductsPage;
