import React from "react";

const CommunicationSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">
          Compétence — Communication technique
        </h1>
        <p className="skill__tagline">
          Transformer la complexité technique en langage clair, fédérer les
          équipes et assurer la cohérence entre les pôles.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          La <strong>communication technique</strong> est la capacité à
          comprendre, vulgariser et partager une information complexe dans un
          cadre professionnel. Elle relie les{" "}
          <span className="highlight-blue">équipes techniques</span>, les{" "}
          <span className="highlight-pink">décideurs</span> et parfois les{" "}
          <span className="highlight-blue">utilisateurs finaux</span>.
        </p>

        <p>
          Dans un environnement d’ingénierie logicielle, cette compétence
          conditionne la qualité des échanges entre le <strong>frontend</strong>
          , le <strong>backend</strong>, la <strong>3D (Unity)</strong> ou les{" "}
          <strong>serveurs réseau</strong>. Une communication claire évite les
          malentendus, accélère les décisions et renforce la cohérence du
          produit final.
        </p>

        <p>
          Je l’ai développée en travaillant sur des projets où le dialogue entre
          pôles était indispensable — notamment dans{" "}
          <strong>Large Field Theater</strong>, où il fallait articuler les
          besoins du pôle Unity, du backend Node.js et du frontend React autour
          d’un langage commun.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Coordination multi-pôles</h3>
          <ul>
            <li>
              Communication directe avec les développeurs Unity pour définir les
              protocoles de communication entre le <strong>DEM server</strong>{" "}
              et le backend Node.js.
            </li>
            <li>
              Rédaction de documents explicatifs sur la{" "}
              <strong>structure des sockets</strong>, les{" "}
              <strong>formats JSON</strong> échangés et les{" "}
              <strong>flux de données</strong> pour synchroniser les casques VR.
            </li>
            <li>
              Collaboration avec l’équipe hardware sur la configuration réseau
              des <strong>flightcases</strong> et leur intégration via ADB.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : des échanges fluides entre pôles, une compréhension
            commune des architectures et une réduction significative des erreurs
            d’intégration.
          </p>
          <p className="proof__link">
            →{" "}
            <a href="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </a>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — Documentation et pédagogie</h3>
          <ul>
            <li>
              Rédaction d’une <strong>documentation technique complète</strong>{" "}
              (structure des entités, logique des contrôleurs, pipeline CI/CD).
            </li>
            <li>
              Explication du fonctionnement de la{" "}
              <strong>containerisation Docker</strong> et de la{" "}
              <strong>pipeline GitLab</strong> à d’autres étudiants du groupe.
            </li>
            <li>
              Participation active aux <strong>revues de code</strong> et aux{" "}
              <strong>échanges d’équipe</strong> pour améliorer la qualité du
              projet.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une meilleure compréhension des outils DevOps dans le
            groupe et une coordination efficace entre les développeurs front et
            back.
          </p>
          <p className="proof__link">
            → <a href="/projects/pmt">Voir le projet PMT</a>
          </p>
        </article>

        <article className="proof">
          <h3>🗣️ Communication en entreprise — L’Atelier Daruma</h3>
          <ul>
            <li>
              Participation aux <strong>sprints agiles</strong> hebdomadaires et
              présentation des avancées du front React auprès des responsables
              techniques.
            </li>
            <li>
              Traduction de problématiques techniques (performances,
              refactorisation, socket management) en{" "}
              <strong>termes accessibles</strong> pour les équipes non
              techniques.
            </li>
            <li>
              Transmission régulière de connaissances sur <strong>Redux</strong>
              , <strong>Socket.IO</strong> et la <strong>gestion d’état</strong>{" "}
              à d’autres développeurs.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : amélioration de la compréhension technique globale et
            montée en compétence collective de l’équipe.
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau :</strong> confirmé — je suis à l’aise pour
            expliquer, schématiser et documenter des concepts techniques
            complexes.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> essentielle — elle me
            permet de relier les pôles et de fluidifier les projets
            multi-technologies.
          </li>
          <li>
            <strong>Recul :</strong> je tends à structurer encore davantage mes
            échanges (diagrammes, docs visuelles) pour éviter les pertes
            d’information sur des projets à forte complexité.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">
          Mon évolution sur la communication technique
        </h2>
        <ul>
          <li>
            Approfondir la <strong>communication inter-pôle</strong> via des
            supports visuels : diagrammes UML, maquettes interactives,
            dashboards.
          </li>
          <li>
            Développer la <strong>communication ascendante</strong> avec les
            décideurs (rapports de performance, bilans de sprint).
          </li>
          <li>
            À moyen terme : encadrer des{" "}
            <strong>équipes techniques pluridisciplinaires</strong> et partager
            ma vision dans un rôle de tech lead ou de coordinateur technique.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>
        <div className="skill__cards">
          <a href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Coordination multi-pôles · Documentation des flux</p>
          </a>

          <a href="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Documentation technique · CI/CD · Transmission de savoir</p>
          </a>

          <a href="/projects/kanban-web-app" className="skill__card">
            <h3>🧩 Kanban Web App</h3>
            <p>Clarté du code · Structuration des composants</p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default CommunicationSkill;
