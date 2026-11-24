import { useState } from 'react';
import { LuPlus, LuMinus, LuArrowUpRight } from 'react-icons/lu';
import Section from './Section.jsx';
import { projects, publications } from '../data/site.js';

function Project({ project, n }) {
  const [open, setOpen] = useState(false);
  const papers = publications.filter((p) => project.papers.includes(p.id));
  const detailsId = `${project.id}-details`;

  return (
    <article className={`project ${n % 2 ? 'project--flip' : ''}`} data-reveal>
      <div className="project__media">
        <img src={project.cover} alt={`${project.title}`} loading="lazy" />
      </div>

      <div className="project__content">
        <p className="project__kicker">
          <span>P{String(n + 1).padStart(2, '0')}</span>
          <span>{project.period}</span>
        </p>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__subtitle">{project.subtitle}</p>

        <ul className="project__tags" aria-label="Keywords">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <p className="project__text">{project.body[0]}</p>

        <dl className="project__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Papers</dt>
            <dd>
              {papers.map((p) => (
                <a key={p.id} href={p.links.doi} target="_blank" rel="noreferrer">
                  {p.series} <LuArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          className="btn project__toggle"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuMinus aria-hidden="true" /> : <LuPlus aria-hidden="true" />}
          {open ? 'Hide details' : 'Read more'}
        </button>
      </div>

      <div id={detailsId} className="project__details" hidden={!open}>
        {open && (
          <>
            {project.body.slice(1).map((p, i) => (
              <p key={i} className="project__text project__text--wide">
                {p}
              </p>
            ))}
            <figure className="figure">
              <img src={project.figure.src} alt={project.figure.caption} loading="lazy" />
              <figcaption>{project.figure.caption}</figcaption>
            </figure>
            {project.video && (
              <figure className="figure">
                <div className="video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`}
                    title={`${project.title} video`}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption>{project.video.caption}</figcaption>
              </figure>
            )}
          </>
        )}
      </div>
    </article>
  );
}

export default function Projects({ index }) {
  return (
    <Section id="projects" index={index} title="Projects" note="Research systems I led, from circuit to user study.">
      <div className="projects">
        {projects.map((p, i) => (
          <Project project={p} n={i} key={p.id} />
        ))}
      </div>
    </Section>
  );
}
