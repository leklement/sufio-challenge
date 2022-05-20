import {useSelector} from "react-redux";
import {AppState} from "redux/types";

export const useDetectDarkMode = (): "light" | "dark" => {
  const wantsDarkMode = useSelector((state: AppState) => state.browser.wantsDarkMode);
  return wantsDarkMode ? "dark" : "light";
};
