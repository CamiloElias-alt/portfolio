import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Highlights from './components/Highlights/Highlights.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import StarsBackground from './components/StarsBackground/StarsBackground.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    return (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'dark';
  });
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(id);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    const sectionIds = ['inicio', 'sobre-mi', 'destacados', 'proyectos', 'contacto'];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setCurrentSection(visible.target.id);
        }
      },
      {
        threshold: 0.45,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <StarsBackground />
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <hr className="section-separator" />
        <section id="sobre-mi" className="about">
          <div className="about-inner">
            <p className="section-kicker">Sobre mí</p>
            <h2>Quién soy y cómo trabajo</h2>
            <p className="section-subtitle">
              Soy Camilo, desarrollador frontend apasionado por construir experiencias digitales que
              realmente funcionan. Mi proceso es simple pero efectivo: entiendo tu necesidad, creo
              una solución clara y la voy puliendo hasta que sea exactamente lo que necesitas.
            </p>
          </div>
        </section>
        <hr className="section-separator" />
        <Highlights />
        <hr className="section-separator" />
        <Projects />
        <hr className="section-separator" />
        <Contact />
      </main>
      <footer className="footer-basic">
        <p>© {new Date().getFullYear()} Camilo Elias. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
