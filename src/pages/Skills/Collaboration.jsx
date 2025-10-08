import React from "react";
import { Link } from "react-router-dom";

const CollaborationSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Travail d’équipe & Collaboration technique
        </h1>
        <p className="skill__tagline">
          Construire ensemble, comprendre les autres métiers et faire converger
          les pôles vers un même objectif technique.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          Le <strong>travail d’équipe</strong> et la{" "}
          <strong>collaboration technique</strong> consistent à contribuer à un
          projet collectif en combinant les compétences, les perspectives et les
          expertises de chacun. Dans le domaine du logiciel, cela implique de
          comprendre les contraintes de chaque pôle (backend, frontend, 3D,
          réseau, DevOps) et de trouver un langage commun.
        </p>
        <p>
          Une collaboration efficace repose sur la{" "}
          <span className="highlight-blue">communication claire</span>, la{" "}
          <span className="highlight-pink">transparence technique</span> et le{" "}
          <strong>respect du rôle de chacun</strong>. Elle permet d’éviter les
          blocages, d’améliorer la qualité du code et de construire des produits
          robustes dans un environnement agile.
        </p>
        <p>
          Dans mes projets, j’ai souvent joué le rôle de{" "}
          <strong>pont entre plusieurs pôles</strong> — traduisant les besoins
          des développeurs Unity, des ingénieurs backend ou des graphistes
          frontend — afin d’assurer une cohérence technique et fonctionnelle
          dans le rendu final.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Collaboration inter-pôles</h3>
          <ul>
            <li>
              Collaboration étroite avec les développeurs Unity pour
              synchroniser les <strong>scènes VR</strong> et les données
              transmises par le <strong>DEM Server</strong>.
            </li>
            <li>
              Coordination avec le pôle backend sur la{" "}
              <strong>conversion de Rust vers Node.js</strong> pour fluidifier
              la communication et unifier les stacks.
            </li>
            <li>
              Échanges constants avec le responsable hardware pour gérer les{" "}
              <strong>flightcases connectées</strong> et assurer la
              compatibilité réseau.
            </li>
            <li>
              Participation aux <strong>sprints agiles</strong> et
              <strong> revues techniques</strong> : suivi de progression,
              priorisation, partage de solutions.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un environnement de travail fluide entre pôles techniques
            différents, une architecture consolidée et une équipe alignée sur la
            même vision du produit.
          </p>
          <p className="proof__link">
            →{" "}
            <Link to="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — Collaboration pédagogique</h3>
          <ul>
            <li>
              Collaboration à distance avec d’autres étudiants sur la structure
              du projet, la gestion des branches Git et la{" "}
              <strong>répartition des tâches</strong>.
            </li>
            <li>
              Partage des connaissances sur <strong>Docker</strong> et{" "}
              <strong>CI/CD</strong> pour harmoniser la compréhension des
              outils.
            </li>
            <li>
              Intégration des retours du groupe pour améliorer la{" "}
              <strong>documentation technique</strong> et la clarté des
              livrables.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un projet homogène, respectant les standards DevOps, où
            chaque membre a pu progresser techniquement grâce à un apprentissage
            collectif.
          </p>
          <p className="proof__link">
            → <Link to="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — Auto-collaboration et structuration</h3>
          <ul>
            <li>
              Conception solo d’un projet réutilisable, mais pensé pour{" "}
              <strong>être compris et repris</strong> par d’autres développeurs.
            </li>
            <li>
              Documentation du code, nommage clair et séparation des
              responsabilités par module.
            </li>
            <li>
              Réutilisation de ce socle comme{" "}
              <strong>base collaborative</strong> pour d’autres outils internes.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un code compréhensible, lisible et extensible —
            démontrant qu’une bonne organisation favorise la collaboration, même
            à distance.
          </p>
          <p className="proof__link">
            →{" "}
            <Link to="/projects/kanban-web-app">
              Voir le projet Kanban Web App
            </Link>
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau :</strong> confirmé — j’ai l’habitude de travailler
            en équipe technique pluridisciplinaire et d’adapter mon langage à
            chaque interlocuteur.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> essentielle — la
            collaboration technique est au cœur de mon rôle de développeur
            fullstack et de futur tech lead.
          </li>
          <li>
            <strong>Recul :</strong> je veille à équilibrer initiative
            individuelle et validation collective, surtout sur les choix
            architecturaux impactant plusieurs pôles.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur la collaboration technique
        </h2>
        <ul>
          <li>
            Approfondir la coordination inter-pôles à travers des{" "}
            <strong>outils de documentation visuelle</strong> (Miro, UML,
            Notion).
          </li>
          <li>
            Participer à la <strong>formation des nouveaux membres</strong> sur
            les stacks principales (React, Node.js, Docker).
          </li>
          <li>
            À moyen terme : encadrer une équipe agile complète en tant que{" "}
            <strong>tech lead</strong> ou{" "}
            <strong>architecte collaboratif</strong>.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <Link to="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Collaboration Unity · Backend · Hardware</p>
          </Link>

          <Link to="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Travail en équipe · GitLab · Documentation partagée</p>
          </Link>

          <Link to="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>Structure claire · Code collaboratif</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CollaborationSkill;
