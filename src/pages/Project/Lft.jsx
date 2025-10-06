import React from "react";
import ProjectBanner from "../../components/ProjectBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faDocker,
  faUnity,
  faAndroid,
  faGithub,
  faRust,
  faLinux,
  faCashApp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faMap,
  faWifi,
  faC,
} from "@fortawesome/free-solid-svg-icons";

const Lft = () => {
  return (
    <main className="bg-nebula bg-stars ">
      <ProjectBanner
        title="Large Field Theater (LFT)"
        subtitle="Temps réel multi-casques – React · Redux · WebSocket · REST · Node.js · Unity/C# · Docker"
      />

      {/* Bandeau techno */}
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
        <FontAwesomeIcon icon={faReact} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faNodeJs} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faRust} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faLinux} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faUnity} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faDocker} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faAndroid} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faGithub} className="fa-circle-bg fa-glitch" />
      </div>

      <div className="project ">
        {/* META */}
        <div className="project__meta">
          <p>
            📅 <strong>Période :</strong> 2024–2025 — alternance à{" "}
            <strong>L’Atelier Daruma</strong> (développeur Frontend React).
          </p>
          <p>
            🧠 <strong>Rôle :</strong>{" "}
            <span className="highlight-blue">lead frontend</span> (temps réel),
            reprise du <strong>backend</strong> en{" "}
            <span className="highlight-pink">Node.js</span>, coordination avec
            l’équipe <strong>Unity/C#</strong> (DEM server).
          </p>
          <p>
            ⚙️ <strong>Stack technique :</strong> React · Redux Toolkit ·
            WebSocket · REST · Node.js/Express · Unity/C# (DEM) · Docker · ADB.
          </p>
          <p>
            🎯 <strong>Objectif :</strong> supervision en{" "}
            <span className="highlight-blue">temps réel</span> d’un parc de
            casques VR (positions, connexions) sur une{" "}
            <span className="highlight-pink">carte interactive</span>, avec
            architecture unifiée et performante.
          </p>
        </div>

        {/* PRÉSENTATION */}
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Présentation</h2>

          <div className="presentation__content">
            <p>
              <strong>Large Field Theater (LFT)</strong> est une plateforme
              d’orchestration et de supervision en temps réel pour des
              expériences de réalité virtuelle multi-utilisateurs. Conçu au sein
              de <strong>L’Atelier Daruma</strong>, ce projet a pour objectif de
              piloter, surveiller et configurer un ensemble de casques VR
              connectés à un réseau local via un système distribué mêlant{" "}
              <span className="highlight-blue">React</span>,{" "}
              <span className="highlight-pink">Node.js</span>,{" "}
              <span className="highlight-blue">C#</span> et{" "}
              <span className="highlight-pink">Docker</span>.
            </p>

            <p>
              J’ai intégré l’équipe en tant que{" "}
              <strong>développeur frontend React</strong> dans un contexte
              complexe : le projet venait tout juste de démarrer, avec peu de
              ressources et un fort turnover. L’architecture initiale reposait
              sur un backend en <strong>Rust</strong> et un <em>DEM server</em>{" "}
              également développé dans ce langage. Aucun frontend n’existait
              encore — il fallait concevoir l’interface de supervision complète,
              tout en structurant les échanges en temps réel entre les casques,
              les serveurs et le réseau.
            </p>

            <p>
              Le cœur du projet repose sur une communication{" "}
              <strong>WebSocket bidirectionnelle</strong> entre le backend et le
              frontend. Le tableau de bord que j’ai conçu en{" "}
              <strong>React</strong> écoute et affiche en temps réel les données
              remontées par les casques VR :{" "}
              <em>
                connexions, déconnexions, positions spatiales, niveaux de
                batterie, température, performances système
              </em>{" "}
              et autres métriques critiques.
            </p>

            <p>
              Pour garantir des performances optimales face à ce flux constant
              de données, j’ai mis en place une architecture{" "}
              <strong>Redux centralisée</strong>, maintenant une copie locale
              cohérente de toutes les données du parc VR. Cette approche réduit
              les appels HTTP et permet une réactivité immédiate, essentielle
              dans un environnement où les mises à jour doivent être traitées à
              la milliseconde près.
            </p>

            <p>
              L’application frontend agit comme un véritable{" "}
              <strong>centre de contrôle</strong> :
            </p>

            <ul className="feature-list">
              <li>
                ⚙️ <strong>Configuration d’expériences VR</strong> : paramétrage
                des sessions, choix des scènes à lancer, ajustement des profils
                et gestion des casques associés.
              </li>
              <li>
                🧩 <strong>Gestion des groupes et sessions</strong> : création
                et suivi des sessions de jeu ou de test, ajout de casques en
                temps réel, contrôle des statuts de connexion et des retours
                système.
              </li>
              <li>
                🗺️ <strong>Supervision cartographique</strong> : affichage en
                direct des casques sur une carte interactive représentant la
                zone d’expérience.
              </li>
              <li>
                📦 <strong>Installation d’APK à distance</strong> : envoi de
                fichiers depuis le frontend vers les <em>Device Managers</em>,
                qui les redistribuent automatiquement sur chaque casque, avec
                suivi en temps réel des résultats (succès, échec, progression).
              </li>
              <li>
                🔄 <strong>Synchronisation des configurations</strong> :
                transmission et validation des paramètres envoyés au{" "}
                <em>DEM server</em>, garantissant la cohérence entre le matériel
                et les expériences Unity.
              </li>
              <li>
                🧠 <strong>Administration réseau</strong> : gestion des{" "}
                <em>device managers</em> — serveurs ADB connectés au réseau
                local — permettant d’ajouter dynamiquement de nouveaux appareils
                via leur IP.
              </li>
              <li>
                💬 <strong>Suivi d’événements en direct</strong> : affichage
                d’une colonne d’événements système avec logs, notifications et
                messages techniques remontés depuis le backend.
              </li>
            </ul>

            <p>
              L’interface repose sur un système de{" "}
              <strong>fenêtres modulaires et ergonomiques</strong> développé
              avec <strong>RC Dock</strong>, permettant aux opérateurs de
              réorganiser leur tableau de bord à volonté : liste des sessions,
              carte, événements, détails des appareils… tout peut être
              redimensionné ou déplacé selon les besoins.
            </p>

            <p>
              En parallèle du développement frontend, nous avons entrepris une{" "}
              <strong>refonte complète de l’architecture logicielle</strong> :
              le <em>DEM server</em> a été migré de Rust vers{" "}
              <strong>C#</strong> afin de s’intégrer plus naturellement à
              l’écosystème <strong>Unity</strong>, tandis que le backend a été
              réécrit en <strong>Node.js</strong> pour favoriser la rapidité de
              développement et la cohérence technique avec le frontend React.
            </p>

            <p>
              L’ensemble du projet a été{" "}
              <strong>containerisé avec Docker</strong>, garantissant un
              déploiement reproductible et une maintenance facilitée. Chaque
              composant — backend, frontend, DEM server et base de données —
              fonctionne dans un conteneur indépendant orchestré via{" "}
              <strong>Docker Compose</strong>.
            </p>

            <p>
              Aujourd’hui, <strong>LFT</strong> poursuit son évolution avec une
              prochaine fonctionnalité majeure : le{" "}
              <span className="highlight-pink">POV Stream</span>, un système de{" "}
              <em>visualisation directe de la perspective des casques</em> au
              clic depuis le tableau de bord, permettant un contrôle qualité et
              une assistance utilisateur en temps réel.
            </p>

            <p>
              Ce projet illustre une véritable{" "}
              <strong>démarche d’ingénierie complète</strong> — combinant
              architecture, performance, réseau, et ergonomie — et a constitué
              pour moi un terrain de perfectionnement majeur en{" "}
              <span className="highlight-blue">React</span>,{" "}
              <span className="highlight-pink">WebSocket</span>,{" "}
              <span className="highlight-blue">Redux</span> et{" "}
              <span className="highlight-pink">intégration Docker</span>. Il a
              surtout renforcé ma capacité à travailler en méthode agile, à
              itérer rapidement et à concevoir des systèmes stables et scalables
              dans un environnement collaboratif exigeant.
            </p>
          </div>
        </section>

        {/* LANCEMENT / DÉCISIONS */}
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Lancement du projet</h2>

          <div className="project__content">
            <p>
              Lorsque j’ai intégré <strong>L’Atelier Daruma</strong> en tant que{" "}
              <strong>développeur frontend React</strong>, le projet{" "}
              <strong>Large Field Theater</strong> en était encore à ses débuts.
              L’équipe était réduite, les bases techniques étaient encore en
              construction, et le projet souffrait d’un important{" "}
              <span className="highlight-pink">turnover</span> qui avait ralenti
              la progression du produit.
            </p>

            <p>
              L’architecture initiale reposait sur trois composants principaux :
            </p>
            <ul>
              <li>
                🧠 un <strong>backend en Rust</strong>, assurant la
                communication réseau et la logique métier de base ;
              </li>
              <li>
                🖥️ un <strong>DEM Server</strong> (serveur local) également
                écrit en Rust, chargé d’interagir avec les casques et les
                expériences Unity ;
              </li>
              <li>
                🕶️ des <strong>casques VR</strong> connectés à des
                <em>device managers</em> (serveurs ADB) pour la communication
                avec le réseau.
              </li>
            </ul>

            <p>
              À mon arrivée, le <strong>frontend n’existait pas</strong> encore
              — il fallait concevoir une interface capable de piloter et
              visualiser l’ensemble de ce système complexe, tout en gérant des
              flux de données massifs en temps réel.
            </p>

            <p>
              Mon premier objectif a été de{" "}
              <strong>établir un socle stable et scalable</strong> pour la
              partie client : mise en place d’un environnement React robuste,
              intégration de <strong>Redux</strong> pour gérer efficacement la
              quantité importante de données échangées, et implémentation d’une{" "}
              <strong>connexion WebSocket persistante</strong> pour assurer la
              communication continue avec le backend.
            </p>

            <p>
              Cependant, le projet faisait face à plusieurs limites techniques
              liées à l’usage du Rust sur l’ensemble du stack. Après une
              <strong>analyse d’architecture complète</strong> et de nombreuses
              discussions d’équipe, une refonte a été décidée :
            </p>

            <ul>
              <li>
                🔄 <strong>Migrer le backend de Rust vers Node.js</strong> pour
                faciliter la maintenance, accélérer les itérations et aligner
                les technologies entre le front et le back ;
              </li>
              <li>
                ⚙️ <strong>Réécrire le DEM Server en C#</strong> afin de
                rapprocher la logique serveur des développeurs Unity,
                simplifiant la synchronisation avec les expériences VR ;
              </li>
              <li>
                🐳 <strong>Containeriser l’ensemble du projet</strong> avec
                Docker pour garantir une exécution isolée et cohérente entre les
                différents environnements de test et de production.
              </li>
            </ul>

            <p>
              Cette migration a marqué un véritable tournant : elle a permis
              d’unifier la stack technique, d’améliorer les performances et de
              réduire drastiquement la complexité du legacy. J’ai participé
              activement à la mise en place de ces nouvelles fondations, tout en
              poursuivant le développement du tableau de bord React, véritable
              centre de contrôle du système.
            </p>

            <p>
              En parallèle, nous avons introduit une{" "}
              <strong>méthodologie Agile</strong> avec des <em>sprints</em>{" "}
              courts, des réunions de suivi régulières et une priorisation
              claire des fonctionnalités : intégration du WebSocket, gestion des
              événements, installation d’APK, synchronisation des groupes, et
              visualisation des casques sur la carte.
            </p>

            <p>
              Cette phase de lancement a été pour moi une expérience fondatrice
              : elle m’a appris à intervenir dans un environnement instable, à
              restructurer une base technique complexe, et à transformer une
              idée encore embryonnaire en une{" "}
              <strong>application modulaire et fonctionnelle</strong>.
            </p>
          </div>
        </section>

        {/* FONCTIONNALITÉS */}
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">
            Fonctionnalités principales
          </h2>

          <div className="project__content">
            <p>
              <strong>Large Field Theater (LFT)</strong> est une plateforme
              complète de{" "}
              <span className="highlight-blue">
                gestion et supervision en temps réel
              </span>{" "}
              d’environnements de réalité virtuelle multi-appareils. Développée
              en <strong>React</strong> et <strong>Redux</strong>, elle
              centralise le pilotage de plusieurs casques VR connectés à des
              <em>device managers</em> (serveurs ADB) via un{" "}
              <strong>DEM Server</strong> dédié.
            </p>

            <p>
              L’application a été pensée comme un véritable{" "}
              <strong>tableau de bord opérationnel</strong>, ergonomique et
              modulaire, capable d’orchestrer la configuration, le suivi et la
              communication de tous les appareils du système. Elle combine une
              logique <span className="highlight-pink">API REST</span> pour les
              opérations métiers et une{" "}
              <span className="highlight-blue">connexion WebSocket</span>{" "}
              persistante pour la remontée d’informations en direct.
            </p>

            <ul className="feature-list">
              <li>
                🧭 <strong>Supervision temps réel</strong> : visualisation
                instantanée de l’état des casques VR (connexion, batterie,
                température, charge CPU) et de leur position sur une{" "}
                <span className="highlight-blue">carte interactive</span>
                mise à jour en direct via WebSocket.
              </li>

              <li>
                🗺️ <strong>Carte interactive 2D</strong> : interface basée sur{" "}
                <em>Leaflet</em> permettant d’afficher les casques, leurs
                déplacements et interactions dans l’espace. Chaque mouvement est
                synchronisé en direct depuis le DEM Server.
              </li>

              <li>
                🧩 <strong>Gestion des groupes et sessions</strong> :
                possibilité de créer, modifier et organiser des{" "}
                <span className="highlight-pink">groupes de casques</span>
                (sessions VR) avec gestion de la capacité maximale, des
                affectations et du statut de chaque casque.
              </li>

              <li>
                ⚙️ <strong>Configuration des expériences</strong> : préparation
                des{" "}
                <span className="highlight-blue">
                  paramètres d’expériences VR
                </span>
                (scène, application, options réseau) et envoi automatisé des
                configurations au DEM Server ou aux casques.
              </li>

              <li>
                📦 <strong>Installation d’APK</strong> : interface dédiée
                permettant d’uploader des fichiers <em>APK</em> puis de les
                déployer simultanément sur plusieurs casques. Les retours
                d’installation sont transmis en direct (succès, échec,
                progression) via WebSocket et affichés dans une{" "}
                <span className="highlight-pink">modale dynamique</span>.
              </li>

              <li>
                🧠 <strong>Communication en temps réel</strong> : chaque
                composant du système (frontend, backend, DEM Server, devices)
                échange des messages synchronisés par WebSocket, garantissant un
                retour d’état cohérent sans rechargement.
              </li>

              <li>
                💬 <strong>Système de notifications</strong> : alertes
                contextuelles en cas de déconnexion, de nouvelle session,
                d’erreur d’installation ou de réception d’événement du backend.
              </li>

              <li>
                🪟 <strong>Tableau de bord modulaire</strong> : interface
                composée de fenêtres redimensionnables et déplaçables (via{" "}
                <em>RC Dock</em>) permettant d’organiser librement les vues —
                carte, sessions, propriétés des casques, logs, etc.
              </li>

              <li>
                🧳 <strong>Gestion des device managers</strong> : détection
                automatique sur le réseau local, ajout manuel via IP, et suivi
                de l’état de chaque Device Manager connecté.
              </li>

              <li>
                🚀 <strong>Architecture optimisée</strong> : intégration
                complète entre <span className="highlight-pink">Redux</span>
                (synchronisation locale des données),
                <span className="highlight-blue">API REST</span>
                (opérations ponctuelles) et{" "}
                <span className="highlight-pink">WebSocket</span>
                (données en streaming).
              </li>

              <li>
                🧾 <strong>Interface réactive et ergonomique</strong> : design
                clair, interactions fluides, modales contextuelles, dark mode et
                composants dynamiques pour une expérience fluide même lors du
                traitement de gros volumes de données.
              </li>
            </ul>

            <p>
              Grâce à cette architecture, <strong>Large Field Theater</strong>{" "}
              permet aujourd’hui d’orchestrer en temps réel{" "}
              <span className="highlight-blue">des dizaines de casques VR</span>
              connectés à différents serveurs, tout en garantissant une
              stabilité, une visibilité et une ergonomie adaptées à un usage
              professionnel.
            </p>
          </div>
        </section>

        {/* ÉTAPES */}
        <section className="project__section steps">
          <h2 className="project__subtitle neon-yellow">
            Les étapes du projet
          </h2>

          <p>
            Le développement de <strong>Large Field Theater (LFT)</strong> s’est
            déroulé sur plusieurs mois, en suivant une approche{" "}
            <span className="highlight-blue">agile</span>
            avec des sprints réguliers, des réunions techniques et une
            communication constante avec les autres pôles (Unity, hardware,
            back-end). Chaque étape a permis de consolider la stabilité du
            système, d’unifier les différentes technologies et d’optimiser les
            échanges temps réel.
          </p>

          <div className="steps__list">
            <div className="steps__item">
              <div className="steps__badge">1</div>
              <h3>Prise en main et analyse du legacy</h3>
              <ul>
                <li>
                  Revue de l’existant : backend en Rust, serveur DEM
                  expérimental, absence totale de frontend.
                </li>
                <li>
                  Diagnostic des limites techniques : stack éclatée, dette
                  technique importante, peu de documentation.
                </li>
                <li>
                  Définition d’un plan de reprise et d’unification des
                  technologies pour fluidifier la collaboration entre les
                  équipes Unity et back-end.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">2</div>
              <h3>Refonte de l’architecture technique</h3>
              <ul>
                <li>
                  Migration du backend de Rust vers <strong>Node.js</strong>
                  pour réduire la complexité et harmoniser la stack JavaScript.
                </li>
                <li>
                  Conservation du DEM Server mais réécriture progressive en{" "}
                  <strong>C#</strong>
                  afin de faciliter l’intégration avec les applications Unity.
                </li>
                <li>
                  Définition d’un schéma d’architecture clair :
                  <em>Frontend React</em> ↔ <em>Backend Node.js</em> ↔{" "}
                  <em>DEM Server C#</em> ↔ <em>Devices VR</em>.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">3</div>
              <h3>Conception du frontend React</h3>
              <ul>
                <li>
                  Création du tableau de bord principal avec composants
                  modulaires et ergonomie professionnelle.
                </li>
                <li>
                  Implémentation de <strong>Redux</strong> pour gérer l’état
                  global de l’application et maintenir une copie locale des
                  données issues du WebSocket.
                </li>
                <li>
                  Mise en place d’un système de fenêtres dynamiques (
                  <strong>RC Dock</strong>) : carte, sessions, propriétés des
                  casques, logs, etc.
                </li>
                <li>
                  Conception du système de notifications, modales, et
                  visualisation des casques en temps réel.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">4</div>
              <h3>Implémentation de la communication temps réel</h3>
              <ul>
                <li>
                  Création du module <strong>WebSocket Provider</strong>
                  permettant d’écouter les événements du backend et de mettre à
                  jour instantanément le store Redux.
                </li>
                <li>
                  Gestion des échanges bidirectionnels : synchronisation des
                  statuts, réception des logs, suivi des installations d’APK.
                </li>
                <li>
                  Réduction des appels API grâce à une logique de{" "}
                  <span className="highlight-blue">mise à jour réactive</span>
                  pilotée par WebSocket.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">5</div>
              <h3>Gestion des devices et des device managers</h3>
              <ul>
                <li>
                  Détection automatique des <strong>Device Managers</strong>{" "}
                  (device managers) sur le réseau via ADB.
                </li>
                <li>
                  Association des casques à un Device Manager, avec suivi en
                  temps réel de leur état matériel (batterie, CPU, température,
                  etc.).
                </li>
                <li>
                  Intégration d’un module de gestion d’APK : upload, déploiement
                  simultané et retour d’installation en direct.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">6</div>
              <h3>Containerisation et industrialisation</h3>
              <ul>
                <li>
                  Dockerisation complète du backend, de la base de données et du
                  serveur DEM.
                </li>
                <li>
                  Mise en place d’environnements reproductibles et
                  simplification du déploiement en local et sur serveurs
                  internes.
                </li>
                <li>
                  Préparation à l’intégration continue et au déploiement
                  automatisé.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">7</div>
              <h3>Optimisations et perspectives</h3>
              <ul>
                <li>
                  Amélioration des performances du front et de la gestion
                  mémoire côté Redux.
                </li>
                <li>
                  Travail préparatoire pour l’intégration d’un{" "}
                  <span className="highlight-pink">flux vidéo (POV)</span>
                  en direct depuis les casques VR.
                </li>
                <li>
                  Documentation complète du projet et présentation des solutions
                  d’évolution à l’équipe technique.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACTEURS */}
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">
            Les acteurs – les interactions
          </h2>

          <div className="project__content">
            <p>
              Le projet <strong>Large Field Theater (LFT)</strong> s’inscrit
              dans un environnement multidisciplinaire où plusieurs pôles
              techniques interagissent pour créer une expérience de réalité
              virtuelle à grande échelle. J’ai intégré l’équipe de l’
              <strong>Atelier Daruma</strong> en tant que
              <span className="highlight-blue">développeur frontend React</span>
              , avec pour mission de concevoir une interface capable de gérer et
              superviser en temps réel un ensemble de casques VR connectés.
            </p>

            <p>
              À mon arrivée, l’équipe était encore en phase de structuration :
              un backend expérimental en Rust, un <em>DEM Server</em> en
              développement, et une application Unity en cours de conception.
              Mon rôle a rapidement dépassé le simple cadre du frontend : il a
              fallu coordonner les échanges entre les différentes briques
              techniques, assurer la cohérence des flux de données et proposer
              une architecture claire entre le back-end Node.js, le serveur DEM
              en C# et le frontend React.
            </p>

            <p>
              Le travail s’est effectué en étroite collaboration avec plusieurs
              pôles :
            </p>

            <ul>
              <li>
                🎮 <strong>Équipe Unity</strong> – responsable du moteur
                d’expérience VR. J’ai collaboré avec eux pour normaliser la
                communication entre les casques et le <em>DEM Server</em> en C#,
                garantissant la fiabilité des données transmises au backend.
              </li>

              <li>
                🧠 <strong>Pôle backend</strong> – impliqué dans la migration de
                Rust vers Node.js. Ensemble, nous avons redéfini les API REST et
                les événements WebSocket pour centraliser les échanges et
                simplifier la synchronisation avec le frontend.
              </li>

              <li>
                💼 <strong>Développeurs hardware</strong> – chargés des{" "}
                <em>device managers</em>
                et des serveurs ADB connectant les casques au réseau. J’ai
                travaillé avec eux pour intégrer la détection et la gestion de
                ces unités directement depuis l’interface React.
              </li>

              <li>
                🧩 <strong>Direction technique et production</strong> – avec qui
                j’ai participé à la planification agile des sprints, la
                priorisation des fonctionnalités et la rédaction de rapports
                d’avancement hebdomadaires.
              </li>
            </ul>

            <p>
              La nature évolutive du projet a nécessité une communication
              constante, aussi bien avec les développeurs Unity qu’avec les
              concepteurs du backend. J’ai instauré des points techniques
              réguliers, proposé des standards d’échange entre modules, et
              documenté les protocoles de synchronisation entre le backend et le
              frontend.
            </p>

            <p>
              Ces échanges m’ont permis d’acquérir une vision d’ensemble du
              système : de la collecte des données capteurs à leur visualisation
              sur la carte, en passant par la gestion des serveurs
              intermédiaires et la stabilité des connexions WebSocket. Cette
              approche transversale a été essentielle pour transformer un
              prototype en une application cohérente, stable et évolutive.
            </p>
          </div>
        </section>

        {/* RÉSULTATS */}
        <section className="project__section results">
          <h2 className="project__subtitle neon-yellow">Les résultats</h2>

          {/* Bloc "Pour moi" */}
          <div className="results__block">
            <h3 className="results__title">Pour moi</h3>

            <p>
              Le projet <strong>Large Field Theater</strong> a été une étape
              déterminante dans mon parcours d’ingénieur logiciel. Travailler
              dans un environnement aussi vivant et complexe m’a permis
              d’élargir ma vision du développement applicatif et de consolider
              mes compétences techniques et méthodologiques.
            </p>

            <p>
              Ce projet m’a conduit à dépasser le simple rôle de développeur
              frontend : j’ai participé activement à la réflexion architecturale
              globale, en intégrant des notions de performance, de scalabilité
              et d’optimisation mémoire, essentielles pour la gestion en temps
              réel des casques VR et des serveurs connectés.
            </p>

            <ul>
              <li>
                ⚙️ Conception d’un système de <strong>WebSocket</strong>
                capable de gérer en continu la remontée d’informations depuis
                des dizaines de casques simultanément.
              </li>
              <li>
                🔁 Mise en place d’une <strong>architecture Redux</strong>
                pour synchroniser les données entre le backend et le frontend
                sans requêtes HTTP redondantes.
              </li>
              <li>
                🗺️ Création d’une{" "}
                <strong>interface cartographique temps réel</strong>
                affichant la position et l’état des casques sur le terrain.
              </li>
              <li>
                🧠 Développement d’un tableau de bord modulaire et ergonomique
                (RC Dock), intégrant la gestion de groupes, de sessions, de
                notifications et de commandes réseau.
              </li>
              <li>
                💬 Coordination technique avec les pôles Unity, backend et
                hardware pour garantir la cohérence des échanges et la stabilité
                des flux.
              </li>
            </ul>

            <p>
              Au-delà de la technique, j’ai énormément gagné en autonomie et en
              méthode : gestion de priorités, communication inter-équipe,
              documentation rigoureuse et adaptation continue aux besoins du
              projet. Ce fut aussi une expérience humaine marquante, où j’ai
              appris à défendre des choix techniques tout en restant à l’écoute
              des contraintes artistiques et logicielles.
            </p>
          </div>

          {/* Bloc "Pour le projet" */}
          <div className="results__block">
            <h3 className="results__title">Pour le projet</h3>

            <p>
              Le projet <strong>Large Field Theater</strong> a franchi un cap
              décisif avec la mise en place d’une architecture complète, unifiée
              et performante. Les différents pôles techniques ont pu collaborer
              autour d’un socle stable et évolutif, facilitant la communication
              entre les casques VR, les serveurs et le tableau de bord React.
            </p>

            <h4 className="results__subtitle">Bénéfices concrets observés :</h4>

            <ul>
              <li>
                🚀 <span className="highlight">Performance accrue :</span>
                gestion simultanée de plusieurs flux WebSocket sans
                ralentissement, avec une latence minimale entre les casques et
                le front.
              </li>
              <li>
                🧩 <span className="highlight">Architecture centralisée :</span>
                backend Node.js et serveur C# synchronisés via événements,
                réduisant la dette technique héritée du legacy Rust.
              </li>
              <li>
                📡{" "}
                <span className="highlight">
                  Interface de supervision fiable :
                </span>
                suivi en temps réel des sessions, casques, device managers et
                configurations, avec une gestion unifiée des commandes.
              </li>
              <li>
                🧱{" "}
                <span className="highlight">Containerisation complète :</span>
                orchestration via Docker pour simplifier le déploiement et
                garantir la reproductibilité de l’environnement.
              </li>
              <li>
                🧾 <span className="highlight">Stabilité et traçabilité :</span>
                logs détaillés, monitoring et gestion d’erreurs améliorant la
                fiabilité générale du système.
              </li>
            </ul>

            <p className="results__summary">
              En somme, <strong>Large Field Theater</strong> illustre la
              convergence entre{" "}
              <strong>technologie, coordination et vision système</strong>. Ce
              projet a permis à l’équipe de passer d’un prototype fragmenté à
              une véritable plateforme logicielle capable de gérer en temps réel
              une expérience multi-utilisateur VR à grande échelle.
            </p>
          </div>
        </section>

        {/* Lendemains */}
        <section className="project__section futures">
          <h2 className="project__subtitle neon-yellow">
            Les lendemains du projet
          </h2>

          <p>
            Le projet <strong>Large Field Theater</strong> est loin d’être figé.
            Conçu comme une plateforme évolutive, il continue d’évoluer vers une
            architecture toujours plus robuste, connectée et immersive. Les
            bases techniques posées (React, Node.js, C#, Docker, Redux) offrent
            une marge d’évolution considérable pour de futures extensions
            fonctionnelles et expérimentales.
          </p>

          <div className="futures__block">
            <h3>Évolutions en cours et à venir</h3>
            <ul>
              <li>
                🎥 <strong>POV streaming en temps réel :</strong>
                implémentation d’un flux vidéo des casques VR, permettant de
                visualiser directement la perspective d’un utilisateur depuis le
                tableau de bord React. Cette fonctionnalité facilitera la
                supervision et l’accompagnement sur le terrain.
              </li>

              <li>
                🧭 <strong>Amélioration du suivi spatial :</strong>
                intégration d’un recalibrage automatique des trajectoires sur la
                carte pour corriger la dérive inertielle et améliorer la
                précision des déplacements.
              </li>

              <li>
                💾 <strong>Centralisation des configurations :</strong>
                ajout d’un module de synchronisation automatique entre le
                backend, les device managers et les serveurs, afin de simplifier
                la maintenance et le déploiement des sessions.
              </li>

              <li>
                🧠{" "}
                <strong>Optimisation des performances et monitoring :</strong>
                mise en place d’un système de logs enrichis et de métriques en
                temps réel (CPU, RAM, latence WebSocket, erreurs) pour assurer
                la stabilité à grande échelle.
              </li>
            </ul>
          </div>

          <div className="futures__block">
            <h3>Vision à long terme</h3>
            <p>
              L’objectif à long terme de <strong>Large Field Theater</strong>{" "}
              est d’en faire une{" "}
              <strong>plateforme de gestion VR centralisée</strong>
              capable d’orchestrer plusieurs expériences immersives
              simultanément. Le projet vise à offrir aux équipes de production
              un outil complet pour{" "}
              <strong>superviser, configurer et piloter</strong>
              des environnements multi-utilisateurs de manière fluide et
              sécurisée.
            </p>

            <p>
              Grâce à sa modularité, la solution pourrait s’ouvrir à de nouveaux
              usages :<strong> intégration cloud</strong> pour le contrôle
              distant,
              <strong>analyse prédictive</strong> des performances, ou encore
              <strong>export de données en temps réel</strong> pour la recherche
              et la scénarisation immersive.
            </p>

            <p>
              En parallèle, la vision de développement continue inclut une{" "}
              <strong>industrialisation complète du pipeline</strong> :
              automatisation des builds, des tests et du déploiement via Docker,
              ainsi qu’une possible migration vers un environnement
              <strong>Kubernetes</strong> pour la gestion dynamique des
              serveurs.
            </p>

            <p>
              À terme, <strong>Large Field Theater</strong> pourrait devenir une{" "}
              <span className="highlight-pink">référence open-source</span>
              dans la gestion d’environnements immersifs en temps réel,
              combinant supervision, communication et interaction VR à grande
              échelle.
            </p>
          </div>
        </section>

        {/* Point de vue */}
        <section className="project__section opinion__block">
          <h2 className="project__subtitle neon-yellow">Mon point de vue</h2>

          <p>
            Travailler sur <strong>Large Field Theater</strong> a profondément
            changé ma manière de concevoir un projet logiciel. Ce n’était plus
            simplement une question de fonctionnalités à développer, mais un
            véritable exercice d’ingénierie à l’échelle d’un écosystème complet.
            Chaque choix — technologique, architectural, ou méthodologique —
            avait un impact direct sur la performance, la stabilité et la
            fluidité du système.
          </p>

          <p>
            J’ai appris à raisonner comme un <strong>ingénieur système</strong>{" "}
            plutôt que comme un simple développeur : à anticiper les flux de
            données, à surveiller la charge mémoire, à penser la communication
            entre services en termes de{" "}
            <span className="highlight-pink">latence et fiabilité</span>. Le
            défi n’était pas de “faire marcher” l’application, mais de faire en
            sorte qu’elle reste stable en temps réel, même avec des dizaines de
            casques VR connectés simultanément.
          </p>

          <p>
            Le projet m’a également permis d’explorer des domaines rarement
            abordés dans un cadre académique : la{" "}
            <strong>gestion temps réel de flux WebSocket</strong>, la{" "}
            <strong>mise à jour asynchrone d’états complexes</strong> via Redux,
            la synchronisation entre le <strong>backend Node.js</strong>, les{" "}
            <strong>serveurs DEM en C#</strong> et les{" "}
            <strong>device managers ADB</strong>. Chaque composant devait
            dialoguer sans blocage ni perte de données — une contrainte
            exigeante qui m’a poussé à renforcer ma rigueur et mon sens du
            détail.
          </p>

          <p>
            En parallèle, j’ai appris à gérer un projet en
            <span className="highlight-blue">méthode agile</span> dans un
            environnement de petite équipe : planification des sprints, réunions
            régulières, gestion du turnover, documentation claire pour faciliter
            la reprise du code par de nouveaux arrivants. Cette rigueur
            d’organisation s’est révélée essentielle pour maintenir la cohérence
            technique du projet dans un contexte évolutif.
          </p>

          <p>
            D’un point de vue personnel, <strong>Large Field Theater</strong>a
            été un terrain d’apprentissage exceptionnel. J’y ai consolidé mes
            compétences en{" "}
            <span className="highlight-pink">front-end React</span>, en{" "}
            <span className="highlight-blue">gestion de flux WebSocket</span>
            et en <span className="highlight-pink">architecture modulaire</span>
            , tout en découvrant la valeur d’une approche
            <strong>DevOps</strong> concrète et pragmatique.
          </p>

          <p>
            Aujourd’hui, je considère ce projet comme une étape pivot dans ma
            formation d’ingénieur. Il m’a appris à allier
            <strong>innovation et stabilité</strong>,
            <strong>réflexion et exécution</strong>, et à toujours chercher
            l’équilibre entre la
            <span className="highlight-blue">performance technique</span>
            et la <span className="highlight-pink">simplicité d’usage</span>.
            C’est dans cette philosophie que je conçois désormais chacun de mes
            projets : concevoir des systèmes solides, élégants et durables.
          </p>
        </section>

        {/* Compétences */}
        <section className="project__section skills">
          <h2 className="project__subtitle neon-yellow">
            Compétences associées
          </h2>

          <ul className="skills__list">
            <li>
              ⚛️ <strong>Développement front-end avec React</strong> — création
              d’une interface modulaire et réactive intégrant un tableau de bord
              temps réel, des fenêtres dynamiques (RC Dock), des modals et une
              carte interactive.
            </li>

            <li>
              🔄 <strong>Gestion d’état avancée avec Redux</strong> —
              synchronisation des données issues du backend et des WebSockets,
              mise à jour des devices, sessions et notifications sans requêtes
              HTTP supplémentaires.
            </li>

            <li>
              🌐 <strong>Communication en temps réel via Socket.IO</strong> —
              intégration complète du protocole WebSocket pour la remontée des
              informations des casques VR, des Device Managers et des serveurs
            </li>

            <li>
              🧠 <strong>Architecture full stack Node.js / React</strong> —
              gestion fluide entre le backend REST et la communication temps
              réel, en limitant les appels redondants et optimisant la
              performance mémoire.
            </li>

            <li>
              🧩 <strong>Interopérabilité entre services</strong> — coordination
              entre le backend Node.js, les serveurs en C#, et les casques
              Android connectés via ADB, avec une structure réseau centralisée.
            </li>

            <li>
              ⚙️ <strong>Gestion de configuration et automatisation</strong> —
              containerisation du backend, des serveurs et de la base de données
              via <strong>Docker</strong>, simplifiant la maintenance et les
              déploiements.
            </li>

            <li>
              📡 <strong>Traitement de données temps réel</strong> — conception
              d’un flux stable pour gérer les positions, niveaux de batterie et
              statuts des casques sans surcharge réseau.
            </li>

            <li>
              🧭 <strong>Développement de carte interactive</strong> —
              visualisation en direct du déplacement des casques VR sur une
              carte, synchronisée avec les sessions et les groupes actifs.
            </li>

            <li>
              🔒 <strong>Rigueur et fiabilité</strong> — implémentation de
              vérifications backend, gestion d’erreurs WebSocket et logs
              complets pour le suivi système.
            </li>

            <li>
              👥 <strong>Collaboration agile</strong> — planification en
              sprints, réunions de suivi, gestion du turnover et documentation
              claire pour assurer la continuité du projet.
            </li>

            <li>
              🚀 <strong>Autonomie et méthodologie</strong> — travail en
              autonomie sur le front, intégration du backend et réflexion
              d’optimisation continue des flux réseau et des performances
              globales.
            </li>
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
            <FontAwesomeIcon
              icon={faReact}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faDocker}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon icon={faC} className="fa-circle-bg fa-glitch" />
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

export default Lft;
