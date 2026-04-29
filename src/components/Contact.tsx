import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import herz from "./herz.webp";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjgjlezd");
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  return (
    <section id="kontakt" className="pt-8 pb-16 px-8 md:px-16 bg-[#FFF9F3]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 flex flex-col items-center">
          <img
            src={herz}
            alt="Herz"
            loading="lazy"
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
          {state.succeeded ? (
            <div className="text-center py-12">
              <div className="mb-4 text-4xl">✓</div>
              <h3 className="text-xl text-mauve mb-2">Vielen Dank für deine Nachricht!</h3>
              <p className="text-gray-600">Ich melde mich so schnell wie möglich bei dir.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot field - versteckt vor Bots */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light text-left text-sm"
                    placeholder="Dein Name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-xs text-red-600 mt-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light text-left text-sm"
                    placeholder="deine@email.de"
                  />
                  <ValidationError
                    prefix="E-Mail"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-red-600 mt-1"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light text-left text-sm"
                  placeholder="Welches Bild gefällt dir?"
                />
                <ValidationError
                  prefix="Betreff"
                  field="subject"
                  errors={state.errors}
                  className="text-xs text-red-600 mt-1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  className="border-b border-gray-200 py-2 focus:border-mauve outline-none transition-colors font-light resize-none text-left text-sm"
                  placeholder="Deine Nachricht an mich... (mindestens 10 Zeichen)"
                ></textarea>
                <ValidationError
                  prefix="Nachricht"
                  field="message"
                  errors={state.errors}
                  className="text-xs text-red-600 mt-1"
                />
              </div>

              {/* Cloudflare Turnstile */}
              <div className="flex flex-col gap-2">
                <Turnstile
                  siteKey="0x4AAAAAADCqppict00up581"
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken("")}
                  onExpire={() => setTurnstileToken("")}
                />
              </div>

              {/* Hidden field for Turnstile token */}
              <input
                type="hidden"
                name="cf-turnstile-response"
                value={turnstileToken}
              />

              <div className="pt-4 flex justify-center md:justify-start">
                <motion.button
                  whileTap={!state.submitting && turnstileToken ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={state.submitting || !turnstileToken}
                  className="w-full md:w-auto px-12 py-4 bg-mauve text-white uppercase tracking-[0.3em] text-[10px] font-medium hover:bg-opacity-90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
