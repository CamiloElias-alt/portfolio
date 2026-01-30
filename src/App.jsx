import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Highlights from './components/Highlights/Highlights.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  const [theme, setTheme] = useState('dark');
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
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const sectionIds = ['inicio', 'sobre-mi', 'destacados', 'contacto'];

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
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <section id="sobre-mi" className="about">
          <div className="about-inner">
            <p className="section-kicker">Sobre mí</p>
            <h2>Quién soy y cómo trabajo</h2>
            <p className="section-subtitle">
              Soy Camilo, desarrollador frontend enfocado en construir interfaces claras y
              fluidas. Me gusta trabajar de forma iterativa: entender bien el problema,
              diseñar una solución simple y mejorarla poco a poco con feedback real.
            </p>
          </div>
        </section>
        <Highlights />
        <Contact />
      </main>
      <footer className="footer-basic">
        <p>© {new Date().getFullYear()} Camilo Elias. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
