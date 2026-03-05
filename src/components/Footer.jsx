import { FaInstagram, FaLinkedin, FaEnvelope, FaGoogle } from "react-icons/fa";
import { LuTowerControl } from "react-icons/lu";

const CommButton = ({ href, label, icon, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex flex-col items-center gap-1 group"
  >
    <div
      className="w-14 h-14 flex items-center justify-center text-xl cursor-pointer"
      style={{
        background: "#E4E0D8",
        border: "2px solid #B8B4AC",
        color: "#1A1A18",
        boxShadow: "inset 2px 2px 0 #F4F0E8, inset -2px -2px 0 #9A9690, 2px 2px 4px rgba(0,0,0,0.15)",
        transition: "box-shadow 80ms ease, transform 80ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "inset -2px -2px 0 #F4F0E8, inset 2px 2px 0 #9A9690, 1px 1px 2px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translate(1px,1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "inset 2px 2px 0 #F4F0E8, inset -2px -2px 0 #9A9690, 2px 2px 4px rgba(0,0,0,0.15)";
        e.currentTarget.style.transform = "translate(0,0)";
      }}
    >
      {icon}
    </div>
    <span
      className="text-[10px] tracking-[0.2em] uppercase"
      style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
    >
      {label}
    </span>
  </a>
);

const Footer = () => {
  const email = "lakshaysetia123@gmail.com";
  const subject = "Query regarding ...";
  const body = "Hello, I am ... %0AI wanted to ...";

  return (
    <footer style={{ background: "#DEDAD2", borderTop: "3px solid #9A9690" }}>
      {/* Panel header strip */}
      <div
        className="flex items-center gap-3 px-6 py-3"
        style={{ background: "#D0CCC4", borderBottom: "2px solid #B8B4AC" }}
      >
        <LuTowerControl style={{ color: "#5C5850", fontSize: "1.2rem" }} />
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'B612 Mono', monospace", color: "#5C5850" }}
        >
          COMM PANEL — ATC CONTROL TOWER
        </span>
        <div className="ml-auto flex items-center gap-2">
          {[["#27A020","#27A020"],["#27A020","#27A020"],["#D89020","#D89020"]].map(([bg,shadow],i) => (
            <span key={i} className="w-2 h-2 rounded-full" style={{ background: bg, boxShadow: `0 0 4px ${shadow}` }} />
          ))}
        </div>
      </div>

      {/* Contact buttons */}
      <div className="flex flex-col items-center gap-6 py-8 px-6">
        <div
          className="px-2 py-0.5 text-xs tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'B612 Mono', monospace",
            background: "#D0CCC4",
            border: "1px solid #B8B4AC",
            color: "#5C5850",
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
          <CommButton href="https://instagram.com/lakshay.setia" label="INSTA" icon={<FaInstagram />} external />
          <CommButton href={`mailto:${email}?subject=${subject}&body=${body}`} label="EMAIL" icon={<FaEnvelope />} />
        </div>

        <div
          className="w-full max-w-lg h-px"
          style={{ background: "linear-gradient(to right, transparent, #9A9690, transparent)" }}
        />
        <p className="text-xs tracking-widest" style={{ fontFamily: "'B612 Mono', monospace", color: "#9A9690" }}>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://linkedin.com/in/lakshay-setia" style={{ color: "#5C5850" }} className="hover:underline">
            Lakshay Setia
          </a>
          {" "}· All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
