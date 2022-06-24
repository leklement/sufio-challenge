import {useCallback, useMemo} from "react";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";

export const useCartSummary = () => {
  // Selectors

  const cart = useSelector((state: AppState) => state.shopping.cart);

  // Callbacks

  const vatByCategory = useCallback(
    (vatCategory: number) => {
      const vat = cart.reduce((vat, product) => {
        if (product.vat_category === vatCategory) {
          return vat + (product.qty * product.unit_price_incl_vat) / product.vat_category;
        }

        return vat;
      }, 0);

      return vat;
    },
    [cart],
  );

  // Memos

  const tenPercentVat = useMemo(() => {
    return vatByCategory(10);
  }, [vatByCategory]);

  const twentyPercentVat = useMemo(() => {
    return vatByCategory(20);
  }, [vatByCategory]);

  const total = useMemo(() => {
    return cart.reduce((sum, product) => {
      return sum + product.unit_price_incl_vat * product.qty;
    }, 0);
  }, [cart]);

  return useMemo(() => {
    return {
      totalExclVat: total - tenPercentVat - twentyPercentVat,
      tenPercentVat,
      twentyPercentVat,
      total,
    };
  }, [tenPercentVat, total, twentyPercentVat]);
};
