import {useReduxSetter} from "hooks/useReduxSetter";
import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {AppState} from "redux/types";
import * as BrowserActions from "../../redux/browser/actions";

interface Props {}

export const DarkModeUpdating: React.FC<Props> = (props) => {
  // State
  const isObserving = useRef(false);

  // Selectors
  const wantsDarkMode = useSelector((state: AppState) => state.browser.wantsDarkMode);

  // Callbacks
  const setWantsDarkMode = useReduxSetter(
    BrowserActions.setWantsDarkMode,
    "wantsDarkMode",
  );

  useEffect(() => {
    // When system preference changes, update Redux value
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    if (query.addEventListener !== undefined) {
      query.addEventListener("change", (ev) => {
        setWantsDarkMode(ev.matches);
      });
    } else if (query.addListener !== undefined) {
      query.addListener((ev) => {
        setWantsDarkMode(ev.matches);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Don't observe for changes right away, first wait
    // for the app to initialize.
    setTimeout(() => {
      isObserving.current = true;
    }, 1000);
  }, []);

  useEffect(() => {
    // When Redux value changes, reflect with body class
    window.document.body.classList.toggle("dark-mode", wantsDarkMode);
  }, [wantsDarkMode]);

  return null;
};
