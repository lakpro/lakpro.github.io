import React, { useState } from "react";
import pj1 from "../assets/pj1.png";
import pj2 from "../assets/pj2.png";
import pj3 from "../assets/pj3.png";
import pj4 from "../assets/pj4.png";
import pj5 from "../assets/pj5.png";
import pj6 from "../assets/pj6.png";
import pj7 from "../assets/pj7.jpeg";
import airplaneWindow from "../assets/airplaneWindow.png"; // Airplane window overlay image

const projects = [
  {
    id: 7,
    title: "Agentic AI",
    description:
      "Developed an AI-powered virtual assistant, leveraging an agentic architecture with human in the loop supervision and automated learning capabilities.",
    image: pj7,
    link: "https://github.com/lakpro/agenticAI",
  },
  {
    id: 1,
    title: "ProdNx",
    description:
      "Chrome extension to track time, block distractions, build habits, and boost focus with 237+ active users. (AI chatbot coming soon)",
    image: pj1,
    link: "https://prodnx.com/",
  },
  {
    id: 6,
    title: "Instagram Automation API",
    description:
      "React and Node.js app with Instagram OAuth, feed access, manual replies, and AI/webhook based automation-ready setup.",
    image: pj6,
    link: "https://github.com/lakpro/instaApiLoginBackend",
    // link: "https://insta-api-login.netlify.app/",
  },

  {
    id: 3,
    title: "Vulnerability Scanner",
    description:
      "Java based android app using machine learning to predict vulnerabilities in play store apps.",
    image: pj3,
    link: "https://github.com/lakpro/VulnerabilityDetection",
  },
  {
    id: 2,
    title: "Series Verse",
    description:
      "Full-stack MERN app for exploring web series with OAuth login, search, favorites, and next episode alerts.",
    image: pj2,
    link: "https://series-verse-lakpro.netlify.app/",
  },
  {
    id: 4,
    title: "Bear n Bull",
    description:
      "Full-stack blogging site built with PHP and MySQL for publishing and reading articles.",
    image: pj4,
    link: "https://github.com/lakpro/bear-n-bull",
  },
  // {
  //   id: 5,
  //   title: "Weather Station",
  //   description:
  //     "React and Node.js app offering live weather updates via the OpenWeatherMap API.",
  //   image: pj5,
  //   link: "https://weather-app-lakpro.netlify.app/",
  // },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="py-30 text-center flex flex-col justify-center items-center px-10 pb-10">
        <h2 className="text-4xl font-bold pb-3">Portfolio Terminal</h2>
        <p className="text-gray-600 pb-2">
          NOTHING SHOWCASES SKILLS BETTER THAN REAL-WORLD PROJECTS
        </p>
        <p className="text-gray-400 mb-14 font-light font-[cursive]">
          Gently tap the cabin window to open!
        </p>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl">
          {projects
            .slice(0, showAll || window.innerWidth >= 768 ? projects.length : 3)
            .map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-60"
              >
                {/* Circular Image */}
                <div className="relative w-60 h-60 m-3 overflow-hidden transition-transform duration-300 hover:scale-105 p-2 transition-all duration-300 group">
                  {/* Overlay */}
                  {/* <div
                    className={`hidden md-visible absolute inset-0 bg-[#c4c6c7] bg-opacity-50 transition-transform duration-500 translate-y-0 group-hover:translate-y-[-100%]`}
                  ></div> */}
                  {/* Image */}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover h-full w-full"
                  />

                  {/* Airplane Window Overlay */}
                  <img
                    src={airplaneWindow} // replace with your overlay image
                    alt="Airplane Window Frame"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-800 ">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm text-justify min-h-[100px]">
                  {project.description}
                </p>
              </a>
            ))}
        </div>

        {/* See More Button (Only on Small Screens) */}
        {!showAll && window.innerWidth < 768 && projects.length > 3 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-16 px-6 py-2 bg-[#d8131b]  text-white font-semibold rounded-lg shadow-md transition-all cursor-pointer"
          >
            See More
          </button>
        )}
        {showAll && window.innerWidth < 768 && projects.length > 3 && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-16 px-6 py-2 bg-[#d8131b]  text-white font-semibold rounded-lg shadow-md transition-all cursor-pointer"
          >
            See Less
          </button>
        )}
      </section>
    </>
  );
};

export default Projects;
