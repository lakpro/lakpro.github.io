import React, { useState } from "react";
import pj1 from "../assets/pj1.png";
import pj2 from "../assets/pj2.png";
import pj3 from "../assets/pj3.png";
import pj4 from "../assets/pj4.png";
import pj5 from "../assets/pj5.png";
import pj6 from "../assets/pj6.png";
import elon from "../assets/elon.png";

const achievements = [
  {
    id: 1,
    title: "Featured Badge",
    description: "Awarded to ProdNx by the Chrome Web Store (2025).",
    link: "https://cdn3.emoji.gg/unicode/google/sports-medal.png", // Using the FaAward link for Featured Badge
  },
  {
    id: 6,
    title: "Hackathon Finalist",
    description: "In Hack the Waste 2023 (among 135+ teams)",
    link: "https://cdn3.emoji.gg/emojis/1238_Trophy.png", // Using the FaTrophy link for Hackathon Finalist
  },
  {
    id: 3,
    title: "Runner Up",
    description: "2nd at Apogee BITS Pilani 2022 for transporter robot.",
    link: "https://cdn3.emoji.gg/unicode/google/2nd-place-medal.png", // Using the FaRobot link for Runner Up
  },
  {
    id: 2,
    title: "Head @Phoenix",
    description:
      "Ignited 300+ curious minds in Robotics. \nElon's kind of disruption!",
    link: elon, // Using the FaCode link for Leetcode
  },
  {
    id: 4,
    title: "Leetcode",
    description: `Solved 500+ problems with a rating of 1700+. \nBezos would be proud!`,
    link: "https://cdn3.emoji.gg/emojis/9809-jeff.png", // Using the FaRegHandPeace link for Head @Phoenix
  },
];

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="py-30 text-center flex flex-col justify-center items-center px-10 bg-gradient-to-b  from-transparent to-[#fff] pb-0 px-4">
        <h2 className="text-4xl font-bold pb-3">Miles High Club</h2>
        <p className="text-gray-600 mb-14">
          ACHIEVEMENTS THAT TOOK ME TO NEW HEIGHTS
        </p>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl pb-15">
          {achievements
            .slice(
              0,
              showAll || window.innerWidth >= 768 ? achievements.length : 3
            )
            .map((project) => (
              <div
                key={project.id}
                // href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-55 transition-transform duration-300 hover:scale-105 my-2  p-3 shadow-2xl bg-white"
              >
                {/* Circular Image */}
                <img
                  src={project.link}
                  alt={project.title}
                  className={`w-23 h-23 object-contain m-3 ${
                    project.id == 2
                      ? "transform scale-x-[-1] md:scale-x-100"
                      : ""
                  } `}
                />
                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-gray-800 ">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm text-center min-h-[40px] mb-1 whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            ))}
        </div>

        {/* See More Button (Only on Small Screens) */}
        {!showAll && window.innerWidth < 768 && achievements.length > 3 && (
          <button
            onClick={() => setShowAll(true)}
            className=" px-6 py-2 bg-[#d8131b]  text-white font-semibold rounded-lg shadow-md transition-all cursor-pointer"
          >
            See More
          </button>
        )}
        {showAll && window.innerWidth < 768 && achievements.length > 3 && (
          <button
            onClick={() => setShowAll(false)}
            className=" px-6 py-2 bg-[#d8131b]  text-white font-semibold rounded-lg shadow-md transition-all cursor-pointer"
          >
            See Less
          </button>
        )}
      </section>
    </>
  );
};

export default Achievements;
