import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isGallery = location.pathname === "/galerie";
  const isHome = location.pathname === "/";

  // If we are on Home or Gallery, we want to scroll to the local #kontakt section
  const contactHref = (isHome || isGallery) ? "#kontakt" : "/#kontakt";

  const navLinks = [
    { name: "Galerie", href: "/galerie", isExternal: false },
    { name: "Anfrage", href: contactHref, isExternal: true },
  ];

  return (
    <>
      <header className="hidden md:flex justify-between items-center py-8 px-8 md:px-16 relative md:shadow-sm">
        {/* Desktop Logo */}
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link to="/">
            <img
              src={logo}
              alt="Amelie Artstudio Logo"
              className="h-16 md:h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const textLogo = document.createElement('span');
                textLogo.className = "text-2xl font-serif font-medium italic tracking-widest text-black";
                textLogo.innerText = "Amelie Artstudio.";
                e.currentTarget.parentElement?.appendChild(textLogo);
              }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 md:gap-12 text-sm md:text-base uppercase tracking-[0.3em] font-medium text-black">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a key={link.name} href={link.href} className="hover:text-mauve transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-mauve transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-mauve transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-mauve transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          ))}
        </nav>
      </header>

      {/* Mobile Menu Button - Floating */}
      <button
        className="md:hidden fixed top-4 right-4 z-[100] bg-white/80 backdrop-blur-md rounded-full h-12 w-12 flex items-center justify-center shadow-lg text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menü öffnen"
      >
        {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-start pt-48 gap-12"
          >
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl uppercase tracking-[0.3em] font-light text-black transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl uppercase tracking-[0.3em] font-light text-black transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
