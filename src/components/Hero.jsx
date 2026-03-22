import React from "react";

export default function Hero({ scrollY }) {
  const textY = scrollY * 0.15;

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Left sidebar line + icons */}
      <div className="absolute left-8 top-0 bottom-0 flex flex-col items-center pt-32 z-10">
        <div className="w-px flex-1 max-h-32 bg-gray-400" />
        <div className="flex flex-col gap-5 mt-8">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, link: "https://linkedin.com/in/kavinduk2r" },
            { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>, link: "https://github.com/Kavinduk2" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, link: "mailto:Kavinduk.ranathunga@gmail.com" },
          ].map((item, i) => (
            <a key={i} href={item.link} target={item.link.startsWith('mailto') ? undefined : "_blank"} rel={item.link.startsWith('mailto') ? undefined : "noopener noreferrer"} className="transition-colors text-gray-300 hover:text-white">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Text overlay */}
      <div
        className="relative z-10 text-center"
        style={{ transform: `translateY(${textY}px)`, transition: "transform 0.05s linear" }}
      >
        <p className="text-sm tracking-widest mb-3 font-light text-black">Hi! I'm Kavindu</p>
        <h1 className="text-6xl md:text-7xl font-thin leading-tight tracking-tight text-white">
          Full-stack Developer
        </h1>
        <h1 className="text-6xl md:text-7xl font-thin text-white leading-tight tracking-tight">
          Machine Learning Engineer.
        </h1>
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 z-10">
        <span className="text-xs tracking-widest uppercase">scroll down</span>
      </div>

      {/* Right scroll indicator */}
      <button
        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
        className="absolute right-8 bottom-8 w-12 h-12 rounded-full border border-gray-300 text-gray-300 flex items-center justify-center transition-all hover:bg-white hover:text-black hover:border-white z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/></svg>
      </button>
    </section>
  );
}
