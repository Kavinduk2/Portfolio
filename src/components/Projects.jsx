import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    category: "WEB APP",
    title: "ReLife",
    description: "Web app with a RAG system",
    image: "/relife.png",
    bg: "linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1e3a8a 100%)",
    imgStyle: { background: "linear-gradient(160deg, #60a5fa 0%, #3b82f6 50%, #1e40af 100%)" },
  },
  {
    id: 2,
    category: "NPM PACKAGE",
    title: "RoutePulse",
    description: "Modern routing and navigation package",
    image: "/npm.webp",
    bg: "linear-gradient(135deg, #ec4899 0%, #be183d 50%, #831843 100%)",
    imgStyle: { background: "linear-gradient(160deg, #f472b6 0%, #ec4899 50%, #be183d 100%)" },
  },
  {
    id: 3,
    category: "ML MODEL",
    title: "DimestiaInsight",
    description: "Advanced dementia diagnosis and insights",
    image: "/dimentia.avif",
    bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 50%, #4c1d95 100%)",
    imgStyle: { background: "linear-gradient(160deg, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%)" },
  },
  {
    id: 4,
    category: "ML MODEL",
    title: "Medpredict",
    description: "Medical prediction and diagnosis system",
    image: "/medpredict.png",
    bg: "linear-gradient(135deg, #10b981 0%, #047857 50%, #064e3b 100%)",
    imgStyle: { background: "linear-gradient(160deg, #6ee7b7 0%, #10b981 50%, #047857 100%)" },
  },
];

const additionalProjects = [
  {
    id: 5,
    category: "DATA ANALYTICS",
    title: "InsightHub",
    description: "Real-time data visualization and analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
    imgStyle: { background: "linear-gradient(160deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)" },
  },
  {
    id: 6,
    category: "BLOCKCHAIN",
    title: "CryptoVault",
    description: "Secure blockchain wallet and management",
    image: "https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=500&h=300&fit=crop",
    bg: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
    imgStyle: { background: "linear-gradient(160deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%)" },
  },
  {
    id: 7,
    category: "AI TOOLS",
    title: "CodeAssist AI",
    description: "AI-powered code completion and analysis",
    image: "https://images.unsplash.com/photo-1677442d019cecf92818e8d9a47a3c8b0e3f8f8f?w=500&h=300&fit=crop",
    bg: "linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #065f46 100%)",
    imgStyle: { background: "linear-gradient(160deg, #2dd4bf 0%, #14b8a6 50%, #0d9488 100%)" },
  },
  {
    id: 8,
    category: "IOT PLATFORM",
    title: "SmartHub",
    description: "IoT device management and automation",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=300&fit=crop",
    bg: "linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)",
    imgStyle: { background: "linear-gradient(160deg, #fb7185 0%, #f43f5e 50%, #e11d48 100%)" },
  },
];

function ProjectCard({ p, visible, index }) {
  return (
    <div
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
    </div>
  );
}

export default function Projects({ isDark }) {
  const [row1Visible, setRow1Visible] = useState(false);
  const [row2Visible, setRow2Visible] = useState(false);
  const [row3Visible, setRow3Visible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => e.isIntersecting && setRow1Visible(true), { threshold: 0.15 });
    const obs2 = new IntersectionObserver(([e]) => e.isIntersecting && setRow2Visible(true), { threshold: 0.15 });
    const obs3 = new IntersectionObserver(([e]) => e.isIntersecting && setRow3Visible(true), { threshold: 0.15 });
    if (row1Ref.current) obs1.observe(row1Ref.current);
    if (row2Ref.current) obs2.observe(row2Ref.current);
    if (row3Ref.current) obs3.observe(row3Ref.current);
    return () => { obs1.disconnect(); obs2.disconnect(); obs3.disconnect(); };
  }, []);

  return (
    <section id="works" className={`w-full pt-16 pb-0 px-8 ${isDark ? "bg-[#1a1a1a]" : "bg-[#f0efed]"}`}>
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

        {/* Additional 4 Projects - Show when "More Projects" is clicked */}
        {showMore && (
          <div 
            className="grid grid-cols-2 gap-x-16 gap-y-12 mb-12" 
            ref={row3Ref}
            style={{
              opacity: row3Visible ? 1 : 0,
              transform: row3Visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {additionalProjects.map((p, i) => (
              <ProjectCard key={p.id} p={p} visible={showMore} index={i} />
            ))}
          </div>
        )}

        <div className="flex justify-center pb-16">
          <button 
            onClick={() => setShowMore(!showMore)}
            className={`px-10 py-4 border text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3 ${isDark ? "border-white text-white hover:bg-white hover:text-black" : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"}`}
          >
            {showMore ? "Show Less" : "More Projects"}
            <svg 
              className="w-4 h-4 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
