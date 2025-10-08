import React from "react";
import { Link } from "react-router-dom";

const AutonomieSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Autonomie & Apprentissage continu
        </h1>
        <p className="skill__tagline">
          Apprendre vite, comprendre en profondeur, et progresser sans cesse
          dans un environnement en constante évolution.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          L’<strong>autonomie</strong> et l’
          <strong>apprentissage continu</strong>
          sont deux piliers essentiels du métier d’ingénieur logiciel. Être
          autonome, c’est savoir s’organiser, chercher, résoudre un problème
          sans dépendre systématiquement d’une aide extérieure. Apprendre
          continuellement, c’est cultiver cette curiosité naturelle qui pousse à
          explorer de nouvelles technologies, à remettre en question ses
          méthodes et à évoluer avec le temps.
        </p>
        <p>
          Dans le développement moderne, ces compétences ne sont pas accessoires
          : elles conditionnent la capacité à s’adapter à de nouveaux langages,
          frameworks, environnements et paradigmes. De <strong>Rust</strong> à{" "}
          <strong>Java</strong>, de <strong>React</strong>à{" "}
          <strong>Docker</strong>, mon parcours illustre une volonté constante
          d’apprendre, comprendre et expérimenter pour progresser.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>
            🎭 Large Field Theater — Montée en compétence et autonomie technique
          </h3>
          <ul>
            <li>
              Arrivée sur un projet complexe, sans documentation claire, mêlant
              Rust, React, C#, WebSocket et Unity.
            </li>
            <li>
              Apprentissage rapide du <strong>backend Node.js</strong>
              pour remplacer l’ancien serveur Rust, en concevant une API robuste
              et performante.
            </li>
            <li>
              Étude autonome des mécanismes de <strong>Socket.IO</strong> et de
              la gestion de la mémoire dans un contexte VR temps réel.
            </li>
            <li>
              Mise en place du <strong>Redux global</strong> et de la logique
              d’architecture du frontend, sans encadrement direct.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un projet stabilisé, réécrit proprement, et une
            architecture compréhensible et documentée par la suite pour
            l’équipe.
          </p>
          <p className="proof__link">
            →{" "}
            <Link href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>
            📦 Project Management Tool — Première immersion Java et DevOps
          </h3>
          <ul>
            <li>
              Autoformation complète sur <strong>Java Spring Boot</strong>
              et <strong>Angular</strong> pour concevoir une application
              fullstack.
            </li>
            <li>
              Apprentissage en autonomie de <strong>Docker</strong> et des
              <strong>pipelines GitLab CI/CD</strong> pour l’industrialisation
              du projet.
            </li>
            <li>
              Rédaction de documentation technique pour solidifier les acquis et
              transmettre la connaissance à d’autres apprenants.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un projet complet, maîtrisé de bout en bout, validé par
            le jury ISCOD avec mention pour sa qualité d’intégration.
          </p>
          <p className="proof__link">
            → <Link href="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — Apprentissage expérimental</h3>
          <ul>
            <li>
              Développement d’un outil personnel pour comprendre la{" "}
              <strong>gestion d’état locale</strong> avec Redux Toolkit et
              Persist.
            </li>
            <li>
              Exploration du <strong>drag & drop</strong> et de la persistance
              sans backend via React Beautiful DnD.
            </li>
            <li>
              Approche “learning by doing” : apprentissage par la pratique,
              refactoring progressif et amélioration continue.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une application fluide, stable et réutilisable — fruit
            d’un apprentissage autodirigé et méthodique.
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
            <strong>Niveau :</strong> très élevé — je suis à l’aise pour
            apprendre seul de nouvelles technologies, même en dehors de ma zone
            de confort.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> essentielle — c’est ce qui
            me permet de progresser constamment et d’adapter mes méthodes à
            chaque environnement.
          </li>
          <li>
            <strong>Recul :</strong> l’autonomie peut parfois isoler. J’ai
            appris à mieux équilibrer travail individuel et échanges collectifs
            pour partager mes acquis et renforcer la cohésion d’équipe.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur l’autonomie & l’apprentissage continu
        </h2>
        <ul>
          <li>
            Approfondir la <strong>veille technologique structurée</strong>
            (Rust, IA appliquée au DevOps, WebAssembly, React Server
            Components).
          </li>
          <li>
            Formaliser mes apprentissages à travers{" "}
            <strong>articles, documentations et partages d’expérience</strong>.
          </li>
          <li>
            Participer à des projets open-source pour élargir mes réflexes
            techniques et collaboratifs.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <Link href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Rust · Node.js · WebSocket · Redux</p>
          </Link>

          <Link href="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Java · Angular · Docker · CI/CD</p>
          </Link>

          <Link href="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>React · Redux Toolkit · Apprentissage par la pratique</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AutonomieSkill;
