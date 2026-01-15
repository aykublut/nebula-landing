"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  X,
  ArrowRight,
  Zap,
  TrendingUp,
  Skull,
  Gamepad2,
  BookOpen,
  Film,
} from "lucide-react";

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChangelogModal({
  isOpen,
  onClose,
}: ChangelogModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          {/* 1. ARKA PLAN KARARTMA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
          />

          {/* 2. ANA MODAL KART */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-auto min-h-[500px] bg-[#050505] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* KAPAT BUTONU */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 p-1.5 bg-black/50 hover:bg-white/20 border border-white/5 rounded-full transition-colors text-white/50 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* ==============================================
                SOL TARAF: SEZON 1 (SOĞUK / PREMIUM / KURUMSAL)
               ============================================== */}
            <div className="relative flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-b from-slate-900 to-black group overflow-hidden">
              {/* Arka Plan Görseli */}
              <div className="absolute top-0 inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none mix-blend-luminosity">
                <Image
                  src="/canAsli.png"
                  alt="Season 1 Background"
                  fill
                  className="object-contain object-center"
                />
                {/* Mavi/Slate Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Etiket - ARTIK CYAN/MAVİ TONLARINDA */}
                <div className="inline-flex items-center gap-2 px-2 py-0.5 mb-4 text-[9px] font-bold tracking-[0.2em] text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full w-fit shadow-[0_0_10px_-4px_rgba(34,211,238,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  MEVCUT SÜRÜM (v0.1.0)
                </div>

                {/* Başlıklar */}
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1 drop-shadow-md">
                  SEASON 1
                </h2>
                <h3 className="text-sm font-light text-slate-400 mb-6 tracking-wide italic">
                  "Fırtına Öncesi Sessizlik"
                </h3>

                {/* Özellikler Listesi */}
                <ul className="space-y-5">
                  <FeatureItem
                    // İkonları ve stili "Blue/Cool" moda aldık
                    variant="cool"
                    icon={<BookOpen size={18} />}
                    title="Hikayeye Giriş"
                    desc="Nebula evrenine ve karakterlere ilk bakış. Kim kimdir, tehlike nereden gelir? Sadece temel."
                  />
                  <FeatureItem
                    variant="cool"
                    icon={<Film size={18} />}
                    title="Sinematik Anlatım"
                    desc="Görsel roman formatında, çizgisel ve sakin bir akış. Atmosferin tadını çıkarın."
                  />
                  <FeatureItem
                    variant="cool"
                    icon={<ArrowRight size={18} />}
                    title="Tek Yönlü Bilet"
                    desc="İpler yönetmenin elinde. Seçimleriniz henüz kaderi değiştirmiyor, sadece sona hazırlıyor."
                  />
                </ul>
              </div>
            </div>

            {/* ==============================================
                SAĞ TARAF: SEZON 2 (SICAK / KAOS / TEHLİKE)
               ============================================== */}
            <div className="relative flex-1 p-6 md:p-8 bg-black group overflow-hidden">
              {/* Arka Plan Görseli */}
              <div className="absolute top-2 inset-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 pointer-events-none mix-blend-lighten">
                <Image
                  src="/kenan.png"
                  alt="Season 2 Background"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent mix-blend-overlay" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Etiket */}
                <div className="inline-flex items-center gap-2 px-2 py-0.5 mb-4 text-[9px] font-bold tracking-[0.2em] text-amber-400 bg-amber-950/30 border border-amber-500/30 rounded-full animate-pulse w-fit shadow-[0_0_15px_-5px_rgba(245,158,11,0.5)]">
                  <Zap size={10} className="fill-amber-400" />
                  GELİŞTİRME AŞAMASINDA
                </div>

                {/* Başlıklar */}
                <h2 className="text-3xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-amber-400 to-amber-700 mb-1 drop-shadow-lg">
                  SEASON 2
                </h2>
                <h3 className="text-sm font-medium text-amber-500/80 mb-6 tracking-wide uppercase">
                  "Kaos Teorisi & İnfaz"
                </h3>

                {/* Özellikler Listesi */}
                <ul className="space-y-5">
                  <FeatureItem
                    variant="hot"
                    icon={<Gamepad2 size={18} />}
                    title="Yeni Nesil Oynanış"
                    desc="Gerçek zamanlı 'Point & Click' çatışma simülasyonları ve Sniper görevleri."
                  />
                  <FeatureItem
                    variant="hot"
                    icon={<Skull size={18} />}
                    title="Dinamik İhanet Motoru"
                    desc="Hikaye çizgisel değil; verdiğin her karar, finalde kimin tetiği çekeceğini belirleyecek."
                  />
                  <FeatureItem
                    variant="hot"
                    icon={<TrendingUp size={18} />}
                    title="Adrenalin & QTE"
                    desc="Refleks gerektiren anlık karar anları (Quick Time Events). Hataya yer yok."
                  />
                </ul>

                {/* Alt Alıntı Kutusu */}
                <div className="mt-auto pt-6">
                  <div className="p-3 bg-gradient-to-r from-amber-950/40 to-transparent border-l-2 border-amber-500 backdrop-blur-sm">
                    <p className="text-amber-200/80 text-xs italic font-serif leading-relaxed">
                      "Birinci sezonda masaya oturdunuz. İkinci sezonda o masayı
                      devireceksiniz."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- YARDIMCI BİLEŞEN (RENK TEMALARI EKLENDİ) ---
function FeatureItem({
  icon,
  title,
  desc,
  variant = "cool", // "cool" (Season 1) veya "hot" (Season 2)
}: {
  icon: any;
  title: string;
  desc: string;
  variant?: "cool" | "hot";
}) {
  const isHot = variant === "hot";

  return (
    <div className="flex gap-4 items-start group/item">
      {/* İkon Kutusu */}
      <div
        className={`mt-0.5 p-2 rounded-lg transition-all duration-300 ${
          isHot
            ? "bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover/item:bg-amber-500/20 group-hover/item:scale-105"
            : "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover/item:bg-cyan-500/20 group-hover/item:text-cyan-200"
        }`}
      >
        {icon}
      </div>

      {/* Metinler */}
      <div>
        <h4
          className={`font-bold text-sm mb-0.5 transition-colors ${
            isHot
              ? "text-amber-100 group-hover/item:text-amber-400"
              : "text-slate-200 group-hover/item:text-cyan-300"
          }`}
        >
          {title}
        </h4>
        <p
          className={`text-xs leading-relaxed ${
            isHot
              ? "text-amber-200/60"
              : "text-slate-400 group-hover/item:text-slate-300"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
