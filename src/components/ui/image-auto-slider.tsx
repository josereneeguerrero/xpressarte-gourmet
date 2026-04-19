"use client";

import React from "react";

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageAutoSliderProps {
  images: SliderImage[];
  speed?: number;
}

export function ImageAutoSlider({ images, speed = 30 }: ImageAutoSliderProps) {
  const duplicated = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes xpa-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .xpa-track {
          animation: xpa-scroll ${speed}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .xpa-track { animation: none; }
        }
        .xpa-mask {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .xpa-item {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease;
        }
        .xpa-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="xpa-mask w-full overflow-hidden">
        <div className="xpa-track flex gap-4 w-max py-2">
          {duplicated.map((img, i) => (
            <div
              key={i}
              className="xpa-item flex-shrink-0 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #1a1508 0%, #0f0f0f 100%)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.6)",
                border: "1px solid rgba(229,178,26,0.08)",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-[#E5B21A]/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-[#E5B21A]/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-[#E5B21A]/25 to-transparent z-10 pointer-events-none" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading={i < images.length ? "eager" : "lazy"}
                draggable={false}
              />
              {/* Hover gold tint */}
              <div className="absolute inset-0 bg-[#E5B21A]/0 hover:bg-[#E5B21A]/5 transition-colors duration-500 z-10" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
