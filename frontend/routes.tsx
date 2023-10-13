import MainLayout from "Frontend/views/MainLayout.js";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import CreateSurveyView from "./views/survey/CreateSurveyView";
import SurveyView from "./views/survey/SurveyView";
import Wizard from "./views/wizard/Wizard";

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: "Main" },
    children: [
      {
        path: "/",
        element: <SurveyView />,
        handle: { title: "Survey Home" },
      },
      {
        path: "/survey",
        element: <SurveyView />,
        handle: { title: "Survey Home" },
      },
      {
        path: "/new",
        element: <CreateSurveyView />,
        handle: { title: "Create New Survey" },
      },
    ],
  },
];

export default createBrowserRouter(routes);
