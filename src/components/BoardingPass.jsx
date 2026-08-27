import { QRCodeCanvas } from "qrcode.react";
import destinationImg from "../assets/1712597576301.jpeg";
import { Plane } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const DataField = ({ label, value }) => (
  <div>
    <p className="cp-data-label mb-0.5">{label}</p>
    <p className="cp-data-value">{value}</p>
  </div>
);

const BoardingPass = () => {
  const portfolioURL = "https://www.linkedin.com/in/lakshay-setia/";
  const { isDark, toggleDark } = useDarkMode();

  return (
    <div
      className="max-w-[90vw] lg:max-w-4xl mx-auto m-4 overflow-hidden"
      style={{
        background: "var(--cp-panel)",
        border: "2px solid var(--cp-seam)",
        boxShadow: "inset 2px 2px 0 var(--cp-raised), inset -2px -2px 0 var(--cp-seam-dark), 0 8px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <div
        className="flex items-center h-12 gap-0"
        style={{ background: "var(--cp-panel-dark)", borderBottom: "2px solid var(--cp-seam)" }}
      >
        {/* Airline logo mark */}
        <div
          className="flex items-center justify-center gap-4 px-4 h-full"
          style={{ background: "var(--cp-text)" }}
        >
          <Plane size={24} color="var(--cp-panel-dark)" strokeWidth={2} />
          <div className="flex flex-col justify-center items-center gap-1">
            <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.3em", color: "var(--cp-raised)", lineHeight: 1.1 }}>
              AIR LAK
            </span>
            <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.5em", color: "var(--cp-seam-dark)", lineHeight: 1.2 }}>
              EST.2024
            </span>
          </div>
        </div>

        {/* Dark mode toggle — replaces SYS ACTIVE lights */}
        <div className="ml-auto flex items-center gap-2 pr-4">
          <button
            onClick={toggleDark}
            className="cp-btn"
            style={{ padding: "0.35rem 0.75rem", fontSize: "0.6rem" }}
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
          </button>
        </div>
      </div>

      {/* ── Decorative rule ─────────────────────────────────────────────── */}
      <div className="cp-rule" />

      <div className="flex flex-col md:flex-row">
        {/* ── Main data panel ──────────────────────────────────────────── */}
        <div className="w-full md:w-2/3 p-6">

          {/* System plate */}
          <div className="flex items-center gap-3 mb-4">
            <div className="cp-plate">FLT · CREW · DATA</div>
            <div className="cp-rule flex-1" />
          </div>

          <h2
            className="text-2xl font-bold tracking-wider uppercase mb-0.5"
            style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
          >
            Lakshay Setia
          </h2>
          <p className="cp-section-label mb-4">SOFTWARE DEV ENGINEER</p>

          {/* Data grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-2">
            <DataField label="Origin" value="IXC" />
            <DataField label="Destination" value="UNIVERSE" />
            <DataField label="Tech Stack" value="AI + Full Stack" />
            <DataField label="Experience" value="2.5+ Yrs" />
          </div>

          {/* Divider */}
          <div className="cp-rule my-5" />

          {/* Loadout + QR */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="cp-data-label mb-1">Loadout</p>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)", letterSpacing: "0.05em" }}
              >
                 JAVA · TYPESCRIPT · PYTHON · REACT · 
                 REACT NATIVE · NODE.JS · EXPRESS · 
                 POSTGRESQL · MONGODB · SUPABASE · PGVECTOR ·
                 TAILWIND · CI/CD · AWS · AGENTIC AI 
              </p>
            </div>

            {/* QR code in panel bezel */}
            <div
              className="flex-shrink-0 p-2"
              style={{
                background: "var(--cp-raised)",
                border: "1px solid var(--cp-seam)",
                boxShadow: "inset 1px 1px 0 var(--cp-seam-dark)",
              }}
            >
              <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
                <QRCodeCanvas
                  value={portfolioURL}
                  size={72}
                  bgColor={isDark ? "#282C30" : "#F4F0E8"}
                  fgColor={isDark ? "#D8D5CE" : "#1A1A18"}
                />
              </a>
            </div>
          </div>
        </div>

        {/* ── Destination photo panel — larger screens ───────────────────── */}
        <div
          className="hidden md:flex w-1/3 p-3 items-stretch"
          style={{ borderLeft: "2px solid var(--cp-seam)" }}
        >
          <div
            className="w-full overflow-hidden"
            style={{ border: "2px solid var(--cp-seam-dark)", boxShadow: "inset 2px 2px 0 var(--cp-raised)" }}
          >
            <img src={destinationImg} alt="Destination" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* ── Destination photo panel — smaller screens ──────────────────── */}
        <div className="md:hidden w-full px-4 pb-4 flex justify-center">
          <div
            className="overflow-hidden max-w-[60vw]"
            style={{ border: "2px solid var(--cp-seam-dark)", boxShadow: "inset 2px 2px 0 var(--cp-raised)" }}
          >
            <img src={destinationImg} alt="Destination" className="h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── Bottom status strip ─────────────────────────────────────────── */}
      <div
        className="flex items-center gap-3 px-4 py-1.5"
        style={{ background: "var(--cp-panel-dark)", borderTop: "2px solid var(--cp-seam)" }}
      >
        <span className="cp-section-label">STATUS</span>
        <span className="cp-light cp-light-green" />
        <span className="cp-section-label">AVAILABLE FOR HIRE</span>
        <div className="ml-auto cp-section-label">DEV · 2026</div>
      </div>
    </div>
  );
};

export default BoardingPass;
