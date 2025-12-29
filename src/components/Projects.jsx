import React from "react";
import { useTheme } from "../context/ThemeContext";

import Project1Image from "../assets/1.png";
import Project2Image from "../assets/2.png";
import Project3Image from "../assets/3.png";
import Project4Image from "../assets/4.png";
import Project5Image from "../assets/5.png";
import Project6Image from "../assets/6.png";
import Project7Image from "../assets/7.png";

const ProjectCard = ({ title, desc, stack, demoLink, codeLink, imageUrl }) => {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl ${currentTheme.card} transition-all duration-500 transform hover:shadow-2xl group`}>
      {/* AREA UNTUK FOTO PROJECT BARU */}
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg shadow-md">
          <img
            src={imageUrl}
            alt={`Screenshot ${title}`}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {/* AKHIR AREA FOTO */}

      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      {/* Dekorasi Interaktif */}
      <div
        className={`h-1 w-1/4 mb-4 ${currentTheme.primary} transition-all duration-500 group-hover:w-full`}></div>

      <p className="opacity-80 mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2 text-sm font-medium opacity-90 mb-6">
        {stack.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-white ${currentTheme.primary} bg-opacity-80`}>
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-semibold py-2 px-4 rounded-lg border ${currentTheme.border} ${currentTheme.text} transition duration-300 hover:opacity-70`}>
          Demo Live
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-semibold py-2 px-4 rounded-lg text-white ${currentTheme.primary} transition duration-300 hover:bg-opacity-80`}>
          Source Code
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "Weather Theme Portfolio (Saat Ini)",
      desc: "Portofolio interaktif yang menggunakan API cuaca untuk mengubah skema warna tema secara menggunakan React dan Tailwind CSS.",
      stack: ["React", "Tailwind CSS", "OpenWeatherMap API"],
      demoLink: "https://kadekliantini.github.io/web-portfolio/",
      codeLink: "https://github.com/KadekLiantini/web-portfolio.git",
      imageUrl: Project1Image,
    },
    {
      title: "Pokemon API",
      desc: "Implementasi API pokemon. Menampilkan list pokemon berdasarkan id dan nama. Menambahkan fitur pencarian dan perncarian secara acak.",
      stack: ["React", "Axios", "Tailwind CSS", "Vite"],
      demoLink: "https://kadekliantini.github.io/project-react-2/",
      codeLink: "https://github.com/KadekLiantini/project-react-2.git",
      imageUrl: Project2Image,
    },
    {
      title: "Website Resep Masakan dan Minuman",
      desc: "Website implementasi data dummy mengenai resep masakan dan minuman. Pemfilteran sesuai dengan kategori yaitu semua, makanan, dan minuman",
      stack: ["React", "Tailwind CSS"],
      demoLink: "https://kadekliantini.github.io/project-react-1/",
      codeLink: "https://github.com/KadekLiantini/project-react-1.git",
      imageUrl: Project3Image,
    },
    {
      title: "BMI Calculator",
      desc: "Website sederhana untuk menghitung Body Mass Index(BMI). Dilengkapi dengan dark dan light mode serta artikel singkat mengenai apa itu BMI.",
      stack: ["HTML", "CSS", "JavaScript", "JQuery"],
      demoLink:
        "https://bmi-calculator-kn48yu5wa-ni-kadek-liantinis-projects.vercel.app/",
      codeLink: "https://github.com/KadekLiantini/bmi-calculator.git",
      imageUrl: Project4Image,
    },
    {
      title: "Website Portfolio Bootstrap",
      desc: "Website portfolio sederhana dengan menggunakan framework frontend Bootstrap.",
      stack: ["Bootstrap"],
      demoLink: "https://github.com/KadekLiantini/portfolio-bootstrap.git",
      codeLink: "https://kadekliantini.github.io/portfolio-bootstrap/",
      imageUrl: Project5Image,
    },
    {
      title: "Website Villa",
      desc: "Website profil villa yang berisi sistem booking atau page admin",
      stack: ["HTML", "CSS", "JAvaScript", "PHP", "PhpMyAdmin"],
      demoLink: "https://kadekliantini.github.io/new/",
      codeLink: "https://github.com/KadekLiantini/new.git",
      imageUrl: Project6Image,
    },
    {
      title: "Website Portfolio",
      desc: "Website portfolio sederhana dengan desain sederhana dan warna yang lembut.",
      stack: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://lian-portfolio.netlify.app/",
      codeLink: "https://github.com/KadekLiantini/portfolio-web.git",
      imageUrl: Project7Image,
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-4xl font-extrabold mb-12 text-center">
        Proyek Pilihan
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
