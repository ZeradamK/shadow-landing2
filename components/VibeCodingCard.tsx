"use client";

import { Quote } from "lucide-react";
import React from "react";

interface VibeCodingCardProps {
  imageSrc?: string;
  imageAlt?: string;
  quote?: React.ReactNode;
  author?: string;
  authorTitle?: string;
  authorSource?: string;
  link?: string;
}

const VibeCodingCard: React.FC<VibeCodingCardProps> = (props) => {
  const {
    imageSrc = "/gary-tan.jpg",
    imageAlt = "Garry Tan portrait",
    quote = (
      <>
        Vibe coding can {" "}
        <span className="bg-gradient-to-r from-[#e5e7eb] via-[#9ca3af] to-[#f3f4f6] bg-clip-text text-transparent" style={{ WebkitTextStroke: '0.5px #fff', textShadow: '0 1px 8px #fff, 0 0px 2px #fff8', filter: 'brightness(1.15)' }}>
          significantly boost
        </span>{" "}
        the efficiency of engineering teams.
      </>
    ),
    author = "Garry Tan",
    authorTitle = "CEO and President of Y Combinator",
    authorSource = "",
    link = "https://youtu.be/7s9C92Pkcc0?si=hOMms9Zczg5V6r53",
  } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch Rick Rubin discuss Vibe Coding on The Ben & Marc Show"
      className="block relative bg-white/5 border border-white/10 rounded-3xl pt-[30px] pb-[30px] px-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group max-w-3xl mx-auto"
    >
      {/* YouTube Play Indicator */}
      <div className="absolute opacity-60 group-hover:opacity-100 transition-opacity" style={{ bottom: 20, right: 20, position: 'absolute' }}>
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="flex-shrink-0 flex items-center h-full">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Quote and Attribution */}
        <div className="flex-1 text-center lg:text-left">
          <blockquote className="mb-6">
            <p
              className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 break-words max-w-xl mx-auto"
              style={{
                fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                letterSpacing: "-0.02em",
                wordBreak: 'break-word',
                whiteSpace: 'pre-line',
                paddingLeft: 30,
                paddingRight: 30,
                textAlign: 'left',
                marginLeft: '-30px',
              }}
            >
              {quote}
            </p>
          </blockquote>

          {/* Attribution */}
          <footer>
            <cite
              className="not-italic text-white font-bold block mb-2"
              style={{
                fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                fontSize: 18,
              }}
            >
              {author}
            </cite>
            <p
              className="text-white/80 mb-2"
              style={{
                fontFamily: 'var(--font-geist-sans), "GeistSans", sans-serif',
                fontSize: 14,
              }}
            >
              {authorTitle}
            </p>
            <p
              className="text-white/60 text-sm"
              style={{
                fontFamily:
                  'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
              }}
            >
              {authorSource}
            </p>
          </footer>
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-orange-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
};

export default VibeCodingCard; 