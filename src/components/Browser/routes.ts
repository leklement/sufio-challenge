import {createUrl} from "../../lib/helpers/routes";

/* Routes
-------------------------------------------------------------------------*/

export const products = (params: {} | undefined) => {
  return createUrl(`/products`, params);
};

export const order = (params: {} | undefined) => {
  return createUrl(`/order`, params);
};

export const cart = (params: {} | undefined) => {
  return createUrl(`/cart`, params);
};
