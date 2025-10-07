import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const to = "nico.peignot@outlook.fr";
  const subject = encodeURIComponent("Demande d'infos");
  const body = encodeURIComponent("Bonjour,\n\nVoici ma demande...");
  const href = `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <header className="c-header">
      <div className="c-header__inner">
        <div className="c-header__brand">
          <Link to="/" onClick={closeAll}>
            Nicolas Peignot
          </Link>
        </div>

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
            {/* HOME */}
            <li>
              <NavLink to="/" onClick={closeAll}>
                Accueil
              </NavLink>
            </li>

            {/* ABOUT */}
            <li>
              <NavLink to="/about" onClick={closeAll}>
                Présentation
              </NavLink>
            </li>

            {/* SKILLS */}
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
                  <NavLink to="/skills" onClick={closeAll}>
                    Toutes les compétences
                  </NavLink>
                </li>

                {/* TECHNICAL */}
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
                      <NavLink to="/skills/react" onClick={closeAll}>
                        React
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/node" onClick={closeAll}>
                        Node.js
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/mysql" onClick={closeAll}>
                        MySQL
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/docker" onClick={closeAll}>
                        Docker
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/javascript" onClick={closeAll}>
                        JavaScript
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* HUMAN */}
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
                      <NavLink to="/skills/vision" onClick={closeAll}>
                        Vision
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/communication" onClick={closeAll}>
                        Communication
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/rigueur" onClick={closeAll}>
                        Rigueur & sens du détail
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/autonomie" onClick={closeAll}>
                        Autonomie
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/collaboration" onClick={closeAll}>
                        Collaboration technique
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills/gestion-projet" onClick={closeAll}>
                        Gestion de projet & Méthode agile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/skills/resolution-problem"
                        onClick={closeAll}
                      >
                        Résolution de problèmes
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* PROJECTS */}
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
                  <NavLink to="/projects" onClick={closeAll}>
                    Tous mes projets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/groupomania" onClick={closeAll}>
                    Groupomania
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/lft" onClick={closeAll}>
                    Large Field Theater
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/lyseo" onClick={closeAll}>
                    Lyseo
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/kanban" onClick={closeAll}>
                    Kanban Web App
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects/pmt" onClick={closeAll}>
                    Project Management Tool
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* CONTACT */}
            <li>
              <button
                onClick={() => {
                  window.location.href = href;
                  closeAll();
                }}
              >
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
