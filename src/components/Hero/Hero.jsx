import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import perfilImg from "../../assets/imagen_perfil.png";
import "./Hero.css";

const LIGHT_SIZE = 220;
const FLIGHT_DURATION = 1.3;
const FADE_DURATION = 600;

function Hero() {
  const photoWrapperRef = useRef(null);
  const [lightPhase, setLightPhase] = useState("idle");
  const [targetPos, setTargetPos] = useState(null);

  useEffect(() => {
    const el = photoWrapperRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;
      setTargetPos({
        x: rect.left + rect.width / 2 - LIGHT_SIZE / 2,
        y: rect.top + rect.height / 2 - LIGHT_SIZE / 2,
      });
    };

    const id1 = requestAnimationFrame(() => {
      requestAnimationFrame(measure);
    });
    const id2 = setTimeout(measure, 150);

    const observer = new ResizeObserver(() => {
      if (!photoWrapperRef.current) return;
      measure();
    });
    observer.observe(el);

    return () => {
      cancelAnimationFrame(id1);
      clearTimeout(id2);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (targetPos && lightPhase === "idle") {
      setLightPhase("flying");
    }
  }, [targetPos, lightPhase]);

  const handleFlightComplete = () => {
    setLightPhase("fading");
    setTimeout(() => {
      setLightPhase("done");
    }, FADE_DURATION);
  };

  const showLight = lightPhase === "flying" || lightPhase === "fading";
  const showPhoto = lightPhase === "done";

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

        <div className="hero-photo-wrapper" ref={photoWrapperRef}>
          <div className="hero-photo-glow" />
          <motion.img
            src={perfilImg}
            alt="Foto de perfil de Camilo"
            className="hero-photo"
            initial={false}
            animate={{
              opacity: showPhoto ? 1 : 0,
              scale: showPhoto ? 1 : 0.95,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {showLight && targetPos && (
            <motion.div
              className={`hero-load-light ${lightPhase === "fading" ? "hero-load-light--fade" : ""}`}
              initial={{
                x: typeof window !== "undefined" ? window.innerWidth + 100 : 0,
                y: -140,
                opacity: 1,
              }}
              animate={{
                x: targetPos.x,
                y: targetPos.y,
                opacity: lightPhase === "fading" ? 0 : 1,
              }}
              transition={{
                x: { duration: FLIGHT_DURATION, ease: [0.25, 0.1, 0.25, 1] },
                y: { duration: FLIGHT_DURATION, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: FADE_DURATION / 1000, ease: "easeOut" },
              }}
              onAnimationComplete={
                lightPhase === "flying" ? handleFlightComplete : undefined
              }
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: LIGHT_SIZE,
                height: LIGHT_SIZE,
                marginLeft: 0,
                marginTop: 0,
                zIndex: 20,
                pointerEvents: "none",
              }}
            >
              <div className="hero-load-light-glow" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
