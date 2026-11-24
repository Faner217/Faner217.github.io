import { useState } from 'react';
import { LuFileText, LuArrowUpRight, LuPlay, LuCode, LuCopy, LuCheck } from 'react-icons/lu';
import Section from './Section.jsx';
import { publications, profile } from '../data/site.js';
import { useCopy } from '../hooks.js';

const LINK_META = {
  pdf: { label: 'PDF', icon: LuFileText },
  doi: { label: 'DOI', icon: LuArrowUpRight },
  video: { label: 'Video', icon: LuPlay },
  code: { label: 'Code', icon: LuCode },
};

function Authors({ list }) {
  return (
    <p className="pub__authors">
      {list.map((a, i) => (
        <span key={a}>
          {a === profile.name ? <strong className="me">{a}</strong> : a}
          {i < list.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}

function Publication({ pub }) {
  const [panel, setPanel] = useState(null);
  const [copied, copy] = useCopy();
  const toggle = (name) => setPanel((p) => (p === name ? null : name));

  return (
    <article className="pub" data-reveal>
      <div className="pub__thumb">
        {pub.image ? (
          <img src={pub.image} alt="" loading="lazy" />
        ) : (
          <span className="pub__thumb-text" aria-hidden="true">
            {pub.venue}
          </span>
        )}
      </div>

      <div className="pub__main">
        <p className="pub__meta">
          <span className="tag">{pub.venue}</span>
          <span>{pub.series}</span>
          {pub.location && <span className="pub__loc">{pub.location}</span>}
          {pub.citations > 0 && <span className="pub__cites">Cited by {pub.citations}</span>}
        </p>
        <h3 className="pub__title">
          <a href={pub.links.doi} target="_blank" rel="noreferrer">
            {pub.title}
          </a>
        </h3>
        <Authors list={pub.authors} />
        <p className="pub__venue">{pub.booktitle}</p>

        <div className="pub__links">
          {Object.entries(pub.links).map(([key, url]) => {
            const { label, icon: Icon } = LINK_META[key];
            return (
              <a key={key} className="chip" href={url} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" /> {label}
              </a>
            );
          })}
          {pub.abstract && (
            <button
              type="button"
              className={`chip ${panel === 'abs' ? 'is-on' : ''}`}
              aria-expanded={panel === 'abs'}
              onClick={() => toggle('abs')}
            >
              Abstract
            </button>
          )}
          <button
            type="button"
            className={`chip ${panel === 'bib' ? 'is-on' : ''}`}
            aria-expanded={panel === 'bib'}
            onClick={() => toggle('bib')}
          >
            BibTeX
          </button>
        </div>

        {panel === 'abs' && <p className="pub__panel pub__abstract">{pub.abstract}</p>}
        {panel === 'bib' && (
          <div className="pub__panel pub__bib">
            <button type="button" className="pub__copy" onClick={() => copy(pub.bibtex)}>
              {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <pre>
              <code>{pub.bibtex}</code>
            </pre>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Publications({ index }) {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <Section
      id="publications"
      index={index}
      title="Publications"
      note="Peer-reviewed papers in reverse chronological order."
    >
      {years.map((year) => (
        <div className="pub-year" key={year}>
          <h3 className="pub-year__label">{year}</h3>
          <div className="pub-year__list">
            {publications
              .filter((p) => p.year === year)
              .map((p) => (
                <Publication pub={p} key={p.id} />
              ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
