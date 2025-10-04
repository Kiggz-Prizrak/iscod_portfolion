import React from "react";

const ProjectBanner = ({ title, subtitle }) => {
  return (
    <section className="project-banner">
      <div className="project-banner__overlay" />
      <div className="project-banner__content">
        <h1 className="project-banner__title">{title}</h1>
        {subtitle && <p className="project-banner__subtitle">{subtitle}</p>}
      </div>
      <div className="project-banner__grid"></div>
    </section>
  );
};

export default ProjectBanner;
