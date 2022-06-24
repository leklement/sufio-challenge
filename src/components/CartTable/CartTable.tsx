import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";
import {useCartSummary} from "./hooks/useCartSummary";

import styles from "./styles.module.scss";
import {TableFooter} from "./TableFooter";
import {TableHeader} from "./TableHeader";
import {TableRow} from "./TableRow";
import {TableSummaryRow} from "./TableSummaryRow";

/* Template
-------------------------------------------------------------------------*/

export const CartTable = () => {
  // Hooks

  const {totalExclVat, tenPercentVat, twentyPercentVat, total} = useCartSummary();

  // Selectors

  const cart = useSelector((state: AppState) => state.shopping.cart);

  // Render

  return (
    <div className={styles.CartTable}>
      <TableHeader />
      <div className={styles.body}>
        {!cart.length ? (
          <div>Empty cart</div>
        ) : (
          cart.map((product, key) => {
            return <TableRow key={`${product.id}-${key}`} product={product} />;
          })
        )}
      </div>
      <TableSummaryRow label="Total excl. VAT" value={`${totalExclVat.toFixed(2)} €`} />
      <TableSummaryRow label="VAT 10%" value={`${tenPercentVat.toFixed(2)} €`} />
      <TableSummaryRow label="VAT 20%" value={`${twentyPercentVat.toFixed(2)} €`} />
      <TableSummaryRow
        label="Total"
        className={styles.total}
        value={`${total.toFixed(2)} €`}
      />
      <TableFooter isDisabled={!cart.length ?? false} />
    </div>
  );
};
