import React from "react";
import { useState } from "react";
import ModalContainer from "./modal/ModalContainer";

const ProjectCard = ({
  titre,
  sousTitre,
  objectif,
  resultat,
  details,
  tags = [],
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article
        className="card--interactive"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" ? setOpen(true) : null)}
      >
        <h3 className="card__title">{titre}</h3>
        <div className="card__subtitle">{sousTitre}</div>
        <p>🎯 {objectif}</p>
        <p className="mt-4">📈 {resultat}</p>

        {tags.length > 0 && (
          <div
            style={{
              marginTop: "0.75rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {tags.map((t, i) => (
              <span
                key={i}
                className="btn btn--ghost"
                style={{ padding: ".25rem .6rem", borderRadius: 999 }}
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </article>

      <ModalContainer open={open} onClose={() => setOpen(false)} title={titre}>
        <p className="text-muted">{details}</p>
      </ModalContainer>
    </>
  );
};

export default ProjectCard;
