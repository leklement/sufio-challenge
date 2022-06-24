import React from "react";

import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

export const TableHeader = () => {
  // Render

  return (
    <div className={styles.TableHeader}>
      <div className={styles.item}>Item</div>
      <div className={styles.qty}>Quantity</div>
      <div className={styles.price}>Unit Price incl. VAT</div>
      <div className={styles.vat}>VAT</div>
      <div className={styles.total}>Total</div>
    </div>
  );
};
