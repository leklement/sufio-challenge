import {useEffect, useState} from "react";
import {useReduxSetter} from "hooks/useReduxSetter";
import {APIClient} from "lib/api";
import * as ShoppingActions from "redux/shopping/actions";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";

export const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  // Setters

  const setProducts = useReduxSetter(ShoppingActions.setProducts, "products");

  // Selectors

  const products = useSelector((state: AppState) => state.shopping.products);

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await APIClient.getProducts();

        setProducts(products);
        setError(undefined);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [setProducts]);

  return {products, loading, error};
};
