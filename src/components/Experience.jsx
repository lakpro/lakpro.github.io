import React from "react";
import destinationImg from "../assets/legistify.png"; // Background image

const Experience = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-30 pb-20  px-6">
      <h2 className="text-4xl font-bold pb-3">Experience</h2>
      <p className="text-gray-600 mb-14 text-center">
        I'VE STEPPED INTO THE REAL WORLD AND MADE AN IMPACT!
      </p>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg p-4 max-w-4xl text-center ">
        <div className=" p-4 mb-5 md:mb-0">
          <img
            src={destinationImg}
            alt="Destination"
            className=" object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center  pl-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Legistify</h2>
          <p className="text-gray-600 text-sm mb-4">
            Fullstack Intern (JAN'24 - JUL'24)
          </p>
          {/* <p className="text-gray-600 text-sm mb-4">JAN'24 - JUL'24</p> */}
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-left flex flex-col text-left">
            <li>
              Led integration of external frontend components and developed
              multiple backend APIs.
            </li>
            <li>
              Fixed critical bugs, improving system reliability metrics by 30%.
            </li>
            <li>
              Integrated a new editor for on-prem migration, reducing hosting
              costs by 40%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
