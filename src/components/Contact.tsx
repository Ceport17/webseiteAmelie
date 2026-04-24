import { motion } from "motion/react";
import herz from "./herz.png";

export default function Contact() {
  return (
    <section id="kontakt" className="pt-8 pb-16 px-8 md:px-16 bg-[#FFF9F3]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 flex flex-col items-center">
          <img 
            src={herz} 
            alt="Herz" 
            className="w-16 h-auto opacity-60 mb-6" 
            referrerPolicy="no-referrer"
          />
          <h2 className="text-2xl md:text-3xl text-mauve">Deine Nachricht an mich.</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-sm text-left"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light text-left text-sm"
                  placeholder="Dein Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">E-Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light text-left text-sm"
                  placeholder="deine@email.de"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Betreff</label>
              <input 
                type="text" 
                id="subject" 
                className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light text-left text-sm"
                placeholder="Welches Bild gefällt dir?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Nachricht</label>
              <textarea 
                id="message" 
                rows={4}
                className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light resize-none text-left text-sm"
                placeholder="Deine Nachricht an mich..."
              ></textarea>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-mauve text-white uppercase tracking-[0.3em] text-[10px] font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Nachricht senden
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
