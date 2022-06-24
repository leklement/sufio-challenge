import {createAction} from "redux-actions";
import {
  ActionType,
  IAddToCartPayload,
  IRemoveFromCartPayload,
  ISetProducts,
  IUpdateQty,
} from "./types";

export const setProducts = createAction<ISetProducts>(ActionType.SET_PRODUCTS);

export const addToCart = createAction<IAddToCartPayload>(ActionType.ADD_TO_CART);
export const removeItem = createAction<IRemoveFromCartPayload>(
  ActionType.REMOVE_FROM_CART,
);

export const updateQty = createAction<IUpdateQty>(ActionType.UPDATE_QTY);
