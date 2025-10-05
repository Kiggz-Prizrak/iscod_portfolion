import { createBrowserRouter, Navigate, useLoaderData } from "react-router-dom";

import Root from "./Root";

import ErrorPage from "../pages/ErrorPage";
import Skills from "../pages/skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Lyseo from "../pages/Project/Lyseo";
import KanbanWebApp from "../pages/Project/KanbanWebApp";
import Groupomania from "../pages/Project/Groupomania";
import Pmt from "../pages/Project/Pmt";
import Lft from "../pages/Project/Lft";

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
        path: "/project/kanban",
        element: <KanbanWebApp />,
      },
      {
        path: "/project/pmt",
        element: <Pmt />,
      },
      {
        path: "/project/lft",
        element: <Lft />,
      },
      {
        path: "/project/groupomania",
        element: <Groupomania />,
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
