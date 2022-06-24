import {Button} from "components/Button";
import {ButtonColor} from "components/Button/types";
import {useReduxSetter} from "hooks/useReduxSetter";
import {IProduct} from "lib/api/responseTypes";
import React, {useCallback} from "react";
import * as ShoppingActions from "redux/shopping/actions";
import styles from "./styles.module.scss";
import {useSelectedAll} from "./useSelectedAll";

/* OuterProps
-------------------------------------------------------------------------*/

interface IOuterProps {
  product: IProduct;
}

/* Template
-------------------------------------------------------------------------*/

export const Product: React.FC<IOuterProps> = (props) => {
  const {product} = props;

  // Hooks

  const isSelectedAll = useSelectedAll(product.id);

  // Setters

  const addToCart = useReduxSetter(ShoppingActions.addToCart, "id");

  // Callbacks

  const handleAddToCart = useCallback(
    (id: number) => {
      addToCart(id);
    },
    [addToCart],
  );

  // Render

  return (
    <div className={styles.Product}>
      <div className={styles.image}></div>
      <div className={styles.name}>{product.name}</div>

      <div className={styles.footer}>
        <div className={styles.price}>{product.unit_price_incl_vat} €</div>
        <Button
          disabled={isSelectedAll}
          color={ButtonColor.BLUE}
          label="Add to cart"
          onClick={() => {
            handleAddToCart(product.id);
          }}
        />
      </div>
    </div>
  );
};
