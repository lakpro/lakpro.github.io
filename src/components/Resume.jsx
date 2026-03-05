import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import resumeFile from "../assets/Lakshay_Setia_Resume.pdf";
import runway from "../assets/runway.jpg";

const ResumeSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center py-28 px-10 bg-cover"
      style={{
        backgroundImage: `url(${runway})`,
        backgroundPosition: `center ${offsetY}px`,
      }}
    >
      {/* Light cockpit-tinted overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(240, 236, 228, 0.82)" }}
      />
      {/* Subtle panel scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.025) 3px, rgba(0,0,0,0.025) 4px)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Section plate */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="px-2 py-0.5 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'B612 Mono', monospace",
              background: "#D0CCC4",
              border: "1px solid #B8B4AC",
              color: "#5C5850",
            }}
          >
            SYS · DOC · 01
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #9A9690, #F4F0E8)" }} />
          <span className="cp-light cp-light-green" />
        </div>

        <h2
          className="text-4xl font-bold tracking-widest uppercase mb-2"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#1A1A18" }}
        >
          Pilot&apos;s Log
        </h2>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
        >
          Grab my resume — skills, experience, and projects in one click
        </p>

        {/* Cockpit pushbutton download */}
        <a
          href={resumeFile}
          download="Lakshay_Resume.pdf"
          className="cp-btn inline-flex"
        >
          <FaDownload className="text-[#C8201A]" />
          Download Resume
          <span className="ml-2 cp-light cp-light-green" />
        </a>

        {/* Data strip below button */}
        <div
          className="mt-8 flex flex-wrap gap-6 p-4"
          style={{
            background: "#E4E0D8",
            border: "1px solid #B8B4AC",
            boxShadow: "inset 2px 2px 0 #F4F0E8, inset -1px -1px 0 #9A9690",
          }}
        >
          {[
            { label: "Format", value: "PDF" },
            { label: "Pages", value: "01" },
            { label: "Updated", value: "2026" },
            { label: "Status", value: "AVAIL" },
          ].map((d) => (
            <div key={d.label}>
              <p className="cp-data-label">{d.label}</p>
              <p className="cp-data-value">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
