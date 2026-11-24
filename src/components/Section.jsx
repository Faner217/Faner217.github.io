export default function Section({ id, index, title, note, aside, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container section__grid">
        <header className="section__head" data-reveal>
          <p className="section__index">
            <span>{index}</span>
            <span className="section__rule" aria-hidden="true" />
          </p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {note && <p className="section__note">{note}</p>}
          {aside}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}

// Renders **bold** markers in short strings.
export function Rich({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>,
  );
}
