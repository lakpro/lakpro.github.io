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
    let timeoutId;

    const animate = () => {
      setIsVisible(false); // start fade out

      timeoutId = setTimeout(() => {
        // update image index
        setIndex((prev) => (prev + 1) % imageList.length);
        setIsVisible(true); // fade in new image

        // recursively call to continue the loop
        timeoutId = setTimeout(animate, 2000); // total time for visible + transition
      }, 500); // match fade-out duration
    };

    animate(); // start animation

    return () => clearTimeout(timeoutId); // cleanup on unmount
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
