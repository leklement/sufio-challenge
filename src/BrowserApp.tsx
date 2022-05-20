// Must be imported before React or ReactDOM
import {Provider as ReduxProvider} from "react-redux";
import * as React from "react";
import {reducer} from "./redux/reducer";
import {Browser} from "components/Browser/Browser";
import {DarkModeUpdating} from "components/DarkModeUpdating";
import {createStore} from "redux";

interface IReduxProviderProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
}

// Redux store

const store = createStore(reducer);

export const AppReduxProvider: React.FC<IReduxProviderProps> = (props) => {
  return <ReduxProvider store={store}>{props.children}</ReduxProvider>;
};

// Browser App

export const BrowserApp = () => {
  return (
    <AppReduxProvider>
      <Browser />
      <DarkModeUpdating />
    </AppReduxProvider>
  );
};
