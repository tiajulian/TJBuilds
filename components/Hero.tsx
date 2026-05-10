"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"
          style={{ animation: "float 9s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-violet-700/15 rounded-full blur-[120px]"
          style={{ animation: "float2 11s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[80px]"
          style={{ animation: "float 13s ease-in-out infinite 2s" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-36 md:py-48">
        {/* Eyebrow */}
        <motion.div className="flex items-center gap-3 mb-10" {...fadeUp(0.1)}>
          <span className="h-px w-10 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold">
            Analytics Engineer · Problem Solver · Builder
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-black leading-[0.88] tracking-tight mb-8"
          {...fadeUp(0.2)}
        >
          <span className="block text-white text-[clamp(64px,12vw,128px)]">Tia</span>
          <span className="block text-[clamp(64px,12vw,128px)] bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Julian.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-[clamp(20px,3vw,28px)] font-light text-slate-300 max-w-2xl mb-5 leading-snug"
          {...fadeUp(0.3)}
        >
          I turn{" "}
          <span className="text-white font-semibold">messy, real-world problems</span>{" "}
          into clean, working solutions.
        </motion.p>

        <motion.p
          className="text-slate-400 text-base md:text-lg max-w-2xl mb-14 leading-relaxed"
          {...fadeUp(0.4)}
        >
          4+ years across fintech, computer vision, and analytics engineering.
          By day I design data pipelines.{" "}
          <span className="text-slate-300">
            On my own time, I build tools that actually get used.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.5)}>
          <a
            href="#work"
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-lg shadow-indigo-900/40"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-indigo-400/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base hover:bg-white/[0.04]"
          >
            Let&apos;s Talk →
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity cursor-default"
          {...fadeUp(1)}
        >
          <span className="text-slate-300 text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-indigo-400 to-transparent" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a12] to-transparent pointer-events-none" />
    </section>
  );
}
