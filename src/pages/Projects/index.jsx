import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJava,
  faAngular,
  faNodeJs,
  faDocker,
  faRust,
} from "@fortawesome/free-brands-svg-icons";
import {
  faVrCardboard,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "large-field-theater",
      title: "Large Field Theater",
      icon: faVrCardboard,
      description:
        "Application complète de pilotage VR en temps réel. Frontend React + Redux connecté à un backend Node.js via WebSocket. Gestion des casques, cartes, groupes, et installation d’APK à distance.",
      skills: [
        { name: "React", link: "/skills/react" },
        { name: "Redux", link: "/skills/react" },
        { name: "Node.js", link: "/skills/nodejs" },
        { name: "Docker", link: "/skills/docker" },
        { name: "Communication", link: "/skills/communication" },
        { name: "Résolution de problèmes", link: "/skills/resolution-problem" },
      ],
      link: "/projects/large-field-theater",
    },
    {
      id: "pmt",
      title: "Project Management Tool (PMT)",
      icon: faJava,
      description:
        "Application full stack Java Spring Boot / Angular développée dans le cadre de l’ISCOD. Gestion des projets, tâches, utilisateurs et pipeline CI/CD complète sous Docker et GitLab.",
      skills: [
        { name: "Java", link: "/skills/java" },
        { name: "Angular", link: "/skills/angular" },
        { name: "Docker", link: "/skills/docker" },
        { name: "Gestion de projet", link: "/skills/gestion-projet" },
        { name: "Rigueur", link: "/skills/rigueur" },
      ],
      link: "/projects/pmt",
    },
    {
      id: "kanban-web-app",
      title: "Kanban Web App",
      icon: faClipboardList,
      description:
        "Application React permettant la gestion locale de tâches en drag & drop avec Redux Persist. Pensée pour la productivité et l’autonomie du développeur.",
      skills: [
        { name: "React", link: "/skills/react" },
        { name: "Redux", link: "/skills/react" },
        { name: "Autonomie", link: "/skills/autonomie" },
        { name: "Rigueur", link: "/skills/rigueur" },
      ],
      link: "/projects/kanban-web-app",
    },
    {
      id: "groupomania",
      title: "Groupomania",
      icon: faNodeJs,
      description:
        "Réseau social d’entreprise développé en Vue.js et Node.js. Authentification sécurisée, gestion des posts, commentaires et profils avec images.",
      skills: [
        { name: "Node.js", link: "/skills/nodejs" },
        { name: "JavaScript", link: "/skills/javascript" },
        { name: "Communication", link: "/skills/communication" },
      ],
      link: "/projects/groupomania",
    },
    {
      id: "lyseo",
      title: "Lyseo",
      icon: faRust,
      description:
        "Orientation sans GPS pour milieux souterrains (carrières, grottes). Capteurs mobiles (gyro/accéléro/magnéto), carte locale, recalibrage intelligent, suivi en temps réel.",
      skills: [
        { name: "Rust", link: "/skills/rust" },
        { name: "JavaScript", link: "/skills/javascript" },
        { name: "Rigueur", link: "/skills/rigueur" },
        { name: "Résolution de problèmes", link: "/skills/resolution-problem" },
      ],
      link: "/projects/lyseo",
    },
  ];

  return (
    <main className="bg-nebula bg-stars">
      <section className="projects__header">
        <h1 className="projects__title neon-yellow">Mes Projets</h1>
        <p className="projects__tagline">
          Une sélection de projets représentatifs de mon parcours{" "}
          <strong>full stack</strong> — de la conception à l’industrialisation.
        </p>
      </section>

      <section className="projects__list">
        {projects.map((project) => (
          <article key={project.id} className="project__card">
            <div className="project__card-header">
              <FontAwesomeIcon
                icon={project.icon}
                className="project__icon neon-pink"
              />
              <h2>
                <Link to={project.link} className="project__title-link">
                  {project.title}
                </Link>
              </h2>
            </div>

            <p className="project__description">{project.description}</p>

            <div className="project__skills">
              {project.skills.map((skill, index) => (
                <Link
                  key={index}
                  href={skill.link}
                  className="project__skill-tag"
                >
                  {skill.name}
                </Link>
              ))}
            </div>

            <div className="project__link">
              <Link to={project.link} className="neon-link">
                → Voir le projet
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Projects;
