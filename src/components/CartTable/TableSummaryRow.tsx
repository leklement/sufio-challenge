import React from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

/* OuterProps
-------------------------------------------------------------------------*/

interface IOuterProps {
  label: string;
  value: string;
  className?: string;
}

/* Template
-------------------------------------------------------------------------*/

export const TableSummaryRow: React.FC<IOuterProps> = ({label, value, className}) => {
  // Render

  return (
    <div className={cx(styles.TableRow, className)}>
      <div className={styles.item}></div>
      <div className={styles.qty}></div>
      <div className={styles.price}></div>
      <div className={styles.vat}>{label}</div>
      <div className={styles.total}>{value}</div>
    </div>
  );
};
