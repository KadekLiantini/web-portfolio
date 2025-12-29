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
        Keahlian Saya
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard
          title="Landing Page"
          stack="HTML, CSS, JavaScript, TailwindCSS, dan Bootstrapt."
        />

        <SkillCard
          title="Styling dan Responsif"
          stack="Tailwind CSS, Figma, Design System, Mobile-First Approach."
        />

        <SkillCard
          title="Dasar Pemrograman"
          stack="JavaScript, Java, Struktur Data & Algoritma."
        />

        <SkillCard
          title="Version Control"
          stack="Git, GitHub, Pull Requests dan Code Review."
        />

        <SkillCard
          title="Soft Skills IT"
          stack="Problem Solving dan Kolaborasi Tim menggunakan Figma."
        />

        <SkillCard
          title="Crochet"
          stack="Amigurumi, Keychain, Bag, dan Headband."
        />
      </div>
    </section>
  );
};

export default Skills;
