import { Link } from "react-router-dom";

const ReactSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">Compétence — React</h1>
        <p className="skill__tagline">
          Interfaces dynamiques, connectées et modulaires avec{" "}
          <strong>React</strong>.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          <strong>React</strong> est une bibliothèque JavaScript orientée
          composants, idéale pour créer des interfaces
          <span className="highlight-blue"> réactives</span>,{" "}
          <span className="highlight-pink">scalables</span> et maintenables. Son{" "}
          <em>Virtual DOM</em> et sa logique de composants réutilisables
          permettent de construire des applications modernes tout en gardant un
          code clair et performant.
        </p>
        <p>
          Dans mes projets, j’emploie React pour concevoir des{" "}
          <strong>dashboards en temps réel</strong>, des outils interactifs et
          des interfaces connectées à des backends Node.js / C#. Couplé à{" "}
          <strong>Redux</strong> (gestion d’état),{" "}
          <strong>Socket.IO / WebSocket</strong> (temps réel) et parfois{" "}
          <strong>RC-Dock</strong> (fenêtres dockables), React dépasse
          l’affichage : il devient l’ossature d’une
          <strong> architecture front</strong> robuste.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Pilotage VR en temps réel</h3>
          <ul>
            <li>
              <strong>Carte interactive</strong> : suivi live des casques VR
              (position, batterie, température, connectivité).
            </li>
            <li>
              <strong>Redux</strong> pour stocker localement les flux et limiter
              les allers-retours réseau.
            </li>
            <li>
              <strong>WebSockets</strong> pour la télémétrie et les événements
              (sessions, groupes, commandes).
            </li>
            <li>
              UI <strong>dockable</strong> (RC-Dock) : fenêtres drag & drop,
              modales, notifications.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une interface <strong>fluide</strong> et{" "}
            <strong>stable</strong> dans un contexte fortement asynchrone, prête
            pour des fonctionnalités avancées (POV stream par casque).
          </p>
          <p className="proof__link">
            →{" "}
            <Link href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — Gestion locale avec persistance</h3>
          <ul>
            <li>
              Tableaux Kanban personnalisables, <strong>drag & drop</strong>{" "}
              (React Beautiful DnD), <strong>mode clair/sombre</strong>.
            </li>
            <li>
              <strong>Redux Toolkit</strong> + <strong>Redux Persist</strong>{" "}
              pour une sauvegarde 100% locale (sans backend).
            </li>
          </ul>
          <p className="proof__result">
            Résultat : base <strong>simple</strong>, <strong>rapide</strong> et{" "}
            <strong>réutilisable</strong> pour des outils personnels.
          </p>
          <p className="proof__link">
            →{" "}
            <Link href="/projects/kanban-web-app">
              Voir le projet Kanban Web App
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧱 PMT — Réflexes d’ingénierie d’interface</h3>
          <p>
            Même si PMT est majoritairement en Angular, j’y ai réappliqué mes
            bonnes pratiques React : découplage des couches, composants
            modulaires, gestion d’état et structure claire.
          </p>
          <p className="proof__link">
            → <Link href="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau</strong> : autonomie avancée sur la conception de
            composants, la gestion d’état (Redux / Context), l’intégration temps
            réel (WebSocket) et l’optimisation.
          </li>
          <li>
            <strong>Place dans mon profil</strong> : compétence front centrale —
            je conçois des UIs <span className="highlight-blue">vivantes</span>{" "}
            et <span className="highlight-pink">connectées</span>.
          </li>
          <li>
            <strong>Recul</strong> : React exige de la{" "}
            <em>rigueur structurelle</em>. Je centralise l’état, documente les
            flux et contrôle les effets de bord (Hooks) pour éviter l’entropie.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon évolution sur React</h2>
        <ul>
          <li>
            Approfondir <strong>React concurrent</strong> & Server Components
            (React 19) pour des UIs encore plus performantes.
          </li>
          <li>
            Systématiser les <strong>tests UI</strong> (Jest, Testing Library) :
            rendering, hooks, interactions.
          </li>
          <li>
            Explorer <strong>React Native</strong> pour relier mes UIs au mobile
            / casques VR (écosystème LFT).
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>

        <div className="skill__cards">
          <Link href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>React · Redux · WebSocket</p>
          </Link>

          <Link href="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>React · Redux Persist · DnD</p>
          </Link>

          <Link href="/projects/pmt" className="skill__card">
            <h3>🚀 PMT</h3>
            <p>Architecture & réflexes d’interface</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ReactSkill;
