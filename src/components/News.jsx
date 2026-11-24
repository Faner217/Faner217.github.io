import Section, { Rich } from './Section.jsx';
import { news } from '../data/site.js';

const fmt = (iso) => {
  const d = new Date(`${iso}T12:00:00`);
  return {
    month: d.toLocaleString('en-US', { month: 'short' }),
    day: String(d.getDate()).padStart(2, '0'),
    year: d.getFullYear(),
  };
};

export default function News({ index }) {
  return (
    <Section id="news" index={index} title="News" note="Talks, demos and milestones.">
      <ol className="news">
        {news.map((n, i) => {
          const d = fmt(n.date);
          return (
            <li className="news__item" key={n.date} data-reveal>
              <time className="news__date" dateTime={n.date}>
                <span className="news__year">{d.year}</span>
                <span>
                  {d.month} {d.day}
                </span>
              </time>
              <p className="news__text">
                {i === 0 && <span className="tag tag--accent">Latest</span>}
                <Rich text={n.text} />
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
