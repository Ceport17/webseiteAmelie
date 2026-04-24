import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import welle from "./welle.png";
import smallImg from "./gruen_quadrat.png";
import mainIntroImg from "./gruen_berge.png";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-8 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center">
        
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start text-left"
        >
          <img 
            src={welle} 
            alt="Welle" 
            className="w-20 h-auto mb-10 opacity-60" 
            referrerPolicy="no-referrer"
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-10 leading-[1.1] text-mauve uppercase tracking-[0.2em] font-light">
            Moderne <br className="md:hidden" />
            Texturen <br />
            für deine <br className="hidden lg:block" /> Räume.
          </h2>
          <div className="w-12 h-[1px] bg-salbei mb-10"></div>
          <p className="text-gray-500 leading-relaxed max-w-md font-light text-lg md:text-xl">
            Auf dieser Seite findest du handgemachte Einzelstücke, die Ruhe in deinen Alltag bringen sollen. 
            Ich arbeite am liebsten mit Strukturpaste und Leinwand, weil ich es mag, wenn Kunst nicht nur flach ist, 
            sondern eine richtige Oberfläche hat.
          </p>
        </motion.div>

        {/* Right Image Group */}
        <div className="w-full md:w-1/2 relative flex justify-end">
          {/* Main Image with Mask */}
          <motion.div 
            className="w-full md:w-4/5 aspect-[4/5] overflow-hidden bg-creme"
            style={{ 
              y: y1,
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 3%, black 97%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 3%, black 97%, transparent)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          >
            <motion.img 
              style={{ scale }}
              src={mainIntroImg} 
              alt="Atelier Szene" 
              className="w-full h-full object-cover grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Overlapping Small Image with Mask */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-20 -left-12 md:-left-24 w-3/5 aspect-square shadow-2xl overflow-hidden z-10"
          >
            <motion.img 
              style={{ scale: 1.1 }}
              src={smallImg} 
              alt="Detail Struktur" 
              className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
