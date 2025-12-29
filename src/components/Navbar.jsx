import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import WeatherIndicator from "./WeatherIndicator";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/ScrollToSection";
import { Menu, X } from "lucide-react";

const NavButton = ({ target, children, onClick }) => {
  const { currentTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(target), 150);
    } else {
      scrollToSection(target);
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-3 py-2 rounded-lg transition-all duration-300 hover:opacity-80 cursor-pointer
        ${
          currentTheme.text === "text-gray-100"
            ? "text-gray-100"
            : "text-gray-700"
        }
      `}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const { currentTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection("home"), 150);
    } else {
      scrollToSection("home");
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-md ${currentTheme.card}
      backdrop-blur-lg bg-opacity-90 transition-colors duration-500`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* LOGO */}
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold cursor-pointer">
          Kadek Liantini
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-4 items-center">
          <NavButton target="skills">Skills</NavButton>
          <NavButton target="projects">Projects</NavButton>
          <NavButton target="article">Articles</NavButton>
          <NavButton target="contact">Contact</NavButton>
          <WeatherIndicator />
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex items-center gap-2">
          <WeatherIndicator />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col px-4 pb-4 space-y-2">
          <NavButton target="skills" onClick={() => setIsOpen(false)}>
            Skills
          </NavButton>
          <NavButton target="projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavButton>
          <NavButton target="article" onClick={() => setIsOpen(false)}>
            Articles
          </NavButton>
          <NavButton target="contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
