import {
  faAngular,
  faDocker,
  faGitlab,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProjectBanner from "../../components/ProjectBanner";

const Pmt = () => {
  return (
    <main className="bg-nebula bg-stars ">
      <ProjectBanner
        title="Project Management Tool (PMT)"
        subtitle="application fullstack Java Spring Boot · Angular · Docker · CI/CD"
      />

      <div
        className="project__tech-banner"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          margin: "2rem 0",
          fontSize: "4rem",
        }}
      >
        <FontAwesomeIcon icon={faJava} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faAngular} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faDocker} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faGitlab} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faDatabase} className="fa-circle-bg fa-glitch" />
      </div>

      <div className="project ">
        <div className="project__meta">
          <p>
            📅 <strong>Période :</strong> Juin 2025 — projet de validation du
            bloc{" "}
            <em>“Intégration, industrialisation et déploiement de logiciel”</em>{" "}
            à l’<strong>ISCOD</strong>.
          </p>

          <p>
            🧠 <strong>Rôle :</strong> développement{" "}
            <span className="highlight-blue">full stack</span> — conception du{" "}
            <strong>backend</strong> en{" "}
            <span className="highlight-pink">Java Spring Boot</span> et du{" "}
            <strong>frontend</strong> en{" "}
            <span className="highlight-pink">Angular (TypeScript)</span>.
          </p>

          <p>
            ⚙️ <strong>Stack technique :</strong> Java · Spring Boot · Angular ·
            TypeScript · MySQL · Docker · GitLab CI/CD.
          </p>

          <p>
            🚀 <strong>Objectif :</strong> concevoir une application web
            complète de{" "}
            <span className="highlight-blue">gestion de projets</span> intégrant
            la <span className="highlight-pink">planification des tâches</span>,
            la <span className="highlight-pink">gestion des membres</span> et
            une{" "}
            <span className="highlight-pink">
              pipeline d’intégration continue
            </span>{" "}
            entièrement automatisée.
          </p>
        </div>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Présentation</h2>

          <div className="presentation__content">
            <p>
              <strong>Project Management Tool (PMT)</strong> est une application
              web <span className="highlight-blue">full stack</span> conçue pour
              faciliter la gestion de projets collaboratifs en entreprise. Ce
              projet a été développé dans le cadre de l’<strong>ISCOD</strong>{" "}
              en juin 2025, dans le but de valider le bloc de compétences{" "}
              <em>
                “Intégration, industrialisation et déploiement de logiciel”
              </em>{" "}
              du titre RNCP Niveau 7 – Expert en Ingénierie du Logiciel.
            </p>

            <p>
              L’application permet à une équipe de{" "}
              <strong>
                créer, planifier et suivre l’avancement de projets
              </strong>{" "}
              en temps réel. Elle offre un ensemble complet de fonctionnalités :
              gestion des tâches, attribution des priorités, suivi des statuts,
              et interaction entre les membres d’un même projet.
            </p>

            <p>
              Ce projet a marqué une étape importante dans mon parcours,
              puisqu’il s’agit de ma première application{" "}
              <span className="highlight-pink">Java Spring Boot</span> couplée à
              un <span className="highlight-blue">frontend Angular</span>. J’y
              ai intégré mes premières pratiques <strong>DevOps</strong> avec la{" "}
              <span className="highlight-pink">containerisation Docker</span> et
              la mise en place d’une{" "}
              <span className="highlight-blue">pipeline CI/CD GitLab</span> pour
              le déploiement automatisé.
            </p>

            <p>
              Le projet se distingue par son approche professionnelle :
              <strong> respect des exigences techniques</strong>,{" "}
              <strong>code conforme et documenté</strong>,{" "}
              <strong>tests fonctionnels réussis</strong> et{" "}
              <strong>architecture propre</strong> entre le front et le back.
              Tous les livrables ont été validés et le projet a obtenu une
              évaluation exemplaire.
            </p>

            <p>
              <strong>PMT</strong> illustre parfaitement ma montée en compétence
              sur les technologies Java et Angular, tout en consolidant ma
              maîtrise des environnements industriels : intégration continue,
              gestion de version et déploiement automatisé.
            </p>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Lancement du projet</h2>

          <div className="project__content">
            <p>
              Le projet <strong>PMT – Project Management Tool</strong> est né
              d’un besoin concret : concevoir une application professionnelle
              permettant de{" "}
              <span className="highlight-blue">
                centraliser la gestion de projets
              </span>
              , du suivi des tâches à la collaboration entre membres d’équipe.
            </p>

            <p>
              L’objectif principal était de développer un outil complet et
              industrialisé, intégrant{" "}
              <strong>toutes les étapes du cycle de vie logiciel</strong> :
              conception, développement, test, containerisation et déploiement
              automatisé. Ce projet s’inscrivait pleinement dans la logique{" "}
              <span className="highlight-pink">DevOps</span> prônée par la
              formation ISCOD.
            </p>

            <p>
              Pour le backend, j’ai choisi <strong>Java Spring Boot</strong>{" "}
              afin de concevoir une API REST robuste, sécurisée et modulaire.
              Elle gère la création de projets, la gestion des membres, des
              rôles, et des tâches avec différents statuts et niveaux de
              priorité.
            </p>

            <p>
              Le frontend, développé en <strong>Angular (TypeScript)</strong>,
              permet une visualisation claire et fluide des projets via une
              interface moderne. Les utilisateurs peuvent créer, modifier et
              suivre leurs tâches en temps réel à travers des composants
              réactifs et une architecture modulaire.
            </p>

            <p>
              L’ensemble du projet repose sur une{" "}
              <span className="highlight-blue">base de données MySQL</span>{" "}
              connectée au backend via <strong>JPA/Hibernate</strong>. Le tout
              est containerisé avec <strong>Docker</strong> et automatisé via
              une <strong>pipeline GitLab CI/CD</strong> assurant les étapes de
              build, test et déploiement.
            </p>

            <p>
              Ce projet m’a permis de combiner plusieurs domaines de compétence
              :
              <strong>
                {" "}
                développement full stack, intégration continue, déploiement
                automatisé
              </strong>{" "}
              et <strong>structuration de projet en équipe</strong>. Il a aussi
              été l’occasion de maîtriser la logique de{" "}
              <span className="highlight-pink">Spring Boot MVC</span> et la
              communication entre le client Angular et l’API REST.
            </p>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">
            Fonctionnalités principales
          </h2>

          <div className="project__content">
            <p>
              <strong>Project Management Tool (PMT)</strong> regroupe l’ensemble
              des fonctionnalités attendues d’un outil de gestion de projet
              moderne, associant{" "}
              <span className="highlight-blue">productivité</span> et{" "}
              <span className="highlight-pink">
                industrialisation logicielle
              </span>
              . Chaque module a été pensé pour reproduire un environnement de
              travail complet, du développement à la coordination d’équipe.
            </p>

            <ul className="feature-list">
              <li>
                📋 <strong>Création et gestion de projets</strong> : chaque
                utilisateur authentifié peut créer un projet, le configurer et
                inviter des membres à y collaborer.
              </li>

              <li>
                👥 <strong>Gestion des membres et des rôles</strong> :
                distinction entre
                <em>administrateur</em>, <em>membre</em> et <em>observateur</em>
                , avec droits d’accès spécifiques et sécurisés.
              </li>

              <li>
                ✅ <strong>Gestion des tâches</strong> : création, modification
                et suivi des tâches par projet, avec statut (<em>à faire</em>,{" "}
                <em>en cours</em>, <em>terminé</em>) et priorité (<em>basse</em>
                , <em>moyenne</em>, <em>haute</em>).
              </li>

              <li>
                🗂️ <strong>Tableau Kanban dynamique</strong> : affichage visuel
                des tâches selon leur statut, pour un suivi clair de la
                progression de chaque projet.
              </li>

              <li>
                🔐 <strong>Authentification sécurisée</strong> : gestion des
                comptes utilisateurs via JWT, chiffrement des mots de passe et
                validation des accès.
              </li>

              <li>
                🧠 <strong>Back-end modulaire Spring Boot</strong> :
                architecture MVC, endpoints RESTful, et services découplés pour
                faciliter la maintenance et les évolutions futures.
              </li>

              <li>
                💻 <strong>Interface Angular moderne</strong> : navigation
                fluide, formulaires réactifs, affichage dynamique des données et
                UX optimisée.
              </li>

              <li>
                🧱 <strong>Base de données MySQL</strong> : relations entre
                projets, utilisateurs et tâches gérées via ORM JPA/Hibernate.
              </li>

              <li>
                🐳 <strong>Containerisation complète avec Docker</strong> :
                back-end, front-end et base de données isolés dans des services
                indépendants, orchestrés via Docker Compose.
              </li>

              <li>
                ⚙️ <strong>Pipeline GitLab CI/CD</strong> : automatisation du
                build, des tests et du déploiement, garantissant un flux de
                production stable et reproductible.
              </li>

              <li>
                🧾 <strong>Documentation et livrables complets</strong> :
                schémas d’architecture, scripts SQL, fichier Dockerfile et
                rapports techniques intégrés au dépôt GitLab.
              </li>
            </ul>

            <p>
              Grâce à cette architecture modulaire, <strong>PMT</strong> peut
              être déployé facilement sur n’importe quel environnement
              compatible Docker, et adapté à différents contextes de gestion de
              projets collaboratifs.
            </p>
          </div>
        </section>
        <section className="project__section steps">
          <h2 className="project__subtitle neon-yellow">
            Les étapes du projet
          </h2>

          <p>
            Le développement de <strong>PMT</strong> s’est déroulé en plusieurs
            étapes successives, chacune ayant permis de poser des fondations
            solides et d’intégrer progressivement les bonnes pratiques de
            développement et d’industrialisation.
          </p>

          <div className="steps__list">
            <div className="steps__item">
              <div className="steps__badge">1</div>
              <h3>Analyse du besoin et conception</h3>
              <ul>
                <li>
                  Étude du cahier des charges et identification des
                  fonctionnalités clés : gestion des projets, des membres et des
                  tâches.
                </li>
                <li>
                  Élaboration du{" "}
                  <strong>modèle conceptuel de données (MCD)</strong> et du
                  schéma relationnel MySQL.
                </li>
                <li>
                  Conception de l’architecture logicielle basée sur une
                  séparation claire entre <strong>backend Spring Boot</strong>{" "}
                  et <strong>frontend Angular</strong>.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">2</div>
              <h3>Développement du backend (Java Spring Boot)</h3>
              <ul>
                <li>
                  Mise en place du projet <strong>Spring Boot</strong> avec
                  structure MVC (Model, View, Controller).
                </li>
                <li>
                  Création des entités JPA : utilisateurs, projets, tâches et
                  rôles.
                </li>
                <li>
                  Développement des endpoints REST pour les opérations CRUD et
                  la gestion des statuts.
                </li>
                <li>
                  Sécurisation de l’API avec <strong>Spring Security</strong> et{" "}
                  <strong>JWT</strong>.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">3</div>
              <h3>Développement du frontend (Angular)</h3>
              <ul>
                <li>
                  Création des composants Angular pour la gestion des projets,
                  tâches et utilisateurs.
                </li>
                <li>
                  Implémentation du <strong>routing</strong> et des{" "}
                  <strong>guards d’authentification</strong>.
                </li>
                <li>
                  Intégration des services HTTP pour la communication avec l’API
                  REST.
                </li>
                <li>
                  Mise en place du design responsive et d’une interface claire
                  pour le tableau Kanban.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">4</div>
              <h3>Containerisation et CI/CD</h3>
              <ul>
                <li>
                  Création des <strong>Dockerfile</strong> pour le frontend, le
                  backend et la base de données MySQL.
                </li>
                <li>
                  Configuration d’un <strong>docker-compose.yml</strong>{" "}
                  orchestrant les services.
                </li>
                <li>
                  Mise en place d’une <strong>pipeline GitLab CI/CD</strong>{" "}
                  pour le build, les tests et le déploiement automatisé.
                </li>
                <li>
                  Validation des builds et intégration continue sur chaque push.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">5</div>
              <h3>Validation finale et livrables</h3>
              <ul>
                <li>
                  Réalisation des tests unitaires et fonctionnels côté front et
                  back.
                </li>
                <li>
                  Vérification de la conformité aux exigences du cahier des
                  charges.
                </li>
                <li>
                  Livraison du projet complet avec documentation technique,
                  captures d’écran, scripts SQL et pipeline GitLab.
                </li>
                <li>
                  Validation officielle du projet par le jury ISCOD avec mention
                  pour la qualité du code et la rigueur de la mise en œuvre.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="project__section results">
          <h2 className="project__subtitle neon-yellow">Les résultats</h2>

          {/* Bloc "Pour moi" */}
          <div className="results__block">
            <h3 className="results__title">Pour moi</h3>

            <p>
              Le développement de <strong>PMT</strong> a représenté un véritable
              jalon dans mon parcours de formation. C’était à la fois mon
              premier projet en <strong>Java Spring Boot</strong> et ma première
              mise en œuvre complète d’une <strong>pipeline CI/CD</strong> avec{" "}
              <strong>Docker</strong>
              et <strong>GitLab</strong>.
            </p>

            <p>
              Ce projet m’a permis d’approfondir ma compréhension du cycle de
              vie d’une application industrielle, depuis la conception du code
              jusqu’au déploiement automatisé. J’y ai consolidé mes compétences
              en <span className="highlight-blue">architecture logicielle</span>
              , en <span className="highlight-pink">intégration continue</span>{" "}
              et en <span className="highlight-blue">gestion de version</span>.
            </p>

            <ul>
              <li> Première expérience complète avec Java et Spring Boot</li>
              <li> Maîtrise des concepts de containerisation Docker</li>
              <li> Mise en place d’une pipeline GitLab CI/CD automatisée</li>
              <li>Amélioration de la rigueur et de la documentation du code</li>
              <li>
                Renforcement de l’approche DevOps : tests, build, intégration,
                déploiement
              </li>
            </ul>

            <p>
              Ce projet a marqué ma transition d’un profil “full stack
              front-end” à un profil plus complet, capable d’assurer la{" "}
              <strong>qualité logicielle</strong>, l’
              <strong>industrialisation</strong> et le{" "}
              <strong>déploiement professionnel</strong> d’une application.
            </p>
          </div>

          {/* Bloc "Pour le projet" */}
          <div className="results__block">
            <h3 className="results__title">Pour le projet</h3>

            <p>
              Le projet <strong>PMT</strong> a pleinement rempli les attentes du
              cahier des charges et validé l’ensemble des livrables demandés par
              l’ISCOD. L’application a été évaluée comme{" "}
              <strong>fonctionnelle, stable et conforme</strong> aux exigences
              techniques et méthodologiques.
            </p>

            <h4 className="results__subtitle">Bénéfices concrets observés :</h4>

            <ul>
              <li>
                🚀{" "}
                <span className="highlight">
                  Architecture full stack aboutie :
                </span>{" "}
                séparation claire des couches, API REST performante, frontend
                fluide.
              </li>
              <li>
                🧱 <span className="highlight">Code propre et structuré :</span>{" "}
                respect des conventions de nommage et des bonnes pratiques
                Spring et Angular.
              </li>
              <li>
                🐳{" "}
                <span className="highlight">Containerisation complète :</span>{" "}
                déploiement reproductible sur n’importe quel environnement via
                Docker Compose.
              </li>
              <li>
                ⚙️ <span className="highlight">Pipeline GitLab CI/CD :</span>{" "}
                automatisation du build, des tests et du déploiement.
              </li>
              <li>
                🧾 <span className="highlight">Livrables conformes :</span>{" "}
                documentation technique, schémas, jeux de données, scripts SQL
                et rapport d’étude validés.
              </li>
            </ul>

            <p className="results__summary">
              En résumé, <strong>PMT</strong> illustre ma capacité à concevoir,
              industrialiser et livrer une application logicielle complète, en
              respectant les standards professionnels de la filière. Ce projet
              m’a permis d’unir
              <strong>
                {" "}
                développement, DevOps et ingénierie logicielle
              </strong>{" "}
              dans un cadre concret et abouti.
            </p>
          </div>
        </section>
        <section className="project__section futures">
          <h2 className="project__subtitle neon-yellow">
            Les lendemains du projet
          </h2>

          <p>
            Le projet <strong>PMT</strong> ne s’arrête pas à sa version
            initiale. Conçu comme une base technique solide, il ouvre la voie à
            de nombreuses améliorations fonctionnelles et à une
            industrialisation encore plus poussée.
          </p>

          <div className="futures__block">
            <h3>Évolutions possibles</h3>
            <ul>
              <li>
                ✦ <strong>Gestion avancée des tâches</strong> : ajout de
                sous-tâches, échéances et notifications automatiques.
              </li>
              <li>
                <strong>Collaboration en temps réel</strong> : intégration de
                <em>WebSocket</em> pour actualiser instantanément l’état des
                projets et des tableaux Kanban.
              </li>
              <li>
                <strong>Module de reporting</strong> : génération de
                statistiques et de graphiques d’avancement des projets avec{" "}
                <em>Chart.js</em> ou <em>ECharts</em>.
              </li>
              <li>
                <strong>Authentification étendue</strong> : gestion des rôles
                personnalisés et intégration d’un système OAuth2.
              </li>
              <li>
                <strong>Déploiement cloud</strong> : hébergement sur AWS ou
                Azure, avec pipeline GitLab connectée à un cluster Docker ou
                Kubernetes.
              </li>
              <li>
                <strong>Intégration continue étendue</strong> : ajout de tests
                automatisés et de validations de sécurité avant chaque
                déploiement.
              </li>
            </ul>
          </div>

          <div className="futures__block">
            <h3>Vision à long terme</h3>
            <p>
              L’ambition de <strong>PMT</strong> est de devenir un{" "}
              <span className="highlight-blue">
                outil complet de gestion agile
              </span>
              , capable d’accompagner aussi bien les étudiants que les
              professionnels dans la planification et le suivi de projets
              collaboratifs.
            </p>
            <p>
              Grâce à sa structure modulaire et à l’intégration Docker, il
              pourrait facilement être déployé en entreprise, enrichi de
              nouveaux modules (notifications, reporting, export CSV, messagerie
              interne…).
            </p>
            <p>
              À terme, <strong>PMT</strong> a vocation à évoluer vers une
              solution open-source éducative, servant de{" "}
              <span className="highlight-pink">
                référence d’architecture full stack Java/Angular
              </span>{" "}
              pour les apprenants et les développeurs en quête de bonnes
              pratiques DevOps.
            </p>
          </div>
        </section>
        <section className="project__section opinion__block">
          <h2 className="project__subtitle neon-yellow">Mon point de vue</h2>

          <p>
            Le projet <strong>PMT</strong> a marqué un tournant dans ma manière
            de concevoir et de livrer un logiciel. Il m’a permis de passer d’une
            approche orientée “application” à une véritable{" "}
            <span className="highlight-blue">
              démarche d’ingénierie logicielle
            </span>
            , intégrant la rigueur, la structuration et l’industrialisation.
          </p>

          <p>
            Travailler avec <strong>Java Spring Boot</strong> et{" "}
            <strong>Angular</strong> m’a confronté à de nouveaux paradigmes :
            typage fort, injection de dépendances, architecture modulaire, et
            gestion rigoureuse des entités. J’ai découvert l’importance d’une
            structure claire et d’un découplage entre les couches, autant dans
            le back que dans le front.
          </p>

          <p>
            Au-delà de la technique, j’ai surtout compris l’intérêt du couple{" "}
            <span className="highlight-pink">Docker + CI/CD</span> : un moyen
            concret de garantir la fiabilité, la reproductibilité et la
            scalabilité d’une application. Ce fut une première immersion dans
            l’univers <strong>DevOps</strong>, et une étape décisive dans ma
            progression vers un profil d’ingénieur complet.
          </p>

          <p>
            Ce projet m’a aussi appris à documenter, tester et valider mes
            choix. Chaque livrable devait être justifié, cohérent et conforme —
            une exigence qui m’a conduit à adopter une{" "}
            <span className="highlight-blue">discipline de production</span>{" "}
            proche de celle d’un environnement professionnel réel.
          </p>

          <p>
            En rétrospective, <strong>PMT</strong> incarne parfaitement ma
            philosophie de développeur :{" "}
            <strong>allier performance, clarté et fiabilité</strong>. Il
            synthétise tout ce que j’ai appris ces dernières années : penser
            architecture, anticiper le déploiement, et toujours viser un code{" "}
            <span className="highlight-pink">maintenable et scalable</span>.
          </p>

          <p>
            Je considère ce projet comme un jalon fondateur, celui où j’ai
            commencé à penser non plus seulement comme un développeur, mais
            comme un <strong>ingénieur logiciel</strong>.
          </p>
        </section>
        <section className="project__section skills">
          <h2 className="project__subtitle neon-yellow">
            Compétences associées
          </h2>

          <ul className="skills__list">
            <li>
              🖥️ Développement back-end avec <strong>Java Spring Boot</strong>
            </li>
            <li>
              💻 Développement front-end avec{" "}
              <strong>Angular (TypeScript)</strong>
            </li>
            <li>
              🧩 Conception d’une architecture{" "}
              <strong>full stack modulaire</strong>
            </li>
            <li>
              ⚙️ Gestion et persistance des données via <strong>MySQL</strong>{" "}
              et <strong>JPA/Hibernate</strong>
            </li>
            <li>
              🐳 Containerisation complète avec <strong>Docker</strong> et{" "}
              <strong>Docker Compose</strong>
            </li>
            <li>
              🚀 Intégration et déploiement continu via{" "}
              <strong>GitLab CI/CD</strong>
            </li>
            <li>
              🧠 Mise en pratique des principes <strong>DevOps</strong> (build,
              test, déploiement automatisé)
            </li>
            <li>📚 Documentation technique claire et livrables conformes</li>
            <li>💬 Collaboration, rigueur et méthode agile</li>
          </ul>

          <div
            className="futures__block"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "2rem",
            }}
          >
            <FontAwesomeIcon icon={faJava} className="fa-circle-bg fa-glitch" />
            <FontAwesomeIcon
              icon={faAngular}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faDocker}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faGitlab}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faDatabase}
              className="fa-circle-bg fa-glitch"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pmt;
