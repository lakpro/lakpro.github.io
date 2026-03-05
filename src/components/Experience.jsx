// experiencesData.js
import legistifyImg from "../assets/legistify.png";
import prodNxImg from "../assets/prodnx.png";
import eclipseImg from "../assets/eclipse360.png";

export const experiences = [
   {
    company: "Eclipse360",
    role: "Fullstack Developer",
    duration: "JUN'25 - PRESENT",
    image: eclipseImg,
    highlights: [
      `Contributed to building a pixel-perfect <b>rooftop solar design</b> software.`,
      "Led development of Design and Lead Management modules for the <b>solar CRM</b>.",
      "Implemented critical features such as Auto-Save, Multiple Map Imagery, and Meter-to-Pixel integration.",
      "Drove <b>end-to-end</b> delivery of the Project Management module, enhancing workflow efficiency.",
    ],
  },
  {
    company: "ProdNx",
    role: "Developer",
    duration: "JUL'24 - JUN'25",
    image: prodNxImg,
    highlights: [
      "Developed a cross-browser <b>Chrome extension</b> application using React.",
      "Reached <b>250+ WAU</b> (Weekly Active Users) and <b>677+ downloads</b>.",
      "Built a precise <b>time-tracking</b> system, website blocker in JavaScript for detailed web activity reports.",
      "Optimized data operations, implemented unit testing and added support for <b>20+ languages</b>.",
    ],
  },
  {
    company: "Legistify",
    role: "Fullstack Intern",
    duration: "JAN'24 - JUL'24",
    image: legistifyImg,
    highlights: [
      "Led frontend component integration; developed 15+ backend APIs.",
      "Fixed 9+ critical bugs, <b>improving system reliability by 30%</b>.",
      "Integrated new editor for on-prem migration; <b>reduced hosting costs by 40%</b>.",
    ],
  },

  // Add more experiences here as needed
];

import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-30 pb-20 px-6">
      <h2 className="text-4xl font-bold pb-3">Flight History</h2>
      <p className="text-gray-600 mb-14 text-center">
        I'VE STEPPED INTO THE REAL WORLD AND MADE AN IMPACT!
      </p>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg p-4 max-w-4xl  md:w-4xl text-center mb-10"
        >
          <div className="p-4 mb-5 md:mb-0 md:w-1/4 min-w-[220px]">
            <img
              src={exp.image}
              alt={exp.company}
              className="object-cover rounded-lg max-w-50 max-h-50"
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
                <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
