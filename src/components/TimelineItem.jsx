import React from "react";

const TimelineItem = ({ side = "left", item }) => {
  return (
    <div className={`tl__row tl__row--${side}`}>
      {/* trait qui relie la card à la ligne */}
      <span className="tl__arm" />

      {/* node */}
      <span className={`tl__node ${item.major ? "tl__node--major" : ""}`} />

      {/* card */}
      <article className="tl__card card">
        <header className="tl__cardHead">
          <div className="tl__period">{item.period}</div>
          <h3 className={`tl__title ${item.major ? "neon-yellow" : ""}`}>
            {item.title}
          </h3>
          {item.context && (
            <div className="tl__context text-muted">{item.context}</div>
          )}
        </header>

        {item.points?.length > 0 && (
          <ul className="tl__sublist">
            {item.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}

        {item.tags?.length > 0 && (
          <div className="tl__tags">
            {item.tags.map((t, i) => (
              <span key={i} className="btn btn--ghost">
                #{t}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default TimelineItem;
