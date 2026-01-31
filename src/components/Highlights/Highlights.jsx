import { motion } from "motion/react";
import frontendImg from "../../assets/desarrollo-frontend.jpeg";
import webProImg from "../../assets/desarrollo-web-pro.jpeg";
import reactImg from "../../assets/react.jpeg";
import terminalImg from "../../assets/terminal-y-linea-de-comando.jpeg";
import "./Highlights.css";

const cards = [
  {
    id: "frontend",
    title: "Frontend moderno",
    description:
      "Experiencia construyendo interfaces responsivas con React, componentes reutilizables y buenas prácticas de UI.",
    image: frontendImg,
    badge: "UI / UX",
  },
  {
    id: "react",
    title: "Ecosistema React",
    description:
      "Hooks, manejo de estado, composición de componentes y organización de proyectos escalables.",
    image: reactImg,
    badge: "React",
  },
  {
    id: "webpro",
    title: "Buenas prácticas web",
    description:
      "Performance, accesibilidad básica y estructura semántica para proyectos profesionales.",
    image: webProImg,
    badge: "Web Pro",
  },
  {
    id: "terminal",
    title: "Flujo de trabajo dev",
    description:
      "Uso de terminal, Git y herramientas modernas para un flujo de trabajo sólido.",
    image: terminalImg,
    badge: "Dev Tools",
  },
];

function Highlights() {
  return (
    <section id="destacados" className="highlights">
      <div className="highlights-header">
        <p className="section-kicker">Habilidades & enfoque</p>
        <h2>Lo que puedo aportar a tu proyecto</h2>
        <p className="section-subtitle">
          Combino un enfoque visual con código limpio para construir interfaces
          claras, rápidas y fáciles de mantener.
        </p>
      </div>
      <div className="highlights-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.id}
            className="highlight-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            whileHover={{ y: -6 }}
          >
            <div className="highlight-image-wrapper">
              <img
                src={card.image}
                alt={card.title}
                className="highlight-image"
              />
              <span className="highlight-badge">{card.badge}</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
