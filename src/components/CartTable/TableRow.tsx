import {CustomInput} from "components/CustomInput/CustomInput";
import {useSelectStockQty} from "hooks/useSelectStockQty";

import React from "react";
import {ICartItem} from "redux/shopping/types";
import * as ShoppingActions from "redux/shopping/actions";
import styles from "./styles.module.scss";
import {useDispatch} from "react-redux";
import {Trash} from "components/Icon";
import {RoundButton} from "components/Button";

/* OuterProps
-------------------------------------------------------------------------*/

interface IOuterProps {
  product: ICartItem;
}

/* Template
-------------------------------------------------------------------------*/

export const TableRow: React.FC<IOuterProps> = ({product}) => {
  const stockQty = useSelectStockQty(product.id);

  // Hooks

  const dispatch = useDispatch();

  // Handlers

  const handleChange = (event: any) => {
    dispatch(
      ShoppingActions.updateQty({
        id: product.id,
        qty: Math.max(0, Math.min(stockQty, Number(event.target.value))),
      }),
    );
  };

  const removeFromCart = () => {
    dispatch(
      ShoppingActions.removeItem({
        id: product.id,
      }),
    );
  };

  // Render

  return (
    <div className={styles.TableRow}>
      <div className={styles.item}>{product.name}</div>
      <div className={styles.qty}>
        <CustomInput onChange={handleChange} value={product.qty} />
        <RoundButton onClick={removeFromCart} icon={<Trash />}></RoundButton>
      </div>
      <div className={styles.price}>{product.unit_price_incl_vat}</div>
      <div className={styles.vat}>{product.vat_category}</div>
      <div className={styles.total}>
        {(product.qty * product.unit_price_incl_vat).toFixed(2)}
      </div>
    </div>
  );
};
