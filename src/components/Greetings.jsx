// import { set } from "mongoose";
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
    let index = 0;

    const intervalId = setInterval(() => {
      setIsVisible(false); // fade out

      setTimeout(() => {
        index = (index + 1) % imageList.length;
        setIndex(index);
        setIsVisible(true); // fade in
      }, 500); // fade-out duration
    }, 2000); // interval = total time for visible + transition

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#292929] flex items-center justify-center">
      <img
        src={imageList[index]}
        alt="Greeting"
        className={`mix-blend-lighten max-h-[80vh] max-w-[90vw] transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Test;
