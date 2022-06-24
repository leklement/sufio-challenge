import {IProduct} from "lib/api/responseTypes";

export interface ICartItem extends IProduct {
  qty: number;
}

export interface IState {
  products: IProduct[];
  cart: ICartItem[];
}

export enum ActionType {
  SET_PRODUCTS = "Cart - Set products",
  ADD_TO_CART = "Cart - Add product to cart",
  REMOVE_FROM_CART = "Cart - Remove product from cart",
  UPDATE_QTY = "Cart - Update product qty",
}

export interface ISetProducts {
  products: IProduct[];
}

export interface IAddToCartPayload {
  id: number;
}

export interface IRemoveFromCartPayload {
  id: number;
}

export interface IUpdateQty {
  id: number;
  qty: number;
}
