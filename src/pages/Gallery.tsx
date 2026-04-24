import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Commissions from "../components/Commissions";
import Contact from "../components/Contact";
import galleryHeroImg from "../components/hero_galerie.png";
import textureImg from "../components/hero_startseite.png";

import img1 from "../components/blume_rot.png";
import img2 from "../components/blume_rot_struktur.png";
import img3 from "../components/gelb_quer.png";
import img4 from "../components/gruen_berge.png";
import img5 from "../components/gruen_rosa_struktur.png";
import img6 from "../components/hero_galerie.png";
import img7 from "../components/hero_startseite.png";
import img8 from "../components/quadrat_blume.png";
import img9 from "../components/berge_blau_struktur.png";
import img10 from "../components/struktur_gruen_rot.png";
import img11 from "../components/welle_nah.png";
import img12 from "../components/zweiBilder.png";
import img13 from "../components/Strand2.png";
import img14 from "../components/welle_beije.png";
import img15 from "../components/welle_hoch.png";
import img16 from "../components/struktur_gruen.png";
import blumeStruktur from "../components/blume_struktur.png";
import bergeHocker from "../components/berge_hocker-1.png";
import heroBerge from "../components/hero_berge.png";
import weissBeige from "../components/struktur_weiss_beige.png";

interface ArtWork {
  id: number;
  title: string;
  year: string;
  material: string;
  image: string;
  aspectRatio: string;
  focalPoint?: string;
}

const galleryData: ArtWork[] = [
  {
    id: 1,
    title: "nature Layers",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img4,
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 2,
    title: "Beige Struktur",
    year: "2026",
    material: "Strukturgips auf Holz",
    image: weissBeige,
    aspectRatio: "aspect-square",
    focalPoint: "50% 25%"
  },
  {
    id: 3,
    title: "Grün & Rot",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img10,
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 4,
    title: "Blaues Relief",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img9,
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 5,
    title: "Grünes Feld",
    year: "2026",
    material: "Strukturgips auf Holz",
    image: img16,
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 6,
    title: "Frühlingserwachen",
    year: "2026",
    material: "Gips on Canvas",
    image: img5,
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 7,
    title: "Sunshine on canvas",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img3,
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 8,
    title: "Welle in beige",
    year: "2025",
    material: "Strukturgips auf Holz",
    image: img6,
    aspectRatio: "aspect-square",
    focalPoint: "center 0%"
  },
  {
    id: 9,
    title: "Weiße Woge",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img15,
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 10,
    title: "Rauer Sand",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img14,
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 11,
    title: "Blumenstruktur",
    year: "2026",
    material: "Strukturgips auf Holz",
    image: blumeStruktur,
    aspectRatio: "aspect-square"
  },
  {
    id: 12,
    title: "perfect Duo",
    year: "2025",
    material: "Gips auf Leinwand",
    image: img12,
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 13,
    title: "Ocean Breeze",
    year: "2025",
    material: "Strukturgips auf Holz",
    image: img13,
    aspectRatio: "aspect-square"
  },
  {
    id: 14,
    title: "Rote Blume",
    year: "2026",
    material: "Gips auf Leinwand",
    image: img2,
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: 15,
    title: "mountain Magic",
    year: "2026",
    material: "Gips auf Leinwand",
    image: bergeHocker,
    aspectRatio: "aspect-[3/4]"
  }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedWork = galleryData.find(w => w.id === selectedId);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const currentIndex = galleryData.findIndex(w => w.id === selectedId);
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedId(galleryData[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const currentIndex = galleryData.findIndex(w => w.id === selectedId);
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedId(galleryData[prevIndex].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") {
        if (selectedId !== null) {
          const currentIndex = galleryData.findIndex(w => w.id === selectedId);
          const nextIndex = (currentIndex + 1) % galleryData.length;
          setSelectedId(galleryData[nextIndex].id);
        }
      }
      if (e.key === "ArrowLeft") {
        if (selectedId !== null) {
          const currentIndex = galleryData.findIndex(w => w.id === selectedId);
          const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
          setSelectedId(galleryData[prevIndex].id);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header / Einstieg - Refined Hero with Overlap */}
      <header 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-48 pb-16 md:pb-32"
        style={{ 
          background: 'radial-gradient(ellipse at 100% 45%, #7E9F83 0%, transparent 45%), #FFF9F3' 
        }}
      >
        {/* Wider, Lighter Background Image/Texture */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <img 
            src={textureImg} 
            alt="Wide Background Texture" 
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full relative">
          <div className="flex flex-col md:flex-row items-center justify-center relative">
            
            {/* Center Image - Positioned first in DOM for layering if needed, or handled via z-index */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[360px] md:max-w-[500px] lg:max-w-[650px] md:ml-32 lg:ml-40"
            >
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src={galleryHeroImg} 
                  alt="Galerie Hero" 
                  className="w-full h-full object-cover object-top grayscale-[5%] hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Overlapping Text Group */}
            <div className="absolute inset-0 flex items-center justify-start z-20 pointer-events-none px-4 md:px-0">
              <div className="flex flex-col items-start gap-12 md:gap-16">
                {/* Large Text - Staggered/Offset Lines */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="max-w-full md:max-w-3xl lg:max-w-5xl"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-8xl leading-[1.05] text-mauve font-nunito font-normal uppercase tracking-tighter drop-shadow-sm flex flex-col items-start">
                    <span className="block">Meine</span>
                    <span className="block ml-16 md:ml-32 lg:ml-48">Galerie</span>
                    <span className="block ml-8 md:ml-16 lg:ml-24">für dein</span>
                    <span className="block ml-24 md:ml-48 lg:ml-64">Zuhause</span>
                  </h1>
                </motion.div>

                {/* Vertical Scroll Text - Positioned below the text */}
                <div className="hidden md:block ml-1">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-mauve/40 font-medium flex items-center gap-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Scroll Down
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. Galerie-Grid - Added more top spacing */}
      <section className="px-8 md:px-16 pt-16 md:pt-32 pb-8 md:pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 items-start">
          {galleryData.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setSelectedId(work.id)}
            >
              <div className={`w-full ${work.aspectRatio} overflow-hidden bg-creme relative`}>
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ objectPosition: work.focalPoint || 'center' }}
                  referrerPolicy="no-referrer"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-mauve/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Caption below image */}
              <div className="mt-6 flex flex-col items-start">
                <h3 className="text-2xl md:text-3xl text-mauve mb-2 group-hover:translate-x-1 transition-transform duration-500">
                  {work.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                  <span>{work.year} mit Liebe gestaltet</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Commissions />
      <Contact />

      {/* 4. Bild-Detailansicht (Lightbox) */}
      <AnimatePresence>
        {selectedId && selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedId(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={handleNext}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div 
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-8 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedWork.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedWork.image}
                alt={selectedWork.title}
                className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain shadow-2xl"
                style={{ objectPosition: selectedWork.focalPoint || 'center' }}
                referrerPolicy="no-referrer"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white"
              >
                <h3 className="text-2xl md:text-3xl mb-3">{selectedWork.title}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-light">
                  {selectedWork.year} mit Liebe gestaltet
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
