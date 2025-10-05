import React from "react";
import Hero from "../../components/Hero";
import ProjectBanner from "../../components/ProjectBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import {
  faRust,
  faDocker,
  faLinux,
  faGit,
  faGithub,
  faLinkedin,
  faDev,
  faStackOverflow,
  faOpenai,
} from "@fortawesome/free-brands-svg-icons";
import { faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
const Lyseo = () => {
  const icons = [faJs, faReact, faNodeJs, faRust, faHtml5, faCss3Alt];
  const gradients = [
    "linear-gradient(135deg, #ff00ff, #00ffff)",
    "linear-gradient(90deg, #ffcc00, #ff00ff)",
    "linear-gradient(120deg, #00ffff, #ff007f)",
    "linear-gradient(45deg, #00ff9f, #7d00ff)",
    "linear-gradient(60deg, #ff007f, #00aaff)",
    "linear-gradient(100deg, #ff00aa, #00ffff)",
  ];
  return (
    <main className="bg-nebula bg-stars ">
      <ProjectBanner title="Lyseo" subtitle="Rust – Performance & Sécurité" />

      <div className="project ">
        <div className="futures__block bg-grid">
          <FontAwesomeIcon icon={faRust} className="fa-circle-bg fa-glitch" />
          <FontAwesomeIcon icon={faDocker} className="fa-circle-bg fa-glitch" />
          <FontAwesomeIcon icon={faGit} className="fa-circle-bg fa-glitch" />
          <FontAwesomeIcon icon={faGithub} className="fa-circle-bg fa-glitch" />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fa-circle-bg fa-glitch"
          />
          <FontAwesomeIcon icon={faLinux} className="fa-circle-bg fa-glitch" />
        </div>
        <div style={{ display: "flex", gap: "2rem", fontSize: "4rem" }}>
          <FontAwesomeIcon icon={faJs} className="fa-neon" size="4px" />
          <FontAwesomeIcon icon={faReact} className="fa-gradient" size="4px" />
          <FontAwesomeIcon icon={faNodeJs} className="fa-circle" size="4px" />
          <FontAwesomeIcon icon={faJs} className="fa-glitch " size="4px" />
          <FontAwesomeIcon icon={faReact} className="fa-gradient" />
          <FontAwesomeIcon icon={faRust} className="fa-gradient" />

          <FontAwesomeIcon
            icon={faNodeJs}
            className="fa-circle-bg fa-glitch"
            size="4px"
          />
        </div>
        <section className="project__meta">
          <p>
            📅 <strong>Période :</strong> 2025 — projet personnel de recherche
            et d’expérimentation autour du langage Rust.
          </p>
          <p>
            🧠 <strong>Réalisation :</strong> développé en{" "}
            <span className="highlight-blue">autonomie complète</span>, dans une
            démarche d’apprentissage et d’exploration technique.
          </p>
        </section>

        <section className="project__section bg-grid">
          <h2 className="project__subtitle neon-yellow">Lancement du projet</h2>

          <div className="project__content">
            <p>
              À l’origine, le projet Lyseo est né d’un besoin clair : disposer
              d’un outil capable de traiter efficacement des opérations
              intensives tout en garantissant une sécurité mémoire
              irréprochable.
            </p>

            <p>
              De nombreux langages (comme <strong>C</strong>,{" "}
              <strong>C++</strong> ou
              <strong> Java</strong>) permettent de travailler sur des
              applications systèmes ou des backends performants, mais chacun
              présente des limites :
            </p>

            <ul>
              <li>
                ⚡ <strong>C et C++</strong> → grande rapidité, mais risques
                élevés d’erreurs mémoire (segmentation faults, fuites).
              </li>
              <li>
                🛡 <strong>Java</strong> → meilleure sûreté, mais consommation
                mémoire plus importante et latences liées au garbage collector.
              </li>
            </ul>

            <p>L’objectif de Lyseo était donc de trouver un compromis :</p>

            <ul>
              <li>🚀 La performance d’un langage bas niveau (comme C++).</li>
              <li>🔒 La sécurité et la fiabilité d’un langage moderne.</li>
            </ul>

            <p>Rust s’est imposé comme le choix idéal grâce à :</p>

            <ol>
              <li>
                Son système de gestion de la mémoire basé sur l’emprunt et la
                possession (<em>borrow checker</em>).
              </li>
              <li>
                Sa capacité à gérer la concurrence sans <em>data races</em>.
              </li>
              <li>
                Sa performance proche du C/C++, mais sans leurs faiblesses
                historiques.
              </li>
            </ol>

            <p>
              L’enjeu initial consistait à concevoir une architecture logicielle
              modulaire en Rust capable de :
            </p>

            <ul>
              <li>
                Répondre à des besoins variés (traitement de données, gestion de
                flux, backend).
              </li>
              <li>Servir de base évolutive pour des extensions futures.</li>
              <li>
                Rester suffisamment didactique pour illustrer concrètement la
                puissance de Rust.
              </li>
            </ul>

            <p>
              Dès le départ, le projet a été conçu comme une expérience
              technique et pratique permettant non seulement de répondre à un
              cas d’usage précis, mais aussi d’apporter un retour d’expérience
              complet sur l’utilisation de Rust dans un contexte réel.
            </p>
          </div>
        </section>

        <section className="project__section steps">
          <h2 className="project__subtitle neon-yellow">Les étapes</h2>
          <p>
            La réalisation du projet Lyseo s’est déroulée en plusieurs étapes
            successives, chacune ayant permis de consolider les bases techniques
            et d’affiner les objectifs fonctionnels.
          </p>

          <div className="steps__list">
            <div className="steps__item">
              <div className="steps__badge">1</div>
              <h3>Analyse et définition des besoins</h3>
              <ul>
                <li>✦ Obtenir un outil rapide et économe en ressources</li>
                <li>✦ Garantir la sécurité mémoire et concurrente</li>
                <li>✦ Concevoir une architecture modulaire évolutive</li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">2</div>
              <h3>Conception de l’architecture logicielle</h3>
              <p>
                Architecture modulaire, sélection de crates :
                <span className="highlight"> Serde</span>,
                <span className="highlight"> Tokio</span>, tests unitaires et
                intégration.
              </p>
            </div>

            <div className="steps__item">
              <div className="steps__badge">3</div>
              <h3>Développement et implémentation</h3>
              <ul>
                <li>✦ Gestion stricte de la mémoire (sans GC)</li>
                <li>✦ Sécurité du compilateur</li>
                <li>✦ Multi-threads sans conflits</li>
              </ul>
            </div>

            <div className="steps__item">
              <div className="steps__badge">4</div>
              <h3>Optimisation et tests</h3>
              <p>
                Profilage (exécution, mémoire), logs détaillés, validation de la
                stabilité par tests de charge.
              </p>
            </div>

            <div className="steps__item">
              <div className="steps__badge">5</div>
              <h3>Validation finale</h3>
              <p>
                Version stable testée par des utilisateurs, prête à accueillir
                des extensions (API, interface graphique, etc.).
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
              Le projet <strong>Lyseo</strong> a été mené de manière
              principalement autonome, mais il s’est nourri de nombreux échanges
              avec des développeurs expérimentés et des membres de la communauté{" "}
              <strong>Rust</strong>.
            </p>

            <p>
              Ces interactions, réalisées via forums techniques et discussions
              sur les canaux open source, m’ont permis de confronter mes choix
              d’architecture, d’optimiser certaines approches de concurrence et
              d’adopter des bonnes pratiques spécifiques à Rust.
            </p>

            <p>
              J’ai également bénéficié de retours de pairs sur la clarté du
              code, la documentation et la structure des modules, ce qui a
              contribué à professionnaliser davantage ma démarche et à renforcer
              la qualité globale du projet.
            </p>
          </div>
        </section>

        <section className="project__section results">
          <h2 className="project__subtitle neon-yellow">Les résultats</h2>

          {/* Bloc "Pour moi" */}
          <div className="results__block">
            <h3 className="results__title">Pour moi</h3>
            <p>
              Ce projet m’a permis d’explorer et de maîtriser un langage que je
              n’avais jusqu’ici abordé qu’en surface :{" "}
              <span className="highlight">Rust</span>.
            </p>
            <p>
              Grâce à Lyseo, j’ai acquis des compétences précieuses dans
              plusieurs domaines :
            </p>
            <ul>
              <li>
                ✦ Sécurité mémoire avec le{" "}
                <span className="highlight">borrow checker</span>
              </li>
              <li>✦ Programmation concurrente sans data races</li>
              <li>
                ✦ Optimisation des performances (comparaisons Rust vs Java/C++)
              </li>
              <li>✦ Approche modulaire pour un code clair et évolutif</li>
            </ul>
            <p>
              En parallèle, ce projet m’a formé en autonomie : définir une
              architecture, gérer un cycle complet de développement et assurer
              une validation finale m’ont permis de renforcer mon profil de
              développeur full stack avec une dimension système.
            </p>
          </div>

          {/* Bloc "Pour le projet" */}
          <div className="results__block">
            <h3 className="results__title">Pour le projet</h3>
            <p>
              Lyseo a atteint son objectif initial : démontrer l’efficacité de
              Rust dans un contexte où
              <strong> performance</strong> et <strong> fiabilité</strong> sont
              essentielles.
            </p>
            <h4 className="results__subtitle">Bénéfices concrets observés :</h4>
            <ul>
              <li>
                <span className="highlight">Performance accrue :</span>
                <ul>
                  <li>Temps d’exécution réduit par rapport à Java</li>
                  <li>Consommation mémoire très basse</li>
                </ul>
              </li>
              <li>
                <span className="highlight">Robustesse :</span>
                <ul>
                  <li>Aucun crash mémoire contrairement à C/C++</li>
                  <li>Stabilité confirmée lors de tests de charge</li>
                </ul>
              </li>
              <li>
                <span className="highlight">Évolutivité :</span>
                <ul>
                  <li>Modules facilement ajoutables (API, GUI, …)</li>
                  <li>Base réutilisable pour d’autres projets</li>
                </ul>
              </li>
            </ul>
            <p className="results__summary">
              En résumé, Lyseo illustre ce qu’apporte Rust dans un projet
              logiciel moderne :<strong> la performance du bas niveau</strong>{" "}
              avec
              <strong> la sûreté du haut niveau</strong>.
            </p>
          </div>
        </section>

        <section className="project__section futures">
          <h2 className="project__subtitle neon-yellow">
            Les lendemains du projet
          </h2>
          <p>
            Lyseo n’a pas vocation à rester un simple projet de démonstration.
            Les bases techniques mises en place offrent une marge d’évolution
            importante, ouvrant la voie à de nouvelles fonctionnalités et à des
            cas d’usage concrets.
          </p>

          <div className="futures__block">
            <h3>Évolutions possibles</h3>
            <ul>
              <li>
                ✦ <strong>Interface graphique multiplateforme</strong> :
                intégration via <em>Tauri</em> ou <em>Flutter</em>, pour une
                expérience moderne et ergonomique.
              </li>
              <li>
                ✦ <strong>API REST et services backend</strong> : ajout d’une
                couche réseau exposant les modules de Lyseo sous forme d’API.
              </li>
              <li>
                ✦ <strong>Extension aux cas d’usage réels</strong> : gestion
                d’outils systèmes, traitement de flux en temps réel,
                cybersécurité.
              </li>
              <li>
                ✦ <strong>Optimisations avancées</strong> : programmation
                parallèle,
                <em> GPU computing</em> et intégration hybride (Rust + Python
                via FFI).
              </li>
            </ul>
          </div>

          <div className="futures__block">
            <h3>Vision à long terme</h3>
            <p>
              Lyseo pourrait devenir un projet <strong>open-source</strong>,
              encourageant la collaboration et la contribution d’autres
              développeurs intéressés par Rust et la performance logicielle.
            </p>
            <p>
              Il pourrait aussi servir de{" "}
              <strong>base technique commune</strong>
              pour des projets plus complexes, en capitalisant sur la robustesse
              de son architecture, la polyvalence de Rust et sa capacité
              d’intégration dans divers environnements (desktop, web, backend,
              embarqué).
            </p>
          </div>
        </section>

        <section className="project__section opinion">
          <h2 className="project__subtitle neon-yellow">Mon point de vue</h2>

          <p>
            Lyseo a représenté pour moi bien plus qu’un simple exercice
            technique : c’était un véritable{" "}
            <strong>défi intellectuel et méthodologique</strong>. J’ai pu
            confronter mes acquis de développeur full stack à un univers
            différent, celui du <strong>langage système</strong>, et découvrir
            de nouvelles façons d’aborder la conception logicielle.
          </p>

          <p>Ce projet m’a appris à :</p>
          <ul>
            <li>
              ✦ réfléchir en termes de <strong>performance pure</strong>, en
              optimisant chaque opération,
            </li>
            <li>
              ✦ penser la <strong>sécurité dès la conception</strong>, en
              intégrant des garde-fous dans l’architecture,
            </li>
            <li>
              ✦ développer une approche <strong>rigoureuse et modulaire</strong>
              , qui facilite la maintenance et l’évolution.
            </li>
          </ul>

          <p>
            Mais au-delà des aspects techniques, Lyseo m’a surtout montré la
            valeur d’un langage comme Rust dans un contexte moderne : il combine
            le meilleur des deux mondes — la{" "}
            <strong>vitesse du bas niveau</strong> et la{" "}
            <strong>sûreté du haut niveau</strong>.
          </p>

          <p>
            Je considère Lyseo comme une <strong>expérience fondatrice</strong>{" "}
            qui m’a permis d’élargir mon horizon, de renforcer ma capacité
            d’adaptation et de confirmer mon intérêt pour les technologies
            émergentes qui redéfinissent les standards de la programmation.
          </p>
        </section>

        <section className="project__section skills">
          <h2 className="project__subtitle neon-yellow">
            Compétences associées
          </h2>

          <ul className="skills__list">
            <li>
              ⚙️ Langage <strong>Rust</strong>
            </li>
            <li>🧩 Conception et architecture logicielle</li>
            <li>🔒 Sécurité mémoire et gestion de la concurrence</li>
            <li>🚀 Optimisation des performances</li>
            <li>🧠 Autonomie et rigueur dans la gestion de projet</li>
            <li>💬 Collaboration technique et communication</li>
          </ul>
          <div
            className="futures__block bg-grid"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <FontAwesomeIcon icon={faRust} className="fa-circle-bg fa-glitch" />
            <FontAwesomeIcon
              icon={faDocker}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon icon={faGit} className="fa-circle-bg fa-glitch" />
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-circle-bg fa-glitch"
            />
            <FontAwesomeIcon
              icon={faLinux}
              className="fa-circle-bg fa-glitch"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Lyseo;
