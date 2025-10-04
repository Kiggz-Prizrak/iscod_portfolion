import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TECH = [
  { skill: "Fullstack", value: 85 },
  { skill: "CI/CD", value: 72 },
  { skill: "UX/UI", value: 75 },
  { skill: "Docker", value: 70 },
  { skill: "Realtime", value: 82 },
];

const SOFT = [
  { skill: "Communication", value: 88 },
  { skill: "Organisation", value: 82 },
  { skill: "Leadership", value: 76 },
  { skill: "Créativité", value: 84 },
  { skill: "Interculturel", value: 80 },
];

function NeonRadar({ data, title }) {
  return (
    <div className="card" style={{ height: 360 }}>
      <h3
        className="card__title"
        style={{ textAlign: "center", marginBottom: 12 }}
      >
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <RadarChart data={data} outerRadius="70%">
          <defs>
            <linearGradient
              id={`radarFill-${title}`}
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#FF4BCD" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#6C1EFF" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <PolarGrid stroke="rgba(255,75,205,.35)" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "#EAF7FF", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "rgba(234,247,255,.65)", fontSize: 10 }}
            stroke="rgba(108,30,255,.35)"
          />
          <Tooltip
            contentStyle={{
              background: "rgba(10,10,18,.85)",
              border: "1px solid rgba(108,30,255,.45)",
              borderRadius: "12px",
              color: "#EAF7FF",
              boxShadow: "0 0 16px rgba(108,30,255,.35)",
            }}
            formatter={(v, n) => [`${v}/100`, n]}
            labelStyle={{ color: "#FF4BCD" }}
          />
          <Radar
            dataKey="value"
            stroke="#00E5FF"
            fill={`url(#radarFill-${title})`}
            fillOpacity={1}
            name={title}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

const SkillRadarGroup = ({ tech = TECH, soft = SOFT }) => {
  return (
    <section className="section">
      <h2 className="section__title">Compétences — Vue groupée</h2>
      <div className="section__grid max-w">
        <NeonRadar data={tech} title="Techniques" />
        <NeonRadar data={soft} title="Humaines" />
      </div>
    </section>
  );
};

export default SkillRadarGroup;
