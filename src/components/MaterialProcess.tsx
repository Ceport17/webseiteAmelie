import { motion } from "motion/react";
import imgProcess1 from "./blume_rot_struktur.png";
import imgProcess2 from "./gruen_rosa_struktur.png";

export default function MaterialProcess() {
  return (
    <section className="py-32 px-8 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-creme p-4"
            >
              <img 
                src={imgProcess1} 
                alt="Prozess Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square bg-creme p-4 mt-12"
            >
              <img 
                src={imgProcess2} 
                alt="Material Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <motion.span 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-salbei text-3xl font-hand mb-2 block"
            >
              Prozess
            </motion.span>
            <h2 className="text-4xl md:text-5xl mb-8 text-mauve">Material & <br /><span className="italic">Prozess</span></h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Gips ist ein ehrliches Material. Es verzeiht wenig, aber gibt viel zurück. 
              In meinem Prozess mische ich die Masse von Hand, um die perfekte Viskosität 
              für die gewünschte Relief-Tiefe zu erreichen.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-xl font-serif text-mauve/60 mb-1">01</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Mischung</span>
              </div>
              <div>
                <span className="block text-xl font-serif text-mauve/60 mb-1">02</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Struktur</span>
              </div>
              <div>
                <span className="block text-xl font-serif text-mauve/60 mb-1">03</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Lichtspiel</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
