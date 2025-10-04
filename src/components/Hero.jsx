import React from "react";

const Hero = ({ title, subtitle, actions, image }) => {
  return (
    <section className="c-hero">
      <div className="c-hero__overlay" />
      <div className="c-hero__grid" />
      <div className="c-hero__content">
        {image && (
          <div className="hero-avatar">
            <img src={image} alt="Portrait" />
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p className="mt-4">{subtitle}</p>}
        {actions && <div className="actions mt-6">{actions}</div>}
      </div>
    </section>
  );
};

export default Hero;
