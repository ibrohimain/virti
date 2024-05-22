import React, { useState, useRef } from "react";
import "./header.css";
import logo from './header_img/logo.svg'
import { IoChevronDown } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal1: false,
    modal2: false,
  });

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (modal) => {
    clearTimeout(closeTimeoutRef.current);
    setIsModalOpen((prev) => ({ ...prev, [modal]: true }));
  };

  const handleMouseLeave = (modal) => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsModalOpen((prev) => ({ ...prev, [modal]: false }));
    }, 400);
  };

  const handleLanguageMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsLanguageDropdownOpen(true);
  };

  const handleLanguageMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsLanguageDropdownOpen(false);
    }, 400);
  };

  return (  
    <div className="w-[100%] h-[65px] container z-50 fixed top-0 mx-auto px-4 flex items-center justify-between bg-[white] text-black text-[16px] border-b border">
      <div className="logo text-[32px] flex w-[35%] border-r h-[100%]">
        <img src={logo} alt="" className="w-[150px]"/>
      </div>
      <div className="flex gap-16 items-center w-[65%] z-10 justify-center relative">
        <ul className="flex gap-20 items-center justify-center">
          <div
            className="cursor-pointer dropdownContainer"
            onMouseEnter={() => handleMouseEnter("modal1")}
            onMouseLeave={() => handleMouseLeave("modal1")}
          >
            <div className="flex items-center justify-center gap-1 p-2">
              <p>What we do!</p>
              <span className="chevronIcon">
                <IoChevronDown />
              </span>
            </div>
            <div
              className={`dropdownMenu flex border flex-col gap-16 items-center justify-start ${isModalOpen.modal1 ? "open" : "closed"
                }`}
              onMouseEnter={() => handleMouseEnter("modal1")}
              onMouseLeave={() => handleMouseLeave("modal1")}
            >
              <div className="flex w-full items-start justify-between">
                <h2 className="text-[22px] text-[#ff6947]">Services</h2>
                <ul id="modalList">
                  <li className=" text-black">Software development</li>
                  <li>Web development</li>
                </ul>
                <ul id="modalList">
                  <li>Mobile app development</li>
                  <li>IT services for startups</li>
                </ul>
              </div>
              <div className="flex w-full items-start justify-between ">
                <h2 className=" text-[22px] text-[#ff6947]">Industries</h2>
                <ul id="modalList">
                  <li>Fintech</li>
                  <li>Healthtech</li>
                  <li>Edtech</li>
                  <li>Gamedev</li>
                </ul>
                <ul id="modalList">
                  <li>Real estate</li>
                  <li>Ecommerce</li>
                  <li>Marketing/adtech</li>
                </ul>
              </div>
              <div className="flex w-full items-start justify-between ">
                <h2 className="text-[22px] text-[#ff6947]">Expertise</h2>
                <ul id="modalList">
                  <li>Cloud</li>
                  <li>AR/VR</li>
                  <li>Blockchain</li>
                  <li>Salesforce</li>
                </ul>
                <ul id="modalList">
                  <li>Internet of things</li>
                  <li>AI</li>
                  <li>BIG DATA</li>
                  <li>Cybersecurity</li>
                </ul>
              </div>
            </div>
          </div>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Insights</a>
          </li>
          <div
            className="cursor-pointer dropdownContainer"
            onMouseEnter={() => handleMouseEnter("modal2")}
            onMouseLeave={() => handleMouseLeave("modal2")}
          >
            <div className="flex items-center justify-center gap-1 p-2">
              <p>Learn more!</p>
              <span className="chevronIcon">
                <IoChevronDown />
              </span>
            </div>
            <div
              className={`dropdownMenuAlt flex flex-col gap-16 items-center justify-start ${isModalOpen.modal2 ? "open" : "closed"
                }`}
              onMouseEnter={() => handleMouseEnter("modal2")}
              onMouseLeave={() => handleMouseLeave("modal2")}
            >
              <div className="flex w-full items-start justify-between">
                <h2 className="text-[22px] text-[#ff6947]">Our Approach</h2>
                <ul id="modalList">
                  <li>Agile Methodologies</li>
                  <li>Customer-Centric Design</li>
                </ul>
                <ul id="modalList">
                  <li>Continuous Integration</li>
                  <li>Quality Assurance</li>
                </ul>
              </div>
              <div className="flex w-full items-start justify-between">
                <h2 className="text-[22px] text-[#ff6947]">Technologies</h2>
                <ul id="modalList">
                  <li>React & Vue</li>
                  <li>Node.js & Django</li>
                  <li>Flutter & Swift</li>
                  <li>Azure & AWS</li>
                </ul>
                <ul id="modalList">
                  <li>Docker & Kubernetes</li>
                  <li>TensorFlow & PyTorch</li>
                  <li>GraphQL & REST</li>
                </ul>
              </div>
              <div className="flex w-full items-start justify-between">
                <h2 className="text-[22px] text-[#ff6947]">Case Studies</h2>
                <ul id="modalList">
                  <li>E-commerce Platform</li>
                  <li>Fintech App</li>
                  <li>Health Monitoring System</li>
                  <li>Educational Portal</li>
                </ul>
                <ul id="modalList">
                  <li>Gaming App</li>
                  <li>Real Estate Solution</li>
                  <li>Marketing Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
        <div className="flex gap-6 items-center justify-center">
          <button className="text-black flex items-center justify-center px-5 py-3 bg-[#ff6947]">
            Contact Us
          </button>
          <div
            className="relative"
            onMouseEnter={handleLanguageMouseEnter}
            onMouseLeave={handleLanguageMouseLeave}
          >
            <p className="cursor-pointer">
              <TbWorld className="text-[25px]"/>
            </p>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#29292b] text-white rounded-md shadow-lg">
                <ul className="py-1">
                  <li className="px-4 py-2 cursor-pointer ">English</li>
                  <li className="px-4 py-2 cursor-pointer ">Spanish</li>
                  <li className="px-4 py-2 cursor-pointer ">French</li>
                  <li className="px-4 py-2 cursor-pointer ">German</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
