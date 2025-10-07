import React from "react";

const JavascriptSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">Compétence — JavaScript</h1>
        <p className="skill__tagline">
          Langage pivot du <strong>développement web moderne</strong>, base de
          toutes mes applications front et back-end.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          <strong>JavaScript</strong> est le langage central du web moderne,
          permettant d’unifier l’expérience utilisateur et la logique
          applicative sur l’ensemble du cycle de développement. Initialement
          conçu pour le navigateur, il est aujourd’hui omniprésent grâce à{" "}
          <strong>Node.js</strong>, qui lui a ouvert les portes du
          <span className="highlight-pink"> back-end</span>.
        </p>
        <p>
          Je l’utilise quotidiennement pour concevoir des{" "}
          <strong>interfaces interactives</strong>, des{" "}
          <strong>architectures temps réel</strong> et des{" "}
          <strong>API REST performantes</strong>. JavaScript est le point commun
          entre mes stacks — de React à Node, de Redux à Socket.IO —
          garantissant une cohérence technique sur l’ensemble du projet.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Architecture temps réel</h3>
          <ul>
            <li>
              Développement d’un <strong>frontend React</strong> et d’un{" "}
              <strong>backend Node.js</strong> interconnectés via WebSocket.
            </li>
            <li>
              Implémentation de la <strong>gestion d’état Redux</strong> pour
              synchroniser les données de dizaines de casques VR en parallèle.
            </li>
            <li>
              Écoute et traitement de flux asynchrones JSON : positions, niveaux
              de batterie, statuts de connexion, et envoi de commandes
              interactives.
            </li>
            <li>
              Optimisation des performances et réduction des re-renders grâce à
              la déstructuration intelligente des hooks React et au memoization.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un écosystème JavaScript complet, stable, et performant,
            unifiant le front, le back et le serveur de communication.
          </p>
          <p className="proof__link">
            →{" "}
            <a href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </a>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — JavaScript structuré et réactif</h3>
          <ul>
            <li>
              Architecture 100% JavaScript avec React et Redux Toolkit pour une
              gestion fluide de l’état.
            </li>
            <li>
              Implémentation du <strong>drag & drop</strong> avec React
              Beautiful DnD et de la persistance via localStorage.
            </li>
            <li>
              Modularisation des composants pour assurer la réutilisabilité et
              la clarté du code.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une application 100% client, légère, intuitive et sans
            dépendance serveur.
          </p>
          <p className="proof__link">
            →{" "}
            <a href="/projects/kanban-web-app">Voir le projet Kanban Web App</a>
          </p>
        </article>

        <article className="proof">
          <h3>📦 PMT — Intégration TypeScript / JavaScript</h3>
          <p>
            Bien que majoritairement développé en Angular et Java,{" "}
            <strong>PMT</strong> m’a permis de consolider la logique des{" "}
            <strong>modèles orientés objets</strong> en TypeScript, une
            extension typée de JavaScript. J’y ai travaillé sur la clarté des
            interfaces et la rigueur du typage pour fiabiliser les échanges
            front-back.
          </p>
          <p className="proof__link">
            → <a href="/projects/pmt">Voir le projet PMT</a>
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau</strong> : maîtrise confirmée du langage ES6+ (async,
            promises, destructuring, classes, modules) et des frameworks
            associés.
          </li>
          <li>
            <strong>Place dans mon profil</strong> : cœur technique de tous mes
            projets — la colonne vertébrale de ma polyvalence full stack.
          </li>
          <li>
            <strong>Recul</strong> : JavaScript est un langage souple, parfois
            trop permissif. J’adopte systématiquement des conventions de code
            strictes et des linters pour préserver la stabilité et la
            lisibilité.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur JavaScript
        </h2>
        <ul>
          <li>
            Approfondir les <strong>design patterns</strong> (observer, factory,
            dependency injection) pour structurer les applications complexes.
          </li>
          <li>
            Renforcer la maîtrise des <strong>API Web modernes</strong> :
            WebRTC, Streams, Service Workers.
          </li>
          <li>
            Intégrer encore plus <strong>TypeScript</strong> pour une meilleure
            robustesse et maintenabilité.
          </li>
          <li>
            Continuer à perfectionner mes pratiques{" "}
            <strong>asynchrones et fonctionnelles</strong>.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>

        <div className="skill__cards">
          <a href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>React · Redux · Node.js · WebSocket</p>
          </a>

          <a href="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>React · Redux Toolkit · DnD</p>
          </a>

          <a href="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Angular · TypeScript · Architecture orientée objets</p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default JavascriptSkill;
