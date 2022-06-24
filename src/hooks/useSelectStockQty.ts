import {IProduct} from "lib/api/responseTypes";
import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";

export const useSelectStockQty = (id: number) => {
  // Selectors

  const products = useSelector((state: AppState) => state.shopping.products);

  const product: IProduct | undefined = React.useMemo(() => {
    return products.find((product) => product.id === id);
  }, [id, products]);

  return product ? product.stock_quantity : 0;
};
