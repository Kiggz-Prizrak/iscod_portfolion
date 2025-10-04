import React from "react";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <main>
      <Hero
        title="Expert en ingénierie logicielle  "
        subtitle="Fullstack Developer → React | Vue | Angular | Node.js | Rust | Java"
        image="/assets/profileb.jpg"
        actions={
          <>
            <a className="btn btn--primary">Découvrir mes valeurs</a>
            <a className="btn btn--blue" href="/skills">
              Explorer mes compétences
            </a>
            <a className="btn btn--pink" href="/projects">
              Voir mes réalisations
            </a>
          </>
        }
      />

      <section className="section section bg bg-stars">
        <h2 className="section__title">À propos</h2>
        <div className="max-w">
          <br />

          <p className="text-muted">
            Je suis un développeur Fullstack animé par la curiosité et la
            volonté de créer des expériences numériques impactantes. J’aime
            explorer, apprendre et innover : chaque projet est pour moi une
            opportunité d’expérimentation et de progression. Mon approche est à
            la croisée de la créativité et de la rigueur, avec une vision
            tournée vers l’avenir et les technologies émergentes.
            <br />
            <br />
            Côté professionnel, j’ai acquis une expertise solide sur l’ensemble
            du cycle de développement logiciel. De la conception d’interfaces
            fluides en React, Vue ou Angular, jusqu’à la mise en place
            d’architectures robustes en Node.js, Java ou Rust, je sais
            transformer une idée en solution concrète, fiable et évolutive.
            <br />
            <br />
            Mon objectif : concevoir des applications performantes qui répondent
            à de vrais besoins, tout en appliquant des pratiques agiles, un code
            propre et une approche centrée sur l’utilisateur.
          </p>
        </div>
      </section>
      <Timeline />
    </main>
  );
};

export default Home;
