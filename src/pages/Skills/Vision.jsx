import React from "react";
import { Link } from "react-router-dom";

const VisionSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Vision & Prise de recul
        </h1>
        <p className="skill__tagline">
          Anticiper, structurer et donner du sens aux choix techniques et
          humains dans chaque projet.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          La <strong>vision</strong> consiste à comprendre un projet dans sa
          globalité — au-delà des lignes de code. Elle relie les aspects{" "}
          <span className="highlight-blue">techniques</span>,{" "}
          <span className="highlight-pink">humains</span> et{" "}
          <span className="highlight-blue">organisationnels</span> pour donner
          une direction claire.
        </p>
        <p>
          Dans le métier d’ingénieur logiciel, la vision permet d’anticiper les
          besoins, de hiérarchiser les priorités et de garantir la cohérence
          d’un système dans le temps. Elle s’exprime autant dans le choix d’une
          architecture que dans la manière d’impliquer une équipe ou de
          communiquer une idée.
        </p>
        <p>
          Pour moi, c’est une compétence que j’ai développée au fil de projets
          complexes — où chaque décision technique avait un impact sur
          l’expérience, la performance et la collaboration entre plusieurs pôles
          (frontend, backend, Unity, hardware).
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>
            🎭 Large Field Theater — Vision d’architecture et de cohérence
          </h3>
          <ul>
            <li>
              Réflexion sur la <strong>réduction du legacy Rust</strong> au
              profit d’une architecture plus claire : passage à Node.js pour le
              backend et C# pour le DEM server.
            </li>
            <li>
              Mise en place d’une <strong>vision unifiée</strong> du projet :
              React pour le front, API REST + WebSocket pour la communication,
              Redux pour la cohérence de données.
            </li>
            <li>
              Coordination entre les pôles Unity, backend et frontend pour
              maintenir une logique d’écosystème modulaire.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un projet plus lisible, scalable et maintenable, où
            chaque composant technique sert une finalité commune.
          </p>
          <p className="proof__link">
            →{" "}
            <Link href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — Compréhension du cycle complet</h3>
          <ul>
            <li>
              Conception du projet de manière globale : de la base de données
              MySQL au frontend Angular, en passant par la CI/CD GitLab.
            </li>
            <li>
              Vision DevOps : penser le projet comme une chaîne continue, pas
              comme des blocs isolés.
            </li>
            <li>
              Anticipation des usages et des futurs besoins (évolutivité,
              maintenance, modularité).
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un produit final industrialisé, cohérent de bout en bout,
            validé par le jury ISCOD pour la qualité de son exécution et de sa
            documentation.
          </p>
          <p className="proof__link">
            → <Link href="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧠 Apprentissage & réflexion personnelle</h3>
          <ul>
            <li>
              Capacité à remettre en question mes propres choix techniques : ne
              pas rester enfermé dans un langage ou une stack.
            </li>
            <li>
              Développement d’une approche systémique : comprendre comment
              chaque brique influence le reste du projet.
            </li>
            <li>
              Pratique régulière d’auto-évaluation après chaque sprint : ce qui
              a fonctionné, ce qui peut être amélioré, et pourquoi.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une progression continue et une meilleure prise de
            décision à long terme.
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau :</strong> élevé — j’ai une compréhension claire des
            enjeux techniques, humains et structurels d’un projet.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> compétence stratégique —
            elle guide mes choix d’architecture et mes décisions de
            développement.
          </li>
          <li>
            <strong>Recul :</strong> la vision exige parfois de savoir
            <em>ralentir pour mieux structurer</em>. J’apprends à équilibrer
            ambition technique et pragmatisme.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur la vision
        </h2>
        <ul>
          <li>
            Approfondir ma capacité à{" "}
            <strong>formaliser une vision technique</strong>
            claire via des diagrammes, documents d’architecture et présentations
            d’équipe.
          </li>
          <li>
            Développer la <strong>pédagogie</strong> pour partager cette vision
            à travers des workshops ou du mentoring.
          </li>
          <li>
            À long terme, tendre vers un rôle de <strong>tech lead</strong> ou{" "}
            <strong>architecte logiciel</strong> où la vision guide les
            décisions stratégiques et humaines.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <Link href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>
              Architecture modulaire · C# / Node.js · Coordination multi-pôles
            </p>
          </Link>

          <Link href="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Vision DevOps · CI/CD · Documentation structurée</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default VisionSkill;
