import React from "react";
import mentor from "../assets/mentor.jpg";
import msfs from "../assets/msfs.jpg";
import robo from "../assets/robo.jpg";
import bg from "../assets/bg.avif";

const PanelCard = ({ label, title, img, statusColor = "#27A020" }) => (
  <div
    className="flex flex-col overflow-hidden flex-1"
    style={{
      background: "#E4E0D8",
      border: "2px solid #B8B4AC",
      // boxShadow: "inset 2px 2px 0 #F4F0E8, inset -1px -1px 0 #9A9690",
    }}
  >
    <div
      className="flex items-center gap-2 px-3 py-2"
      style={{ background: "#D0CCC4", borderBottom: "1px solid #B8B4AC" }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: statusColor, boxShadow: `0 0 3px ${statusColor}` }}
      />
      <span
        className="text-[10px] tracking-[0.25em] uppercase"
        style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
      >
        {label}
      </span>
    </div>
    <div className="px-4 pt-3 pb-2">
      <h3
        className="text-2xl font-bold tracking-wider uppercase"
        style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18" }}
      >
        {title}
      </h3>
      <div className="w-8 h-0.5 mt-1" style={{ background: "#C8201A" }} />
    </div>
    <div className="relative flex-1 overflow-hidden min-h-[160px]">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
      />
      <div
        className="absolute top-0 left-0 w-full h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #E4E0D8, transparent)" }}
      />
    </div>
  </div>
);

const AboutMe = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center py-16 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(240,236,228,0.88)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl">
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
            SYS · CAM · 05
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #9A9690, transparent)" }} />
        </div>
        <h2
          className="text-4xl font-bold tracking-widest uppercase pb-2"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18" }}
        >
          Above the Clouds
        </h2>
        <p
          className="text-xs tracking-[0.25em] uppercase mb-10"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
        >
          Life outside the cockpit — personal log
        </p>

        <div className="flex h-full flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col min-h-[400px]">
            <PanelCard label="SIM · A320" title="I Love Planes" img={msfs} />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col" style={{ minHeight: "190px" }}>
              <PanelCard label="ROBO · LAB" title="Hobby" img={robo} statusColor="#D89020" />
            </div>
            <div className="flex flex-col" style={{ minHeight: "190px" }}>
              <PanelCard label="EDU · OPS" title="Mentoring" img={mentor} statusColor="#C8201A" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
