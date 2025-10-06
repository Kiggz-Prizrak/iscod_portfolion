import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const to = "nico.peignot@outlook.fr";
  const subject = encodeURIComponent("Demande d'infos");
  const body = encodeURIComponent("Bonjour,\n\nVoici ma demande...");
  const href = `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <header className="c-header">
      <div className="c-header__inner">
        <div className="c-header__brand">Nicolas Peignot</div>

        {/* Burger button */}
        <button
          className={`burger ${menuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`c-header__menu ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {/* ACCUEIL */}
            <li>
              <a href="/">Accueil</a>
            </li>

            {/* ABOUT */}
            <li>
              <a href="/about">Presentation</a>
            </li>

            {/* COMPÉTENCES */}
            <li className="c-header__item c-header__item--hasDropdown">
              <button
                className="c-header__link"
                onClick={() => toggleDropdown("skills")}
              >
                Compétences ▾
              </button>
              <ul
                className={`dropdown ${
                  openDropdown === "skills" ? "is-open" : ""
                }`}
              >
                <li>
                  <a href="/skills">Toutes les compétences</a>
                </li>

                <li className="dropdown__item">
                  <button onClick={() => toggleDropdown("tech")}>
                    Techniques ▾
                  </button>
                  <ul
                    className={`sub-dropdown ${
                      openDropdown === "tech" ? "is-open" : ""
                    }`}
                  >
                    <li>
                      <a href="/skills/react">React</a>
                    </li>
                    <li>
                      <a href="/skills/node">NodeJs</a>
                    </li>
                    <li>
                      <a href="/skills/mysql">Mysql</a>
                    </li>
                    <li>
                      <a href="/skills/docker">Docker</a>
                    </li>
                    <li>
                      <a href="/skills/javascript">Javascript</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown__item">
                  <button onClick={() => toggleDropdown("human")}>
                    Humaines ▾
                  </button>
                  <ul
                    className={`sub-dropdown ${
                      openDropdown === "human" ? "is-open" : ""
                    }`}
                  >
                    <li>
                      <a href="/skills/vision">Vision</a>
                    </li>
                    <li>
                      <a href="/skills/communication">Communication</a>
                    </li>
                    <li>
                      <a href="/skills/rigueur">Rigueur & sens du détail</a>
                    </li>
                    <li>
                      <a href="/skills/autonomie">Autonomie</a>
                    </li>
                    <li>
                      <a href="/skills/colaboration">Collaboration technique</a>
                    </li>
                    <li>
                      <a href="/skills/gestion-projet">
                        Gestion de projet & Méthode agile
                      </a>
                    </li>
                    <li>
                      <a href="/skills/resolution-problem">
                        Résolution de problèmes
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* PROJETS */}
            <li className="c-header__item c-header__item--hasDropdown">
              <button
                className="c-header__link"
                onClick={() => toggleDropdown("projects")}
              >
                Mes projets ▾
              </button>
              <ul
                className={`dropdown ${
                  openDropdown === "projects" ? "is-open" : ""
                }`}
              >
                <li>
                  <a href="/project/groupomania">Groupomania</a>
                </li>
                <li>
                  <a href="/project/lft">Large Field Theater</a>
                </li>
                <li>
                  <a href="/project/lyseo">Lyseo</a>
                </li>
                <li>
                  <a href="/project/kanban">Kanban Web App</a>
                </li>
                <li>
                  <a href="/project/pmt">Project Management Tool</a>
                </li>
              </ul>
            </li>

            <li>
              <button onClick={() => (window.location.href = href)}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
