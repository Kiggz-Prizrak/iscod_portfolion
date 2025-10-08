import React from "react";
import { Link } from "react-router-dom";

const NodeSkill = () => {
  return (
    <main className="bg-nebula bg-stars">
      <header className="skill__header">
        <h1 className="skill__title neon-yellow">Compétence — Node.js</h1>
        <p className="skill__tagline">
          Développement backend moderne, temps réel et industrialisé avec{" "}
          <strong>Node.js</strong>.
        </p>
      </header>

      {/* Définition */}
      <section className="skill__section bg-grid">
        <h2 className="skill__subtitle neon-blue">Définition</h2>
        <p>
          <strong>Node.js</strong> est un environnement d’exécution JavaScript
          côté serveur, construit sur le moteur <em>V8</em> de Google Chrome. Il
          permet de créer des applications backend performantes, capables de
          gérer des connexions simultanées et des flux de données en{" "}
          <span className="highlight-pink">temps réel</span>.
        </p>
        <p>
          Dans mes projets, j’utilise Node.js pour construire des{" "}
          <strong>API REST</strong> robustes, orchestrer des{" "}
          <strong>WebSockets</strong> pour le temps réel, et connecter
          différents services — que ce soit un <strong>frontend React</strong>,
          un <strong>serveur Unity/C#</strong> ou une base de données MySQL.
          Node s’impose comme la colonne vertébrale de mon écosystème technique,
          où performance et clarté de structure priment.
        </p>
      </section>

      {/* Éléments de preuve */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Éléments de preuve</h2>

        <article className="proof">
          <h3>🎭 Large Field Theater — Backend et communication temps réel</h3>
          <ul>
            <li>
              Développement du <strong>backend central</strong> en Node.js pour
              gérer la communication entre les casques, les serveurs DEM et le
              frontend React.
            </li>
            <li>
              Intégration de <strong>Socket.IO</strong> pour synchroniser en
              direct les statuts des casques et des groupes.
            </li>
            <li>
              Conception d’une <strong>API REST</strong> complète pour la
              gestion des devices, groupes, APKs et serveurs DEM.
            </li>
            <li>
              Architecture <strong>Dockerisée</strong> (backend + base MySQL)
              pour un déploiement reproductible.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : un système unifié, réactif et stable, permettant la
            supervision en direct de plusieurs dizaines de casques VR sur le
            réseau.
          </p>
        </article>

        <article className="proof">
          <h3>💬 Groupomania — API REST sécurisée</h3>
          <ul>
            <li>
              Conception d’un <strong>backend Node.js / Express</strong> pour un
              réseau social d’entreprise.
            </li>
            <li>
              Authentification via <strong>JWT</strong>, gestion des fichiers
              avec <strong>Multer</strong> et ORM <strong>Sequelize</strong>.
            </li>
            <li>
              Sécurisation des endpoints et validation des entrées utilisateurs.
            </li>
          </ul>
          <p className="proof__result">
            Résultat : une API stable, conforme aux normes de sécurité,
            connectée à un frontend Vue.js pour une application full-stack
            complète.
          </p>
        </article>

        <article className="proof">
          <h3>🧠 DEM Server — Node.js comme point d’ancrage réseau</h3>
          <p>
            Développement d’un serveur intermédiaire capable de communiquer avec
            les <strong>Device Managers</strong> et les casques via ADB, puis de
            relayer les informations vers le backend central. Node.js a permis
            une <strong>communication bidirectionnelle</strong> fluide entre
            plusieurs couches logicielles et matérielles.
          </p>
        </article>
      </section>

      {/* Autocritique */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon autocritique</h2>
        <ul className="checklist">
          <li>
            <strong>Niveau</strong> : maîtrise solide du développement backend
            avec Express, Socket.IO, Sequelize et gestion d’API REST.
          </li>
          <li>
            <strong>Place dans mon profil</strong> : compétence pivot — Node.js
            est le cœur de mes architectures temps réel et de la communication
            inter-systèmes.
          </li>
          <li>
            <strong>Recul</strong> : j’accorde une importance majeure à la{" "}
            <em>structure</em>, la <em>lisibilité</em> et la{" "}
            <em>scalabilité</em>. J’ai appris à découper mes services, limiter
            les requêtes inutiles et centraliser la logique dans des modules
            indépendants.
          </li>
        </ul>
      </section>

      {/* Évolution */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Mon évolution sur Node.js</h2>
        <ul>
          <li>
            Approfondir la <strong>scalabilité</strong> (Cluster mode, load
            balancing) pour les environnements multi-utilisateurs.
          </li>
          <li>
            Explorer <strong>NestJS</strong> pour structurer des backends
            d’entreprise à grande échelle.
          </li>
          <li>
            Mettre en place des <strong>tests automatisés</strong> (Jest,
            Supertest) pour fiabiliser les pipelines CI/CD.
          </li>
          <li>
            Continuer à optimiser la <strong>gestion mémoire</strong> et la
            répartition des événements temps réel.
          </li>
        </ul>
      </section>

      {/* Réalisations associées — version cards */}
      <section className="skill__section">
        <h2 className="skill__subtitle neon-blue">Réalisations associées</h2>

        <div className="skill__cards">
          <Link href="/projects/large-field-theater" className="skill__card">
            <h3>🎭 Large Field Theater</h3>
            <p>Node.js · Socket.IO · Docker · MySQL</p>
          </Link>

          <Link href="/projects/groupomania" className="skill__card">
            <h3>💬 Groupomania</h3>
            <p>Node.js · Express · Sequelize · JWT</p>
          </Link>

          <Link href="/projects/dem-server" className="skill__card">
            <h3>🧠 DEM Server</h3>
            <p>Node.js · ADB · WebSocket · Communication réseau</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NodeSkill;
