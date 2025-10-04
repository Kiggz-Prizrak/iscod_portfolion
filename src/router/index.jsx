import { createBrowserRouter, Navigate, useLoaderData } from "react-router-dom";

import Root from "./Root";

import ErrorPage from "../pages/ErrorPage";
import Skills from "../pages/skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Lyseo from "../pages/Project/Lyseo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/lyseo",
        element: <Lyseo />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
