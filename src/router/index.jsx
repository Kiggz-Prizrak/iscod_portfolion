import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Presentation from "../pages/Presentation";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";

// ---- Projects ----
import Lyseo from "../pages/Projects/Lyseo";
import KanbanWebApp from "../pages/Projects/KanbanWebApp";
import Groupomania from "../pages/Projects/Groupomania";
import Pmt from "../pages/Projects/Pmt";
import Lft from "../pages/Projects/Lft";

// ---- Skills ----
import ReactSkill from "../pages/Skills/React";
import NodeSkill from "../pages/Skills/Node";
import DockerSkill from "../pages/Skills/Docker";
import MysqlSkill from "../pages/Skills/Mysql";
import JavascriptSkill from "../pages/Skills/Javascript";
import VisionSkill from "../pages/Skills/Vision";
import CommunicationSkill from "../pages/Skills/Communication";
import RigueurSkill from "../pages/Skills/Rigueur";
import AutonomieSkill from "../pages/Skills/Autonomie";
import CollaborationSkill from "../pages/Skills/Collaboration";
import GestionProjetSkill from "../pages/Skills/GestionProjet";
import ResolutionProblemesSkill from "../pages/Skills/ResolutionProblemes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <Presentation /> },
      { path: "contact", element: <Contact /> },

      // ---- Projects ----
      {
        path: "projects",
        children: [
          { index: true, element: <Projects /> },
          { path: "lyseo", element: <Lyseo /> },
          { path: "kanban", element: <KanbanWebApp /> },
          { path: "pmt", element: <Pmt /> },
          { path: "lft", element: <Lft /> },
          { path: "groupomania", element: <Groupomania /> },
        ],
      },

      // ---- Skills ----
      {
        path: "skills",
        children: [
          { index: true, element: <Skills /> },
          { path: "react", element: <ReactSkill /> },
          { path: "node", element: <NodeSkill /> },
          { path: "docker", element: <DockerSkill /> },
          { path: "mysql", element: <MysqlSkill /> },
          { path: "javascript", element: <JavascriptSkill /> },
          { path: "vision", element: <VisionSkill /> },
          { path: "communication", element: <CommunicationSkill /> },
          { path: "rigueur", element: <RigueurSkill /> },
          { path: "autonomie", element: <AutonomieSkill /> },
          { path: "collaboration", element: <CollaborationSkill /> },
          { path: "gestion-projet", element: <GestionProjetSkill /> },
          { path: "resolution-problem", element: <ResolutionProblemesSkill /> },
        ],
      },
    ],
  },
]);

export default router;
