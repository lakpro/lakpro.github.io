import React from "react";
import mentor from "../assets/mentor.jpg";
import msfs from "../assets/msfs.jpg";
import robo from "../assets/robo.jpg";
import bg from "../assets/bg.avif";

const AboutMe = () => {
  return (
    <section
      className="relative min-h-screen md:h-screen flex flex-col justify-center items-center py-10 px-6 bg-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-[75px] md:h-[150px] bg-gradient-to-b from-[#f6f6f6] to-transparent"></div>
      <h2 className="text-4xl font-bold pb-3">About Me</h2>
      <p className="text-gray-600 mb-8 text-center">
        I HAVE A LIFE OUTSIDE CODING AS WELL!
      </p>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl h-[75%]">
        {/* Left Column - Picture and Intro */}
        <div className="h-full flex-1 flex flex-col justify-between text-center md:text-left bg-white border border-gray-200 hover:border-gray-500 rounded-sm hover:backdrop-blur-2xl cursor-pointer min-h-[100]">
          <p className="text-gray-700 text-[13px] p-4 pb-0">
            THIS IS ME WITH A320 SIM
          </p>
          <h2 className="text-3xl font-bold relative p-4 pb-4">
            <span className="relative after:block after:w-10 after:h-[2px] after:bg-red-500 after:absolute after:left-0 after:bottom-[-8px]"></span>
            I Love Planes
          </h2>
          <div className="relative flex-1 overflow-hidden">
            <img
              src={msfs}
              alt="Profile"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>

        {/* Right Column - Skills and Hobbies */}
        <div className="h-full flex-1 flex flex-col gap-4">
          {/* Box 1 */}
          <div className="h-1/2 flex flex-col justify-between text-center md:text-left bg-white border border-gray-200 hover:border-gray-500 rounded-sm hover:backdrop-blur-2xl cursor-pointer   min-h-[100]">
            <p className="text-gray-700 text-[13px] p-4 pb-0">
              THIS IS ME WITH ROBOTS
            </p>
            <h2 className="text-3xl font-bold relative p-4 pb-4">
              <span className="relative after:block after:w-10 after:h-[2px] after:bg-red-500 after:absolute after:left-0 after:bottom-[-8px]"></span>
              Hobby
            </h2>
            <div className="relative flex-1 overflow-hidden">
              <img
                src={robo}
                alt="Profile"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="h-1/2 flex flex-col justify-between text-center md:text-left bg-white border border-gray-200 hover:border-gray-500 rounded-sm hover:backdrop-blur-2xl cursor-pointer  min-h-[100] ">
            <p className="text-gray-700 text-[13px] p-4 pb-0">
              THIS IS ME TEACHING JUNIORS
            </p>
            <h2 className="text-3xl font-bold relative p-4 pb-4">
              <span className="relative after:block after:w-10 after:h-[2px] after:bg-red-500 after:absolute after:left-0 after:bottom-[-8px]"></span>
              Mentoring
            </h2>
            <div className="relative flex-1 overflow-hidden">
              <img
                src={mentor}
                alt="Profile"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
