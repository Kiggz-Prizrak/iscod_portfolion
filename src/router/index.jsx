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
import Presentation from "../pages/Presentation";
import ReactSkill from "../pages/Skill/React";
import NodeSkill from "../pages/Skill/Node";
import DockerSkill from "../pages/Skill/Docker";
import MysqlSkill from "../pages/Skill/Mysql";
import JavascriptSkill from "../pages/Skill/javascript";
import VisionSkill from "../pages/Skill/Vision";
import CommunicationSkill from "../pages/Skill/Communication";
import RigueurSkill from "../pages/Skill/Rigeur";
import AutonomieSkill from "../pages/Skill/Autonomie";
import CollaborationSkill from "../pages/Skill/Colaboration";
import GestionProjetSkill from "../pages/Skill/GestionProjet";
import ResolutionProblemesSkill from "../pages/Skill/ResolutionProblem";

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
        path: "/about",
        element: <Presentation />,
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
        path: "/skills/react",
        element: <ReactSkill />,
      },
      {
        path: "/skills/node",
        element: <NodeSkill />,
      },
      {
        path: "/skills/docker",
        element: <DockerSkill />,
      },
      {
        path: "/skills/mysql",
        element: <MysqlSkill />,
      },
      {
        path: "/skills/javascript",
        element: <JavascriptSkill />,
      },
      {
        path: "/skills/vision",
        element: <VisionSkill />,
      },
      {
        path: "/skills/communication",
        element: <CommunicationSkill />,
      },
      {
        path: "/skills/rigueur",
        element: <RigueurSkill />,
      },
      {
        path: "/skills/autonomie",
        element: <AutonomieSkill />,
      },
      {
        path: "/skills/colaboration",
        element: <CollaborationSkill />,
      },
      {
        path: "/skills/gestion-projet",
        element: <GestionProjetSkill />,
      },
      {
        path: "/skills/resolution-problem",
        element: <ResolutionProblemesSkill />,
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
