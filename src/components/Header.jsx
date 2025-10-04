import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

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
            <li>
              <a href="/">Accueil</a>
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
                      <a href="/skills/vue">Vue</a>
                    </li>
                    <li>
                      <a href="/skills/nodejs">NodeJS</a>
                    </li>
                    <li>
                      <a href="/skills/mongo">MongoDB</a>
                    </li>
                    <li>
                      <a href="/skills/java-android">Java Android</a>
                    </li>
                    <li>
                      <a href="/skills/sql">SQL</a>
                    </li>
                    <li>
                      <a href="/skills/php">PHP</a>
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
                      <a href="/skills/gestion-projet">Gestion de projet</a>
                    </li>
                    <li>
                      <a href="/skills/agilite">Agilité</a>
                    </li>
                    <li>
                      <a href="/skills/relation-client">Relation client</a>
                    </li>
                    <li>
                      <a href="/skills/communication">Communication</a>
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
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
