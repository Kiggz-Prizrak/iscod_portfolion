import React from "react";
import { Link } from "react-router-dom";

const RigueurSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Rigueur & Organisation
        </h1>
        <p className="skill__tagline">
          Travailler avec méthode, structurer chaque projet et garantir la
          cohérence du code et des processus.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          La <strong>rigueur</strong> et l’<strong>organisation</strong>{" "}
          représentent la capacité à structurer le travail de développement de
          manière logique, claire et durable. Dans l’ingénierie logicielle,
          elles garantissent la qualité du code, la stabilité des livrables et
          la fiabilité de l’ensemble du système.
        </p>
        <p>
          Être rigoureux, c’est anticiper les erreurs avant qu’elles n’arrivent,
          documenter les processus et appliquer les bonnes pratiques. Être
          organisé, c’est gérer efficacement son temps, ses priorités et les
          interdépendances entre composants — surtout dans des projets complexes
          où cohabitent plusieurs technologies et environnements (React,
          Node.js, C#, Docker, MySQL...).
        </p>
        <p>
          Cette compétence est au cœur de ma pratique : que ce soit dans la
          gestion du{" "}
          <span className="highlight-blue">state global avec Redux</span>, la{" "}
          <span className="highlight-pink">
            mise en place de pipelines CI/CD
          </span>
          ou la{" "}
          <span className="highlight-blue">
            conception d’architectures modulaires
          </span>
          , chaque étape suit une logique structurée et documentée.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>
            🎭 Large Field Theater — Méthode et rigueur dans la complexité
          </h3>
          <ul>
            <li>
              Organisation de la <strong>structure du code frontend</strong>{" "}
              autour d’un Redux global, assurant la cohérence des données entre
              les casques VR, le backend et le serveur DEM.
            </li>
            <li>
              Gestion des sockets via un <strong>WebSocketProvider</strong>{" "}
              centralisé, garantissant une logique uniforme sur toute
              l’application.
            </li>
            <li>
              Documentation technique et journalisation des processus de
              communication entre les différents pôles (backend, DEM, Unity).
            </li>
            <li>
              Application d’une <strong>méthodologie agile</strong> : sprints,
              revues, rétrospectives, et priorisation continue.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un code stable, lisible et reproductible, capable de
            gérer des flux de données complexes sans perte de performance ni
            décalage visuel.
          </p>
          <p className="proof__link">
            →{" "}
            <Link href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — Discipline DevOps</h3>
          <ul>
            <li>
              Mise en place d’une <strong>pipeline GitLab CI/CD</strong>{" "}
              structurée : build → test → déploiement → vérification
              automatique.
            </li>
            <li>
              Containerisation complète avec <strong>Docker</strong> pour
              garantir la reproductibilité entre les environnements.
            </li>
            <li>
              Respect strict du <strong>cahier des charges</strong> et
              validation de tous les livrables dans les temps.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un déploiement automatisé, un environnement maîtrisé et
            un projet validé par le jury ISCOD avec mention pour la qualité du
            code.
          </p>
          <p className="proof__link">
            → <Link href="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — Organisation front et gestion du flux</h3>
          <ul>
            <li>
              Architecture claire en <strong>composants React</strong>,
              séparation stricte entre logique, interface et persistance.
            </li>
            <li>
              Gestion locale des données avec <strong>Redux Persist</strong>
              pour une sauvegarde fiable sans backend.
            </li>
            <li>
              Implémentation de <strong>tests manuels systématiques</strong>à
              chaque nouvelle fonctionnalité.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un outil stable, intuitif et proprement documenté — conçu
            pour servir de base à d’autres outils personnels.
          </p>
          <p className="proof__link">
            →{" "}
            <Link href="/projects/kanban-web-app">
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
            <strong>Niveau :</strong> élevé — rigueur naturelle, processus de
            travail structuré et documentation systématique.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> centrale — c’est ce qui me
            permet d’assurer la fiabilité et la maintenabilité de mes projets.
          </li>
          <li>
            <strong>Recul :</strong> savoir équilibrer rigueur et flexibilité :
            un projet agile doit rester adaptable aux imprévus et aux nouvelles
            idées.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur la rigueur & l’organisation
        </h2>
        <ul>
          <li>
            Formaliser davantage mes processus à l’aide de{" "}
            <strong>templates standardisés</strong> (architecture,
            documentation, tests).
          </li>
          <li>
            Intégrer des <strong>tests automatisés</strong> dans mes pipelines
            CI/CD pour renforcer la qualité.
          </li>
          <li>
            Partager ma méthode via des <strong>revues de code</strong> et
            mentorat technique pour diffuser les bonnes pratiques.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <Link href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Redux · Architecture modulaire · Processus agiles</p>
          </Link>

          <Link href="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>CI/CD · Docker · Documentation technique</p>
          </Link>

          <Link href="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>Organisation du flux · Composants réutilisables</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RigueurSkill;
