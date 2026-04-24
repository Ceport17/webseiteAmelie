import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import img1 from "./hero_berge.png";
import img2 from "./gruen_rosa_struktur.png";
import img3 from "./struktur_gruen_rot.png";
import img4 from "./struktur_blau_berge.png";

const previewImages = [
  img2,
  img1,
  img4,
  img3,
];

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="pt-32 md:pt-48 pb-16 md:pb-24 px-8 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs uppercase tracking-[0.5em] text-mauve/60 mb-4">Einblicke</h2>
          <div className="w-8 h-[1px] bg-salbei mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {previewImages.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer group"
            >
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[3/4] overflow-hidden bg-creme relative"
              >
                <motion.img 
                  style={{ y: i % 2 === 0 ? y : 0, scale: 1.1 }}
                  src={img} 
                  alt={`Galerie Vorschau ${i}`} 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.15]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-mauve/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <Link 
            to="/galerie" 
            className="inline-block text-[10px] uppercase tracking-[0.5em] text-mauve hover:text-black transition-all duration-500 border-b border-mauve/10 hover:border-black pb-3"
          >
            Entdecke die gesamte Kollektion
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Großansicht" 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
