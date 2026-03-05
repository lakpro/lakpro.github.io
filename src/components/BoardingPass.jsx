import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import destinationImg from "../assets/1712597576301.jpeg";
import { Plane } from "lucide-react";

const DataField = ({ label, value, wide }) => (
  <div className={wide ? "col-span-2" : ""}>
    <p className="cp-data-label mb-0.5">{label}</p>
    <p className="cp-data-value">{value}</p>
  </div>
);

const BoardingPass = () => {
  const portfolioURL = "https://www.linkedin.com/in/lakshay-setia/";

  return (
    <div
      className="max-w-[90vw] lg:max-w-4xl mx-auto m-4 overflow-hidden"
      style={{
        background: "#E4E0D8",
        border: "2px solid #B8B4AC",
        boxShadow: "inset 2px 2px 0 #F4F0E8, inset -2px -2px 0 #9A9690, 0 8px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <div
        className="flex items-center h-12 gap-0"
        style={{ background: "#D0CCC4", borderBottom: "2px solid #B8B4AC" }}
      >
        {/* Red accent stripe */}
        {/* <div className="w-1.5 h-full flex-shrink-0" style={{ background: "#C8201A" }} /> */}

        {/* Airline logo mark */}
        <div
          className="flex items-center justify-center gap-4 px-4 h-full"
          style={{ background: "#1A1A18" }}
        >
          <Plane size={24} color="#D0CCC4" strokeWidth={2} />
          <div className="flex flex-col justify-center items-center gap-1">
            <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.3em", color: "#F4F0E8", lineHeight: 1.1 }}>
              AIR LAK
            </span>
            <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.5em", color: "#9A9690", lineHeight: 1.2 }}>
              EST.2024
            </span>
          </div>
        </div>

        {/* DevPass label */}
        {/* <span
          className="mx-4 text-xs font-bold tracking-[0.3em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
        >
          DevPass
        </span> */}

        {/* Status lights */}
        <div className="ml-auto flex items-center gap-2 pr-4">
          <span className="cp-section-label">SYS ACTIVE</span>
          <span className="cp-light cp-light-green" />
          <span className="cp-light cp-light-green" />
          <span className="cp-light cp-light-amber" />
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
            style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18" }}
          >
            Lakshay Setia
          </h2>
          <p className="cp-section-label mb-4">Software Developer</p>

          {/* Data grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-2">
            <DataField label="Origin" value="IXC" />
            <DataField label="Destination" value="WORLDWIDE" />
            <DataField label="Tech Stack" value="AI + MERN" />
            <DataField label="Experience" value="2+ Yrs" />
          </div>

          {/* Divider */}
          <div className="cp-rule my-5" />

          {/* Loadout + QR */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="cp-data-label mb-1">Loadout</p>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18", letterSpacing: "0.05em" }}
              >
                AGENTIC AI · TYPESCRIPT · JAVASCRIPT · REACT · NODE ·
                PYTHON · MONGODB · SQL · C++ · HTML · CSS
              </p>
            </div>

            {/* QR code in panel bezel */}
            <div
              className="flex-shrink-0 p-2"
              style={{
                background: "#F4F0E8",
                border: "1px solid #B8B4AC",
                boxShadow: "inset 1px 1px 0 #9A9690",
              }}
            >
              <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
                <QRCodeCanvas value={portfolioURL} size={72} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Destination photo panel ───────────────────────────────────── */}
        {/* Larger screens */}
        <div
          className="hidden md:flex w-1/3 p-3 items-stretch"
          style={{ borderLeft: "2px solid #B8B4AC" }}
        >
          <div
            className="w-full overflow-hidden"
            style={{ border: "2px solid #9A9690", boxShadow: "inset 2px 2px 0 #F4F0E8" }}
          >
            <img src={destinationImg} alt="Destination" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Smaller screens */}
        <div className="md:hidden w-full px-4 pb-4 flex justify-center">
          <div
            className="overflow-hidden max-w-[60vw]"
            style={{ border: "2px solid #9A9690", boxShadow: "inset 2px 2px 0 #F4F0E8" }}
          >
            <img src={destinationImg} alt="Destination" className="h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── Bottom status strip ─────────────────────────────────────────── */}
      <div
        className="flex items-center gap-3 px-4 py-1.5"
        style={{ background: "#D0CCC4", borderTop: "2px solid #B8B4AC" }}
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
