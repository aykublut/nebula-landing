"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Download,
  Sparkles,
  Gamepad2,
  ChevronRight,
  FileText,
} from "lucide-react";
import ChangelogModal from "@/components/ChangeLog";

// --- AYARLAR ---
const transitionConfig = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionConfig,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col">
      {/* --- MODAL COMPONENT --- */}
      <ChangelogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />

      {/* --- ARKA PLAN (VERCEL TARZI GRID + NOISE) --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Ana Poster Resmi (Daha soluk) */}
        <Image
          src="/poster.jpg"
          alt="Nebula Background"
          fill
          className="object-cover object-center opacity-80 blur-[1px] scale-105 mix-blend-luminosity"
          priority
        />

        {/* 2. Renk Gradyanı */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40" />

        {/* 3. VERCEL TARZI MODERN GRID EFEKTİ (Bunu geri getirdik) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none"></div>

        {/* 4. Noise Dokusu */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* --- ANA İÇERİK --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto text-center"
      >
        {/* Early Access Rozeti */}
        <motion.div variants={fadeInUp} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)]">
            <Sparkles className="w-3 h-3" /> Early Access / Prologue
          </div>
        </motion.div>

        {/* Ana Başlık */}
        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-4 drop-shadow-2xl"
        >
          NEBULA
        </motion.h1>

        {/* Alt Yazı */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-10"
        >
          Finansal kaosun içinde kaybolmaya hazır mısın?{" "}
          <br className="hidden md:block" />
          <span className="text-zinc-100 font-medium">
            Bu bir oyun değil, psikolojik bir test.
          </span>
        </motion.p>

        {/* İndirme Butonu */}
        {/* İndirme Butonu */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-4"
        >
          <a
            // DEĞİŞİKLİK BURADA: href'e dosya adını yazdık
            href="/nebula-setup.exe"
            // İPUCU: 'download' özelliği, tarayıcıya "bunu açma, direkt indir" der
            download="Nebula_Setup_v0.1.0.exe"
            className="group relative flex items-center justify-center gap-3 bg-white text-black font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)]"
          >
            <Download className="w-6 h-6" />
            <span>HEMEN İNDİR</span>
            {/* Buton üzerindeki parlama efekti */}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/60 animate-pulse-slow"></div>
          </a>
          <span className="text-xs text-zinc-600 font-mono tracking-tight uppercase">
            v0.1.0 • Windows PC • 145 MB
          </span>
        </motion.div>
      </motion.div>

      {/* --- ALT BİLGİ PANELİ (FOOTER) --- */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
        className="relative z-20 w-full bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pt-12 pb-8 px-6"
      >
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Sol Taraf: Not */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-white/10 flex items-center justify-center shrink-0">
              <Gamepad2 className="w-6 h-6 text-zinc-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wider mb-1">
                Geliştirici Notu
              </h4>
              <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
                Şu an oynadığınız sürüm bir "Proof of Concept" (Kavram Kanıtı).
                Asıl devasa deneyim Sezon 2 ile başlayacaktır.
              </p>
            </div>
          </div>

          {/* Sağ Taraf: Sezon 2 Teaser ve Buton */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col items-end font-mono">
              <span className="text-[10px] font-bold text-yellow-500 uppercase mb-1 tracking-widest">
                Sezon 2'de Geliyor:
              </span>
              <div className="flex gap-3">
                {["Yeni Mekanikler", "Dallanan Hikaye", "FPS Modu"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-zinc-500 flex items-center gap-1 uppercase"
                    >
                      <ChevronRight className="w-3 h-3 text-zinc-700" /> {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* --- YENİLENMİŞ, PARLAYAN PATCH NOTES BUTONU --- */}
            <div className="relative group">
              {/* Arkadaki Yanıp Sönen Sarı Işık (Glow Effect) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 animate-pulse transition-all duration-500"></div>

              {/* Butonun Kendisi */}
              <button
                onClick={() => setIsLogOpen(true)}
                className="relative z-10 flex items-center gap-2 text-xs font-bold text-yellow-100 bg-[#1a1a1a] hover:bg-[#252525] px-5 py-3 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all font-mono tracking-wider"
              >
                <FileText className="w-4 h-4 text-yellow-400" />
                PATCH NOTES
                {/* Yanıp sönen nokta yerine daha dikkat çekici bir 'ping' efekti */}
                <span className="relative flex h-2.5 w-2.5 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                </span>
              </button>
            </div>
            {/* -------------------------------------------- */}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
