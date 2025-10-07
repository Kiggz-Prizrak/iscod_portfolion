import React from "react";

const MysqlSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">Compétence — MySQL</h1>
        <p className="skill__tagline">
          Modélisation, intégration et gestion des données relationnelles avec{" "}
          <strong>MySQL</strong>.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          <strong>MySQL</strong> est un système de gestion de base de données
          relationnelle (SGBDR) open-source largement utilisé pour le
          développement web et les architectures full stack. Sa robustesse, sa
          compatibilité et ses performances en font un standard pour le
          stockage, la structuration et la manipulation de données.
        </p>
        <p>
          Je l’utilise au cœur de mes projets pour modéliser les entités, gérer
          les relations et assurer la cohérence des données via{" "}
          <strong>Sequelize</strong> (Node.js) ou <strong>JPA/Hibernate</strong>{" "}
          (Java). Chaque base est pensée pour être <strong>intelligible</strong>
          , <strong>scalable</strong> et <strong>sécurisée</strong>.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Synchronisation multi-entités</h3>
          <ul>
            <li>
              Création d’un schéma complet pour les <strong>Devices</strong>,{" "}
              <strong>DeviceManagers</strong>, <strong>Groups</strong>,{" "}
              <strong>Sessions</strong> et <strong>DEM Servers</strong>.
            </li>
            <li>
              Gestion des relations <code>1-n</code> et <code>n-n</code> entre
              groupes, casques et serveurs.
            </li>
            <li>
              Indexation et contraintes d’intégrité pour éviter les doublons et
              garantir la cohérence des synchronisations WebSocket.
            </li>
            <li>
              Utilisation de <strong>Sequelize ORM</strong> pour une gestion
              fluide des entités tout en conservant un contrôle SQL natif pour
              les requêtes complexes.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une base <strong>robuste</strong>, capable de gérer des
            mises à jour en temps réel sans corruption ni latence excessive.
          </p>
          <p className="proof__link">
            →{" "}
            <a href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </a>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — Modélisation orientée métier</h3>
          <ul>
            <li>
              Conception d’un <strong>MCD complet</strong> : utilisateurs,
              projets, membres, tâches et rôles.
            </li>
            <li>
              Intégration avec <strong>Spring Data JPA</strong> et{" "}
              <strong>Hibernate</strong> pour gérer les entités et les
              relations.
            </li>
            <li>
              Requêtes paramétrées et transactions atomiques pour la gestion des
              statuts et priorités de tâches.
            </li>
            <li>
              Migration automatisée de la base via{" "}
              <strong>Docker + script SQL</strong>.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une structure claire et scalable, conforme aux standards
            professionnels et totalement intégrée au pipeline CI/CD.
          </p>
          <p className="proof__link">
            → <a href="/projects/pmt">Voir le projet PMT</a>
          </p>
        </article>

        <article className="proof">
          <h3>🧠 DEM Server — Gestion du stockage distribué</h3>
          <p>
            Implémentation d’un système d’enregistrement des statuts et logs de
            serveurs dans une base MySQL partagée entre le backend Node.js et
            les instances de serveurs DEM. L’objectif : centraliser les
            événements sans compromettre la cohérence ni les performances.
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau</strong> : maîtrise de la conception relationnelle,
            des jointures complexes et de l’intégration via ORM (Sequelize,
            Hibernate).
          </li>
          <li>
            <strong>Place dans mon profil</strong> : compétence technique
            centrale pour la persistance et la cohérence de mes applications
            full stack.
          </li>
          <li>
            <strong>Recul</strong> : MySQL est fiable mais nécessite une
            vigilance sur les index, la concurrence et la normalisation. Je
            veille à équilibrer performance et maintenabilité.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon évolution sur MySQL</h2>
        <ul>
          <li>
            Approfondir l’optimisation des requêtes complexes et la gestion des
            index.
          </li>
          <li>
            Expérimenter l’<strong>architecture multi-tenant</strong> et la
            réplication de bases sur Docker.
          </li>
          <li>
            Explorer la <strong>migration vers PostgreSQL</strong> pour des cas
            d’usage plus orientés data analytics.
          </li>
          <li>
            Mettre en place des tests d’intégrité automatisés dans mes pipelines
            CI/CD.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>

        <div className="skill__cards">
          <a href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Base relationnelle devices / sessions / DEM servers</p>
          </a>

          <a href="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Modèle JPA · Transactions · MySQL containerisé</p>
          </a>

          <a href="/projects/groupomania" className="skill__card">
            <h3>💬 Groupomania</h3>
            <p>Sequelize ORM · Authentification · MySQL backend</p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default MysqlSkill;
