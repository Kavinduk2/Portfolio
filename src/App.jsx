import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={isDark ? "bg-[#0a0a0a] text-white" : ""} style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <Navbar scrollY={scrollY} isDark={isDark} setIsDark={setIsDark} />
      <Hero scrollY={scrollY} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Certifications isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
