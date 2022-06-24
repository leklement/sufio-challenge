import React, {useMemo} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {useProducts} from "./hooks/useSetProducts";
import {Product} from "./Product";

/* Template
-------------------------------------------------------------------------*/

export const ProductsPageContent: React.FC = () => {
  // Hooks

  const {products, loading} = useProducts();

  const contentStyles = useMemo(() => {
    const windowHeight = window.innerHeight - 270;

    return {
      minHeight: windowHeight,
    };
  }, []);

  const stockedProducts = useMemo(() => {
    return products.filter((product) => {
      return product.stock_quantity > 0;
    });
  }, [products]);

  // Render

  return (
    <section className={styles.ProductsPageContent}>
      <div className={cx(styles.content)} style={contentStyles}>
        {loading ? (
          <div className={styles.loading}>A moment please...</div>
        ) : (
          <div className={styles.productList}>
            {stockedProducts.map((product, key) => {
              return <Product product={product} key={`${product.id}-${key}`} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};
