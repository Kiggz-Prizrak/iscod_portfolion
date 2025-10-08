import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const to = "nico.peignot@outlook.fr";
  const subject = encodeURIComponent("Demande d'infos");
  const body = encodeURIComponent("Bonjour,\n\nVoici ma demande...");
  const href = `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <footer className="footer bg-grid">
      <div className="footer__content">
        {/* Bloc Identité */}
        <div className="footer__identity">
          <h2 className="neon-yellow">Nicolas Peignot</h2>
          <p className="highlight-blue">
            Développeur Full Stack · Expert en ingénierie logicielle
          </p>
        </div>

        {/* Bloc Navigation */}
        <nav className="footer__nav">
          <h3 className="neon-blue">Navigation</h3>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/projects">Projets</Link>
            </li>
            <li>
              <Link href="/skills">Compétences</Link>
            </li>
            <li>
              <Link href="/about">Vision</Link>
            </li>
            <li>
              <Link href={href}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Bloc Contact / Réseaux */}
        <div className="footer__socials">
          <h3 className="neon-pink">Réseaux & Contact</h3>
          <ul>
            <li>
              <Link href="mailto:nico.peignot@outlook.fr">
                <FontAwesomeIcon icon={faEnvelope} /> nico.peignot@outlook.fr
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Kiggz-Prizrak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/nicolas-peignot-050796170"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mention légale / signature */}
      <div className="footer__bottom">
        <p>
          © 2025 — <strong>Nicolas Peignot</strong> · Portfolio réalisé en{" "}
          <FontAwesomeIcon icon={faReact} /> React · Hébergé sur GitHub Pages
        </p>
        <p className="footer__credits">
          Design et développement by{" "}
          <FontAwesomeIcon icon={faCode} className="fa-glitch" /> myself 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;
