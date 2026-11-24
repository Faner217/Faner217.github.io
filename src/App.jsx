import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import News from './components/News.jsx';
import Publications from './components/Publications.jsx';
import Projects from './components/Projects.jsx';
import Background from './components/Background.jsx';
import Contact from './components/Contact.jsx';
import { useReveal } from './hooks.js';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

// Paths from the previous Jekyll site, mapped to sections of this page.
const LEGACY_PATHS = {
  publications: 'publications',
  projects: 'projects',
  cv: 'cv',
  news: 'news',
};

function useLegacyRedirect() {
  useEffect(() => {
    const first = window.location.pathname.split('/').filter(Boolean)[0];
    if (!first) return;
    const target = LEGACY_PATHS[first];
    window.history.replaceState(null, '', target ? `/#${target}` : '/');
    if (target) {
      requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    }
  }, []);
}

export default function App() {
  useLegacyRedirect();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav sections={SECTIONS} />
      <main>
        <Hero />
        <About index="01" />
        <News index="02" />
        <Publications index="03" />
        <Projects index="04" />
        <Background index="05" />
      </main>
      <Contact index="06" />
    </>
  );
}
