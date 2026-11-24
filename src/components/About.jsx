import Section from './Section.jsx';
import { profile } from '../data/site.js';

export default function About({ index }) {
  return (
    <Section
      id="about"
      index={index}
      title="About"
      aside={
        <ul className="interest-list" aria-label="Research interests">
          {profile.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      }
    >
      <div className="about" data-reveal>
        {profile.bio.map((p, i) => (
          <p key={i} className={i === 0 ? 'about__lead' : ''} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </Section>
  );
}
