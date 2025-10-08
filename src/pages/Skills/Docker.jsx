import React from "react";

const DockerSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">Compétence — Docker</h1>
        <p className="skill__tagline">
          Containerisation, orchestration et industrialisation avec{" "}
          <strong>Docker</strong> et <strong>Docker Compose</strong>.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>

        <p>
          <strong>Docker</strong> a profondément transformé ma manière de
          concevoir les projets. Au-delà de la simple exécution d’applications,
          il m’a appris la rigueur et la reproductibilité : un projet bien
          dockerisé doit pouvoir être lancé en une seule commande, sur n’importe
          quelle machine, sans dépendance externe.
        </p>

        <p>
          Docker est une plateforme de containerisation permettant d’isoler,
          déployer et exécuter des applications dans des environnements
          reproductibles et légers. En encapsulant chaque service (base de
          données, API, frontend...) dans un container autonome, il garantit la
          cohérence entre le développement, les tests et la production.
        </p>

        <p>
          Dans mes projets, <strong>Docker</strong> est au cœur de
          l’industrialisation logicielle : il standardise les environnements,
          simplifie le déploiement et automatise les pipelines d’intégration
          continue via <strong>GitLab CI/CD</strong>. Je l’ai utilisé pour
          containeriser aussi bien des applications full stack{" "}
          <em>(Java, Node.js, React)</em> que des systèmes réseau complexes
          comme <strong>Large Field Theater</strong>.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Architecture containerisée complète</h3>
          <ul>
            <li>
              Containerisation du <strong>backend Node.js</strong> et de la base{" "}
              <strong>MySQL</strong> pour des environnements de test isolés.
            </li>
            <li>
              Création d’un <strong>docker-compose.yml</strong> unifiant
              backend, base de données et serveurs DEM.
            </li>
            <li>
              Configuration de <strong>volumes persistants</strong> pour
              sauvegarder les données et simplifier le développement local.
            </li>
            <li>
              Optimisation des images pour un usage réseau performant
              (Socket.IO, flux VR temps réel).
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un environnement complet prêt à être déployé sur
            n’importe quelle machine, garantissant une cohérence parfaite entre
            les développeurs et les serveurs de production.
          </p>
          <p className="proof__link">
            →{" "}
            <Link to="/projects/large-field-theater">
              Voir le projet Large Field Theater
            </Link>
          </p>
        </article>

        <article className="proof">
          <h3>📦 Project Management Tool — CI/CD et déploiement automatisé</h3>
          <ul>
            <li>
              Création des <strong>Dockerfile</strong> pour le backend{" "}
              <strong>Spring Boot</strong>, le frontend <strong>Angular</strong>{" "}
              et la base de données <strong>MySQL</strong>.
            </li>
            <li>
              Orchestration via <strong>Docker Compose</strong> pour le build,
              les tests et le déploiement local.
            </li>
            <li>
              Intégration d’une <strong>pipeline GitLab CI/CD</strong>{" "}
              automatisant chaque étape : build → test → push → déploiement.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une chaîne <strong>DevOps complète</strong>, stable et
            automatisée, validée par le jury ISCOD en juin 2025.
          </p>
          <p className="proof__link">
            → <Link to="/projects/pmt">Voir le projet PMT</Link>
          </p>
        </article>

        <article className="proof">
          <h3>🧠 Développement local multi-service</h3>
          <ul>
            <li>
              Utilisation de <strong>Docker Desktop</strong> et{" "}
              <strong>Docker Compose</strong> pour lancer automatiquement tous
              les services nécessaires (backend, base, socket server).
            </li>
            <li>
              Structuration des images pour que les développeurs puissent
              simplement exécuter <code>docker-compose up</code> et travailler
              immédiatement sans configuration manuelle.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : gain de temps significatif et standardisation totale du
            développement local entre postes.
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau :</strong> maîtrise avancée des principes de
            containerisation (images, volumes, réseaux, orchestration Compose)
            et intégration dans un workflow DevOps complet.
          </li>
          <li>
            <strong>Place dans mon profil :</strong> Docker est une compétence
            <span className="highlight-blue"> transversale</span> — elle relie
            mes environnements <strong>Node</strong>, <strong>Java</strong> et{" "}
            <strong>MySQL</strong> tout en garantissant leur cohérence.
          </li>
          <li>
            <strong>Recul :</strong> l’utilisation de Docker m’a appris la{" "}
            <em>discipline structurelle</em> : chaque service doit être isolé,
            documenté et reproductible. J’ai notamment surmonté des difficultés
            liées aux réseaux inter-containers et à la persistance des volumes.
          </li>
          <li>
            <strong>Bonnes pratiques :</strong> je maintiens des{" "}
            <strong>Dockerfile clairs</strong>, des images multi-étages
            optimisées et une documentation accessible à l’équipe pour chaque
            environnement containerisé.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon évolution sur Docker</h2>
        <ul>
          <li>
            Approfondir l’orchestration à grande échelle via{" "}
            <strong>Kubernetes</strong> et <strong>Docker Swarm</strong>.
          </li>
          <li>
            Automatiser la surveillance des containers avec{" "}
            <strong>Prometheus</strong> et <strong>Grafana</strong>.
          </li>
          <li>
            Créer des images <strong>multi-étages</strong> optimisées pour la
            production (build + run séparés).
          </li>
          <li>
            Intégrer des <strong>tests d’intégration automatisés</strong>{" "}
            directement dans les pipelines CI/CD.
          </li>
          <li>
            Objectif 2026 : orchestrer les environnements LFT complets sur un
            cluster <strong>Kubernetes local</strong> pour tester la scalabilité
            réseau.
          </li>
        </ul>
      </section>

      {/* Réalisations associées */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>

        <div className="skill__cards">
          <Link to="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Backend Node.js · MySQL · Docker Compose</p>
          </Link>

          <Link to="/projects/pmt" className="skill__card">
            <h3>📦 Project Management Tool</h3>
            <p>Java Spring Boot · Angular · GitLab CI/CD</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DockerSkill;
