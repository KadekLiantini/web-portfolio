import React from "react";
import { useTheme } from "../context/ThemeContext";
import WeatherIndicator from "./WeatherIndicator";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/ScrollToSection";

const NavButton = ({ target, children }) => {
  const { currentTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(target);
      }, 150); // tunggu DOM home ter-render
    } else {
      scrollToSection(target);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-2 rounded-lg transition-colors duration-300 hover:opacity-80
        ${
          currentTheme.text === "text-gray-100"
            ? "text-gray-100"
            : "text-gray-700"
        }`}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const { currentTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-md ${currentTheme.card}
      backdrop-blur-lg bg-opacity-90 transition-colors duration-1000`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Kadek Liantini
        </Link>

        <div className="hidden md:flex space-x-4 items-center">
          <NavButton target="skills">Skills</NavButton>
          <NavButton target="projects">Projects</NavButton>
          <NavButton target="article">Articles</NavButton>
          <NavButton target="contact">Contact</NavButton>
          <WeatherIndicator />
        </div>

        <div className="md:hidden flex items-center">
          <WeatherIndicator />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
