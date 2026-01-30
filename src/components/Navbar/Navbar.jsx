import { motion } from "motion/react";
import "./Navbar.css";

function Navbar({ currentSection, onNavigate, theme, onToggleTheme }) {
  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "destacados", label: "Destacados" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <motion.div
          className="brand"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="brand-mark">CE</span>
          <span className="brand-text">Camilo Elias</span>
        </motion.div>

        <nav className="nav-links">
          {links.map((link) => (
            <motion.button
              key={link.id}
              className={`nav-link ${
                currentSection === link.id ? "active" : ""
              }`}
              onClick={() => onNavigate(link.id)}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-link-label">{link.label}</span>
              <span className="nav-link-underline" />
            </motion.button>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Cambiar tema"
        >
          <span className="theme-toggle-inner">
            <span className="theme-icon sun">☀️</span>
            <span className="theme-icon moon">🌙</span>
            <span
              className={`theme-thumb ${
                theme === "dark" ? "thumb-right" : "thumb-left"
              }`}
            />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
