"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Sparkles,
  FileText,
  TrendingUp,
  X,
  User,
  Quote,
  Activity,
  Zap,
  Globe, // Dil ikonu
} from "lucide-react";
import ChangelogModal from "@/components/ChangeLog"; // Modal bileşeni
import Link from "next/link";

// --- AYARLAR ---
const REPO_OWNER = "aykublut";

// --- DİL SÖZLÜĞÜ (LANGUAGE DICTIONARY) ---
const CONTENT = {
  tr: {
    status: "Sistem Durumu: Yeniden Başlatılıyor",
    subtitle: "Kaos bir merdivendir.",
    subtitle_bold: "Finansal uçuruma hoş geldin.",
    warning_title: "Proje: Reboot",
    warning_text:
      "İndireceğiniz sürüm bir 'Atmosfer Demosudur'. Final oyun; Borsa, Ticaret ve Yaşam Simülasyonu üzerine sıfırdan inşa edilmektedir.",
    target: "Hedef: Sezon 2",
    finance_sim: "FİNANS SİMÜLASYONU",
    platform: "Platform: Itch.io",
    download: "HEMEN İNDİR",
    version: "Sürüm: 0.1.0 (PROLOGUE)",
    size: "BOYUT: 509 MB",
    patch_notes: "YAMA NOTLARI",
    creator_btn_sub: "Yaratıcı",
    creator_btn_main: "YAPIMCIYI GÖR",
    dev_file: "Geliştirici Dosyası",
    role: "Lead Developer & Architect",
    quote:
      "Kaos borsa grafiklerinin arasındaki milisaniyelerde saklıdır. Nebula bir oyun değil, finansal bir çapkınlıktır.",
    dev_desc:
      "Nebula projesi, finansal okuryazarlığı modern oyun dinamikleriyle birleştirerek benzersiz bir simülasyon deneyimi sunmayı hedefler.",
    rights: "© 2026 Nebula Projesi. Tüm hakları saklıdır.",
  },
  en: {
    status: "System Status: Rebooting",
    subtitle: "Chaos is a ladder.",
    subtitle_bold: "Welcome to the financial abyss.",
    warning_title: "Project: Reboot",
    warning_text:
      "The version you are downloading is an 'Atmosphere Demo'. The final game is being rebuilt from scratch as a Stock Market, Trade, and Life Simulation.",
    target: "Target: Season 2",
    finance_sim: "FINANCE SIMULATION",
    platform: "Platform: Itch.io",
    download: "DOWNLOAD NOW",
    version: "Ver: 0.1.0 (PROLOGUE)",
    size: "SIZE: 509 MB",
    patch_notes: "PATCH NOTES",
    creator_btn_sub: "Creator",
    creator_btn_main: "VIEW ARCHITECT",
    dev_file: "Developer File",
    role: "Lead Developer & Architect",
    quote:
      "Chaos hides in the milliseconds between stock charts. Nebula is not a game, it is financial philandering.",
    dev_desc:
      "The Nebula project aims to offer a unique simulation experience by combining financial literacy with modern gaming dynamics.",
    rights: "© 2026 Nebula Project. All rights reserved.",
  },
};

const EASING = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASING } as any,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export default function Home() {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isDevPanelOpen, setIsDevPanelOpen] = useState(false);
  const [lang, setLang] = useState<"tr" | "en">("tr"); // Varsayılan Dil: Türkçe
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const t = CONTENT[lang]; // Seçili dilin metinlerini al

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Dil Değiştirme Fonksiyonu
  const toggleLang = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#030303] text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      {/* MODAL'a lang prop'unu gönderiyoruz */}
      <ChangelogModal
        isOpen={isLogOpen}
        onClose={() => setIsLogOpen(false)}
        lang={lang}
      />

      {/* --- DİL DEĞİŞTİRME BUTONU (SAĞ ÜST) --- */}
      <div className="absolute top-8 right-8 z-50">
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group backdrop-blur-md"
        >
          <Globe className="w-4 h-4 text-zinc-400 group-hover:text-yellow-500 transition-colors" />
          <span className="text-xs font-bold text-zinc-300 font-mono">
            {lang === "tr" ? "EN" : "TR"}
          </span>
        </button>
      </div>

      {/* --- KATMAN 0: ARKA PLAN & ATMOSFER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        >
          <Image
            src="/posterr.jpg"
            alt="Nebula Atmosphere"
            fill
            className="object-cover object-center opacity-40 blur-[2px] scale-110 mix-blend-luminosity grayscale-[0.5]"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(circle_at_center,transparent_0%,#000_100%)]"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay animate-pulse"></div>
      </div>

      {/* --- KATMAN 1: ANA İÇERİK --- */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full max-h-[800px]">
          {/* --- SOL KOLON --- */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <motion.div variants={fadeInUp} className="group cursor-default">
              <div className="relative overflow-hidden inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase group-hover:text-yellow-100 transition-colors">
                  {t.status}
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="relative text-8xl md:text-[10rem] lg:text-[11rem] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-2xl"
            >
              NEBULA
              <span className="absolute top-0 left-1 -z-10 text-red-500/20 opacity-0 lg:group-hover:opacity-100 mix-blend-screen blur-[1px]">
                NEBULA
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="relative pl-6 border-l-2 border-yellow-500/50"
            >
              <motion.p className="text-xl md:text-3xl font-light text-zinc-300 max-w-2xl leading-tight">
                {t.subtitle} <br />
                <span className="font-semibold text-white">
                  {t.subtitle_bold}
                </span>
              </motion.p>
            </motion.div>
          </div>

          {/* --- SAĞ KOLON --- */}
          <div className="lg:col-span-5 flex flex-col items-end justify-center space-y-10">
            {/* --- UYARI PANELI --- */}
            <motion.div variants={fadeInUp} className="w-full max-w-md">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-20 group-hover:opacity-0 transition duration-500"></div>

                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-6 overflow-hidden transition-all duration-500 group-hover:bg-transparent group-hover:backdrop-blur-none group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-opacity duration-500 group-hover:opacity-0"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500/10 rounded-md border border-red-500/20 shrink-0 group-hover:bg-red-500/20 group-hover:border-red-500/50 transition-colors">
                      <Zap className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-red-100 uppercase tracking-widest mb-1 group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] transition-all">
                        {t.warning_title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-white group-hover:font-medium transition-colors">
                        {t.warning_text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-red-500/30 transition-colors">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-red-300">
                      {t.target}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]">
                      <Activity className="w-3 h-3" />
                      <span>{t.finance_sim}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* İNDİRME BUTONU */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-end gap-3"
            >
              <Link
                href="https://aykublut.itch.io/nebula"
                target="_blank"
                className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300"
              >
                <div className="absolute -inset-3 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-4 skew-x-[10deg] group-hover:skew-x-0 transition-transform duration-300">
                  <div className="flex flex-col items-end leading-none">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-0.5">
                      {t.platform}
                    </span>
                    <span className="text-xl font-black tracking-tight">
                      {t.download}
                    </span>
                  </div>
                  <Download className="w-6 h-6" />
                </div>
              </Link>
              <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                <span>{t.version}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                <span>{t.size}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* --- KATMAN 2: ALT BUTONLAR --- */}

      {/* Patch Notes Butonu */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-10 z-20"
      >
        <button
          onClick={() => setIsLogOpen(true)}
          className="flex items-center gap-3 text-xs font-bold text-zinc-400 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all">
            <FileText className="w-4 h-4" />
          </div>
          <span className="uppercase tracking-widest opacity-50 group-hover:opacity-100">
            {t.patch_notes}
          </span>
        </button>
      </motion.div>

      {/* YAPIMCI BUTONU (SAĞ ALT) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 right-10 z-50"
      >
        <button
          onClick={() => setIsDevPanelOpen(true)}
          className="relative group w-14 h-14 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:w-48 hover:rounded-xl"
        >
          <div className="absolute left-4 group-hover:opacity-0 transition-opacity duration-300">
            <User className="w-5 h-5 text-zinc-300" />
          </div>
          <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20 group-hover:opacity-0"></div>

          <div className="opacity-0 group-hover:opacity-100 flex items-center gap-3 pl-2 transition-opacity duration-500 delay-100 whitespace-nowrap">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <Quote className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] font-bold text-zinc-400 uppercase">
                {t.creator_btn_sub}
              </span>
              <span className="text-xs font-bold text-white">
                {t.creator_btn_main}
              </span>
            </div>
          </div>
        </button>
      </motion.div>

      {/* --- KATMAN 3: YAPIMCI YAN PANELİ --- */}
      <AnimatePresence>
        {isDevPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDevPanelOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[70] h-full w-full md:w-[480px] bg-[#080808] border-l border-white/10 shadow-2xl flex flex-col"
            >
              {/* Panel Header */}
              <div className="p-8 flex items-center justify-between border-b border-white/5 relative z-20">
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                  {t.dev_file}
                </h2>
                <button
                  onClick={() => setIsDevPanelOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Panel İçeriği */}
              <div className="flex-1 p-8 flex flex-col items-start justify-center relative overflow-hidden">
                {/* --- FOTOĞRAF 1: ARKA PLAN DESENİ --- */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] -mr-20 -mt-20 pointer-events-none opacity-[0.07] mix-blend-screen grayscale">
                  <Image
                    src="/me.jpg"
                    alt="Background Texture"
                    fill
                    className="object-cover rounded-[100px] blur-[2px]"
                  />
                </div>

                {/* --- FOTOĞRAF 2: PROFİL RESMİ --- */}
                <div className="relative w-28 h-28 rounded-2xl border border-white/20 mb-6 shadow-2xl overflow-hidden z-10 group">
                  <Image
                    src="/me.jpg"
                    alt={REPO_OWNER}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className="text-3xl font-black text-white mb-2 relative z-10">
                  {REPO_OWNER}
                </h3>
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest border border-yellow-500/20 mb-8 relative z-10">
                  {t.role}
                </span>

                {/* Alıntı Bloğu */}
                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-zinc-700 mb-4 rotate-180" />
                  <p className="text-xl text-zinc-300 font-light italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="w-12 h-1 bg-yellow-500 mt-6 mb-6"></div>
                  <p className="text-sm text-zinc-500">{t.dev_desc}</p>
                </div>
              </div>

              <div className="p-6 bg-white/5 border-t border-white/5 text-center relative z-20">
                <p className="text-[10px] text-zinc-600 font-mono uppercase">
                  {t.rights}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
