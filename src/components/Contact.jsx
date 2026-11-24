import { LuArrowUpRight, LuArrowUp, LuCopy, LuCheck, LuMapPin, LuDownload } from 'react-icons/lu';
import { contact, profile } from '../data/site.js';
import { useCopy } from '../hooks.js';
import { SocialIcon } from './Icons.jsx';

export default function Contact({ index }) {
  const [copied, copy] = useCopy();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <div className="contact__top" data-reveal>
          <p className="section__index">
            <span>{index}</span>
            <span className="section__rule" aria-hidden="true" />
            <span>Contact</span>
          </p>
          <h2 id="contact-title" className="contact__title">
            Let’s work together.
          </h2>
          <p className="contact__pitch">{contact.pitch}</p>
        </div>

        <div className="contact__main" data-reveal>
          <div className="contact__email">
            <p className="contact__label">Email</p>
            <a className="contact__address" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <div className="contact__email-actions">
              <a className="btn btn--solid" href={`mailto:${contact.email}`}>
                Write an email <LuArrowUpRight aria-hidden="true" />
              </a>
              <button type="button" className="btn" onClick={() => copy(contact.email)}>
                {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
              <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">
                <LuDownload aria-hidden="true" /> CV
              </a>
            </div>

            <div className="contact__office">
              <p className="contact__label">
                <LuMapPin aria-hidden="true" /> Office
              </p>
              <address>
                {profile.lab}, {profile.affiliation}
                <br />
                {contact.address.join(', ')}
              </address>
            </div>
          </div>

          <ul className="contact__links" aria-label="Elsewhere">
            {contact.socials.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  <span className="contact__icon">
                    <SocialIcon id={s.id} />
                  </span>
                  <span className="contact__link-text">
                    <span className="contact__link-label">{s.label}</span>
                    <span className="contact__link-handle">{s.handle}</span>
                  </span>
                  <LuArrowUpRight className="contact__arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact__bottom">
          <p>
            © {year} {profile.name}
          </p>
          <p className="contact__bottom-mid">
            {profile.affiliation} · {profile.location}
          </p>
          <a href="#top" className="contact__top-link">
            Back to top <LuArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
