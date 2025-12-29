import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="mt-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Kontak Saya</h2>
      <p className="text-lg opacity-80 mb-12 text-center max-w-2xl mx-auto">
        Tertarik untuk berkolaborasi atau pemesanan website profil perusahaan,
        landing page, atau desain UI/UX? Hubungi saya melalui media sosial
        berikut.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-8">
          <a
            href="LINK_LINKEDIN_ANDA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`p-5 rounded-xl border ${currentTheme.card} ${currentTheme.border}
            hover:scale-110 hover:text-blue-600 transition duration-300`}>
            <FaLinkedin size={36} />
          </a>
          <a
            href="LINK_GITHUB_ANDA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`p-5 rounded-xl border ${currentTheme.card} ${currentTheme.border}
            hover:scale-110 hover:text-gray-600 dark:hover:text-gray-500 transition duration-300`}>
            <FaGithub size={36} />
          </a>
          <a
            href="LINK_INSTAGRAM_ANDA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`p-5 rounded-xl border ${currentTheme.card} ${currentTheme.border}
            hover:scale-110 hover:text-pink-500 transition duration-300`}>
            <FaInstagram size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
