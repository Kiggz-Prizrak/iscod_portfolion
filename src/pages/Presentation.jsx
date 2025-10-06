import React from "react";
import Hero from "../components/Hero";

const Presentation = () => {
  return (
    <main className="">
      {/* <Hero
        title="Expert en ingénierie logicielle  "
        subtitle="Fullstack Developer → React | Vue | Angular | Node.js | Rust | Java"
        image="/assets/profileb.jpg"
        actions={
          <>
            <a className="btn btn--blue" href="/skills">
              Explorer mes compétences
            </a>
            <a className="btn btn--pink" href="/projects">
              Voir mes réalisations
            </a>
          </>
        }
      /> */}
      <div className="about">
        <section className="about__section">
          <h2 className="about__title neon-pink">Présentation</h2>
          <p>
            Actuellement alternant à l’ISCOD en mastère d’Expert en Ingénierie
            du Logiciel, je poursuis un parcours technique orienté vers la
            conception de systèmes complets, du backend à l’interface
            utilisateur.
          </p>
          <p>
            Mon parcours reflète une double culture : celle du{" "}
            <span className="highlight-blue">développeur full stack</span>{" "}
            passionné par la technique, et celle du{" "}
            <span className="highlight-pink">créatif autodidacte</span>, animé
            par la curiosité, l’expérimentation et le besoin constant
            d’apprendre.
          </p>
          <p>
            Je m’intéresse particulièrement à la conception de solutions
            robustes, évolutives et réactives, que ce soit à travers des
            architectures logicielles distribuées, des applications temps réel,
            ou l’industrialisation de projets via Docker, CI/CD et WebSockets.
          </p>
        </section>

        <section className="about__section bg-grid">
          <h2 className="about__title neon-yellow">Mes valeurs</h2>
          <p>
            Mon parcours s’est construit sur <strong>l’autodidaxie</strong>.
            Apprendre seul m’a appris à chercher, tester, échouer, recommencer
            et surtout comprendre en profondeur ce que je fais.
          </p>
          <p>
            Je crois aussi que le <strong>partage de la connaissance</strong>{" "}
            est une des clés du progrès collectif. Que ce soit dans le cadre
            d’un projet technique, d’une collaboration ou d’un accompagnement,
            je cherche toujours à transmettre ce que j’apprends et à apprendre
            des autres.
          </p>
          <p>
            Enfin, je défends une valeur essentielle dans l’ingénierie
            logicielle : la <strong>responsabilité</strong>. Un développeur ne
            produit pas seulement du code — il construit des outils qui
            influencent des usages, des équipes et parfois des organisations
            entières.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__title neon-blue">Mon projet professionnel</h2>

          <h3>À court terme</h3>
          <p>
            Consolider mes compétences d’<strong>ingénieur logiciel</strong> à
            travers la validation de mon titre à l’ISCOD, tout en continuant à
            développer le projet{" "}
            <span className="highlight-blue">Large Field Theater</span> jusqu'à
            la fin de mon alternance. Ce projet me permet d’allier mes deux
            forces : la technique et la vision produit — en travaillant sur des
            architectures temps réel, la gestion réseau par WebSockets, et la
            containerisation via Docker. L’objectif immédiat est de renforcer
            mon expertise en <span className="highlight-pink">Node js</span>,{" "}
            <span className="highlight-blue">react</span> et{" "}
            <span className="highlight-blue">DevOps</span>, dans une logique
            d’intégration continue et de qualité logicielle.
          </p>

          <h3>À moyen terme</h3>
          <p>
            Intégrer une entreprise innovante où je pourrai mettre à profit mon
            profil <strong>full stack</strong> et ma vision globale des
            systèmes. J’aimerais contribuer à des projets où la technique sert
            une expérience fluide, mesurable et durable. J’accorde autant
            d’importance à la{" "}
            <span className="highlight-blue">robustesse du backend</span> qu’à
            la <span className="highlight-pink">cohérence de l’interface</span>,
            et j’aime construire des environnements où le code, le design et la
            performance forment un tout. Mon ambition est de devenir un
            développeur reconnu pour sa <strong>autonomie</strong>, sa{" "}
            <strong>rigueur</strong> et sa <strong>créativité technique</strong>
            .
          </p>

          <h3>À long terme</h3>
          <p>
            À long terme, mon objectif est de m'épanouir dans mon rôle d'
            <strong>ingénieur principal</strong> ou{" "}
            <strong>architecte logiciel</strong>, capable de concevoir des
            systèmes complexes, stables et évolutifs. Je souhaite m’impliquer
            dans des projets à fort impact, où la{" "}
            <span className="highlight-blue">technique</span> rencontre la{" "}
            <span className="highlight-pink">création</span> — des
            environnements où le code sert une expérience humaine et une vision
            globale du produit.
          </p>

          <p>
            Mon ambition n’est pas seulement de bâtir des architectures, mais
            aussi de <strong>transmettre</strong> ce que j’ai appris : encadrer
            des équipes, structurer des projets, partager des méthodes claires
            et des bonnes pratiques. J’aimerais contribuer à la création d’un
            environnement de travail où la qualité du code, la curiosité et la
            bienveillance vont de pair.
          </p>

          <p>
            Plus largement, je veux continuer à explorer la frontière entre{" "}
            <strong>technologie, design et interaction</strong> — qu’il s’agisse
            de systèmes distribués, de temps réel, ou d’expériences interactives
            comme <span className="highlight-blue">Large Field Theater</span>.
            Mon objectif ultime : bâtir des solutions qui inspirent autant
            qu’elles fonctionnent.
          </p>
        </section>

        <section className="about__section">
          <h2>Mes principales qualités</h2>
          <ul className="project-list">
            <li>🧠 Autodidacte et curieux</li>
            <li>⚙️ Rigoureux et structuré</li>
            <li>💬 Collaboratif et à l’écoute</li>
            <li>🔍 Vision d’ensemble</li>
            <li>🚀 Persévérant</li>
          </ul>
        </section>

        <section className="about__section">
          <h2>Mes centres d’intérêt</h2>
          <ul className="project-list">
            <li>
              💡 Technologie & innovation — full stack, Docker, WebSockets.
            </li>
            <li>🎮 Jeux vidéo & simulation — logique, rigueur et précision.</li>
            <li>🥋 Sport & Arts martiaux </li>
            <li>🎨 Culture & Création </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Presentation;
