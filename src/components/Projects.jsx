import React, { useState } from "react";
import pj1 from "../assets/pj1.png";
import pj2 from "../assets/pj2.png";
import pj3 from "../assets/pj3.png";
import pj4 from "../assets/pj4.png";
import pj5 from "../assets/pj5.png";
import pj6 from "../assets/pj6.png";

const projects = [
  {
    id: 1,
    title: "ProdNx",
    description:
      "Chrome extension to track time, block distractions, build habits, and boost focus. (AI chatbot coming soon)",
    image: pj1,
    link: "https://prodnx.com/",
  },
  {
    id: 6,
    title: "Instagram Automation API",
    description:
      "React and Node.js app with Instagram OAuth, feed access, manual replies, and AI/webhook based automation-ready setup.",
    image: pj6,
    link: "https://insta-api-login.netlify.app/",
  },

  {
    id: 3,
    title: "Vulnerability Scanner",
    description:
      "Java-based tool using machine learning to predict vulnerabilities in Android apps.",
    image: pj3,
    link: "https://github.com/lakpro/VulnerabilityDetection",
  },
  {
    id: 2,
    title: "Series Verse",
    description:
      "Full-stack MERN app for exploring web series with OAuth login, search, favorites, and release alerts.",
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
  {
    id: 5,
    title: "Weather Station",
    description:
      "React and Node.js app offering live weather updates via the OpenWeatherMap API.",
    image: pj5,
    link: "https://weather-app-lakpro.netlify.app/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="py-30 text-center flex flex-col justify-center items-center px-10 bg-gradient-to-b from-transparent to-[#fff]">
        <h2 className="text-4xl font-bold pb-3">Something I Built!</h2>
        <p className="text-gray-600 mb-14">
          NOTHING SHOWCASES SKILLS BETTER THAN REAL-WORLD PROJECTS
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-40 object-cover rounded-full m-3 hover:border-3 hover:border-gray-300 shadow-2xl transition-transform duration-300 hover:scale-115"
                />
                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-800 ">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm text-justify min-h-[96px]">
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
