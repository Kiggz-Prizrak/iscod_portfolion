import React from "react";
import ProjectBanner from "../../components/ProjectBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faNodeJs,
  faJs,
  faGithub,
  faDocker,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLock } from "@fortawesome/free-solid-svg-icons";

const Groupomania = () => {
  return (
    <main className="bg-nebula bg-stars ">
      <ProjectBanner
        title="Groupomania"
        subtitle="application fullstack NodeJS sequelize · VueJS

 "
      />
      <div
        className="project__tech-banner"
     
      >
        <FontAwesomeIcon icon={faVuejs} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faNodeJs} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faJs} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faDatabase} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faLock} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faGithub} className="fa-circle-bg fa-glitch" />
      </div>
      <div className="project ">
        <div className="project__meta">
          <p>
            📅 <strong>Période :</strong> 2022 — projet final de la formation{" "}
            <em>Développeur d’application JavaScript (OpenClassrooms)</em>.
          </p>
          <p>
            🧠 <strong>Rôle :</strong> développement{" "}
            <span className="highlight-blue">full stack</span> — conception du{" "}
            <strong>frontend</strong> en{" "}
            <span className="highlight-pink">Vue.js</span> et du{" "}
            <strong>backend</strong> en{" "}
            <span className="highlight-pink">Node.js / Express</span>.
          </p>
          <p>
            ⚙️ <strong>Stack technique :</strong> Vue.js · Vuex · Node.js ·
            Express · Sequelize · MySQL · JWT · Multer.
          </p>
          <p>
            🔐 <strong>Objectif :</strong> concevoir un réseau social
            d’entreprise sécurisé permettant aux collaborateurs de créer,
            commenter et modérer des publications.
          </p>
        </div>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Présentation</h2>

          <div className="presentation__content">
            <p>
              <strong>Groupomania</strong> est une application web complète de{" "}
              <span className="highlight-blue">réseau social d’entreprise</span>
              , développée dans le cadre de mon dernier projet de formation chez{" "}
              <strong>OpenClassrooms</strong>. Ce projet a marqué la fin de mon
              parcours de <em>Développeur d’application JavaScript</em> et m’a
              permis de mettre en œuvre l’ensemble des compétences acquises en{" "}
              <strong>développement full stack</strong>.
            </p>

            <p>
              L’objectif principal de Groupomania était de concevoir une
              plateforme interne permettant aux collaborateurs d’une entreprise
              de{" "}
              <span className="highlight-pink">
                communiquer, partager et interagir
              </span>
              de manière sécurisée. Chaque utilisateur peut créer un compte,
              publier des posts, commenter, réagir et personnaliser son profil
              avec une image et des informations personnelles.
            </p>

            <p>
              Techniquement, le projet repose sur une architecture{" "}
              <strong>Vue.js / Node.js / MySQL</strong>, combinant un front-end
              moderne et réactif avec un back-end robuste et sécurisé.
              L’application intègre un{" "}
              <span className="highlight-blue">
                système d’authentification complet
              </span>
              (connexion, inscription, jetons JWT) ainsi qu’un ensemble de
              bonnes pratiques en matière de sécurité (cryptage, validation des
              entrées, gestion des droits).
            </p>

            <p>
              Le développement du projet s’est articulé autour d’une logique{" "}
              <span className="highlight-pink">RESTful</span>, d’un{" "}
              <strong>store Vuex</strong> pour la gestion d’état, et d’un{" "}
              <strong>routeur Vue</strong> assurant une navigation fluide. Le
              design a été pensé pour offrir une{" "}
              <span className="highlight-blue">
                expérience utilisateur simple, claire et accessible
              </span>
              , adaptée à un environnement professionnel.
            </p>

            <p>
              Plus qu’un simple exercice technique, <strong>Groupomania</strong>{" "}
              a constitué une véritable{" "}
              <strong>expérience de développement en conditions réelles</strong>
              , avec des problématiques de sécurité, d’organisation de code et
              de déploiement d’API, caractéristiques des applications web
              modernes.
            </p>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Lancement du projet</h2>

          <div className="project__content">
            <p>
              Le projet <strong>Groupomania</strong> s’inscrivait comme l’ultime
              étape de ma formation{" "}
              <em>Développeur d’application JavaScript</em> chez{" "}
              <strong>OpenClassrooms</strong>. Il s’agissait de concevoir une{" "}
              <span className="highlight-blue">application web complète</span>
              en suivant les bonnes pratiques du développement full stack
              moderne.
            </p>

            <p>
              Le contexte du projet était clair : permettre aux employés d’une
              entreprise de{" "}
              <span className="highlight-pink">
                partager des publications, échanger et interagir
              </span>
              dans un espace professionnel sécurisé. Cette application devait à
              la fois répondre à des enjeux <strong>techniques</strong>{" "}
              (authentification, API REST, gestion des fichiers, sécurité) et à
              des impératifs <strong>fonctionnels</strong> (simplicité d’usage,
              ergonomie, rapidité).
            </p>

            <p>
              Pour atteindre ces objectifs, j’ai adopté une approche{" "}
              <span className="highlight-blue">full stack JavaScript</span>,
              articulée autour de trois technologies majeures :
            </p>

            <ul>
              <li>
                ⚙️ <strong>Node.js / Express</strong> pour le développement du
                backend, incluant la mise en place de routes sécurisées, la
                gestion des utilisateurs et des médias, ainsi que la
                communication avec la base de données.
              </li>
              <li>
                🖥️ <strong>Vue.js</strong> pour le front-end, avec un{" "}
                <strong>store Vuex</strong> centralisé pour la gestion d’état et
                un <strong>routeur Vue</strong> garantissant une navigation
                fluide.
              </li>
              <li>
                🗄️ <strong>MySQL + Sequelize</strong> pour la base de données,
                assurant une structuration propre et des relations solides entre
                utilisateurs, posts et commentaires.
              </li>
            </ul>

            <p>
              L’un des défis majeurs était de garantir une{" "}
              <span className="highlight-pink">sécurité optimale</span> des
              données : hachage des mots de passe avec <strong>bcrypt</strong>,
              utilisation de
              <strong>JWT</strong> pour l’authentification, et filtrage des
              entrées pour prévenir les failles XSS ou injections SQL.
            </p>

            <p>
              En parallèle, une attention particulière a été portée sur l’{" "}
              <strong>ergonomie de l’interface</strong> : une mise en page
              claire, des couleurs sobres, et une organisation intuitive des
              fonctionnalités afin que l’utilisateur puisse naviguer, publier et
              commenter facilement.
            </p>

            <p>
              Le projet <strong>Groupomania</strong> m’a permis de consolider ma
              maîtrise du développement web moderne en suivant un{" "}
              <span className="highlight-blue">
                cycle complet de création d’application
              </span>{" "}
              : conception, implémentation, sécurisation et tests finaux avant
              livraison.
            </p>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Fonctionnalités</h2>

          <div className="project__content">
            <p>
              L’application <strong>Groupomania</strong> a été conçue pour
              offrir une expérience complète de réseau social d’entreprise tout
              en garantissant une{" "}
              <span className="highlight-blue">sécurité optimale</span> et une
              <span className="highlight-pink">navigation fluide</span>. Voici
              un aperçu des principales fonctionnalités intégrées :
            </p>

            <ul className="feature-list">
              <li>
                👤{" "}
                <strong>
                  Création de compte et authentification sécurisée :
                </strong>
                inscription et connexion avec vérification par jetons
                <strong> JWT</strong>, et chiffrement des mots de passe avec
                <strong> bcrypt</strong>.
              </li>

              <li>
                📰 <strong>Mur de publications :</strong> chaque utilisateur
                peut publier du contenu textuel et illustré (image uploadée via
                <strong> Multer</strong>), visible par l’ensemble des
                collaborateurs.
              </li>

              <li>
                💬 <strong>Commentaires et interactions :</strong> possibilité
                de commenter et d’échanger sur les publications, avec affichage
                dynamique des réponses et rafraîchissement automatique du
                contenu.
              </li>

              <li>
                🧑‍💼 <strong>Profils utilisateurs personnalisés :</strong> chaque
                compte dispose d’un profil affichant le nom, l’email, la photo
                et les publications associées.
              </li>

              <li>
                🛡️ <strong>Gestion des rôles :</strong> différenciation entre
                utilisateurs standards, modérateurs et administrateurs, avec des
                droits adaptés pour la suppression de posts ou la modération de
                contenu.
              </li>

              <li>
                🔐 <strong>Sécurité et conformité :</strong> filtrage des
                entrées, protection contre les failles XSS, CORS, gestion
                d’erreurs serveur, et vérification des permissions côté backend.
              </li>

              <li>
                🧱 <strong>Architecture RESTful :</strong> séparation claire
                entre le front-end Vue.js et le backend Node.js, avec une API
                documentée et testée.
              </li>

              <li>
                📱 <strong>Interface responsive :</strong> adaptée aux
                ordinateurs et mobiles, pensée pour une expérience fluide dans
                un contexte professionnel.
              </li>
            </ul>

            <p>
              Toutes ces fonctionnalités s’appuient sur une architecture claire
              et modulaire, facilitant la maintenance et les futures évolutions
              de l’application.
            </p>
          </div>
        </section>
        <section className="project__section steps">
          <h2 className="project__subtitle neon-yellow">
            Les étapes du projet
          </h2>

          <p>
            La réalisation de <strong>Groupomania</strong> s’est déroulée selon
            une démarche structurée en plusieurs phases, du cadrage technique
            initial à la mise en ligne d’une version stable et sécurisée. Chaque
            étape a contribué à renforcer ma compréhension du développement full
            stack et des enjeux liés à la sécurité et à la modularité.
          </p>

          <div className="steps__list">
            <div className="steps__item">
              <div className="steps__badge">1</div>
              <h3>Analyse du besoin et définition des objectifs</h3>
              <ul>
                <li>
                   Identifier les fonctionnalités clés d’un réseau social
                  interne.
                </li>
                <li>
                   Définir les rôles utilisateurs (membre, modérateur, admin).
                </li>
                <li>
                   Concevoir une base de données relationnelle cohérente avec
                  MySQL.
                </li>
                <li>
                   Planifier la structure de l’API et les routes principales.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">2</div>
              <h3>Conception du backend Node.js</h3>
              <p>
                Développement de l’API REST avec <strong>Express</strong> et{" "}
                <strong>Sequelize ORM</strong> pour la gestion des modèles
                (User, Post, Comment). Implémentation de l’authentification avec{" "}
                <strong>JWT</strong> et
                <strong> bcrypt</strong>, mise en place de la validation des
                données et du contrôle des accès utilisateurs.
              </p>
            </div>

            <div className="steps__item">
              <div className="steps__badge">3</div>
              <h3>Développement du frontend Vue.js</h3>
              <ul>
                <li>
                  Création de la structure des pages et des composants
                  réutilisables.
                </li>
                <li>
                  Mise en place du <strong>store Vuex</strong> pour gérer l’état
                  global.
                </li>
                <li>
                  Configuration du <strong>router Vue</strong> pour la
                  navigation dynamique.
                </li>
                <li>
                  Gestion des appels API avec <strong>Axios</strong>.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">4</div>
              <h3>Implémentation des fonctionnalités et sécurité</h3>
              <p>
                Ajout des modules de création, suppression et modification de
                posts. Sécurisation des requêtes et des routes avec JWT,
                contrôle des accès côté serveur, et filtrage des fichiers
                uploadés avec <strong>Multer</strong>. Application des bonnes
                pratiques OWASP pour prévenir les attaques courantes.
              </p>
            </div>

            <div className="steps__item">
              <div className="steps__badge">5</div>
              <h3>Tests et finalisation</h3>
              <p>
                Phase de validation complète : tests des endpoints de l’API,
                vérification de la persistance des données, optimisation des
                performances et correction des erreurs d’affichage côté front.
                Préparation du projet pour la soutenance et documentation
                technique finale.
              </p>
            </div>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">
            Les acteurs – les interactions
          </h2>

          <div className="project__content">
            <p>
              Le développement de <strong>Groupomania</strong> s’est inscrit
              dans le cadre de ma formation{" "}
              <em>Développeur d’application JavaScript</em> chez
              <strong> OpenClassrooms</strong>. Il s’agissait d’un projet
              individuel évalué, mais guidé par un
              <strong>mentor professionnel</strong> qui m’a accompagné tout au
              long du processus.
            </p>

            <p>
              Les échanges réguliers avec le mentor ont permis de valider les
              choix techniques (notamment sur la structure de l’API et la
              sécurité des routes) et d’améliorer la qualité du code grâce à des
              revues et des conseils concrets sur la performance et la
              maintenabilité du projet.
            </p>

            <p>
              J’ai également bénéficié d’un{" "}
              <strong>retour d’expérience pédagogique</strong>
              via la communauté OpenClassrooms, en partageant mes avancées et
              mes questionnements sur les forums de développeurs. Ces
              interactions ont renforcé ma compréhension des enjeux réels du
              développement d’un réseau social d’entreprise et m’ont permis
              d’adopter des pratiques plus professionnelles (Gitflow,
              documentation API, normalisation des routes REST).
            </p>

            <p>
              Enfin, la phase de soutenance a constitué un moment clé : la
              présentation du projet et de ses aspects techniques devant un jury
              m’a permis de
              <strong>formaliser mes choix d’architecture</strong>, d’expliquer
              la logique de sécurité mise en œuvre et de défendre mes décisions
              techniques de manière argumentée.
            </p>
          </div>
        </section>
        <section className="project__section results">
          <h2 className="project__subtitle neon-yellow">Les résultats</h2>

          {/* Bloc "Pour moi" */}
          <div className="results__block">
            <h3 className="results__title">Pour moi</h3>
            <p>
              Le développement de <strong>Groupomania</strong> a marqué une
              étape essentielle dans ma progression en tant que développeur full
              stack. Ce projet m’a permis de mettre en pratique l’ensemble des
              compétences acquises durant la formation OpenClassrooms, tout en
              consolidant mes réflexes de développement professionnel.
            </p>

            <p>
              J’ai pu approfondir mes connaissances sur l’écosystème
              <strong> Vue.js</strong>, la gestion du{" "}
              <strong>state global</strong>
              via un <strong>store</strong>, et l’implémentation d’une
              <strong>API REST sécurisée</strong> construite avec
              <strong> Node.js</strong> et <strong>Sequelize</strong>.
            </p>

            <ul>
              <li>
                 Conception et sécurisation d’une API REST complète (CRUD, JWT,
                Bcrypt)
              </li>
              <li> Gestion des rôles utilisateurs (admin / user)</li>
              <li>
                 Manipulation de la base de données avec{" "}
                <strong>Sequelize ORM</strong>
              </li>
              <li>
                 Maîtrise du cycle complet d’un projet full stack (front ↔
                back)
              </li>
              <li>✦ Structuration du code et documentation technique</li>
            </ul>

            <p>
              Ce projet m’a aussi appris à{" "}
              <strong>gérer les interactions entre frontend et backend</strong>{" "}
              de manière fluide, à anticiper les problématiques de sécurité
              (authentification, validation des entrées, droits d’accès) et à
              garantir une expérience utilisateur cohérente et intuitive.
            </p>
          </div>

          {/* Bloc "Pour le projet" */}
          <div className="results__block">
            <h3 className="results__title">Pour le projet</h3>
            <p>
              Le réseau social <strong>Groupomania</strong> atteint pleinement
              ses objectifs : offrir un espace de communication interne simple,
              sécurisé et fonctionnel pour les collaborateurs d’une entreprise.
            </p>

            <h4 className="results__subtitle">Bénéfices concrets observés :</h4>
            <ul>
              <li>
                <span className="highlight">🔐 Sécurité :</span>
                Authentification JWT, chiffrement des mots de passe, et
                validation des requêtes côté serveur.
              </li>
              <li>
                <span className="highlight">💬 Interaction sociale :</span>
                Création de publications, ajout de commentaires, gestion des
                profils utilisateurs avec image.
              </li>
              <li>
                <span className="highlight">🧱 Architecture claire :</span>
                Découpage logique entre le front Vue.js, le backend Express et
                la base de données MySQL.
              </li>
              <li>
                <span className="highlight">⚡ Performance :</span>
                API légère, routes optimisées, et temps de réponse fluide.
              </li>
            </ul>

            <p className="results__summary">
              En résumé, <strong>Groupomania</strong> illustre ma capacité à
              <strong>concevoir un projet complet</strong>, de la base de
              données jusqu’à l’interface utilisateur, tout en respectant les
              bonnes pratiques de sécurité et d’organisation du code.
            </p>
          </div>
        </section>
        <section className="project__section futures">
          <h2 className="project__subtitle neon-yellow">
            Les lendemains du projet
          </h2>

          <p>
            Bien que <strong>Groupomania</strong> ait atteint les objectifs
            fixés dans le cadre du projet de fin de formation, il a été conçu
            dès le départ comme une base <strong>évolutive</strong> et{" "}
            <strong>ouverte</strong> à de nouvelles fonctionnalités.
          </p>

          <p>
            L’architecture claire et modulaire du backend, associée à une
            interface front-end moderne en <strong>Vue.js</strong>, permet
            d’envisager plusieurs axes d’amélioration à moyen terme.
          </p>

          <div className="futures__block">
            <h3>Évolutions possibles</h3>
            <ul>
              <li>
                <strong>Messagerie instantanée</strong> : ajout d’un système de
                chat en temps réel entre les employés via{" "}
                <strong>WebSocket</strong>
                ou <strong>Socket.IO</strong>.
              </li>
              <li>
                <strong>Gestion avancée des notifications</strong> : alertes
                pour les nouveaux posts, commentaires ou mentions.
              </li>
              <li>
                <strong>Modération automatique</strong> : détection des contenus
                inappropriés grâce à une couche d’analyse sémantique
                (intégration future d’une API IA).
              </li>
              <li>
                <strong>Tableau d’administration</strong> : gestion centralisée
                des utilisateurs, des posts et des signalements.
              </li>
              <li>
                <strong>Version mobile</strong> : développement d’une version
                responsive complète, voire d’une application hybride via{" "}
                <strong>Vue Native</strong> ou <strong>Ionic</strong>.
              </li>
              <li>
                <strong>Amélioration de la sécurité</strong> : mise en place de
                rôles personnalisés et d’un suivi des connexions.
              </li>
            </ul>
          </div>

          <div className="futures__block">
            <h3>Vision à long terme</h3>
            <p>
              L’ambition de <strong>Groupomania</strong> est de devenir un
              <span className="highlight-blue">
                {" "}
                véritable réseau social interne d’entreprise
              </span>
              , favorisant la cohésion, la communication et l’innovation au sein
              des équipes.
            </p>

            <p>
              À long terme, l’application pourrait être déployée dans un
              environnement
              <strong>Dockerisé</strong>, couplé à une architecture
              <strong>API-first</strong> pour une intégration fluide avec
              d’autres outils RH ou CRM. Elle pourrait également inclure une
              couche d’analytics permettant de mesurer l’engagement et
              l’activité sur la plateforme.
            </p>

            <p>
              En parallèle, cette base pourrait servir de socle pour développer
              des solutions plus spécialisées (gestion de projet, intranet
              d’équipe, ou plateforme de partage de connaissances).
            </p>
          </div>
        </section>
        <section className="project__section opinion">
          <h2 className="project__subtitle neon-yellow">Mon point de vue</h2>

          <p>
            <strong>Groupomania</strong> a représenté pour moi un véritable
            <span className="highlight-blue"> tournant dans ma formation</span>.
            C’était le premier projet où je devais concevoir une application
            <strong>full stack complète</strong>, avec un front, un back et une
            base de données, tout en respectant les bonnes pratiques de sécurité
            et d’architecture.
          </p>

          <p>
            Ce projet m’a permis de mettre en pratique l’ensemble des
            compétences acquises durant ma formation{" "}
            <em>Développeur d’application JavaScript</em> : structuration d’un
            backend avec <strong>Node.js</strong> et <strong>Express</strong>,
            gestion de la base de données via <strong>Sequelize</strong> et
            sécurisation des routes par <strong>JWT</strong> et{" "}
            <strong>bcrypt</strong>.
          </p>

          <p>
            Côté front-end, j’ai consolidé mes réflexes sur
            <strong>Vue.js</strong> en combinant <strong>Vue Router</strong> et
            <strong>Vuex</strong> pour la gestion d’état et la navigation.
            L’ensemble m’a fait passer d’un apprentissage guidé à une approche
            beaucoup plus <strong>autonome et rigoureuse</strong>.
          </p>

          <p>
            En développant <strong>Groupomania</strong>, j’ai découvert
            l’importance de l’
            <span className="highlight-pink">expérience utilisateur</span>
            et de la cohérence entre les différentes couches d’une application.
            Il ne s’agissait plus seulement de faire fonctionner le code, mais
            de proposer une solution{" "}
            <strong>fluide, sécurisée et agréable à utiliser</strong>.
          </p>

          <p>
            Avec le recul, je considère ce projet comme une{" "}
            <strong>étape fondatrice</strong> : il m’a permis de comprendre la
            logique d’un projet d’entreprise, de maîtriser le déploiement d’un
            environnement complet et d’acquérir la confiance nécessaire pour
            aborder des architectures plus complexes.
          </p>

          <p>
            <strong>Groupomania</strong> symbolise la transition entre la phase
            d’apprentissage et celle de la{" "}
            <span className="highlight-blue">maturité technique</span> : un
            projet que j’ai non seulement réalisé pour valider mes compétences,
            mais aussi pour poser les bases de ma future pratique
            professionnelle en tant que développeur full stack.
          </p>
        </section>
        <section className="project__section skills">
          <h2 className="project__subtitle neon-yellow">
            Compétences associées
          </h2>

          <ul className="skills__list">
            <li>
              🖥️ Développement front-end avec <strong>Vue.js</strong>
            </li>
            <li>
              🧩 Gestion d’état avec <strong>Vuex</strong> et{" "}
              <strong>Vue Router</strong>
            </li>
            <li>
              ⚙️ Développement back-end avec <strong>Node.js</strong> et{" "}
              <strong>Express</strong>
            </li>
            <li>
              🗄️ Modélisation et gestion de données avec{" "}
              <strong>Sequelize</strong> et <strong>MySQL</strong>
            </li>
            <li>
              🔐 Mise en place d’une authentification sécurisée (
              <strong>JWT</strong>, <strong>bcrypt</strong>)
            </li>
            <li>
              🧠 Conception d’une architecture full stack cohérente et
              maintenable
            </li>
            <li>
              💬 Collaboration, rigueur et respect des bonnes pratiques de
              développement
            </li>
            <li>🚀 Autonomie complète sur un projet de bout en bout</li>
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
            <FontAwesomeIcon icon={faJs} className="fa-circle-bg fa-glitch" />
            <FontAwesomeIcon
              icon={faNodeJs}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faDocker}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon icon={faGit} className="fa-circle-bg fa-glitch" />
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-circle-bg fa-glitch"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Groupomania;
