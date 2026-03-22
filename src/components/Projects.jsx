import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    category: "RAG SYSTEM WEB APP",
    title: "ReLife",
    description: "Web app with a RAG system",
    image: "/relife.png",
    link: "https://github.com/ReLife-RAG/Re-life",
    bg: "linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1e3a8a 100%)",
    imgStyle: { background: "linear-gradient(160deg, #60a5fa 0%, #3b82f6 50%, #1e40af 100%)" },
  },
  {
    id: 2,
    category: "NPM PACKAGE",
    title: "RoutePulse",
    description: "Modern routing and navigation package",
    image: "/npm.webp",
    link: "https://github.com/Kavinduk2/routePulse",
    bg: "linear-gradient(135deg, #ec4899 0%, #be183d 50%, #831843 100%)",
    imgStyle: { background: "linear-gradient(160deg, #f472b6 0%, #ec4899 50%, #be183d 100%)" },
  },
  {
    id: 3,
    category: "ML MODEL",
    title: "DementiaInsight",
    description: "Advanced dementia diagnosis and insights",
    image: "/dimentia.avif",
    link: "https://github.com/vidun-upek/DementiaInsight",
    bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 50%, #4c1d95 100%)",
    imgStyle: { background: "linear-gradient(160deg, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%)" },
  },
  {
    id: 4,
    category: "MERN APP",
    title: "MERN Doctor",
    description: "Doctor appointment and medical platform built with MERN",
    image: "/medpredict.png",
    link: "https://github.com/Kavinduk2/mern-doctor",
    bg: "linear-gradient(135deg, #10b981 0%, #047857 50%, #064e3b 100%)",
    imgStyle: { background: "linear-gradient(160deg, #6ee7b7 0%, #10b981 50%, #047857 100%)" },
  },
];

function ProjectCard({ p, visible, index }) {
  const CardTag = p.link ? "a" : "div";
  const cardProps = p.link
    ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardTag
      {...cardProps}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
      }}
    >
      <p className="text-[10px] tracking-[0.2em] text-gray-500 mb-2 uppercase">{p.category}</p>

      <div
        className="relative overflow-hidden"
        style={{ height: 280, ...p.imgStyle }}
      >
        {p.image ? (
          <img 
            src={p.image} 
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <h3
            className="text-white text-2xl font-light"
            style={{ fontFamily: "Georgia, serif", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
          >
            {p.title}
          </h3>
          {p.description && (
            <p className="text-white/80 text-sm mt-2 font-light">
              {p.description}
            </p>
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 w-14 h-14 rounded-full border border-white/70 bg-black/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
      </div>
    </CardTag>
  );
}

export default function Projects({ isDark }) {
  const [row1Visible, setRow1Visible] = useState(false);
  const row1Ref = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => e.isIntersecting && setRow1Visible(true), { threshold: 0.15 });
    if (row1Ref.current) obs1.observe(row1Ref.current);
    return () => { obs1.disconnect(); };
  }, []);

  return (
    <section id="works" className={`w-full pt-16 pb-16 px-8 ${isDark ? "bg-[#1a1a1a]" : "bg-[#f0efed]"}`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-light mb-1 max-w-sm leading-snug ${isDark ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "Georgia, serif" }}
        >
          Discover my latest work and creative solutions that bring ideas to life
        </h2>
        <div className="mb-10 mt-3" />

        {/* First 4 Projects */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 mb-12" ref={row1Ref}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} visible={row1Visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
