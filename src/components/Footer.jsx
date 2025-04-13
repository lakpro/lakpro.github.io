import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGoogle,
} from "react-icons/fa";
import { LuTowerControl } from "react-icons/lu";

// import emiratesLogo from "../assets/emirates_logo.png";
// import flyBetter from "../assets/fly-better.png"; // Import fly better image

const Footer = () => {
  const email = "lakshaysetia123@gmail.com"; // Your email
  const subject = "Query regarding ..."; // Default subject
  const body = "Hello, I am ... %0AI wanted to ..."; // Default message

  return (
    <footer className="relative bg-[#292929] text-white py-8">
      {/* <div className="flex items-center justify-center p-0 m-0">
        <img src={flyBetter} alt="Fly Better" className="h-40 opacity-50" />
      </div> */}
      <div className="container mx-auto flex flex-col items-center space-y-4 text-xl font-bold">
        {/* Logo */}
        {/* <img src={flyBetter} alt="Fly Better" className="h-12" /> */}
        <span className="flex items-center ">
          <LuTowerControl className="inline text-2xl mr-1" />
          Control Tower{" "}
          {/* <LuTowerControl className="inline text-2xl ml-1" /> */}
        </span>
        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl mt-4">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  bg-[#000000] p-3  rounded-lg  transition"
          >
            <FaFacebook className="text-xl" />
          </a> */}
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  bg-[#000000] p-3  rounded-lg  transition"
          >
            <FaTwitter className="text-xl" />
          </a> */}
          <a
            href="https://instagram.com/lakshay.setia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  bg-[#000000] p-3  rounded-lg  transition"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/lakshay-setia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  bg-[#000000] p-3  rounded-lg  transition"
          >
            <FaLinkedin className="text-xl" />
          </a>

          {/* Contact Options */}
          {/* <div className="flex space-x-4"> */}
          {/* Default Mailto */}

          {/* Gmail Option */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  bg-[#000000] p-3  rounded-lg  transition"
          >
            <FaGoogle className="text-xl" />
            {/* <span>Open in Gmail</span> */}
          </a>
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="flex items-center bg-[#000000] p-3 rounded-lg transition"
          >
            <FaEnvelope className="text-xl" />
            {/* <span>Email Me</span> */}
          </a>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="hidden md:block absolute bottom-0 right-10 z-30 bg-[#d8131b]">
        <img src={emiratesLogo} alt="Fly Better" className="h-30 " />
      </div> */}
    </footer>
  );
};

export default Footer;
