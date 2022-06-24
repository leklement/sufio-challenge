import React, {useCallback, useMemo} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {Cart, Moon, Sun} from "components/Icon";
import {useReduxSetter} from "hooks/useReduxSetter";
import * as BrowserActions from "redux/browser/actions";
import {useDetectDarkMode} from "hooks/useDetectDarkMode";
import {RoundButton} from "components/Button";
import {useNavigate} from "react-router-dom";
import {cartUrl, productsUrl} from "components/Browser/routeHelpers";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  title: string;
  className?: string;
}

/* Template
-------------------------------------------------------------------------*/

export const Header: React.FC<Props> = (props) => {
  const {title, className} = props;

  // Hooks
  const isDarkMode = useDetectDarkMode() === "dark";
  const navigate = useNavigate();

  // Selectors

  const productsInCart = useSelector((state: AppState) => state.shopping.cart);

  // Setters

  const setWantsDarkMode = useReduxSetter(
    BrowserActions.setWantsDarkMode,
    "wantsDarkMode",
  );

  // Callbacks

  const handleClick = useCallback(() => {
    setWantsDarkMode(!isDarkMode);
  }, [setWantsDarkMode, isDarkMode]);

  const handleRedirect = useCallback(() => {
    navigate(productsUrl());
  }, [navigate]);

  const handleRedirectToCart = useCallback(() => {
    navigate(cartUrl());
  }, [navigate]);
  // Memos

  const countOfProductsInCart = useMemo(() => {
    if (!productsInCart.length) {
      return 0;
    }

    const sum = productsInCart.reduce((summary, product) => {
      return summary + product.qty;
    }, 0);

    return sum;
  }, [productsInCart]);

  // Render

  return (
    <div className={cx(styles.Header, className)}>
      <div className={styles.cartContainer} onClick={handleRedirectToCart}>
        <Cart className={cx(styles.cart, {[styles.dark]: isDarkMode})} />
        <div className={styles.counter}>{countOfProductsInCart}</div>
      </div>

      <div className={styles.left}>
        <div className={styles.logoContainer} onClick={handleRedirect}>
          <span className={styles.title}>
            <h1>{title}</h1>
          </span>
        </div>
      </div>
      <RoundButton
        icon={isDarkMode ? <Sun /> : <Moon />}
        onClick={handleClick}
      ></RoundButton>
    </div>
  );
};
