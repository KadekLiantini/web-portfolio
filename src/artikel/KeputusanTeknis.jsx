import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 mt-12 border-b-2 pb-2 inline-block border-current">
    {children}
  </h2>
);

const KeputusanTeknis = () => {
  const { currentTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`max-w-4xl mx-auto px-4 py-12 transition-colors duration-1000 ${currentTheme.text}`}>
      {/* Header Artikel */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Etika & Analisis Risiko dalam Keputusan Teknis
        </h1>
        <p className="text-lg opacity-75 italic">
          Materi Kuliah Teknologi Informasi - Keamanan Sistem & Etika Profesi
        </p>
      </header>

      {/* Section 1: Keputusan Teknis */}
      <section id="keputusan-teknis">
        <SectionTitle>1. Keputusan Teknis & Dampaknya</SectionTitle>
        <p className="mb-4 text-lg">
          Keputusan teknis adalah pilihan strategis dalam proses pengembangan
          atau pengelolaan teknologi yang menentukan arah stabilitas sistem.
        </p>

        <div
          className={`p-6 rounded-xl mb-8 ${currentTheme.card} border-l-8 ${currentTheme.border}`}>
          <h4 className="font-bold mb-2">Cakupan Keputusan:</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Memilih arsitektur sistem (Monolith vs Microservices)</li>
            <li>Metode keamanan & enkripsi</li>
            <li>Pemilihan software/hardware</li>
            <li>Desain database & skalabilitas</li>
            <li>Kebijakan privasi data</li>
          </ul>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`w-full text-left rounded-lg overflow-hidden ${currentTheme.card}`}>
            <thead className={`${currentTheme.primary} text-white`}>
              <tr>
                <th className="p-4">Dampak</th>
                <th className="p-4">Contoh Riil</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-500/20">
              <tr>
                <td className="p-4 font-bold">Teknis</td>
                <td className="p-4">
                  Performa lambat, downtime, bug meningkat
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Ekonomi</td>
                <td className="p-4">
                  Biaya perawatan membengkak, pemborosan infra
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Keamanan</td>
                <td className="p-4">Data breach, kerentanan injeksi SQL</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Sosial</td>
                <td className="p-4">
                  Persepsi publik buruk, kenyamanan user hilang
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Hukum</td>
                <td className="p-4">Pelanggaran UU ITE, GDPR, sanksi denda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Analisis Risiko */}
      <section id="analisis-risiko">
        <SectionTitle>2. Analisis Risiko</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl ${currentTheme.card}`}>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔍</span> Langkah NIST & ISO
            </h3>
            <ol className="list-decimal ml-4 space-y-3 opacity-90">
              <li>
                <strong>Identifikasi:</strong> Serangan siber, human error.
              </li>
              <li>
                <strong>Analisis:</strong> Impact (Dampak) vs Likelihood
                (Kemungkinan).
              </li>
              <li>
                <strong>Evaluasi:</strong> Menentukan prioritas (Tinggi/Rendah).
              </li>
              <li>
                <strong>Treatment:</strong> Enkripsi, backup, patching.
              </li>
              <li>
                <strong>Monitoring:</strong> Logging & alerting berkala.
              </li>
            </ol>
          </div>

          <div
            className={`p-6 rounded-xl flex flex-col justify-center items-center text-center ${currentTheme.primary} text-white shadow-xl`}>
            <h4 className="text-2xl font-bold mb-2">Matriks Risiko</h4>
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="font-bold">Tinggi + Tinggi = Prioritas 1 🚨</p>
              <hr className="my-2 border-white/30" />
              <p>Sedang + Rendah = Tolerable ✅</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Aspek Sosial & Etis */}
      <section id="aspek-etis">
        <SectionTitle>3. Aspek Sosial & Etis</SectionTitle>
        <p className="mb-6">
          Keputusan teknis bukan hanya soal kode — tapi menyangkut hajat hidup
          manusia.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-blue-500 italic"># Sosial</h4>
            <ul className="space-y-2 opacity-80">
              <li>• Aksesibilitas bagi penyandang disabilitas.</li>
              <li>• Dampak otomasi terhadap lapangan kerja.</li>
              <li>• Bias AI yang mempengaruhi masyarakat.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-red-500 italic"># Etis</h4>
            <ul className="space-y-2 opacity-80">
              <li>• Transparansi penggunaan data pribadi.</li>
              <li>• Keadilan algoritma (Algorithmic Fairness).</li>
              <li>• Keamanan user dari ancaman phishing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Studi Kasus (Interactive Block) */}
      <section id="studi-kasus" className="mt-16">
        <div
          className={`p-8 rounded-2xl ${currentTheme.card} border-2 ${currentTheme.border} shadow-2xl`}>
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⚠️</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Studi Kasus: Kegagalan 2FA
            </h2>
          </div>

          <div className="bg-red-500/10 p-4 rounded-lg mb-6 border-l-4 border-red-500">
            <p className="font-bold text-red-600 uppercase text-sm mb-1">
              Keputusan Salah:
            </p>
            <p>"Mematikan 2FA agar user tidak repot login."</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-2">Konsekuensi:</h4>
              <ul className="list-disc ml-5 space-y-1 opacity-80 text-sm">
                <li>Akun mudah diretas (Phishing)</li>
                <li>Kebocoran data massal</li>
                <li>Reputasi hancur & Sanksi Hukum</li>
              </ul>
            </div>
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/50">
              <h4 className="font-bold text-green-600 mb-2">Solusi Ideal:</h4>
              <ul className="text-sm space-y-1">
                <li>✅ Wajibkan 2FA / MFA</li>
                <li>✅ Login Biometrik (Mudah + Aman)</li>
                <li>✅ Edukasi Keamanan User</li>
              </ul>
            </div>
          </div>

          <div className="text-center font-mono text-sm opacity-60">
            Analisis: Likelihood Tinggi + Impact Tinggi = Keputusan Tidak Etis.
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeputusanTeknis;
