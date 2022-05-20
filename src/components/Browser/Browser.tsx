import {NotFoundPage} from "components/NotFoundPage";
import React from "react";
import loadable from "@loadable/component";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import * as AppRoutes from "./routes";

// TODO: implement custom loader
const GeneralLoader = () => {
  return <div>Loading</div>;
};

const LoadableDashboardPage = loadable(() => import("../NewsPage"), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />,
});

const LoadableStoryDetailsPage = loadable(() => import("../StoryDetailsPage"), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />,
});

export const Browser = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard */}

          <Route path="/" element={<Navigate to={AppRoutes.news({})} />} />

          <Route path={AppRoutes.news(undefined)} element={<LoadableDashboardPage />} />

          {/* User */}

          <Route
            path={AppRoutes.storyDetail(undefined)}
            element={<LoadableStoryDetailsPage />}
          />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

(Browser as any).whyDidYouRender = true;
