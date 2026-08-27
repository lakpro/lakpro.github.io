import legistifyImg from "../assets/legistify.png";
import prodNxImg from "../assets/prodnx.png";
import eclipseImg from "../assets/eclipse360.png";
import amazonImg from "../assets/amazon_logo.jpeg";

export const experiences = [
  {
    company: "Amazon",
    role: "Software Dev Engineer",
    duration: "JUN'26 - PRESENT",
    image: amazonImg,
    status: "ACTIVE",
    statusColor: "#27A020",
    highlights: [
      "Building resilient systems to help improve Amazon's delivery CX."
    ],
  },
  {
    company: "Eclipse360",
    role: "Full Stack Developer",
    duration: "JUN'25 - JUN'26",
    image: eclipseImg,
    status: "COMPLETE",
    statusColor: "#C8201A",
    highlights: [
      "Built an <b>enterprise Solar CRM</b> (React, Node.js, PostgreSQL) serving <b>30+</b> orgs across 9+ modules.",
      "Engineered a pixel-perfect rooftop <b>solar design canvas</b> (satellite imagery), cutting design time to <b>under 2 min</b>.",
      "Automated the <b>PO & invoice flow</b>, slashing creation <b>from 1 hour to 1 min</b> with auto-generated receipts.",
      "Drove <b>multi-region expansion</b> (AU → India,NZ) via reusable country/currency localization custom hooks.",
      "Designed a configurable RBAC system managing 500+ users across 8+ org levels and 22+ granular permissions",
    ],
  },
  {
    company: "ProdNx",
    role: "Developer",
    duration: "JUL'24 - JUN'25",
    image: prodNxImg,
    status: "COMPLETE",
    statusColor: "#C8201A",
    highlights: [
      "Engineered a <b>React Chrome extension</b>, driving organic adoption to <b>250+ WAU</b> and <b>1.26k+ downloads</b>.",
      "Architected <b>background scripts</b> and state synchronization for precision time-tracking and DOM blocking.",
      "Optimized browser storage; implemented strict <b>unit testing</b> alongside i18n localization (<b>20+ languages</b>).",
      "Awarded <b>Chrome Web Store Featured Badge</b> for best practices and API compliance.",
    ],
  },
  {
    company: "Legistify",
    role: "SDE Intern",
    duration: "JAN'24 - JUL'24",
    image: legistifyImg,
    status: "COMPLETE",
    statusColor: "#C8201A",
    highlights: [
      "Implemented a custom <b>on-premise editor migration</b>, reducing enterprise hosting costs by <b>40%</b>.",
      "Developed <b>15+ scalable RESTful APIs</b> to seamlessly integrate external frontend architectures.",
      "Resolved critical production bottlenecks, improving overall <b>system reliability by 30%</b>.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-20 pb-16 px-6 cp-section"
      style={{ background: "var(--cp-bg-alt)" }}
    >
      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="w-full max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="px-2 py-0.5 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'B612 Mono', monospace",
              background: "var(--cp-panel-dark)",
              border: "1px solid var(--cp-seam)",
              color: "var(--cp-muted)",
            }}
          >
            SYS · FLT · 02
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, var(--cp-seam-dark), transparent)" }} />
        </div>
        <h2
          className="text-4xl font-bold tracking-widest uppercase pb-2"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
        >
          Flight History
        </h2>
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
        >
          Real-world deployments — mission log
        </p>
      </div>

      {/* ── Experience cards ─────────────────────────────────────────────── */}
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-stretch max-w-4xl w-full mb-8"
          style={{
            background: "var(--cp-panel)",
            border: "2px solid var(--cp-seam)",
            boxShadow: "inset 2px 2px 0 var(--cp-raised), inset -1px -1px 0 var(--cp-seam-dark), 0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* Logo panel */}
          <div
            className="flex items-center justify-center p-6 md:w-[180px] flex-shrink-0"
            style={{ background: "var(--cp-panel-dark)", borderRight: "2px solid var(--cp-seam)" }}
          >
            {exp.image ? (
              <img
                src={exp.image}
                alt={exp.company}
                className="object-contain max-w-[230px] max-h-[280px] rounded-md"
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center w-full h-full min-h-[120px] px-3 text-center"
                style={{
                  border: "1px solid var(--cp-seam)",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.08))",
                }}
              >
                <span
                  className="text-2xl font-bold tracking-[0.35em] uppercase"
                  style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
                >
                  {exp.company}
                </span>
                <span
                  className="mt-2 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
                >
                  {exp.role}
                </span>
              </div>
            )}
          </div>

          {/* Data content */}
          <div className="flex flex-col flex-1 p-5">
            {/* Card header */}
            <div className="flex items-center gap-3 mb-3 pb-2" style={{ borderBottom: "1px solid var(--cp-seam)" }}>
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: exp.statusColor, boxShadow: `0 0 4px ${exp.statusColor}` }}
              />
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
              >
                {exp.status}
              </span>
              <span
                className="ml-auto text-xs tracking-widest"
                style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-faint)" }}
              >
                {exp.duration}
              </span>
            </div>

            <h2
              className="text-xl font-bold tracking-wider uppercase mb-0.5"
              style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
            >
              {exp.company}
            </h2>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
            >
              {exp.role}
            </p>

            {/* Bullet list */}
            <ul className="space-y-2 text-left">
              {exp.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm"
                  style={{ color: "var(--cp-text)" }}
                >
                  <span style={{ fontFamily: "monospace", flexShrink: 0 }}>▶</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
