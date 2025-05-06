import React from "react";
import emiratesLogo from "../assets/emirates_logo.png"; // Emirates logo
import { QRCodeCanvas } from "qrcode.react"; // Import QR code generator
import destinationImg from "../assets/1712597576301.jpeg"; // Background image

const BoardingPass = () => {
  const portfolioURL = "https://www.linkedin.com/in/lakshay-setia/"; // Replace with your actual portfolio link

  return (
    <div className="max-w-[90vw] lg:max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden bg-white m-4">
      {/* Header */}
      <div className="flex items-center  h-16 bg-gray-900 text-white ">
        <dic className="w-5 bg-[#d8131b] h-full" />
        <img src={emiratesLogo} alt="Emirates Logo" className="h-full" />
        <dic className="w-5 bg-[#d8131b] h-full" />
        <span className="text-xl font-bold mx-6">DevPass</span>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Boarding Pass Details */}
        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Lakshay Setia</h2>
          <p className="text-gray-600">Software Developer</p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Origin</p>
              <p className="font-semibold">IXC</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="font-semibold">SFO</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tech Stack</p>
              <p className="font-semibold">MERN</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-semibold">2+ Yrs</p>
            </div>
          </div>

          <div className="pt-6 pb-1 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Loadout</p>
              <p className="font-semibold">
                AGENTIC AI, TYPESCRIPT, JAVASCRIPT, REACT, NODE, JAVA, PYTHON,
                MONGODB, SQL, C++, HTML, CSS
              </p>
            </div>
            <div className="ml-2 min-w-[80px] cursor-pointer hover:shadow-md hover:scale-110 mr-2">
              <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
                <QRCodeCanvas value={portfolioURL} size={80} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="md:hidden w-full flex items-center justify-center">
          <QRCodeCanvas value={portfolioURL} size={80} />
        </div> */}

        {/* Destination Image for Larger Screens */}
        <div className="hidden md:block w-1/3 p-4 ">
          <img
            src={destinationImg}
            alt="Destination"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Destination Image for Smaller Screens */}
        <div className="md:hidden w-full p-4 flex justify-center">
          <img
            src={destinationImg}
            alt="Destination"
            className="h-full  object-cover  rounded-lg max-w-[60vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
