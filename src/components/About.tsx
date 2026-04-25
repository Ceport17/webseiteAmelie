import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import profilImg from "./amelie_profil.webp";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1.2]);

  return (
    <section ref={containerRef} className="pt-16 md:pt-24 pb-32 md:pb-48 px-8 md:px-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex justify-center"
        >
          <div className="relative">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[12px] border-creme shadow-2xl relative bg-creme">
              <motion.img
                style={{ y, scale }}
                src={profilImg}
                alt="Amelie"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute bottom-4 right-4 w-10 h-10 bg-salbei rounded-full shadow-lg"
            >
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.5em] mb-10 text-mauve text-center font-light">ÜBER MICH.</h2>
          <div className="w-12 h-[1px] bg-salbei mx-auto mb-10"></div>
          <p className="text-gray-500 leading-relaxed mb-16 text-lg md:text-xl text-center font-light max-w-2xl mx-auto">
            Ich bin Amelie, eine Künstlerin aus dem Norden Deutschlands. 
            Durch mein Interior Design Studium habe ich gemerkt, wie sehr Oberflächen verändern, wie wir uns in einem Raum fühlen. 
            Deshalb stecken in jedem meiner Stücke viel Detailarbeit und echtes Handwerk.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative pt-16 max-w-2xl mx-auto text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-salbei/30"></div>
          <p className="text-mauve font-sans font-light text-lg md:text-xl lg:text-2xl leading-relaxed">
            Mein Ziel ist eigentlich ganz simpel: <br className="md:hidden" />Ich möchte dir mit meinen Bildern ein bisschen{" "}
            <span className="relative inline-block">
              Ruhe nach Hause geben.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 overflow-visible pointer-events-none"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2,8.5c45.2-1.3,90.4-2.1,135.6-2c40.3,0.1,80.7,0.8,120.9,2.8c12.5,0.6,25,1.4,37.5,2.7"
                  fill="none"
                  stroke="#7E9F83"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
