import {Action, handleActions} from "redux-actions";
import {
  ActionType,
  IAddToCartPayload,
  IRemoveFromCartPayload,
  IUpdateQty,
  ISetProducts,
  IState,
} from "./types";

const initialState: IState = {
  products: [],
  cart: [],
};

type Payload = IAddToCartPayload | IRemoveFromCartPayload | IUpdateQty | ISetProducts;

export const reducer = handleActions<IState, Payload>(
  {
    [ActionType.SET_PRODUCTS]: (state: IState, action: Action<ISetProducts>): IState => {
      const {products} = action.payload;

      return {
        ...state,
        products,
      };
    },
    [ActionType.ADD_TO_CART]: (
      state: IState,
      action: Action<IAddToCartPayload>,
    ): IState => {
      const {id} = action.payload;

      // Great Item data from products array
      const item = state.products.find((product) => product.id === id);

      if (!item) {
        return state;
      }

      // Check if Item is in cart already
      const inCart: boolean = state.cart.find((item) => item.id === action.payload.id)
        ? true
        : false;

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id ? {...item, qty: item.qty + 1} : item,
            )
          : [...state.cart, {...item, qty: 1}],
      };
    },
    [ActionType.REMOVE_FROM_CART]: (
      state: IState,
      action: Action<IRemoveFromCartPayload>,
    ): IState => {
      const {id} = action.payload;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    },
    [ActionType.UPDATE_QTY]: (state: IState, action: Action<IUpdateQty>): IState => {
      const {id, qty} = action.payload;

      return {
        ...state,
        cart: state.cart.map((item) => (item.id === id ? {...item, qty: +qty} : item)),
      };
    },
  },
  initialState,
);
