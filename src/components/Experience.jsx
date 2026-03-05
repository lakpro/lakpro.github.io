import legistifyImg from "../assets/legistify.png";
import prodNxImg from "../assets/prodnx.png";
import eclipseImg from "../assets/eclipse360.png";

export const experiences = [
  {
    company: "Eclipse360",
    role: "Fullstack Developer",
    duration: "JUN'25 - PRESENT",
    image: eclipseImg,
    status: "ACTIVE",
    statusColor: "#27A020",
    highlights: [
      `Contributed to building a pixel-perfect <b>rooftop solar design</b> software.`,
      "Led development of Design and Lead Management modules for the <b>solar CRM</b>.",
      "Implemented critical features such as Auto-Save, Multiple Map Imagery, and Meter-to-Pixel integration.",
      "Drove <b>end-to-end</b> delivery of the Project Management module, enhancing workflow efficiency.",
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
      "Developed a cross-browser <b>Chrome extension</b> application using React.",
      "Reached <b>250+ WAU</b> (Weekly Active Users) and <b>677+ downloads</b>.",
      "Built a precise <b>time-tracking</b> system, website blocker in JavaScript for detailed web activity reports.",
      "Optimized data operations, implemented unit testing and added support for <b>20+ languages</b>.",
    ],
  },
  {
    company: "Legistify",
    role: "Fullstack Intern",
    duration: "JAN'24 - JUL'24",
    image: legistifyImg,
    status: "COMPLETE",
    statusColor: "#C8201A",
    highlights: [
      "Led frontend component integration; developed 15+ backend APIs.",
      "Fixed 9+ critical bugs, <b>improving system reliability by 30%</b>.",
      "Integrated new editor for on-prem migration; <b>reduced hosting costs by 40%</b>.",
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
            <img
              src={exp.image}
              alt={exp.company}
              className="object-contain max-w-[230px] max-h-[280px]"
            />
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
