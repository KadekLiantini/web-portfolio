import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Article from "./components/Article";
import KeputusanTeknis from "./artikel/KeputusanTeknis";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";

function App() {
  const { currentTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      const home = document.getElementById("home");
      if (home) {
        const navbarHeight = 64;
        const y =
          home.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({ top: y, behavior: "auto" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <div
        className={`${currentTheme.bg} ${currentTheme.text} min-h-screen transition-colors duration-1000`}>
        <Navbar />

        <main className="container mx-auto px-4 md:px-8 pt-20">
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Home />
                  </section>

                  <section id="skills" className="py-16">
                    <Skills />
                  </section>

                  <section id="projects" className="py-16">
                    <Projects />
                  </section>

                  <section id="article" className="py-16">
                    <Article />
                  </section>

                  <section id="contact" className="py-16">
                    <Contact />
                  </section>
                </>
              }
            />

            {/* HALAMAN ARTIKEL */}
            <Route
              path="/artikel/KeputusanTeknis"
              element={<KeputusanTeknis />}
            />
          </Routes>
        </main>

        <footer className="py-4 text-center text-sm opacity-70">
          Created with love 2025
        </footer>
      </div>
    </Router>
  );
}

export default App;
