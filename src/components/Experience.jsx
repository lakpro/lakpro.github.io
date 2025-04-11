// experiencesData.js
import legistifyImg from "../assets/legistify.png";
import prodNxImg from "../assets/prodnx.png";

export const experiences = [
  // {
  //   company: "ProdNx",
  //   role: "Developer",
  //   duration: "JUL'23 - PRESENT",
  //   image: prodNxImg,
  //   highlights: [
  //     "Launched a cross-browser Chrome extension application using ReactJS.",
  //     "Gained 247+ WAU (Weekly Active Users) and over 469 downloads.",
  //     "Built a precise time-tracking system in JavaScript for detailed web activity reports.",
  //     "Integrated visual tracking system, website blocker, and currently developing an AI chatbot.",
  //   ],
  // },

  {
    company: "Legistify",
    role: "Fullstack Intern",
    duration: "JAN'24 - JUL'24",
    image: legistifyImg,
    highlights: [
      "Led integration of external frontend components and developed multiple backend APIs.",
      "Fixed critical bugs, improving system reliability metrics by 30%.",
      "Integrated a new editor for on-prem migration, reducing hosting costs by 40%.",
    ],
  },
  // Add more experiences here as needed
];

import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-30 pb-20 px-6">
      <h2 className="text-4xl font-bold pb-3">Experience</h2>
      <p className="text-gray-600 mb-14 text-center">
        I'VE STEPPED INTO THE REAL WORLD AND MADE AN IMPACT!
      </p>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg p-4  max-w-4xl text-center mb-10"
        >
          <div className="p-4 mb-5 md:mb-0 md:w-1/4 min-w-[220px]">
            <img
              src={exp.image}
              alt={exp.company}
              className="object-cover rounded-lg w-50 h-50"
            />
          </div>
          <div className="flex flex-col items-start justify-center pl-6 md:w-3/4">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {exp.company}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {exp.role} ({exp.duration})
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
