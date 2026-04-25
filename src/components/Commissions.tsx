import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import commImage from "./amelie_wuensche.webp";

export default function Commissions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="pt-16 md:pt-24 pb-32 md:pb-48 px-8 md:px-16 bg-[#FFF9F3] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 md:gap-32 items-center">
        
        {/* Right Text (Slide-up animation) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start md:items-center text-left md:text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-10 leading-[1.2] text-mauve uppercase tracking-[0.3em] font-light">
            Ganz <br className="md:hidden" />
            persönlich <br />
            für dich.
          </h2>
          <div className="w-12 h-[1px] bg-salbei mb-10 mx-auto md:mx-auto"></div>
          <p className="text-gray-500 leading-relaxed max-w-md font-light text-lg md:text-xl">
            Wenn du Lust auf ein individuelles Bild hast, schreib mir gerne eine Nachricht mit deinen Wünschen an Farbe und Motiv. 
            Ich gestalte ein ganz besonderes Bild für dein Zuhause.
          </p>
        </motion.div>

        {/* Left Image (Parallax with Mask) */}
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            className="w-full aspect-[4/5] overflow-hidden bg-white shadow-2xl"
            style={{ y }}
          >
            <motion.img
              style={{ scale }}
              src={commImage}
              alt="Individuell Kunst"
              loading="lazy"
              className="w-full h-full object-cover grayscale-[10%]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative element */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-8 -right-8 w-24 h-24 border border-salbei/30 -z-10 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
