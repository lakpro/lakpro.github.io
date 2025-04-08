import React, { useEffect, useState } from "react";

// Auto-import all image files from greetings folder
const images = import.meta.glob("../assets/greetings/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

const imageList = Object.values(images).map((img) => img.default);

const Test = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % imageList.length);
        setIsVisible(true); // Fade in new image
      }, 500); // Match with opacity transition duration
    }, 2000); // Total cycle time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#292929] flex items-center justify-center">
      <img
        src={imageList[index]}
        alt="Greeting"
        className={`mix-blend-lighten max-h-[80vh] max-w-[90vw] transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }
       `}
      />
    </div>
  );
};

export default Test;
