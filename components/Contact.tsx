export default function Contact() {
  return (
    <section id="contact" className="py-36 bg-[#0a0a12] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500" />
          <span className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold">
            Contact
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500" />
        </div>

        <h2 className="font-black leading-tight mb-6 text-[clamp(36px,7vw,80px)]">
          <span className="text-white">Got a problem </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            worth solving?
          </span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl mb-14 max-w-lg mx-auto leading-relaxed">
          Whether you&apos;re a business owner with a real pain point, or a recruiter
          looking for someone who builds and ships. Let&apos;s talk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="mailto:tiajulian99@gmail.com"
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-lg shadow-indigo-900/40"
          >
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/in/tia-julian-861a86182/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-indigo-400/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base hover:bg-white/[0.04]"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/tiajulian"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-indigo-400/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base hover:bg-white/[0.04]"
          >
            GitHub →
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-8">
          <p className="text-slate-600 text-sm">
            Built by Tia Julian · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
