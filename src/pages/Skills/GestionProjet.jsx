import React from "react";
import { Link } from "react-router-dom";

const GestionProjetSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Gestion de projet & Méthode Agile
        </h1>
        <p className="skill__tagline">
          Organiser, prioriser et piloter le développement pour livrer un
          produit fiable, évolutif et centré sur la valeur.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          La <strong>gestion de projet</strong> consiste à planifier, organiser
          et coordonner les ressources et les tâches pour atteindre un objectif
          dans les délais et avec la qualité attendue. La{" "}
          <strong>méthode agile</strong>, quant à elle, favorise l’adaptation
          continue, la communication et la collaboration au sein de l’équipe.
        </p>
        <p>
          En tant que développeur full stack, j’ai appris à équilibrer les
          aspects techniques et humains de la gestion de projet : décomposer un
          objectif en
          <strong>tickets clairs</strong>, organiser les sprints, suivre la
          <strong>valeur produite</strong> et communiquer les priorités.
        </p>
        <p>
          J’applique une approche agile dans mes projets — avec des cycles
          courts, des points de suivi réguliers et une priorisation constante —
          afin de livrer des versions fonctionnelles fréquentes et d’assurer la
          stabilité technique à chaque étape.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>
            🎭 Large Field Theater — Pilotage de sprints et suivi itératif
          </h3>
          <ul>
            <li>
              Mise en place de cycles <strong>agiles hebdomadaires</strong> :
              définition d’objectifs précis et planification des priorités.
            </li>
            <li>
              Suivi des avancées via un tableau de bord et des réunions de{" "}
              <strong>revue / rétrospective</strong>.
            </li>
            <li>
              Documentation continue et ajustement des priorités selon les
              retours du pôle Unity et des tests en situation réelle.
            </li>
            <li>
              Coordination technique entre les serveurs <strong>DEM</strong>, le
              backend Node.js et le frontend React pour aligner les jalons.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un rythme de développement fluide, une répartition claire
            des tâches et une architecture pilotée par les besoins utilisateurs.
          </p>
          <p className="proof__link">
            →{" "}
            <Link to="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>
            📦 Project Management Tool — Organisation structurée du
            développement
          </h3>
          <ul>
            <li>
              Conception complète d’un outil{" "}
              <strong>de gestion de tâches agile</strong>
              (projets, priorités, statuts, membres).
            </li>
            <li>
              Structuration du développement par modules, avec découpage en
              <strong>tâches atomiques</strong> et validations successives.
            </li>
            <li>
              Utilisation de <strong>GitLab</strong> pour le suivi des commits,
              issues et pipelines CI/CD.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un projet industrialisé, livré dans les délais et validé
            comme exemple de gestion agile et d’intégration continue.
          </p>
          <p className="proof__link">
            → <Link to="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — Application de la logique agile</h3>
          <ul>
            <li>
              Création d’une application inspirée du <strong>Kanban</strong>
              pour expérimenter la visualisation du flux de travail.
            </li>
            <li>
              Reproduction de la logique d’un sprint : tâches à faire, en cours,
              terminées — avec gestion dynamique via drag & drop.
            </li>
            <li>
              Implémentation de la persistance locale pour suivre les progrès au
              fil des itérations.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un outil pédagogique et pratique pour organiser et
            visualiser les processus agiles.
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
            <strong>Niveau :</strong> confirmé — expérience concrète de la
            méthode agile et des outils de pilotage (GitLab, Kanban, sprints,
            rétrospectives).
          </li>
          <li>
            <strong>Place dans mon profil :</strong> stratégique — cette
            compétence me permet de coordonner efficacement les aspects
            techniques et humains.
          </li>
          <li>
            <strong>Recul :</strong> j’ai appris à équilibrer rigueur et
            adaptabilité : planifier sans figer, ajuster sans désorganiser.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur la gestion de projet & méthode agile
        </h2>
        <ul>
          <li>
            Approfondir les pratiques de{" "}
            <strong>Scrum et Kanban professionnels</strong>
            (gestion des priorités, sprint reviews, story points).
          </li>
          <li>
            M’initier à la <strong>gestion d’équipe technique</strong> en tant
            que scrum master ou coordinateur de pôle.
          </li>
          <li>
            Intégrer des outils de suivi plus avancés comme{" "}
            <strong>Jira, Notion ou Linear</strong> pour optimiser la
            traçabilité.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <Link to="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Sprints agiles · Coordination multi-pôles</p>
          </Link>

          <Link to="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>CI/CD · Gestion des priorités · Méthode Agile</p>
          </Link>

          <Link to="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>Visualisation du flux · Esprit agile</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default GestionProjetSkill;
