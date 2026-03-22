import React, { useState, useEffect, useRef } from "react";

const certs = [
  {
    title: "AI Agents and Agentic AI with Python & Generative AI",
    issuer: "Vanderbilt University",
    issued: "Dec 2025",
    credentialId: "DR5IXYGTU4UD",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DR5IXYGTU4UD",
    image: "/aiagents-certifiate.png",
    skills: ["Agentic AI Development", "Python (Programming Language)", "+1 skill"],
  },
  {
    title: "Backend Development: Node.js, Express, MongoDB & REST APIs",
    issuer: "Board Infinity",
    issued: "Dec 2025",
    credentialId: "DYYT15U23BAM",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DYYT15U23BAM",
    image: "/backend-certificate.png",
    skills: ["Node.js", "Express.js", "+3 skills"],
  },
  {
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "DeepLearning.AI",
    issued: "Nov 2025",
    credentialId: "DC386SORD1PT",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DC386SORD1PT",
    image: "/linearalgebracertificate.png",
    skills: ["Mathematics", "Machine Learning"],
  },
  {
    title: "Create a Supermarket app using OOP Features in Java",
    issuer: "Coursera Project Network",
    issued: "Sep 2025",
    credentialId: "SQZNLAI9DI4F",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/SQZNLAI9DI4F",
    image: "/oopcertificate.png",
    skills: ["Java", "Object-Oriented Programming (OOP)"],
  },
];

export default function Certifications({ isDark }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`w-full py-24 px-8 ${isDark ? "bg-white" : "bg-[#111]"}`} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className={`text-xs tracking-widest mb-2 uppercase ${isDark ? "text-gray-600" : "text-gray-500"}`}>Credentials</p>
            <h2
              className={`text-4xl font-light ${isDark ? "text-gray-900" : "text-white"}`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              Certifications
            </h2>
          </div>
          <div className={`w-16 h-px ${isDark ? "bg-gray-300" : "bg-gray-700"}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-5 transition-all duration-300 group ${isDark ? "border-gray-300 hover:border-gray-400 bg-white/60" : "border-white/10 hover:border-white/30 bg-white/5"}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-black/10">
                <img src={c.image} alt={`${c.issuer} certificate`} className="w-full h-44 object-cover" loading="lazy" />
              </div>

              <h3 className={`font-light text-lg leading-snug mb-2 transition-colors ${isDark ? "text-gray-900 group-hover:text-gray-700" : "text-white group-hover:text-gray-200"}`}>
                {c.title}
              </h3>

              <p className={`text-sm mb-1 ${isDark ? "text-gray-700" : "text-gray-300"}`}>{c.issuer}</p>
              <p className={`text-xs mb-2 ${isDark ? "text-gray-600" : "text-gray-400"}`}>Issued {c.issued}</p>
              <p className={`text-xs mb-4 ${isDark ? "text-gray-600" : "text-gray-400"}`}>Credential ID {c.credentialId}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {c.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] px-2.5 py-1 rounded-full border ${isDark ? "text-gray-700 border-gray-300" : "text-gray-300 border-white/20"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={c.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs tracking-wide uppercase border px-3 py-1.5 rounded-full transition-colors ${isDark ? "text-gray-800 border-gray-300 hover:bg-gray-100" : "text-gray-200 border-white/20 hover:bg-white/10"}`}
              >
                Show credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
