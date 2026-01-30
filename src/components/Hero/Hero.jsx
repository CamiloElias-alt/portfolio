import { motion } from "motion/react";
import perfilImg from "../../assets/imagen_perfil.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-kicker">Desarrollador Frontend</p>
          <h1>
            Construyo interfaces <span>modernas</span> y experiencias
            <span> interactivas</span> en la web.
          </h1>
          <p className="hero-subtitle">
            Me encanta crear productos limpios, rápidos y accesibles con React,
            JavaScript y buenas prácticas.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="primary-btn">
              Hablemos de tu proyecto
            </a>
            <a href="#destacados" className="ghost-btn">
              Ver habilidades e historia
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-photo-glow" />
          <img
            src={perfilImg}
            alt="Foto de perfil de Camilo"
            className="hero-photo"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
