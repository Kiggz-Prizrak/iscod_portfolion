import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useMemo, useState } from "react";
import Tag from "../components/Tag";

const DATA = [
  {
    titre: "Défilé éco-responsable",
    sousTitre: "La Caserne Paris",
    objectif: "Mode durable spectaculaire",
    resultat: "70 mannequins, presse & public",
    details: "Conception silhouettes, fittings, répétitions, coordination.",
    tags: ["mode", "direction-artistique", "organisation"],
  },
  {
    titre: "Large Field Theater (LFT)",
    sousTitre: "React/Redux + Node/WebSocket",
    objectif: "Sync casques & valises",
    resultat: "Flux live, UX fluide",
    details: "API Node/Express, WebSockets, Redux, Docker MySQL.",
    tags: ["tech", "realtime", "fullstack"],
  },
  {
    titre: "Lyseo — UI Map Synthwave",
    sousTitre: "Exploration souterraine",
    objectif: "UI rétro-futuriste lisible",
    resultat: "Prototype différenciant",
    details: "Grille 3D, glow, hiérarchie visuelle.",
    tags: ["ui-ux", "direction-artistique", "tech"],
  },
];

// tags proposés (tu peux générer dynamiquement)
const ALL_TAGS = [
  "mode",
  "direction-artistique",
  "organisation",
  "tech",
  "realtime",
  "fullstack",
  "ui-ux",
];

const Projects = () => {
  const [active, setActive] = useState([]); // tableau de tags actifs

  const filtered = useMemo(() => {
    if (active.length === 0) return DATA;
    return DATA.filter((item) => active.every((t) => item.tags.includes(t)));
  }, [active]);

  const toggle = (tag) =>
    setActive((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const clear = () => setActive([]);
  return (
    <main>
      <section className="section">
        <h2 className="section__title">Réalisations</h2>

        {/* Barre de tags */}
        <div
          className="max-w"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          {ALL_TAGS.map((tag) => (
            <Tag
              key={tag}
              label={`#${tag}`}
              active={active.includes(tag)}
              onClick={() => toggle(tag)}
            />
          ))}
        </div>
        {active.length > 0 && (
          <button className="btn" onClick={clear} title="Réinitialiser filtres">
            Réinitialiser
          </button>
        )}

        {/* Grid des cartes filtrées */}
        <div className="section__grid max-w">
          {filtered.map((r, i) => (
            <ProjectCard key={i} {...r} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
