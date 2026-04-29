/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import SelectedWorks from "./components/SelectedWorks";
import GalleryPreview from "./components/GalleryPreview";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import ScrollToTopButton from "./components/ScrollToTop";

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <SelectedWorks />
      <GalleryPreview />
      <About />
      <Contact />
    </main>
  );
}

function AppInner() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/kontakt" element={<div className="pt-32 px-16 min-h-screen">Anfrage (In Arbeit)</div>} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<Privacy />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
