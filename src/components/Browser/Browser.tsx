import {NotFoundPage} from "components/NotFoundPage";
import React from "react";
import loadable from "@loadable/component";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import * as AppRoutes from "./routes";

// TODO: implement custom loader
const GeneralLoader = () => {
  return <div>Loading</div>;
};

const LoadableProductsPage = loadable(() => import("../ProductsPage"), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />,
});

const LoadableCartPage = loadable(() => import("../CartPage"), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />,
});

const LoadableOrderPage = loadable(() => import("../OrderPage"), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />,
});

export const Browser = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard */}

          <Route path="/" element={<Navigate to={AppRoutes.products({})} />} />

          <Route
            path={AppRoutes.products(undefined)}
            element={<LoadableProductsPage />}
          />

          <Route path={AppRoutes.cart(undefined)} element={<LoadableCartPage />} />
          <Route path={AppRoutes.order(undefined)} element={<LoadableOrderPage />} />

          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

(Browser as any).whyDidYouRender = true;
