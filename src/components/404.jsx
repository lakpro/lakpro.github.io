import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Main() {
  const [scrollY, setScrollY] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the playback rate to slow down the video
      videoRef.current.playbackRate = 0.7; // 0.5 is half speed; 1 is normal speed
    }
  }, []);

  // Calculate horizontal translation based on scroll position
  const translateX = Math.max(-100, scrollY * 2); // Translate left as you scroll down

  return (
    <section className="top-0 left-0 h-screen overflow-hidden bg-[#292929] bg-black">
      <div
        style={{
          position: "relative",
          width: "100vw", // Full width of the viewport
          height: "100vh", // Full height of the viewport
          overflow: "hidden", // Hide the extra part
        }}
      >
        {/* Black fade overlay for the video */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent" /> */}

        <div className="flex flex-col justify-center items-center bg-custom bg-center bg-no-repeat bg-cover px-4 mx-auto max-w-screen-3xl text-center w-screen h-screen py-24 lg:py-56 relative z-20">
          <h4
            className="text-lg text-white"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.1s ease-out", // Smooth transition for better effect
            }}
          >
            {/* <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[##f73d3d] to-[#5c8500]">
              ONE DAY
            </span>{" "}
            WE WILL BE BACK */}
          </h4>
          <br />
          <h1
            className="mix-blend-exclusion text-[10vw] mb-4 h-20 font-extrabold tracking-widest leading-none text-white sm:text-5xl md:text-5xl lg:text-6xl"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.1s ease-out", // Smooth transition for better effect
            }}
          >
            Looks like you took a wrong turn...
          </h1>
          <h1
            className="mix-blend-exclusion h-10 my-4 font-extrabold tracking-widest leading-none text-white text-[5vw] sm:text-[3vmax] lg:text-3xl"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.1s ease-out", // Smooth transition for better effect
            }}
          >
            <span className="inline font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f73d3d] to-[#850000]">
              OR MAYBE WE MOVED TO ANOTHER DIMENSION
              {/* LIFE HAPPENS */}
            </span>
            {" 💫"}
          </h1>
          <br />
          {/* </Link> */}
          {/* <Hlink smooth to="/"> */}
          <Link to="/">
            <div
              className="relative inline-flex h-9 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out hover:shadow-lg hover:bg-slate-800"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.1s ease-out", // Smooth transition for better effect
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f73d3d_0%,#850000_25%,#f73d3d_50%,#850000_75%,#f73d3d_100%)]" />
              <span className="inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-2 sm:px-3 sm:py-1 text-md sm:text-lg font-medium text-white backdrop-blur-3xl transition duration-300 ease-in-out hover:shadow-md">
                FLY Me Home 🛩️{" "}
              </span>
            </div>
          </Link>
          {/* </Hlink> */}
        </div>
      </div>
    </section>
  );
}

export default Main;
