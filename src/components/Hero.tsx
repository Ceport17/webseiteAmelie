import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImg from "./berge_blau_struktur.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-40 pb-20 px-8 md:px-16 gap-16 md:gap-24 lg:gap-32 overflow-hidden hero-gradient">
      {/* Portrait Image with subtle Parallax */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div 
          className="relative w-full max-w-[360px] md:max-w-[480px] lg:max-w-[560px] aspect-[4/5] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 3%, black 75%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 3%, black 75%, transparent)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}
        >
          <motion.img 
            src={heroImg} 
            alt="Handgefertigte Struktur" 
            className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 80]), scale: 1.15 }}
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Right Text Block */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="w-full md:w-2/5 flex flex-col items-start"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-mauve font-nunito font-normal">
          Stille <br />
          <span className="italic">Struktur.</span>
        </h1>
        <motion.div 
          whileTap={{ scale: 0.98 }}
          className="w-full md:w-auto"
        >
          <Link 
            to="/galerie" 
            className="inline-block px-10 py-4 border border-mauve text-mauve uppercase tracking-[0.3em] text-[10px] font-medium hover:bg-mauve hover:text-white transition-all duration-500"
          >
            Zur Galerie
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
