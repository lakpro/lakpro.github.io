import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import resumeFile from "../assets/Lakshay_Setia_Resume.pdf"; // Replace with your resume path
import planeBottom from "../assets/pbottom.jpg"; // Replace with your plane image path"; // Replace with your runway image path
import runway from "../assets/runway.jpg"; // Replace with your runway image path

const ResumeSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center bg-center py-30 px-10 bg-cover backdrop-blur-lg"
      style={{
        backgroundImage: `url(${runway})`,
        backgroundPosition: `center ${offsetY}px`,
      }}
    >
      {/* Parallax Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="backdrop-blur-[4px]  w-full h-full absolute top-0 left-0 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h2 className="text-4xl font-bold mb-4 p-1">Unlock My Journey</h2>
        <p className="mb-6 text-lg opacity-90">
          GRAB MY RESUME AND EXPLORE MY SKILLS, EXPERIENCE, AND PROJECTS IN ONE
          CLICK!{" "}
        </p>

        {/* Download Button */}
        <a
          href={resumeFile}
          download="Lakshay_Resume.pdf"
          className="bg-red-600 hover:bg-red-700 transition-all text-white font-bold py-3 px-6 rounded-lg flex items-center  gap-2 shadow-lg flex justify-center"
        >
          <FaDownload /> Download Resume Now
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
