import React from "react";
import ProjectBanner from "../../components/ProjectBanner";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KanbanWebApp = () => {
  return (
    <main className="bg-nebula bg-stars ">
      <ProjectBanner
        title="Kanban web app"
        subtitle="Application de gestion agile – React · Redux · LocalStorage"
      />

      <div className="project__tech-banner">
        <FontAwesomeIcon icon={faReact} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faJs} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faCss3Alt} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faHtml5} className="fa-circle-bg fa-glitch" />
        <FontAwesomeIcon icon={faGithub} className="fa-circle-bg fa-glitch" />
      </div>

      <div className="project ">
        <section className="project__meta">
          <p>
            📅 <strong>Période :</strong> 2023 — entre mes deux formations :
            <em> Développeur d’application JavaScript (OpenClassrooms)</em> et{" "}
            <em>Expert en ingénierie du logiciel (ISCOD)</em>.
          </p>
          <p>
            🧠 <strong>Réalisation :</strong> projet personnel développé en{" "}
            <span className="highlight-blue">autonomie complète</span>.
          </p>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Présentation</h2>

          <div className="presentation__content">
            <p>
              <strong>Kanban Web App</strong> est une application de gestion de
              tâches développée en <strong>React.js</strong>, pensée pour offrir
              une organisation claire et intuitive des projets selon une
              approche <span className="highlight-blue">Agile</span>.
            </p>

            <p>
              Conçu durant une période charnière entre mes deux formations —{" "}
              <em>Développeur d’application JavaScript (OpenClassrooms)</em> et{" "}
              <em>Expert en ingénierie du logiciel (ISCOD)</em> — ce projet m’a
              permis de consolider mes acquis techniques tout en perfectionnant
              mes pratiques de développement front-end moderne.
            </p>

            <p>
              L’idée est née d’un besoin concret : disposer d’un outil léger et
              rapide pour planifier mes projets personnels. Plutôt que
              d’utiliser des solutions existantes, j’ai voulu créer ma propre
              application Kanban, <strong>simple, locale et performante</strong>
              , offrant une interface élégante avec un mode{" "}
              <span className="highlight-pink">clair/sombre</span> et une{" "}
              <span className="highlight-blue">sauvegarde persistante</span> des
              données.
            </p>

            <p>
              Le résultat : une application fluide et personnalisable,
              permettant de créer plusieurs tableaux, d’ajouter des colonnes et
              des tâches avec un système de <strong>drag & drop</strong>{" "}
              entièrement fonctionnel.
            </p>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Lancement du projet</h2>

          <div className="project__content">
            <p>
              Le projet <strong>Kanban Web App</strong> est né d’un besoin
              personnel : je travaillais sur plusieurs <em>side projects</em> en
              parallèle, et il devenait difficile de suivre l’avancement de
              chaque tâche. Plutôt que d’utiliser un outil externe, j’ai décidé
              de créer mon propre tableau de bord agile — un{" "}
              <strong>Kanban</strong> minimaliste mais complet.
            </p>

            <p>
              L’objectif était double : d’une part, concevoir un outil utile et
              accessible à tout développeur souhaitant organiser ses projets ;
              d’autre part, mettre en pratique les compétences acquises en{" "}
              <strong>React</strong> et <strong>Redux</strong> dans un contexte
              réel.
            </p>

            <p>
              Dès le départ, j’ai posé les bases d’une application légère, sans
              backend, reposant uniquement sur une{" "}
              <strong>sauvegarde locale via Redux Persist</strong>. Cela permet
              à chaque utilisateur de conserver ses tableaux et tâches même
              après avoir quitté la page, sans besoin de base de données ni
              d’authentification.
            </p>

            <p>
              En parallèle, j’ai travaillé sur l’expérience utilisateur avec un
              design moderne, un mode{" "}
              <span className="highlight-blue">sombre</span> par défaut, et un
              système de{" "}
              <span className="highlight-pink">drag & drop fluide</span> grâce à
              la librairie <strong>React Beautiful DnD</strong>. Chaque détail a
              été pensé pour offrir une expérience intuitive et réactive,
              adaptée à tous les écrans.
            </p>
          </div>
        </section>
        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Fonctionnalités</h2>

          <div className="project__content">
            <p>
              <strong>Kanban Web App</strong> a été pensée comme un outil à la
              fois <span className="highlight-blue">léger</span> et{" "}
              <span className="highlight-pink">puissant</span>, offrant les
              fonctionnalités essentielles d’une gestion agile moderne tout en
              restant simple à utiliser.
            </p>

            <ul className="feature-list">
              <li>
                📋{" "}
                <strong>Création et gestion de tableaux personnalisés</strong> :
                chaque projet possède son propre espace, structuré en colonnes
                et en tâches.
              </li>

              <li>
                🧱 <strong>Organisation en colonnes dynamiques</strong> :
                possibilité d’ajouter, renommer ou supprimer des colonnes à la
                volée.
              </li>

              <li>
                🪶 <strong>Ajout de tâches avec sous-tâches</strong> : chaque
                carte peut contenir un titre, une description et des
                sous-éléments pour suivre l’avancement précis d’une activité.
              </li>

              <li>
                🔄 <strong>Drag & Drop intuitif</strong> : grâce à{" "}
                <strong>React Beautiful DnD</strong>, les tâches peuvent être
                déplacées naturellement entre les colonnes.
              </li>

              <li>
                🌗 <strong>Mode clair / sombre</strong> : bascule instantanée
                pour un confort visuel optimal, intégrée au design synthwave de
                l’interface.
              </li>

              <li>
                💾 <strong>Sauvegarde locale automatique</strong> : les données
                sont stockées avec <strong>Redux Persist</strong>, garantissant
                la conservation du travail après chaque session.
              </li>

              <li>
                ⚙️ <strong>Interface responsive</strong> : adaptée aux écrans de
                bureau comme aux tablettes pour un usage flexible.
              </li>

              <li>
                🎨 <strong>Design épuré et ergonomique</strong> : une interface
                pensée pour la productivité, fluide et agréable à utiliser.
              </li>
            </ul>

            <p>
              L’ensemble de ces fonctionnalités repose sur une architecture
              claire, modulable et entièrement gérée par <strong>React</strong>{" "}
              et <strong>Redux Toolkit</strong>, garantissant à la fois
              performance et maintenabilité.
            </p>
          </div>
        </section>
        <section className="project__section steps">
          <h2 className="project__subtitle neon-yellow">
            Les étapes du projet
          </h2>

          <p>
            Le développement de <strong>Kanban Web App</strong> s’est déroulé en
            plusieurs phases successives, chacune ayant permis d’affiner les
            objectifs techniques et d’améliorer la stabilité du produit final.
          </p>

          <div className="steps__list">
            <div className="steps__item">
              <div className="steps__badge">1</div>
              <h3>Définition du besoin</h3>
              <ul>
                <li>
                   Identifier les fonctionnalités clés d’un outil Kanban
                  moderne.
                </li>
                <li>
                   Concevoir une solution <strong>autonome</strong>, sans
                  backend, avec sauvegarde locale.
                </li>
                <li>
                   Déterminer une structure de données adaptée à React et
                  Redux.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">2</div>
              <h3>Architecture et gestion d’état</h3>
              <p>
                Mise en place d’une architecture claire basée sur{" "}
                <strong>React</strong> et <strong>Redux Toolkit</strong>. La
                persistance des données locales a été gérée via{" "}
                <strong>Redux Persist</strong>, garantissant la sauvegarde
                automatique des tableaux et des tâches.
              </p>
            </div>

            <div className="steps__item">
              <div className="steps__badge">3</div>
              <h3>Implémentation du drag & drop</h3>
              <p>
                Intégration de la librairie <strong>React Beautiful DnD</strong>{" "}
                pour offrir un glisser-déposer fluide et réactif entre les
                colonnes. L’objectif : rendre la manipulation des tâches
                naturelle et intuitive, comme sur un vrai tableau physique.
              </p>
            </div>

            <div className="steps__item">
              <div className="steps__badge">4</div>
              <h3>Conception de l’interface utilisateur</h3>
              <ul>
                <li>
                   Utilisation de <strong>Sass</strong> pour une mise en page
                  claire et modulable.
                </li>
                <li>
                   Création d’un <strong>dark mode</strong> et d’un{" "}
                  <strong>light mode</strong> intégrés.
                </li>
                <li>
                   Travail sur l’ergonomie, les transitions et la lisibilité.
                </li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">5</div>
              <h3>Tests et amélioration continue</h3>
              <p>
                Après la mise en place du cœur fonctionnel, j’ai effectué
                plusieurs cycles de test pour corriger les bugs, affiner les
                performances et améliorer la cohérence de l’expérience
                utilisateur. Ce processus m’a permis de consolider mes
                compétences en <strong>React Hooks</strong> et en gestion d’état
                complexe.
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
              <strong>Kanban Web App</strong> est un projet réalisé en complète
              autonomie. J’ai cependant tiré parti de ressources communautaires
              et d’échanges sur des forums techniques (Stack Overflow, GitHub,
              Dev.to) pour affiner certaines approches et résoudre des
              problématiques spécifiques liées au
              <strong>drag & drop</strong> ou à la{" "}
              <strong>gestion d’état Redux</strong>.
            </p>

            <p>
              Cette démarche m’a permis d’expérimenter une vraie logique de{" "}
              <span className="highlight-blue">veille technologique</span> et de{" "}
              <span className="highlight-pink">collaboration indirecte</span>,
              en intégrant les retours de la communauté au sein de mon propre
              workflow.
            </p>
          </div>
        </section>

        <section className="project__section results">
          <h2 className="project__subtitle neon-yellow">Les résultats</h2>

          {/* Bloc "Pour moi" */}
          <div className="results__block">
            <h3 className="results__title">Pour moi</h3>
            <p>
              Le développement de <strong>Kanban Web App</strong> m’a permis de
              transformer des notions apprises en formation en véritables
              réflexes de développeur front-end. Ce projet m’a apporté une
              maîtrise beaucoup plus fine de la logique de composants React et
              du <strong>state management</strong> avec Redux.
            </p>
            <p>
              J’ai également approfondi ma compréhension du{" "}
              <span className="highlight-blue">
                cycle de vie d’une application React
              </span>
              , de la gestion des effets avec <strong>Hooks</strong> et de la
              structuration d’une architecture claire et scalable.
            </p>
            <ul>
              <li>
                 Consolidation de mes compétences en <strong>React</strong> et{" "}
                <strong>Redux</strong>
              </li>
              <li>
                 Mise en œuvre d’un système complet de{" "}
                <strong>drag & drop</strong>
              </li>
              <li>
                 Maîtrise de la <strong>persistance locale</strong> avec Redux
                Persist
              </li>
              <li>
                 Conception d’un design clair, responsive et agréable à
                utiliser
              </li>
              <li>
                 Approfondissement de la rigueur dans la structure du code et
                la modularité
              </li>
            </ul>
            <p>
              Ce projet a marqué un tournant dans ma pratique : il m’a permis
              d’allier créativité, autonomie et rigueur technique dans un cadre
              concret et mesurable.
            </p>
          </div>

          {/* Bloc "Pour le projet" */}
          <div className="results__block">
            <h3 className="results__title">Pour le projet</h3>
            <p>
              <strong>Kanban Web App</strong> a atteint son objectif initial :
              fournir un outil de planification personnel, fonctionnel et
              ergonomique. Son architecture simple et locale en fait une
              application accessible à tous, sans dépendance à un serveur
              externe.
            </p>
            <h4 className="results__subtitle">Bénéfices concrets :</h4>
            <ul>
              <li>✅ Application 100% locale, rapide et légère</li>
              <li>
                🌙 Expérience fluide avec un <strong>dark mode</strong> intégré
              </li>
              <li>
                🔄 Gestion intuitive des tâches via le{" "}
                <strong>drag & drop</strong>
              </li>
              <li>💾 Sauvegarde persistante sans base de données</li>
              <li>
                🎯 Outil réutilisable et évolutif, base solide pour de futures
                versions multi-utilisateurs
              </li>
            </ul>
            <p className="results__summary">
              En résumé, ce projet a consolidé mes compétences techniques et a
              posé les bases d’un savoir-faire complet en développement
              d’applications React modernes, du design à la logique métier.
            </p>
          </div>
        </section>
        <section className="project__section futures">
          <h2 className="project__subtitle neon-yellow">
            Les lendemains du projet
          </h2>

          <p>
            Si <strong>Kanban Web App</strong> est aujourd’hui un outil
            personnel complet et fonctionnel, il a été conçu dès le départ comme
            une base évolutive. Les fondations techniques et la clarté du code
            permettent d’envisager plusieurs améliorations à moyen terme.
          </p>

          <div className="futures__block">
            <h3>Évolutions possibles</h3>
            <ul>
              <li>
                <strong>Ajout d’un backend Node.js</strong> pour permettre la
                synchronisation des tableaux entre plusieurs utilisateurs.
              </li>
              <li>
                <strong>Création d’un système d’authentification</strong> avec
                gestion de profils et accès sécurisés.
              </li>
              <li>
                <strong>Mode collaboratif temps réel</strong> pour le travail en
                équipe, basé sur WebSocket ou Firebase.
              </li>
              <li>
                <strong>Export et import des données</strong> pour faciliter le
                partage de projets entre environnements.
              </li>
              <li>
                <strong>Intégration de notifications intelligentes</strong> pour
                le suivi de l’avancement ou des échéances.
              </li>
            </ul>
          </div>

          <div className="futures__block">
            <h3>Vision à long terme</h3>
            <p>
              L’ambition de ce projet dépasse la simple gestion de tâches.{" "}
              <strong>Kanban Web App</strong> pourrait évoluer vers une
              plateforme complète de pilotage de projets personnels ou
              professionnels, combinant la simplicité d’un Kanban avec la
              puissance d’un gestionnaire agile moderne.
            </p>
            <p>
              Ces futures évolutions visent à faire de l’application un{" "}
              <span className="highlight-blue">
                outil collaboratif, personnalisable et extensible
              </span>
              , adapté aussi bien aux développeurs qu’aux petites équipes
              souhaitant organiser leurs projets de manière fluide et intuitive.
            </p>
          </div>
        </section>
        <section className="project__section opinion">
          <h2 className="project__subtitle neon-yellow">Mon point de vue</h2>

          <p>
            <strong>Kanban Web App</strong> a été bien plus qu’un simple
            exercice technique : c’est un projet de transition qui a marqué une
            véritable évolution dans ma façon de concevoir et de structurer une
            application. Il m’a permis de passer d’un apprentissage académique à
            une pratique plus autonome, concrète et orientée produit.
          </p>

          <p>
            Ce projet m’a appris à équilibrer la{" "}
            <span className="highlight-blue">logique technique</span> et l’
            <span className="highlight-pink">expérience utilisateur</span>, à
            penser l’ergonomie et la simplicité avant même d’écrire la première
            ligne de code. Il m’a aussi confronté à des problématiques réelles
            comme la persistance locale, la gestion des états imbriqués ou les
            performances liées au <strong>drag & drop</strong>.
          </p>

          <p>
            D’un point de vue personnel, j’ai particulièrement apprécié la
            liberté de création qu’offrait ce projet. Coder un outil que
            j’allais utiliser moi-même a renforcé ma capacité à me mettre à la
            place de l’utilisateur, et à développer avec une exigence nouvelle :
            celle de livrer une expérience fluide, stable et agréable.
          </p>

          <p>
            <strong>Kanban Web App</strong> restera pour moi un projet fondateur
            — celui qui a relié mes deux parcours de formation, et qui m’a fait
            passer du statut d’étudiant en développement à celui de{" "}
            <span className="highlight-blue">
              créateur d’applications fonctionnelles
            </span>
            . Il symbolise mon approche du code : claire, structurée et orientée
            vers la satisfaction de l’utilisateur final.
          </p>
        </section>
        <section className="project__section skills">
          <h2 className="project__subtitle neon-yellow">
            Compétences associées
          </h2>

          <ul className="skills__list__large">
            <li>
              ⚙️ Développement front-end avec <strong>React.js</strong>
            </li>
            <li>
              🧩 Gestion d’état globale via <strong>Redux Toolkit</strong>
            </li>
            <li>
              💾 Persistance locale des données avec{" "}
              <strong>Redux Persist</strong>
            </li>
            <li>
              🖱️ Intégration d’un système complet de{" "}
              <strong>drag & drop</strong>
            </li>
            <li>
              🎨 Conception d’interfaces{" "}
              <strong>ergonomiques et responsives</strong>
            </li>
            <li>
              🌗 Mise en place d’un <strong>mode clair/sombre</strong> dynamique
            </li>
            <li>🧠 Autonomie, rigueur et sens de l’organisation</li>
            <li>💬 Amélioration continue et documentation du projet</li>
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
            <FontAwesomeIcon icon={faJs} className="fa-circle-bg fa-glitch" />
            <FontAwesomeIcon
              icon={faNodeJs}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faDocker}
              className="fa-circle-bg fa-glitch"
            />
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

export default KanbanWebApp;
