import React, {useCallback} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import * as BrowserActions from "redux/browser/actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "redux/types";
import {ENUM_SELECTED_TAB} from "redux/browser/types";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  classNames?: string;
}

/* Template
-------------------------------------------------------------------------*/

export const TabSelector: React.FC<Props> = (props) => {
  // Selectors

  const selectedTab = useSelector((state: AppState) => state.browser.selectedTab);

  // Hooks

  const dispatch = useDispatch();

  // Callbacks

  const handleSelectTab = useCallback(
    (selectedTab: ENUM_SELECTED_TAB) => {
      dispatch(BrowserActions.setSelectedTab({selectedTab}));
    },
    [dispatch],
  );

  // Render

  return (
    <div className={cx(styles.TabSelector, props.classNames)}>
      <span
        onClick={() => handleSelectTab(ENUM_SELECTED_TAB.latest)}
        className={cx(styles.tab, {
          [styles.selected]: selectedTab === ENUM_SELECTED_TAB.latest,
        })}
      >
        latest
      </span>
      <span className={styles.separator}> | </span>
      <span
        onClick={() => handleSelectTab(ENUM_SELECTED_TAB.starred)}
        className={cx(styles.tab, {
          [styles.selected]: selectedTab === ENUM_SELECTED_TAB.starred,
        })}
      >
        starred
      </span>
    </div>
  );
};
