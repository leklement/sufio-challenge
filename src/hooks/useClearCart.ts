import {useCallback} from "react";
import {useSelector} from "react-redux";
import * as ShoppingActions from "redux/shopping/actions";
import {AppState} from "redux/types";
import {useReduxSetter} from "./useReduxSetter";

export const useClearCart = () => {
  // Selectors

  const cart = useSelector((state: AppState) => state.shopping.cart);
  const removeItem = useReduxSetter(ShoppingActions.removeItem, "id");

  const clearCart = useCallback(() => {
    cart.forEach((product) => {
      removeItem(product.id);
    });
  }, [cart, removeItem]);

  return {clearCart};
};
