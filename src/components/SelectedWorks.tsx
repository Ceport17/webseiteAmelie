import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, X } from "lucide-react";

import img1 from "./Strand2.png";
import img2 from "./welle_rahmen.png";
import img3 from "./quadrat_blume.png";
import img4 from "./berge_blau_struktur.png";
import img5 from "./gruen_rosa_struktur.png";
import img6 from "./struktur_weiss_beige.png";
import img7 from "./struktur_gruen.png";
import img8 from "./welle_beije.png";
import img9 from "./welle_hoch.png";
import profileImg from "./amelie_profil.png";

const works = [
  {
    id: 2,
    title: "soft Beige",
    image: img6,
    description: "Mixed Media Structure",
    year: "2024",
    aspect: "aspect-square",
    focal: "38%"
  },
  {
    id: 1,
    title: "Ocean Breeze",
    image: img1,
    description: "Gips on Canvas",
    year: "2024",
    aspect: "aspect-[16/10]",
    focal: "38%"
  },
  {
    id: 4,
    title: "spring Vibes",
    image: img5,
    description: "Strukturgips auf Holz",
    year: "2024",
    aspect: "aspect-[3/4]",
    focal: "38%"
  },
  {
    id: 3,
    title: "quiet Field",
    image: img7,
    description: "Strukturgips auf Holz",
    year: "2023",
    aspect: "aspect-[4/3]",
    focal: "38%"
  },
  {
    id: 5,
    title: "peaceful Mountains",
    image: img4,
    description: "Gips auf Leinwand",
    year: "2024",
    aspect: "aspect-square",
    focal: "28%"
  },
  {
    id: 6,
    title: "sandy Beach",
    image: img9,
    description: "Strukturgips auf Holz",
    year: "2024",
    aspect: "aspect-[3/4]",
    focal: "38%"
  }
];

export default function SelectedWorks() {
  // Desktop Carousel Logic
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Mobile Stack Logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Initialize to 1 to fix the first swipe animation
  
  // Lightbox Logic
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onScroll = useCallback((emblaApi: any) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Mobile Handlers
  const nextSlide = () => {
    if (currentIndex < works.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-creme overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-mauve uppercase tracking-[0.4em] font-nunito mb-8">
            Meine Favoriten.
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl leading-relaxed">
            Jedes Bild ist ein Einzelstück, das ich mit viel Zeit und Hingabe in meinem Wohnzimmer gestalte. Es geht mir darum, schlichte Designs zu schaffen, die sich in deinem Zuhause einfach gut anfühlen.
          </p>
        </div>

        {/* MOBILE VERSION: Stacked Tinder-like UI */}
        <div className="md:hidden flex flex-col min-h-[80vh]">
          {/* Mobile Metadata Header */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-mauve/10 shadow-sm">
                <img 
                  src={profileImg} 
                  alt="Amelie" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs text-mauve font-medium tracking-wide">Amelie Artstudio</span>
            </div>

          </div>

          {/* Mobile Title */}
          <div className="text-center mb-12">
            <motion.h2 
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl text-mauve"
            >
              {works[currentIndex].title}
            </motion.h2>
          </div>

          {/* Mobile Stack & Vertical Progress */}
          <div className="relative flex-1 flex items-center justify-center px-4">
            {/* Vertical Progress Bar (Right) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-48 bg-mauve/10 rounded-full">
              <motion.div 
                className="w-full bg-mauve rounded-full"
                initial={false}
                animate={{ 
                  height: `${((currentIndex + 1) / works.length) * 100}%`,
                  top: `${(currentIndex / works.length) * 100}%`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            {/* The Stack */}
            <div className="relative w-full max-w-[300px] aspect-[4/5]">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                {works.slice(currentIndex, currentIndex + 3).map((work, index) => (
                  <motion.div
                    key={work.id}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1 - index * 0.06, 
                      y: index * 20,
                      zIndex: works.length - index,
                      filter: `blur(${index * 1}px)`
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: direction > 0 ? -300 : 0, 
                      rotate: direction > 0 ? -15 : 0,
                      scale: direction > 0 ? 1 : 0.8,
                      transition: { duration: 0.4 }
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="absolute inset-0 bg-white shadow-2xl overflow-hidden rounded-sm cursor-pointer"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x > 100) prevSlide();
                      else if (info.offset.x < -100) nextSlide();
                    }}
                    onClick={() => index === 0 && setSelectedImage(work.image)}
                  >
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover grayscale-[5%]"
                      style={{ objectPosition: `center ${work.focal}` }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex justify-center gap-8 mt-16 pb-12">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-16 h-16 rounded-full bg-salbei flex items-center justify-center text-white shadow-sm transition-all ${currentIndex === 0 ? 'opacity-30' : 'active:scale-90 hover:bg-salbei/80'}`}
            >
              <ArrowDown size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex === works.length - 1}
              className={`w-16 h-16 rounded-full bg-salbei flex items-center justify-center text-white shadow-sm transition-all ${currentIndex === works.length - 1 ? 'opacity-30' : 'active:scale-90 hover:bg-salbei/80'}`}
            >
              <ArrowUp size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* DESKTOP VERSION: Carousel UI */}
        <div className="hidden md:block">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex gap-8 md:gap-12">
              {works.map((work) => (
                <div key={work.id} className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className={`w-full ${work.aspect} overflow-hidden bg-white/50 cursor-pointer`}>
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
                        style={{ objectPosition: `center ${work.focal}` }}
                        referrerPolicy="no-referrer"
                        onClick={() => setSelectedImage(work.image)}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-mauve/10">
                          <img 
                            src={profileImg} 
                            alt="Amelie" 
                            className="w-full h-full object-cover grayscale"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-2xl md:text-3xl text-mauve">{work.title}</h3>
                          <p className="text-[9px] text-gray-400 uppercase tracking-[0.1em] font-light">Amelie Artstudio</p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="mt-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex gap-4">
              <button 
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`w-14 h-14 rounded-full bg-salbei text-white flex items-center justify-center transition-all duration-300 ${!canScrollPrev ? 'opacity-10 cursor-not-allowed' : 'hover:bg-salbei/80'}`}
                aria-label="Vorheriges Bild"
              >
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`w-14 h-14 rounded-full bg-salbei text-white flex items-center justify-center transition-all duration-300 ${!canScrollNext ? 'opacity-10 cursor-not-allowed' : 'hover:bg-salbei/80'}`}
                aria-label="Nächstes Bild"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 w-full h-[2px] bg-mauve/20 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-mauve"
                style={{ width: `${scrollProgress}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>

      </div>
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Art Detail" 
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
