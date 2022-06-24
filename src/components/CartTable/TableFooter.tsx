import {orderUrl, productsUrl} from "components/Browser/routeHelpers";
import {Button} from "components/Button";
import {ButtonColor} from "components/Button/types";
import {useClearCart} from "hooks/useClearCart";
import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppState} from "redux/types";
import {useCartSummary} from "./hooks/useCartSummary";
import styles from "./styles.module.scss";

/* OuterProps
-------------------------------------------------------------------------*/

interface IOuterProps {
  isDisabled: boolean;
}

/* Template
-------------------------------------------------------------------------*/

export const TableFooter: React.FC<IOuterProps> = ({isDisabled}) => {
  //Selectors

  const cart = useSelector((state: AppState) => state.shopping.cart);

  // Hooks

  const {total} = useCartSummary();
  const {clearCart} = useClearCart();
  const navigate = useNavigate();

  // Callbacks

  const handleBack = useCallback(() => {
    navigate(productsUrl());
  }, [navigate]);

  const handleSend = useCallback(() => {
    localStorage.setItem("order", JSON.stringify(cart));
    localStorage.setItem("total", `${total}`);

    console.log("order: ", cart);
    clearCart();
    navigate(orderUrl());
  }, [cart, clearCart, navigate, total]);

  // Render

  return (
    <div className={styles.TableFooter}>
      <div className={styles.back} onClick={handleBack}>
        ← Back
      </div>

      <Button
        disabled={isDisabled}
        color={ButtonColor.BLUE}
        label="Send order"
        onClick={handleSend}
      />
    </div>
  );
};
