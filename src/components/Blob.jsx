import React from "react";

export default function Blob() {
  return (
    <div className="relative w-[420px] h-[420px] mx-auto select-none pointer-events-none">
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          background:
            "conic-gradient(from 180deg at 50% 50%, #ff6ec4, #7873f5, #4adede, #ffdd57, #ff6ec4)",
          filter: "blur(0px) saturate(1.5)",
          animation: "morphBlob 8s ease-in-out infinite, spinBlob 12s linear infinite",
          boxShadow: "0 0 80px 20px rgba(120,115,245,0.25)",
        }}
      />
      <style>{`
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; }
          25%      { border-radius: 40% 60% 45% 55% / 60% 40% 55% 45%; }
          50%      { border-radius: 55% 45% 60% 40% / 45% 55% 50% 50%; }
          75%      { border-radius: 45% 55% 40% 60% / 55% 45% 45% 55%; }
        }
        @keyframes spinBlob {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
