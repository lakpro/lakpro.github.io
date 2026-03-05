import { useState, useEffect } from "react";
import planeImage from "../assets/Plane.png";
import BoardingPass from "./BoardingPass";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OpenBox = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [translateFactor, setTranslateFactor] = useState(0.8);
  const [showBoardingPass, setShowBoardingPass] = useState(false);
  const [boardPassWidth, setBoardPassWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const bp = document.getElementById("boarding-pass");
      if (bp) setBoardPassWidth(bp.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTranslateFactor(window.innerWidth < 768 ? 0.4 : 0.8);
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsVisible(currentScroll === 0);
      setShowBoardingPass(currentScroll > document.documentElement.clientHeight - 1);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateX = scrollY * 1.5;
  const translatePlane = scrollY * translateFactor;

  return (
    <>
      {/* Bouncing scroll hint — floats over gap between doors */}
      <div
        className="absolute inset-0 flex flex-col items-end justify-center z-20 pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 200ms" }}
      >
      </div>

      {/* Welcome text — shown as doors open */}
      <div
        className="absolute flex flex-col items-center justify-center w-full h-screen z-10 gap-3 pointer-events-none mt-30"
        style={{ opacity: !isVisible ? Math.max(0, 1 - scrollY / 800) : 0, transition: "opacity 100ms" }}
      >
        <p style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.45em", color: "var(--cp-faint)", textTransform: "uppercase" }}>
          AIR LAK · CLEARED FOR TAKEOFF
        </p>
        <h1 style={{ fontFamily: "'B612 Mono', monospace", fontSize: "clamp(1.4rem, 4vw, 2.4rem)", fontWeight: 700, letterSpacing: "0.25em", color: "var(--cp-text)", textTransform: "uppercase", lineHeight: 1.1, textAlign: "center" }}>
          WELCOME ONBOARD
        </h1>
        <p style={{ fontFamily: "'B612 Mono', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", letterSpacing: "0.35em", color: "var(--cp-muted)", textTransform: "uppercase" }}>
          LAKSHAY SETIA · FULL-STACK DEV
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27A020", boxShadow: "0 0 6px #27A020", display: "inline-block" }} />
          <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.4em", color: "var(--cp-faint)", textTransform: "uppercase" }}>
            RUNWAY 2026 · WIND FAVOURABLE
          </span>
        </div>
      </div>

      {/* Animated Plane */}
      <div
        className=" absolute bottom-[-70px] right-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${translatePlane}px)`,
          width: "200px",
          opacity: !isVisible ? 0.8 : 0,
          scale: `${1 + translateX / 700}`,
        }}
      >
        <img src={planeImage} alt="Flying Plane" className="w-full h-auto" />
      </div>

      <motion.div
        id="boarding-pass"
        className="z-20 absolute top-[120vh] w-full flex justify-center items-center p-10"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{
          x: scrollY > 100 ? 0 : "-100vw",
          opacity: scrollY > 100 ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <BoardingPass />
      </motion.div>

      {/* ── Cockpit panel doors ────────────────────────────────────────── */}
      <div className="z-10 relative w-full h-[250vh] md:h-[200vh] flex overflow-hidden">
        {/* Left door */}
        <div
          className="h-[200vh] w-[50vw] transition-transform duration-100 relative"
          style={{
            transform: `translateX(-${translateX * 1.5}px)`,
            background: `linear-gradient(to right, var(--cp-seam), var(--cp-panel))`,
            boxShadow: `inset -4px 0 8px rgba(0,0,0,0.15)`,
          }}
        >
          {/* Panel rivets / detail lines */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, var(--cp-seam-dark) 80px, var(--cp-seam-dark) 81px)`,
            }}
          />
          {/* Right edge seam */}
          <div className="absolute right-0 top-0 w-2 h-full" style={{ background: "var(--cp-seam-dark)" }} />

          {/* Painted label — right side of left door */}
          <div className="absolute right-6 top-0 h-screen flex flex-col items-end justify-center gap-2 pointer-events-none mt-2">
            <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.45em", color: "var(--cp-muted)", textTransform: "uppercase" }}>
              HANGAR · BAY 01
            </span>
            {/* OPEN + arrows on same horizontal line */}
            <div className="flex items-center gap-1">
              {[2, 1, 0].map((i) => (
                <motion.span
                  key={i}
                  animate={{ x: [-5, 0, -5], opacity: [0.25, 0.8, 0.25] }}
                  transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  style={{ fontFamily: "'B612 Mono', monospace", fontSize: "1.2rem", color: "var(--cp-seam-dark)", display: "inline-block", lineHeight: 1 }}
                >
                  <ChevronLeft className="w-4 h-4"/>
                </motion.span>
              ))}
              <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "clamp(1rem, 2.5vw, 1.6rem)", fontWeight: 700, letterSpacing: "0.25em", color: "var(--cp-muted)", textTransform: "uppercase" }}>
                OPEN
              </span>
            </div>
          </div>
        </div>

        {/* Right door */}
        <div
          className="h-[200vh] w-[50vw] transition-transform duration-100 relative"
          style={{
            transform: `translateX(${translateX * 1.5}px)`,
            background: `linear-gradient(to left, var(--cp-seam), var(--cp-panel))`,
            boxShadow: `inset 4px 0 8px rgba(0,0,0,0.15)`,
          }}
        >
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, var(--cp-seam-dark) 80px, var(--cp-seam-dark) 81px)`,
            }}
          />
          {/* Left edge seam */}
          <div className="absolute left-0 top-0 w-2 h-full" style={{ background: "var(--cp-seam-dark)" }} />

          {/* Painted label — left side of right door */}
          <div className="absolute left-6 top-0 h-screen flex flex-col items-start justify-center gap-2 pointer-events-none mt-2">
            <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.45em", color: "var(--cp-muted)", textTransform: "uppercase" }}>
              SCROLL TO OPEN
            </span>
            {/* arrows + HANGAR on same horizontal line */}
            <div className="flex items-center gap-1">
              <span style={{ fontFamily: "'B612 Mono', monospace", fontSize: "clamp(1rem, 2.5vw, 1.6rem)", fontWeight: 700, letterSpacing: "0.25em", color: "var(--cp-muted)", textTransform: "uppercase" }}>
                HANGAR
              </span>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ x: [5, 0, 5], opacity: [0.25, 0.8, 0.25] }}
                  transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  style={{ fontFamily: "'B612 Mono', monospace", fontSize: "1.2rem", color: "var(--cp-seam-dark)", display: "inline-block", lineHeight: 1 }}
                >
                  <ChevronRight className="w-4 h-4"/>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenBox;
