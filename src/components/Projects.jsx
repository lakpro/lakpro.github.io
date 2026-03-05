import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import pj1 from "../assets/pj1.png";
import pj2 from "../assets/pj2.png";
import pj3 from "../assets/pj3.png";
import pj4 from "../assets/pj4.png";
import pj7 from "../assets/pj7.jpeg";
import pj6 from "../assets/pj6.png";

const projects = [
  {
    id: 1,
    title: "Agentic AI",
    description:
      "AI-powered virtual assistant with agentic architecture, human-in-the-loop supervision, and automated learning.",
    image: pj7,
    link: "https://github.com/lakpro/agenticAI",
    tag: "AI · AGENT",
    status: "HOLDING",
    statusColor: "#D89020",
  },
  {
    id: 2,
    title: "ProdNx",
    description:
      "Chrome extension to track time, block distractions, build habits, and boost focus. 237+ active users.",
    image: pj1,
    link: "https://prodnx.com/",
    tag: "EXT · CHROME",
    status: "IN SERVICE",
    statusColor: "#27A020",
  },
  {
    id: 3,
    title: "Insta API",
    description:
      "React & Node.js app with Instagram OAuth, feed access, manual replies, and AI/webhook automation.",
    image: pj6,
    link: "https://github.com/lakpro/instaApiLoginBackend",
    tag: "API · BE",
    status: "GROUNDED",
    statusColor: "#C8201A",
  },
  {
    id: 4,
    title: "Vuln Scanner",
    description:
      "Android app using machine learning to predict vulnerabilities in Play Store applications.",
    image: pj3,
    link: "https://github.com/lakpro/VulnerabilityDetection",
    tag: "SEC · APP",
    status: "GROUNDED",
    statusColor: "#C8201A",
  },
  {
    id: 5,
    title: "Series Verse",
    description:
      "Full-stack MERN app for exploring web series with OAuth login, search, favorites, and alerts.",
    image: pj2,
    link: "https://series-verse-lakpro.netlify.app/",
    tag: "MERN · WEB",
    status: "IN SERVICE",
    statusColor: "#27A020",
  },
  {
    id: 6,
    title: "Bear n Bull",
    description:
      "Full-stack blogging site built with PHP and MySQL for publishing and reading articles.",
    image: pj4,
    link: "https://github.com/lakpro/bear-n-bull",
    tag: "PHP · WEB",
    status: "GROUNDED",
    statusColor: "#C8201A",
  },
];

/* ── Single project card — styled as a CDU/MFD pushbutton ── */
const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col w-56 group cursor-pointer select-none no-underline cp-card-hover"
    style={{
      background: "var(--cp-panel)",
      border: "2px solid var(--cp-seam)",
    }}
  >
    {/* Tag strip */}
    <div
      className="flex items-center justify-between px-2 py-1"
      style={{ background: "var(--cp-panel-dark)", borderBottom: "1px solid var(--cp-seam)" }}
    >
      <span
        className="text-[10px] tracking-[0.25em] uppercase"
        style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
      >
        {project.tag}
      </span>
      <span
        className="text-[10px]"
        style={{ fontFamily: "monospace", color: "var(--cp-faint)" }}
      >
        #{String(project.id).padStart(2, "0")}
      </span>
    </div>

    {/* Screen / image */}
    <div
      className="relative m-2 overflow-hidden"
      style={{ height: "160px", border: "2px solid var(--cp-seam-dark)", boxShadow: "inset 1px 1px 0 var(--cp-raised)" }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Label */}
    <div className="px-3 pb-2 pt-1 flex-1 flex flex-col">
      <h3
        className="font-bold tracking-wider uppercase text-sm mb-1"
        style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-xs leading-relaxed flex-1"
        style={{ color: "var(--cp-muted)" }}
      >
        {project.description}
      </p>
    </div>

    {/* Status light strip */}
    <div
      className="flex items-center gap-1.5 px-3 py-1.5"
      style={{ borderTop: "1px solid var(--cp-seam)", background: "var(--cp-panel-dark)" }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: project.statusColor, boxShadow: `0 0 4px ${project.statusColor}` }}
      />
      <span
        className="text-[10px] tracking-[0.2em] uppercase"
        style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
      >
        {project.status}
      </span>
    </div>
  </a>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isDark, toggleDark } = useDarkMode();

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const visible = isMobile && !showAll ? projects.slice(0, 3) : projects;

  return (
    <section
      className="py-20 flex flex-col justify-center items-center px-6"
      style={{ background: "var(--cp-bg)", borderTop: "3px solid var(--cp-seam-dark)" }}
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
            SYS · MFD · 03
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, var(--cp-seam-dark), transparent)" }} />

          {/* ── Dark mode toggle button ──
          <button
            onClick={toggleDark}
            className="cp-btn"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.65rem" }}
            title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: isDark ? "var(--cp-amber)" : "var(--cp-green)",
                boxShadow: isDark ? "0 0 4px var(--cp-amber)" : "0 0 4px var(--cp-green)",
              }}
            />
            {isDark ? "DAY" : "NIT"} · MODE
          </button> */}
        </div>
        <h2
          className="text-4xl font-bold tracking-widest uppercase pb-2"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
        >
          Portfolio Terminal
        </h2>
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
        >
          Select a mission to view — PUSH to open
        </p>
      </div>

      {/* ── Project grid ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {isMobile && projects.length > 3 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="cp-btn mt-10"
        >
          {showAll ? "Collapse" : "Load More"}
          <span className={`ml-2 cp-light ${showAll ? "cp-light-red" : "cp-light-green"}`} />
        </button>
      )}
    </section>
  );
};

export default Projects;
