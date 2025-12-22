import React from "react";
import { useTheme } from "../context/ThemeContext";
// Ikon Placeholder: Anda bisa mengganti ini dengan library ikon (misal: react-icons)
const Icon = ({ children }) => (
  <span className="text-3xl mr-2">{children}</span>
);

const SkillCard = ({ title, stack, icon, colorClass }) => {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl ${currentTheme.card} transition-shadow duration-500 hover:shadow-2xl hover:-translate-y-1 transform border-b-4 ${currentTheme.border}`}>
      <div className={`flex items-center mb-4 ${colorClass}`}>
        <Icon>{icon}</Icon>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="opacity-70 text-sm">{stack}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="mt-8">
      <h2 className="text-4xl font-extrabold mb-12 text-center">
        Tech Stack & Keahlian Saya
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard
          title="React Ecosystem"
          stack="React.js, Hooks, Context API / Redux Toolkit, React Router, Vite Build Tool."
        />

        <SkillCard
          title="Styling & Responsif"
          stack="Tailwind CSS, PostCSS, Framer Motion (untuk animasi interaktif), Design System, Mobile-First Approach."
        />

        <SkillCard
          title="Dasar Pemrograman"
          //icon="💻"
          stack="JavaScript (ES6+), TypeScript (Dasar), Python (untuk tugas backend/scripting), Struktur Data & Algoritma."
        />

        <SkillCard
          title="Version Control"
          stack="Git, GitHub, Workflow Branching (Git Flow), Pull Requests dan Code Review."
        />

        <SkillCard
          title="Pengembangan API"
          stack="Konsumsi REST API (Axios/Fetch), Pemahaman dasar GraphQL, Mocking API dengan JSON Server."
        />

        <SkillCard
          title="Soft Skills IT"
          stack="Agile Scrum, Problem Solving, Dokumentasi Teknis, Kolaborasi Tim menggunakan Figma."
        />
      </div>
    </section>
  );
};

export default Skills;
