import React from "react";

const technologies = [
  "Python (ML & AI)",
  "Java",
  "Next.js",
  "PHP",
  "Node.js",
  "React",
  "GitHub",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "MongoDB",
];

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`relative w-full flex flex-col items-center justify-center px-8 pt-14 pb-24 overflow-hidden ${isDark ? "bg-white text-gray-900" : "bg-[#111] text-white"}`}
      style={{ borderRadius: "0 0 0 0" }}
    >
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .tech-scroll {
          animation: scroll-left 25s linear infinite;
        }
        .tech-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Curved top */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{ backgroundColor: "transparent", borderRadius: "0 0 50% 50% / 0 0 60px 60px" }}
      />

      <div className="max-w-3xl text-center">
        <h2
          className={`text-4xl md:text-5xl font-light leading-tight mb-8 ${isDark ? "text-gray-900" : "text-white"}`}
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          I'm Kavindu — a Full-Stack Developer crafting intelligent, scalable, and robust digital experiences that merge solid engineering with AI innovation.
        </h2>
        <p className={`text-base md:text-lg leading-relaxed ${isDark ? "text-gray-800" : "text-gray-300"}`}>
          I specialize in building full-stack web platforms, machine learning solutions, and open-source developer tools using technologies like Next.js, Java, Python, and PHP.
        </p>
      </div>

      {/* Technologies Scroll Section */}
      <div className="w-full mt-16">
        <p className={`text-center text-sm uppercase tracking-widest mb-6 ${isDark ? "text-gray-600" : "text-gray-400"}`}>
          Technologies & Tools
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max tech-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 mx-2 rounded-full border text-sm whitespace-nowrap transition-all ${
                  isDark
                    ? "border-gray-900/30 text-gray-700 hover:border-gray-900/60 hover:bg-gray-50"
                    : "border-white/20 text-gray-300 hover:border-white/60 hover:bg-white/5"
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
          {/* Gradient fade effect */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 pointer-events-none ${
              isDark ? "bg-gradient-to-r from-white to-transparent" : "bg-gradient-to-r from-[#111] to-transparent"
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 pointer-events-none ${
              isDark ? "bg-gradient-to-l from-white to-transparent" : "bg-gradient-to-l from-[#111] to-transparent"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
