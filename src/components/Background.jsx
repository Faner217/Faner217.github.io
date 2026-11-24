import { LuDownload } from 'react-icons/lu';
import Section from './Section.jsx';
import { education, experience, awards, skills, languages, profile } from '../data/site.js';

function Block({ title, children, className = '' }) {
  return (
    <div className={`cv-block ${className}`} data-reveal>
      <h3 className="cv-block__title">{title}</h3>
      {children}
    </div>
  );
}

export default function Background({ index }) {
  return (
    <Section
      id="cv"
      index={index}
      title="CV"
      note="Education, experience, awards and skills."
      aside={
        <a className="btn btn--small section__cta" href={profile.cv} target="_blank" rel="noreferrer">
          <LuDownload aria-hidden="true" /> Full CV (PDF)
        </a>
      }
    >
      <div className="cv">
        <Block title="Education" className="cv--edu">
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.degree} className="timeline__item">
                <p className="timeline__period">{e.period}</p>
                <div>
                  <p className="timeline__title">
                    <span className="timeline__degree">{e.degree}</span>
                    <a href={e.url} target="_blank" rel="noreferrer">
                      {e.school}
                    </a>
                  </p>
                  <p className="timeline__sub">{e.field}</p>
                  <ul className="timeline__notes">
                    {e.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Experience" className="cv--exp">
          <ol className="timeline">
            {experience.map((x) => (
              <li key={x.title} className="timeline__item">
                <p className="timeline__period">{x.period}</p>
                <div>
                  <p className="timeline__title">
                    <span className="timeline__degree">{x.org}</span>
                    {x.title}
                  </p>
                  <p className="timeline__sub">{x.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Honors & Awards" className="cv--awards">
          <ul className="awards">
            {awards.map((a) => (
              <li key={a.title} className="awards__item">
                <p className="awards__date">{a.date}</p>
                <div>
                  <p className="awards__title">
                    {a.url ? (
                      <a href={a.url} target="_blank" rel="noreferrer">
                        {a.title}
                      </a>
                    ) : (
                      a.title
                    )}
                  </p>
                  <p className="awards__org">{a.org}</p>
                  {a.note && <p className="awards__note">{a.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Skills" className="cv--skills">
          <div className="skills">
            {skills.map((g) => (
              <div className="skills__group" key={g.group}>
                <h4>{g.group}</h4>
                <dl>
                  {g.items.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
            <div className="skills__group">
              <h4>Languages</h4>
              <dl>
                {languages.map((l) => (
                  <div key={l.name}>
                    <dt>{l.name}</dt>
                    <dd>{l.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Block>
      </div>
    </Section>
  );
}
