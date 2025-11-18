import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faDocker,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faComments,
  faLightbulb,
  faHandsHelping,
  faChartLine,
  faCompass,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Skills = () => {
  const technicalSkills = [
    {
      id: "react",
      title: "React",
      icon: faReact,
      description:
        "Création d’interfaces dynamiques et modulaires. Redux, WebSocket, RC-Dock, composants réactifs et UI temps réel.",
      link: "/skills/react",
      projects: [
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
        { name: "Kanban Web App", link: "/projects/kanban-web-app" },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript",
      icon: faJs,
      description:
        "Langage pivot entre front et back. Maîtrise de l’ES6+, logique asynchrone, patterns, et intégration TypeScript.",
      link: "/skills/javascript",
      projects: [
        { name: "Kanban Web App", link: "/projects/kanban-web-app" },
        { name: "Groupomania", link: "/projects/groupomania" },
      ],
    },
    {
      id: "nodejs",
      title: "Node.js",
      icon: faNodeJs,
      description:
        "Développement d’APIs REST et WebSocket performantes. Communication en temps réel et gestion de serveurs VR.",
      link: "/skills/node",
      projects: [
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
        { name: "Groupomania", link: "/projects/groupomania" },
      ],
    },
    {
      id: "docker",
      title: "Docker",
      icon: faDocker,
      description:
        "Containerisation complète d’environnements pour React, Node, Java et MySQL. Déploiements reproductibles.",
      link: "/skills/docker",
      projects: [
        { name: "PMT", link: "/projects/pmt" },
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
      ],
    },
    {
      id: "mysql",
      title: "MySQL",
      icon: faDatabase,
      description:
        "Modélisation relationnelle, ORM (Sequelize, Hibernate) et gestion des dépendances inter-serveurs.",
      link: "/skills/mysql",
      projects: [
        { name: "PMT", link: "/projects/pmt" },
        { name: "Groupomania", link: "/projects/groupomania" },
      ],
    },
    // {
    //   id: "java",
    //   title: "Java / Spring Boot",
    //   icon: faJava,
    //   description:
    //     "Développement structuré et sécurisé. Architecture REST, MVC, authentification et CI/CD sous Docker.",
    //   link: "/skills/java",
    //   projects: [{ name: "PMT", link: "/projects/pmt" }],
    // },
  ];

  const humanSkills = [
    {
      id: "vision",
      title: "Vision & Ingénierie logicielle",
      icon: faCompass,
      description:
        "Anticiper l’évolutivité d’un système et concevoir des architectures robustes et cohérentes.",
      link: "/skills/vision",
      projects: [
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
        { name: "PMT", link: "/projects/pmt" },
      ],
    },
    {
      id: "communication",
      title: "Communication",
      icon: faComments,
      description:
        "Transmettre clairement les informations techniques, collaborer efficacement et documenter avec rigueur.",
      link: "/skills/communication",
      projects: [
        { name: "Groupomania", link: "/projects/groupomania" },
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
      ],
    },
    {
      id: "rigueur",
      title: "Rigueur & Qualité",
      icon: faChartLine,
      description:
        "Application stricte des conventions de code, validation systématique, et documentation claire.",
      link: "/skills/rigueur",
      projects: [
        { name: "PMT", link: "/projects/pmt" },
        { name: "Kanban Web App", link: "/projects/kanban-web-app" },
      ],
    },
    {
      id: "autonomie",
      title: "Autonomie & Curiosité",
      icon: faBrain,
      description:
        "Capacité à apprendre seul, explorer des stacks nouvelles et résoudre des problèmes sans supervision.",
      link: "/skills/autonomie",
      projects: [
        { name: "Kanban Web App", link: "/projects/kanban-web-app" },
        { name: "Lyseo", link: "/projects/lyseo" },
      ],
    },
    {
      id: "collaboration",
      title: "Collaboration & Esprit d’équipe",
      icon: faHandsHelping,
      description:
        "Savoir travailler en méthode agile, synchroniser avec plusieurs développeurs et maintenir une cohésion d’équipe.",
      link: "/skills/collaboration",
      projects: [
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
        { name: "PMT", link: "/projects/pmt" },
      ],
    },
    {
      id: "resolution-problem",
      title: "Résolution de problèmes",
      icon: faLightbulb,
      description:
        "Analyser, diagnostiquer et corriger efficacement des problèmes techniques complexes.",
      link: "/skills/resolution-problem",
      projects: [
        { name: "Lyseo", link: "/projects/lyseo" },
        { name: "Large Field Theater", link: "/projects/large-field-theater" },
      ],
    },
  ];

  return (
    <main className="bg-nebula bg-stars">
      <section className="skills__header">
        <h1 className="skills__title neon-yellow">Mes Compétences</h1>
        <p className="skills__tagline">
          Un équilibre entre <strong>expertise technique</strong> et{" "}
          <strong>valeurs humaines</strong> développées au fil de mes projets.
        </p>
      </section>

      <section className="skills__section">
        <h2 className="skills__subtitle neon-blue">Compétences techniques</h2>
        <div className="skills__grid">
          {technicalSkills.map((skill) => (
            <div key={skill.id} className="skill__card bg-grid">
              <Link to={skill.link} className="skill__main-link">
                <FontAwesomeIcon icon={skill.icon} className="skill__icon" />
                <h3 className="skill__title">{skill.title}</h3>
                <p className="skill__desc">{skill.description}</p>
              </Link>
              <div className="skill__projects">
                {skill.projects.map((project, index) => (
                  <Link
                    key={index}
                    to={project.link}
                    className="skill__project-btn"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills__section">
        <h2 className="skills__subtitle neon-pink">Compétences humaines</h2>
        <div className="skills__grid">
          {humanSkills.map((skill) => (
            <div key={skill.id} className="skill__card bg-grid">
              <Link to={skill.link} className="skill__main-link">
                <FontAwesomeIcon icon={skill.icon} className="skill__icon" />
                <h3 className="skill__title">{skill.title}</h3>
                <p className="skill__desc">{skill.description}</p>
              </Link>
              <div className="skill__projects">
                {skill.projects.map((project, index) => (
                  <Link
                    key={index}
                    to={project.link}
                    className="skill__project-btn"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
