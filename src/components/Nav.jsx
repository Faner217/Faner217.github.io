import { useEffect, useState } from 'react';
import { LuMenu, LuX, LuDownload } from 'react-icons/lu';
import { profile } from '../data/site.js';
import { useActiveSection, useScrolled } from '../hooks.js';

export default function Nav({ sections }) {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img className="nav__mark" src="/favicon-64.png" alt="" width="32" height="32" aria-hidden="true" />
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav__link ${active === s.id ? 'is-active' : ''}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
          <a className="btn btn--small btn--solid nav__cv" href={profile.cv} target="_blank" rel="noreferrer">
            <LuDownload aria-hidden="true" /> CV
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>
    </header>
  );
}
