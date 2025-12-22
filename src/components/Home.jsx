import React from "react";
import { useTheme } from "../context/ThemeContext";
// Anda harus menambahkan foto ke src/assets/
import MyPhoto from "../assets/ai-photo.jpg"; // Ganti dengan path foto Anda

const Home = () => {
  const { currentTheme } = useTheme();

  return (
    <header className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] pt-16">
      <div className="md:w-3/5 space-y-6 mt-10 md:mt-0">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi Aku Lian, Seorang Mahasiswa IT
        </h1>
        <p className="text-lg md:text-xl opacity-80">
          Saat ini menempuh studi Sarjana Terapan Teknologi Rekayasa Perangkat
          Lunak di Politeknik Negeri Bali. Saya fokus pada pengembangan{" "}
          <span className={`font-bold ${currentTheme.text}`}>
            Antarmuka Pengguna (UI)
          </span>{" "}
          yang interaktif dan efisien.
        </p>
        <p
          className={`text-base font-medium border-l-4 pl-4 py-2 ${currentTheme.border}`}>
          Website Portfolio Mengubah data cuaca kompleks menjadi pengalaman web
          yang intuitif dan adaptif.
        </p>
        <div className="flex space-x-4 pt-4">
          <a
            href="#projects"
            className={`py-3 px-6 rounded-lg font-semibold text-white ${currentTheme.primary} transition duration-300 transform hover:scale-105`}>
            Proyek Terbaru
          </a>
          <a
            href="link-ke-cv-anda.pdf"
            download
            className={`py-3 px-6 rounded-lg font-semibold border ${currentTheme.border} ${currentTheme.text} transition duration-300 hover:opacity-80`}>
            Unduh CV
          </a>
        </div>
      </div>
      <div className="md:w-2/5 flex justify-center">
        {/* Foto/Avatar */}
        <img
          src={MyPhoto}
          alt="Avatar Profesional"
          className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 ${currentTheme.border} shadow-2xl transition-all duration-1000`}
        />
      </div>
    </header>
  );
};

export default Home;
