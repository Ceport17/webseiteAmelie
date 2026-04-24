import { motion } from "motion/react";
import { useEffect } from "react";

export default function Imprint() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-16 bg-creme min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl mb-12 text-mauve uppercase tracking-[0.2em] font-light">
            Impressum
          </h1>
          
          <div className="space-y-12 text-gray-500 font-light leading-relaxed text-sm md:text-lg">
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-lg">
                Amelie Wrage<br />
                Sandberg 4-6<br />
                25335 Elmshorn
              </p>
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-4">Kontakt</h2>
              <p className="text-lg">
                E-Mail: <a href="mailto:amelie-artstudio@web.de" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">amelie-artstudio@web.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-4">Verbraucherstreitbeilegung</h2>
              <p className="text-lg">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <div className="pt-12 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-mauve transition-colors">e-recht24.de</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
