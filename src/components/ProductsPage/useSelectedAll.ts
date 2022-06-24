import {useSelectStockQty} from "hooks/useSelectStockQty";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";

export const useSelectedAll = (id: number) => {
  //Selectors

  const products = useSelector((state: AppState) => state.shopping.cart);

  // Hooks

  const stockQty = useSelectStockQty(id);

  const product = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [id, products]);

  return useMemo(() => {
    return product ? product.qty === stockQty : false;
  }, [product, stockQty]);
};
