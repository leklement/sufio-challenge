import React from "react";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {AppLayout} from "../Browser/AppLayout";
import {CartPageContent} from "./CartPageContent";

import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

const CartPage = () => {
  // Hooks

  useDocumentTitle("Cart");

  // Render

  return (
    <AppLayout title="Cart" mainSectionClass={styles.CartPageMain}>
      <div className={styles.cartPage}>
        <CartPageContent />
      </div>
    </AppLayout>
  );
};

export default CartPage;
