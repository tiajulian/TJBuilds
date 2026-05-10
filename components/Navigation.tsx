"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a12]/90 backdrop-blur-md border-b border-white/[0.06]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-black text-white text-xl tracking-tight">TJ</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-full"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile: just the CTA */}
        <a
          href="#contact"
          className="md:hidden bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-full"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
