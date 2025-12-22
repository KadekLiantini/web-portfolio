import React from "react";
import { useTheme } from "../context/ThemeContext";
// Ikon Placeholder
const MailIcon = () => <span className="text-2xl mr-2">✉️</span>;
const LinkedInIcon = () => <span className="text-2xl mr-2">💼</span>;
const GithubIcon = () => <span className="text-2xl mr-2">🐙</span>;

const Contact = () => {
  const { currentTheme } = useTheme();

  const InputClass = `w-full p-3 rounded-lg border focus:ring-2 focus:ring-opacity-50 ${currentTheme.card} ${currentTheme.border} transition duration-300`;

  return (
    <section className="mt-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center">
        Mari Terhubung
      </h2>
      <p className="text-lg opacity-80 mb-12 text-center max-w-2xl mx-auto">
        Tertarik dengan pengembangan web yang adaptif atau ingin berkolaborasi
        dalam proyek kampus? Send the message!
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className={`p-8 rounded-xl ${currentTheme.card} shadow-lg`}>
          <h3 className="text-2xl font-bold mb-6">Kirim Pesan Langsung</h3>
          <form
            action="LINK_FORMSPREE_ANDA"
            method="POST"
            className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap Anda"
              required
              className={InputClass}
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Email Kampus/Pribadi"
              required
              className={InputClass}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Pesan Anda"
              required
              className={InputClass}></textarea>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-white ${currentTheme.primary} transition duration-300 hover:bg-opacity-90`}>
              Kirim Pesan Sekarang
            </button>
          </form>
        </div>

        {/* Info Kontak & Sosial Media */}
        <div className="space-y-6 pt-4 md:pt-0">
          <h3 className="text-2xl font-bold mb-4">Informasi Tambahan</h3>

          <div
            className={`flex items-center p-4 rounded-lg border-l-4 ${currentTheme.border} ${currentTheme.card} hover:opacity-90 transition duration-300`}>
            <MailIcon />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm opacity-80">agalia-@gmail.com</p>
            </div>
          </div>

          <a
            href="LINK_LINKEDIN_ANDA"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-4 rounded-lg border-l-4 ${currentTheme.border} ${currentTheme.card} hover:opacity-90 transition duration-300`}>
            <LinkedInIcon />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm opacity-80">linkedin.com/in/-</p>
            </div>
          </a>

          <a
            href="LINK_GITHUB_ANDA"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-4 rounded-lg border-l-4 ${currentTheme.border} ${currentTheme.card} hover:opacity-90 transition duration-300`}>
            <GithubIcon />
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="text-sm opacity-80">github.com/KadekLiantini</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
