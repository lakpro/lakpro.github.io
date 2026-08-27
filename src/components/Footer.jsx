import { FaGithub, FaLinkedin, FaEnvelope, FaGoogle } from "react-icons/fa";
import { LuTowerControl } from "react-icons/lu";
import { useDarkMode } from "../hooks/useDarkMode";

const CommButton = ({ href, label, icon, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex flex-col items-center gap-1 group"
  >
    <div
      className="w-14 h-14 flex items-center justify-center text-xl cursor-pointer cp-card-hover"
      style={{
        background: "var(--cp-panel)",
        border: "2px solid var(--cp-seam)",
        color: "var(--cp-text)",
      }}
    >
      {icon}
    </div>
    <span
      className="text-[10px] tracking-[0.2em] uppercase"
      style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
    >
      {label}
    </span>
  </a>
);

const Footer = () => {
  const email = "lakshaysetia123@gmail.com";
  const subject = "Query regarding ...";
  const body = "Hello, I am ... %0AI wanted to ...";
  const { isDark, toggleDark } = useDarkMode();

  return (
    <footer style={{ background: "var(--cp-bg-deep)", borderTop: "3px solid var(--cp-seam-dark)" }}>
      {/* Panel header strip */}
      <div
        className="flex items-center gap-3 px-6 py-3"
        style={{ background: "var(--cp-panel-dark)", borderBottom: "2px solid var(--cp-seam)" }}
      >
        <LuTowerControl style={{ color: "var(--cp-muted)", fontSize: "1.2rem" }} />
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-muted)" }}
        >
          COMM PANEL — ATC CONTROL TOWER
        </span>
        <button
          onClick={toggleDark}
          className="cp-btn ml-auto"
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

      {/* Contact buttons */}
      <div className="flex flex-col items-center gap-6 py-8 px-6">
        <div
          className="px-2 py-0.5 text-xs tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'B612 Mono', monospace",
            background: "var(--cp-panel-dark)",
            border: "1px solid var(--cp-seam)",
            color: "var(--cp-muted)",
          }}
        >
          FREQ · COMM · SELECT
        </div>

        <div className="flex gap-6 flex-wrap justify-center">
          <CommButton href="https://linkedin.com/in/lakshay-setia" label="LNKDN" icon={<FaLinkedin />} external />
          <CommButton
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`}
            label="GMAIL"
            icon={<FaGoogle />}
            external
          />
          <CommButton href="https://github.com/lakpro" label="GITHUB" icon={<FaGithub />} external />
          <CommButton href={`mailto:${email}?subject=${subject}&body=${body}`} label="EMAIL" icon={<FaEnvelope />} />
        </div>

        <div
          className="w-full max-w-lg h-px"
          style={{ background: "linear-gradient(to right, transparent, var(--cp-seam-dark), transparent)" }}
        />
        <p className="text-xs tracking-widest" style={{ fontFamily: "'B612 Mono', monospace", color: "var(--cp-faint)" }}>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://linkedin.com/in/lakshay-setia" style={{ color: "var(--cp-muted)" }} className="hover:underline">
            Lakshay Setia
          </a>
          {" "}· All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
