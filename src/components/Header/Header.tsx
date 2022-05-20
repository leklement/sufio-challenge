import React, {useCallback} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import {Moon, Sun} from "components/Icon";
import {useReduxSetter} from "hooks/useReduxSetter";
import * as BrowserActions from "redux/browser/actions";
import {useDetectDarkMode} from "hooks/useDetectDarkMode";
import {RoundButton} from "components/Button";
import {TabSelector} from "components/TabSelector/TabSelector";
import {useNavigate} from "react-router-dom";
import {newsUrl} from "components/Browser/routeHelpers";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  className?: string;
}

/* Template
-------------------------------------------------------------------------*/

export const Header: React.FC<Props> = (props) => {
  const {className} = props;

  // Hooks
  const isDarkMode = useDetectDarkMode() === "dark";
  const navigate = useNavigate();

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
    navigate(newsUrl());
  }, []);

  // Render

  return (
    <div className={cx(styles.Header, className)}>
      <div className={styles.left}>
        <div className={styles.logoContainer} onClick={handleRedirect}>
          <div className={styles.logo}>Y</div>
          <span className={styles.title}>
            <h1>Hacker News</h1>
          </span>
        </div>
        <TabSelector />
      </div>
      <RoundButton
        icon={isDarkMode ? <Sun /> : <Moon />}
        onClick={handleClick}
      ></RoundButton>
    </div>
  );
};
