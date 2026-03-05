import React, { useState } from "react";
import elon from "../assets/elon.png";
import leetcode from "../assets/leetcode.png";

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
  <div className="flex flex-col" style={{ width: "200px", height: "250px" }}>
    <div
      className="flex-1 w-full flex flex-col items-center px-3 pt-3 pb-2 cursor-pointer select-none justify-between"
      style={{
        background: "#E4E0D8",
        border: "2px solid #B8B4AC",
        boxShadow: "inset 2px 2px 0 #F4F0E8, inset -2px -2px 0 #9A9690, 2px 2px 4px rgba(0,0,0,0.18)",
        transition: "box-shadow 80ms ease, transform 80ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "inset -2px -2px 0 #F4F0E8, inset 2px 2px 0 #9A9690, 1px 1px 2px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translate(1px,1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "inset 2px 2px 0 #F4F0E8, inset -2px -2px 0 #9A9690, 2px 2px 4px rgba(0,0,0,0.18)";
        e.currentTarget.style.transform = "translate(0,0)";
      }}
    >
      <div
        className="self-start mb-2 px-1.5 py-0.5 text-[10px] tracking-[0.2em] uppercase"
        style={{
          fontFamily: "'B612 Mono', monospace",
          background: "#D0CCC4",
          border: "1px solid #B8B4AC",
          color: "#5C5850",
        }}
      >
        {item.tag}
      </div>

      <img
        src={item.img}
        alt={item.title}
        className={`w-16 h-16 object-contain mb-2 ${item.flipMobile ? "scale-x-[-1] md:scale-x-100" : ""} ${item.tag === "LEAD" || item.tag === "CODE"? "w-20 h-20" : ""}`}
      />

      <p
        className="text-xs font-bold tracking-wider uppercase text-center"
        style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18" }}
      >
        {item.title}
      </p>
    </div>

    {/* Status annunciator light bar */}
    <div
      className="w-full h-4 flex items-center justify-center gap-1"
      style={{
        background: item.statusColor,
        border: "1px solid #9A9690",
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

    <p
      className="text-[11px] text-center mt-2 px-1 leading-snug"
      style={{
        fontFamily: "'B612 Mono', monospace",
        color: "#5C5850",
        height: "48px",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
      }}
    >
      {item.description}
    </p>
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
      style={{ background: "#EBE8E0", borderTop: "3px solid #9A9690" }}
    >
      {/* Section header */}
      <div className="w-full max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="px-2 py-0.5 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'B612 Mono', monospace",
              background: "#D0CCC4",
              border: "1px solid #B8B4AC",
              color: "#5C5850",
            }}
          >
            SYS · OVH · 04
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #9A9690, transparent)" }} />
        </div>
        <h2
          className="text-4xl font-bold tracking-widest uppercase pb-2"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18" }}
        >
          Miles High Club
        </h2>
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
        >
          Overhead panel — active achievements
        </p>
      </div>

      {/* Outer panel bezel */}
      <div
        className="w-full max-w-4xl p-6 mb-8"
        style={{
          background: "#DEDAD2",
          border: "2px solid #B8B4AC",
          boxShadow: "inset 2px 2px 0 #F4F0E8, inset -2px -2px 0 #9A9690",
        }}
      >
        {/* Panel header strip */}
        <div
          className="flex items-center gap-2 mb-5 pb-3"
          style={{ borderBottom: "1px solid #B8B4AC" }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#27A020", boxShadow: "0 0 4px #27A020" }}
          />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
          >
            OVERHEAD PANEL — ANNUNCIATORS ARMED
          </span>
        </div>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          {(isMobile && !showAll ? achievements.slice(0, 3) : achievements).map((item) => (
            <AchievementButton key={item.id} item={item} />
          ))}
        </div>
        {/* Row 2 — 2 cards centered */}
        {/* <div className="flex justify-center gap-6">
          {achievements.slice(3, 5).map((item) => (
            <AchievementButton key={item.id} item={item} />
          ))}
        </div> */}
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
