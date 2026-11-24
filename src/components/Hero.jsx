import { LuArrowDown, LuDownload, LuMail } from 'react-icons/lu';
import { profile, contact } from '../data/site.js';
import { SocialIcon } from './Icons.jsx';

const HERO_SOCIALS = ['scholar', 'github', 'linkedin', 'orcid'];

export default function Hero() {
  const socials = contact.socials.filter((s) => HERO_SOCIALS.includes(s.id));

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {profile.role} · {profile.affiliation}
          </p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__lead">{profile.tagline}</p>

          <dl className="facts">
            {profile.facts.map((f) => (
              <div className="facts__item" key={f.label}>
                <dt>{f.label}</dt>
                <dd>
                  <strong>{f.value}</strong>
                  <span>{f.sub}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="hero__actions">
            <a className="btn btn--solid" href={profile.cv} target="_blank" rel="noreferrer">
              <LuDownload aria-hidden="true" /> Download CV
            </a>
            <a className="btn" href="#contact">
              <LuMail aria-hidden="true" /> Get in touch
            </a>
            <ul className="hero__socials" aria-label="Profiles">
              {socials.map((s) => (
                <li key={s.id}>
                  <a className="icon-btn" href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                    <SocialIcon id={s.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="hero__photo">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="1100" height="1486" fetchpriority="high" />
          <figcaption>
            <span>{profile.lab}</span>
            <span>{profile.location}</span>
          </figcaption>
        </figure>
      </div>

      <a className="hero__scroll container" href="#about">
        <LuArrowDown aria-hidden="true" /> Scroll
      </a>
    </section>
  );
}
