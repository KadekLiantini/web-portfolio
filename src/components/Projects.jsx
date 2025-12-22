// src/components/Projects.jsx

import React from "react";
import { useTheme } from "../context/ThemeContext";

// Import gambar-gambar placeholder Anda di sini:
import Project1Image from "../assets/ai-photo.jpg";
// import Project2Image from '../assets/project2-ss.png';
// import Project3Image from '../assets/project3-ss.png';

// --- Komponen ProjectCard (Diperbarui) ---
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
            className="w-full h-70 object-cover transition-transform duration-500 group-hover:scale-105"
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
      desc: "Portofolio interaktif yang menggunakan API cuaca untuk mengubah skema warna tema secara *real-time* menggunakan React dan Tailwind CSS.",
      stack: ["React", "Tailwind CSS", "OpenWeatherMap API", "Context API"],
      demoLink: "#",
      codeLink: "Link-GitHub-Proyek-Ini",
      imageUrl: Project1Image, // <-- Ganti dengan import Project1Image
    },
    {
      title: "E-Commerce Mockup",
      desc: "Implementasi keranjang belanja dan *state management* produk kompleks menggunakan Redux Toolkit dan Async Thunks untuk simulasi API.",
      stack: ["React", "Redux Toolkit", "TypeScript", "SCSS"],
      demoLink: "Link-Demo-E-commerce",
      codeLink: "Link-GitHub-E-commerce",
      imageUrl: "https://via.placeholder.com/400x200?text=Ecommerce+Mockup+SS", // <-- Ganti dengan import Project2Image
    },
    {
      title: "Sistem Manajemen Tugas Kampus",
      desc: "Aplikasi CRUD (Create, Read, Update, Delete) sederhana untuk melacak tugas kuliah dan deadline, dibangun dengan MERN stack dasar.",
      stack: ["MERN Stack", "Express.js", "MongoDB", "Auth JWT"],
      demoLink: "Link-Demo-Sistem-Tugas",
      codeLink: "Link-GitHub-Sistem-Tugas",
      imageUrl: "https://via.placeholder.com/400x200?text=Todo+App+SS", // <-- Ganti dengan import Project3Image
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
