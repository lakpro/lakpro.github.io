import { useState, useEffect } from "react";
// import flyBetter from "../assets/fly-better.png";
// import emiratesLogo from "../assets/emirates_logo.png";
import welcome from "../assets/welcome.png";
import planeImage from "../assets/Plane.png"; // Import plane image
import BoardingPass from "./BoardingPass";
import ClickGif from "../assets/click.gif"; // Import click gif
import { motion } from "framer-motion";
import Greetings from "./Greetings"; // Import Greetings component

const OpenBox = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [translateFactor, setTranslateFactor] = useState(0.8);
  const [showBoardingPass, setShowBoardingPass] = useState(false);
  const [boardPassWidth, setBoardPassWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const bp = document.getElementById("boarding-pass");
      if (bp) {
        setBoardPassWidth(bp.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTranslateFactor(0.4); // Move slower on small screens
      } else {
        setTranslateFactor(0.8); // Normal speed on larger screens
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsVisible(currentScroll === 0);
      // Show boarding pass after curtains close (adjust threshold as needed)
      setShowBoardingPass(
        currentScroll > document.documentElement.clientHeight - 1
      );
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateX = scrollY * 1.5;
  const translatePlane = scrollY * translateFactor; // Adjust speed dynamically

  return (
    <>
      {/* Greetings Image */}
      <div className="absolute flex items-center justify-center w-full h-[100vh] z-20">
        {/* <img
          src={emiratesLogo}
          alt="Emirates Logo"
          className="h-1/4 transition-opacity duration-200"
          style={{ opacity: isVisible ? 1 : 0 }}
        /> */}
        <div style={{ opacity: isVisible ? 1 : 0 }}>
          <Greetings />
        </div>
      </div>

      {/* Fly Better Text */}
      <div className="absolute flex items-center justify-center w-full h-screen pt-40 z-10">
        <img
          src={welcome}
          alt="Fly Better"
          className="mix-blend-lighten h-1/4 transition-opacity duration-100"
          style={{ opacity: !isVisible ? 1 - window.scrollY / 1000 : 0 }}
        />
      </div>

      {/* Animated Plane */}
      <div
        className="z-20 absolute bottom-[-70px] right-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${translatePlane}px)`, // Moves left
          width: "200px",
          opacity: !isVisible ? 1 : 0,
          scale: `${1 + translateX / 700}`,
        }}
      >
        <img src={planeImage} alt="Flying Plane" className="w-full h-auto" />
      </div>

      <motion.div
        id="boarding-pass"
        className="z-20 absolute top-[120vh] w-full flex justify-center items-center p-10"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{
          x: scrollY > 100 ? 0 : "-100vw",
          opacity: scrollY > 100 ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <BoardingPass />
      </motion.div>

      {/* Curtains */}
      <div className="z-10 relative w-full h-[250vh] md:h-[200vh] flex overflow-hidden">
        <div
          className="bg-[#292929] h-[200vh] w-[50vw] transition-transform duration-100"
          style={{ transform: `translateX(-${translateX * 1.5}px)` }}
        />
        <div
          className="bg-[#292929] h-[200vh] w-[50vw] transition-transform duration-100"
          style={{ transform: `translateX(${translateX * 1.5}px)` }}
        />
      </div>
    </>
  );
};

export default OpenBox;
