import {productsUrl} from "components/Browser/routeHelpers";
import {Button} from "components/Button";
import {ButtonColor, ButtonSize} from "components/Button/types";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {ICartItem} from "redux/shopping/types";

import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {AppLayout} from "../Browser/AppLayout";

import styles from "./styles.module.scss";

/* Template
-------------------------------------------------------------------------*/

const OrderPage = () => {
  // Hooks
  const order: ICartItem[] = JSON.parse(localStorage.getItem("order") ?? "[]");
  const total = JSON.parse(localStorage.getItem("total") ?? "0");
  const navigate = useNavigate();

  useDocumentTitle("Order");

  // Callbacks

  const handleBack = useCallback(() => {
    localStorage.setItem("order", "[]");
    localStorage.setItem("total", `0`);
    navigate(productsUrl());
  }, [navigate]);

  // Render

  return (
    <AppLayout title="Order" hiddenHeader={true} mainSectionClass={styles.OrderPageMain}>
      <div className={styles.orderPage}>
        <h1>Thank you for your order</h1>
        <div className={styles.productTable}>
          {order.map((product, key) => {
            return (
              <div className={styles.product} key={`${product.name}-${key}`}>
                <div>{product.qty}x</div>
                <div>{product.name}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.total}>
          Please send us the payment of <span>{total}</span> to our bitcoin address
        </div>

        <Button
          className={styles.button}
          color={ButtonColor.BLUE}
          label="Continue shopping"
          onClick={handleBack}
          size={ButtonSize.LARGE}
        />
      </div>
    </AppLayout>
  );
};

export default OrderPage;
