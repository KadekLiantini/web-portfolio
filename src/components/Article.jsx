import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

import Project1Image from "../assets/cover-manajemen-resiko.png";

const ArticleCard = ({ title, desc, stack, articleLink, imageUrl }) => {
  const { currentTheme } = useTheme();

  return (
    <Link to={articleLink}>
      <div
        className={`p-6 rounded-xl ${currentTheme.card} transition-all duration-500 transform hover:shadow-2xl group`}>
        {imageUrl && (
          <div className="mb-4 overflow-hidden rounded-lg shadow-md">
            <img
              src={imageUrl}
              alt={`Screenshot ${title}`}
              className="w-full h-70 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3">{title}</h3>

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

        <div className="flex space-x-4"></div>
      </div>
    </Link>
  );
};

const Article = () => {
  const articleList = [
    {
      title: "Mempertimbangkan Konsekuensi dari Keputusan Teknis",
      desc: "Di balik setiap sistem, ada keputusan teknis yang membawa konsekuensi besar dan satu keputusan teknis dapat melindungi sistem, atau justru menghancurkannya.",
      stack: [
        "Analisis Resiko",
        "Keputusan Teknis",
        "Aspek Sosial & Etis",
        "Studi Kasus",
      ],
      articleLink: "/artikel/KeputusanTeknis",
      imageUrl: Project1Image,
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-4xl font-extrabold mb-12 text-center">Artikel</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articleList.map((project, index) => (
          <ArticleCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Article;
