import TL from "../data/timeline";
import useReveal from "../hooks/useReveal";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  useReveal(".tl__row");
  return (
    <section className="section tl section  bg-shapes bg-nebula">
      <h2 className="section__title timeline__title neon-yellow bg-radial">
        Parcours
      </h2>

      {/* ligne centrale */}
      <div className="tl__line" aria-hidden />

      {/* rows alternées */}
      <div className="tl__list max-w">
        {TL.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
