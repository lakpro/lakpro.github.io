import React, { useState } from "react";
import elon from "../assets/elon.png";

const achievements = [
  {
    id: 1,
    title: "Featured Badge",
    description: "Awarded to ProdNx by the Chrome Web Store (2025).",
    img: "https://cdn3.emoji.gg/unicode/google/sports-medal.png",
    statusColor: "#27A020",
    tag: "AWARD",
  },
  {
    id: 6,
    title: "Hackathon Finalist",
    description: "Hack the Waste 2023 — top team among 135+ entries.",
    img: "https://cdn3.emoji.gg/emojis/1238_Trophy.png",
    statusColor: "#27A020",
    tag: "HACK",
  },
  {
    id: 3,
    title: "Runner Up",
    description: "2nd place at Apogee BITS Pilani 2022 — transporter robot.",
    img: "https://cdn3.emoji.gg/unicode/google/2nd-place-medal.png",
    statusColor: "#27A020",
    tag: "COMP",
  },
  {
    id: 2,
    title: "Head @Phoenix",
    description: "Ignited 300+ curious minds in Robotics.",
    img: elon,
    statusColor: "#27A020",
    tag: "LEAD",
    flipMobile: true,
  },
  {
    id: 4,
    title: "Leetcode",
    description: "Solved 500+ problems · Rating 1700+",
    img: "https://cdn3.emoji.gg/emojis/9809-jeff.png",
    statusColor: "#27A020",
    tag: "CODE",
  },
];

const AchievementButton = ({ item }) => (
  <div className="flex flex-col" style={{ width: "200px" }}>
    <div
      className="w-full flex flex-col items-center px-3 pt-3 pb-3 cursor-pointer select-none cp-card-hover"
      style={{
        background: "var(--cp-panel)",
        border: "2px solid var(--cp-seam)",
      }}
    >
      <div
        className="self-start mb-3 px-1.5 py-0.5 text-[10px] tracking-[0.2em] uppercase"
        style={{
          fontFamily: "'B612 Mono', monospace",
          background: "var(--cp-panel-dark)",
          border: "1px solid var(--cp-seam)",
          color: "var(--cp-muted)",
        }}
      >
        {item.tag}
      </div>

      <img
        src={item.img}
        alt={item.title}
        className={`object-contain mb-3 ${item.flipMobile ? "scale-x-[-1] md:scale-x-100" : ""} ${item.tag === "LEAD" || item.tag === "CODE" ? "w-20 h-20" : "w-16 h-16"}`}
      />

      <p
        className="text-xs font-bold tracking-wider uppercase text-center mb-2"
        style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
      >
        {item.title}
      </p>

      <p
        className="text-[10px] text-center leading-snug"
        style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
      >
        {item.description}
      </p>
    </div>

    {/* Status annunciator light bar */}
    <div
      className="w-full h-4 flex items-center justify-center gap-1"
      style={{
        background: item.statusColor,
        border: "1px solid var(--cp-seam-dark)",
        borderTop: "none",
        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.6)" }} />
      <span
        className="text-[9px] leading-none uppercase font-bold"
        style={{ fontFamily: "'B612 Mono', monospace", color: "rgba(255,255,255,0.9)" }}
      >
        ON
      </span>
    </div>
  </div>
);

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <section
      className="py-20 flex flex-col justify-center items-center px-6"
      style={{ background: "var(--cp-bg-alt)", borderTop: "3px solid var(--cp-seam-dark)" }}
    >
      {/* Section header */}
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
            SYS · OVH · 04
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, var(--cp-seam-dark), transparent)" }} />
        </div>
        <h2
          className="text-4xl font-bold tracking-widest uppercase pb-2"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-text)" }}
        >
          Miles High Club
        </h2>
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
        >
          Overhead panel — active achievements
        </p>
      </div>

      {/* Outer panel bezel */}
      <div
        className="w-full max-w-4xl p-6 mb-8"
        style={{
          background: "var(--cp-bg-deep)",
          border: "2px solid var(--cp-seam)",
          boxShadow: "inset 2px 2px 0 var(--cp-raised), inset -2px -2px 0 var(--cp-seam-dark)",
        }}
      >
        {/* Panel header strip */}
        <div
          className="flex items-center gap-2 mb-5 pb-3"
          style={{ borderBottom: "1px solid var(--cp-seam)" }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#27A020", boxShadow: "0 0 4px #27A020" }}
          />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
          >
            OVERHEAD PANEL — ANNUNCIATORS ARMED
          </span>
        </div>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          {(isMobile && !showAll ? achievements.slice(0, 3) : achievements).map((item) => (
            <AchievementButton key={item.id} item={item} />
          ))}
        </div>
      </div>

      {isMobile && achievements.length > 3 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="cp-btn"
        >
          {showAll ? "Collapse" : "Load More"}
          <span className={`ml-2 cp-light ${showAll ? "cp-light-red" : "cp-light-green"}`} />
        </button>
      )}
    </section>
  );
};

export default Achievements;
