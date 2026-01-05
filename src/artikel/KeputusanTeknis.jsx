import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
// import grafik from "../assets/risk-matrix.png";

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
      <header className="text-center mb-16">
        <h1 className="text-2xl md:text-5xl font-extrabold mb-6 leading-tight">
          Mempertimbangkan Konsekuensi dari Keputusan Teknis
          <br />
          <span className="text-xl font-medium opacity-70">
            dalam Sistem Teknologi Informasi
          </span>
        </h1>
        <p className="text-lg opacity-75 italic">
          Artikel Analisis Keamanan Sistem & Etika Profesi TI
        </p>
      </header>

      <section>
        <SectionTitle>Pendahuluan</SectionTitle>
        <p className="mb-4 text-lg leading-relaxed">
          Dalam era digital yang semakin maju, teknologi informasi (TI) menjadi
          fondasi utama dalam hampir seluruh aspek kehidupan, mulai dari bisnis,
          pendidikan, hingga layanan publik. Di balik setiap sistem teknologi
          yang digunakan, terdapat serangkaian keputusan teknis yang menentukan
          bagaimana sistem tersebut bekerja.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Sayangnya, keputusan teknis sering kali dianggap sebagai urusan
          &quot;orang IT saja&quot;, padahal dampaknya dapat meluas hingga ke
          aspek ekonomi, sosial, etika, dan hukum. Artikel ini membahas
          bagaimana keputusan teknis diambil, dampak yang ditimbulkannya,
          pentingnya analisis risiko, serta pertimbangan sosial dan etis yang
          harus diperhatikan sebelum keputusan diterapkan.
        </p>
      </section>

      <section id="keputusan-teknis">
        <SectionTitle>1. Keputusan Teknis dan Dampaknya</SectionTitle>

        <p className="mb-4 text-lg">
          Keputusan teknis adalah keputusan yang diambil dalam proses
          perancangan, pengembangan, dan pengelolaan sistem teknologi informasi.
          Keputusan ini bersifat strategis karena akan memengaruhi kinerja
          sistem dalam jangka panjang.
        </p>

        <div
          className={`p-6 rounded-xl mb-8 ${currentTheme.card} border-l-8 ${currentTheme.border}`}>
          <h4 className="font-bold mb-3">Contoh Keputusan Teknis:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Pemilihan arsitektur sistem (Monolithic atau Microservices)</li>
            <li>Penentuan metode keamanan (Password, Enkripsi, 2FA)</li>
            <li>Pemilihan software dan hardware</li>
            <li>Perancangan desain database</li>
            <li>Kebijakan privasi dan pengelolaan data pengguna</li>
          </ul>
        </div>

        <div className="overflow-x-auto">
          <table
            className={`w-full text-left rounded-lg overflow-hidden ${currentTheme.card}`}>
            <thead className={`${currentTheme.primary} text-white`}>
              <tr>
                <th className="p-4">Jenis Dampak</th>
                <th className="p-4">Contoh Dampak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-500/20">
              <tr>
                <td className="p-4 font-bold">Teknis</td>
                <td className="p-4">
                  Performa lambat, bug meningkat, downtime sistem
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Ekonomi</td>
                <td className="p-4">
                  Biaya maintenance tinggi, pemborosan infrastruktur
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Keamanan</td>
                <td className="p-4">
                  Sistem mudah diretas, kebocoran data (data breach)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Sosial</td>
                <td className="p-4">
                  Ketidaknyamanan pengguna, turunnya kepercayaan publik
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Hukum</td>
                <td className="p-4">
                  Pelanggaran UU ITE, GDPR, dan regulasi perlindungan data
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <p className="mt-4 opacity-70 italic">
          <img src={grafik} className="w-full " alt="" />
        </p> */}
      </section>

      <section id="analisis-risiko">
        <SectionTitle>2. Analisis Risiko dalam Keputusan Teknis</SectionTitle>

        <p className="mb-6 text-lg">
          Analisis risiko adalah proses sistematis untuk mengidentifikasi,
          menilai, dan mengendalikan risiko yang mungkin muncul akibat keputusan
          teknis sebelum keputusan tersebut diimplementasikan.
        </p>

        <div className="grid md:grid-cols gap-6">
          <div className={`p-6 rounded-xl ${currentTheme.card}`}>
            <h3 className="text-xl font-bold mb-4">Langkah Analisis Risiko</h3>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Identifikasi risiko (serangan siber, human error)</li>
              <li>Analisis dampak dan kemungkinan</li>
              <li>Evaluasi risiko (tinggi, sedang, rendah)</li>
              <li>Mitigasi risiko (enkripsi, backup, patching)</li>
              <li>Monitoring melalui audit dan logging</li>
            </ol>
          </div>

          {/* <div
            className={`p-6 rounded-xl text-center ${currentTheme.primary} text-white`}>
            <h4 className="text-2xl font-bold mb-4">Risk Matrix</h4>
            <p className="font-bold">
              Likelihood Tinggi + Impact Tinggi = Prioritas 1
            </p>
            <p className="mt-2">
              Likelihood Sedang + Impact Rendah = Tolerable
            </p>
          </div> */}
        </div>
      </section>

      <section id="aspek-etis">
        <SectionTitle>3. Aspek Sosial dan Etis</SectionTitle>

        <p className="mb-6 text-lg">
          Keputusan teknis tidak pernah berdiri sendiri. Setiap sistem teknologi
          akan digunakan oleh manusia dan memengaruhi kehidupan sosial.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-2">Aspek Sosial</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Kenyamanan dan aksesibilitas pengguna</li>
              <li>Dampak otomatisasi terhadap lapangan kerja</li>
              <li>Ketergantungan terhadap teknologi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Aspek Etis</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li>Privasi dan keamanan data</li>
              <li>Transparansi penggunaan data</li>
              <li>Potensi bias dan ketidakadilan sistem</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="studi-kasus" className="mt-16">
        <SectionTitle>4. Studi Kasus: Keputusan Keamanan Sistem</SectionTitle>

        <div
          className={`p-8 rounded-2xl ${currentTheme.card} border-2 ${currentTheme.border}`}>
          <p className="mb-4">
            Sebuah perusahaan memilih untuk tidak mengaktifkan Two-Factor
            Authentication (2FA) karena dianggap mengganggu kenyamanan pengguna.
          </p>

          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Akun mudah diretas melalui phishing</li>
            <li>Terjadi kebocoran data pelanggan</li>
            <li>Kerugian finansial dan reputasi perusahaan</li>
            <li>Sanksi hukum akibat pelanggaran regulasi</li>
          </ul>

          <p className="font-bold mt-4">
            Analisis: Likelihood Tinggi + Impact Tinggi → Keputusan Tidak Etis
          </p>

          <div className="mt-4">
            <h4 className="font-bold mb-2">Solusi yang Seharusnya:</h4>
            <ul className="list-disc ml-5">
              <li>Mengaktifkan 2FA</li>
              <li>Edukasi keamanan bagi pengguna</li>
              <li>Monitoring login mencurigakan</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>Kesimpulan</SectionTitle>
        <p className="text-lg leading-relaxed">
          Keputusan teknis merupakan fondasi penting dalam pembangunan sistem
          teknologi informasi. Dengan mempertimbangkan analisis risiko serta
          aspek sosial dan etis, organisasi dapat membangun sistem yang aman,
          berkelanjutan, dan dipercaya oleh pengguna.
        </p>
      </section>

      <section>
        <SectionTitle>Referensi</SectionTitle>
        <p className="text-lg leading-relaxed">
          Keputusan teknis merupakan fondasi penting dalam pembangunan sistem
          teknologi informasi. Dengan mempertimbangkan analisis risiko serta
          aspek sosial dan etis, organisasi dapat membangun sistem yang aman,
          berkelanjutan, dan dipercaya oleh pengguna.
        </p>
      </section>
    </div>
  );
};

export default KeputusanTeknis;
