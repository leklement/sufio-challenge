import React, {useMemo} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";
import {CartTable} from "components/CartTable";

/* Template
-------------------------------------------------------------------------*/

export const CartPageContent: React.FC = () => {
  // Memos

  const contentStyles = useMemo(() => {
    const windowHeight = window.innerHeight - 270;

    return {
      minHeight: windowHeight,
    };
  }, []);

  // Render

  return (
    <section className={styles.CartPageContent}>
      <div className={cx(styles.content)} style={contentStyles}>
        <CartTable />
      </div>
    </section>
  );
};
