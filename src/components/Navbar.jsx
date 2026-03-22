import React, { useState } from "react";

export default function Navbar({ scrollY, isDark, setIsDark }) {
  const solid = scrollY > 60;
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-300"
      style={{ 
        background: solid 
          ? isDark 
            ? "rgba(15,15,15,0.95)" 
            : "rgba(240,239,237,0.95)" 
          : "transparent", 
        backdropFilter: solid ? "blur(12px)" : "none" 
      }}
    >
      <div className={`font-bold text-xl tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>R.</div>
      <div className={`hidden md:flex items-center gap-8 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        {["Home", "About", "Works", "Contacts"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={`hover:${isDark ? "text-white" : "text-gray-900"} transition-colors tracking-wide`}
          >
            {l}
          </a>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-2">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-5 py-2.5 text-sm rounded-full transition-all ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-700"}`}
        >
          Resume
        </a>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-700"}`}
          title="Toggle theme"
        >
          {isDark ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/><path d="M12 2v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M2 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"/></svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      <button
        className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white ${isDark ? "bg-white text-black" : "bg-gray-900"}`}
        onClick={() => setOpen(!open)}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          }
        </svg>
      </button>
      {open && (
        <div className={`absolute top-full left-0 right-0 border-t py-6 px-8 flex flex-col gap-4 md:hidden ${isDark ? "bg-[#1a1a1a] border-gray-700" : "bg-[#f0efed] border-gray-200"}`}>
          {["Home", "About", "Works", "Contacts"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`text-lg font-light ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
