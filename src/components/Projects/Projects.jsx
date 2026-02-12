import { motion } from "motion/react";
import mascaboImg from "../../assets/Mascabo-recetas.jpeg";
import pataFelizImg from "../../assets/Pata-feliz.jpeg";
import "./Projects.css";

const projects = [
  {
    id: "mascabo",
    title: "Mascabo — Recetas sin TACC",
    description:
      "Libro de recetas sin gluten donde el dueño puede publicar, editar y gestionar sus recetas. Desarrollado con React.",
    image: mascaboImg,
    url: "https://mascabo-recetas.netlify.app/",
    badge: "React",
  },
  {
    id: "pata-feliz",
    title: "Pata Feliz",
    description:
      "Página para sacar turnos con un paseador de perros profesional. Reservas y gestión de citas. Hecho con React.",
    image: pataFelizImg,
    url: "https://pata-feliz.netlify.app/",
    badge: "React",
  },
];

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="projects-header">
        <p className="section-kicker">Proyectos</p>
        <h2>Algunos trabajos realizados</h2>
        <p className="section-subtitle">
          Aplicaciones web construidas con React: recetas sin TACC y reserva de turnos para paseo de perros.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <span className="project-badge">{project.badge}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-cta">Ver proyecto →</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
