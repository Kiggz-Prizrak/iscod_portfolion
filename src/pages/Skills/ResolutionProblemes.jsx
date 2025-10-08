import React from "react";
import { Link } from "react-router-dom";

const ResolutionProblemesSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Résolution de problèmes & Pensée analytique
        </h1>
        <p className="skill__tagline">
          Comprendre, diagnostiquer et résoudre avec méthode — transformer un
          obstacle en amélioration durable.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          La <strong>résolution de problèmes</strong> et la{" "}
          <strong>pensée analytique</strong> désignent la capacité à identifier
          l’origine d’un dysfonctionnement, à le décortiquer, puis à concevoir
          une solution adaptée et reproductible. Dans le développement logiciel,
          c’est une compétence clé : elle relie la logique, la rigueur et la
          créativité.
        </p>
        <p>
          Être analytique, c’est comprendre la structure d’un problème avant de
          chercher à le corriger. Être un bon “problem solver”, c’est aller
          au-delà du symptôme : anticiper les effets de bord, prévenir les
          régressions, et consolider le système global.
        </p>
        <p>
          Dans mes projets, j’ai développé cette compétence à travers des
          situations complexes : bugs en production, surcharge réseau,
          comportements imprévisibles en temps réel, ou encore interactions
          asynchrones entre front et back. Mon approche s’appuie toujours sur
          une{" "}
          <strong>analyse rationnelle, une expérimentation contrôlée</strong> et
          une <strong>documentation systématique</strong>.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Diagnostic mémoire & synchronisation</h3>
          <ul>
            <li>
              Investigation d’un <strong>problème de saturation mémoire</strong>{" "}
              lors de l’envoi massif de données via WebSocket entre backend,
              serveurs DEM et front React.
            </li>
            <li>
              Mise en place de logs détaillés côté Node.js pour suivre le flux
              réseau et isoler les requêtes redondantes.
            </li>
            <li>
              Détection d’un problème de boucles d’émission causé par une
              mauvaise synchronisation des états côté Redux.
            </li>
            <li>
              Refonte de la gestion d’état : réduction des re-renders, filtrage
              des payloads, et structuration de la logique asynchrone.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : gain de stabilité, réduction du trafic de 60 %, et un
            système temps réel fluide même sur des casques VR multiples.
          </p>
          <p className="proof__link">
            →{" "}
            <Link to="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — Débogage des dépendances CI/CD</h3>
          <ul>
            <li>
              Problèmes initiaux : build Docker qui échouait sur le pipeline
              GitLab CI en raison de variables d’environnement manquantes.
            </li>
            <li>
              Recherche systématique via logs GitLab et comparaison entre build
              local / distant.
            </li>
            <li>
              Ajout progressif de <strong>stages CI</strong> intermédiaires pour
              isoler les erreurs (test, build, deploy).
            </li>
            <li>Validation via build automatisé et push vers Docker Hub.</li>
          </ul>
          <p className="proof__result">
            Résultat : pipeline stable, industrialisation complète du projet et
            déploiement reproductible sur n’importe quel environnement.
          </p>
          <p className="proof__link">
            → <Link to="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧩 Kanban Web App — Gestion d’un bug logique React</h3>
          <ul>
            <li>
              Résolution d’un <strong>bug de boucle infinie</strong> dans le
              hook d’effet principal suite à un appel asynchrone non mémorisé.
            </li>
            <li>
              Analyse du comportement via les outils React DevTools et console
              profiler.
            </li>
            <li>
              Correction en stabilisant la dépendance du hook et en ajoutant une
              vérification de flux logique.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : meilleure compréhension du cycle de rendu React et de la
            propagation des états dans les composants imbriqués.
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
            <strong>Niveau :</strong> élevé — je maîtrise les techniques de
            débogage avancées (logs, traces, tests ciblés, instrumentation) et
            d’analyse comportementale des systèmes complexes.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> essentielle — cette
            compétence soutient toutes mes autres : performance, fiabilité et
            architecture.
          </li>
          <li>
            <strong>Recul :</strong> j’ai appris à mieux documenter les
            diagnostics pour accélérer la compréhension collective et éviter les
            répétitions d’erreurs.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur la résolution de problèmes
        </h2>
        <ul>
          <li>
            Approfondir les <strong>techniques de profiling</strong> (Node.js,
            React, Docker) pour mesurer les performances système.
          </li>
          <li>
            Mettre en place des <strong>tests de charge</strong> automatisés et
            de la supervision réseau (Prometheus, Grafana).
          </li>
          <li>
            Documenter davantage mes diagnostics dans un format standard
            (post-mortems, rapports de résolution).
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <Link to="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Analyse mémoire · Synchronisation WebSocket</p>
          </Link>

          <Link to="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>CI/CD · Debug pipeline · Docker</p>
          </Link>

          <Link to="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>React Hooks · Analyse des flux · Debug UI</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ResolutionProblemesSkill;
