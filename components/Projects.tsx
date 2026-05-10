const projects = [
  {
    number: "01",
    category: "Client Project · Web Development",
    name: "Zenius.au",
    url: "https://zenius.au",
    problem:
      "A local café had no website and no way for customers to book a table. If you wanted a spot, you had to show up and hope for the best — and they were losing customers every day because of it.",
    solution:
      "I noticed the gap, reached out to the owner directly, and built the solution. Zenius.au showcases the café's menu and story, and includes a fully functional booking system — built from scratch.",
    outcome:
      "The owner now receives 10+ bookings per week through the site. A reliable new revenue stream that runs itself, with zero extra work on his end.",
    metric: "10+",
    metricLabel: "bookings / week",
    gradientText: "from-indigo-400 to-violet-400",
    gradientBorder: "from-indigo-500/30 to-violet-500/30",
    accentText: "text-indigo-400",
    tags: ["Next.js", "Booking System", "Web Development"],
  },
  {
    number: "02",
    category: "AI Tool · Data Pipeline Thinking",
    name: "Invoice Snap",
    url: "https://github.com/tiajulian",
    urlLabel: "Code on GitHub →",
    problem:
      "A small business owner was spending hours every week manually reading invoices and typing figures into spreadsheets to track expenses — slow, error-prone, and a real drain on his time.",
    solution:
      "I mapped his exact workflow, then built Invoice Snap: upload any invoice, and AI-powered OCR extracts the text, sums the totals automatically, and exports everything to Excel. Same extract–transform–deliver thinking I apply professionally.",
    outcome:
      "What used to eat hours now takes seconds. The same pattern I use in data pipelines — applied to a small business problem.",
    metric: "Hours → Seconds",
    metricLabel: "processing invoices",
    gradientText: "from-violet-400 to-pink-400",
    gradientBorder: "from-violet-500/30 to-pink-500/30",
    accentText: "text-violet-400",
    tags: ["AI / OCR", "Python", "Excel Export", "Automation"],
  },
  {
    number: "03",
    category: "Personal Project · EdTech",
    name: "IndonesianNAATI.com",
    url: "https://indonesiannaati.com",
    problem:
      "Preparing for the NAATI CCL exam in Indonesian — a language test required for Australian permanent residency — I found almost no dedicated practice material existed online for Indonesian speakers.",
    solution:
      "So I built it myself. A purpose-built study platform for Indonesian-language NAATI candidates, filling a genuine gap in the market with structured practice content.",
    outcome:
      "This project is personal — it came out of my own PR journey. It's a reminder that the best tools often come from living the problem first.",
    metric: "0 → 1",
    metricLabel: "gap filled",
    gradientText: "from-pink-400 to-amber-400",
    gradientBorder: "from-pink-500/30 to-amber-500/30",
    accentText: "text-pink-400",
    tags: ["EdTech", "Study Platform", "Full Stack"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-28 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-pink-500" />
          <span className="text-pink-400 text-xs tracking-[0.2em] uppercase font-semibold">
            Projects
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          Things I&apos;ve{" "}
          <span className="bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
            actually built
          </span>
        </h2>
        <p className="text-slate-500 text-lg mb-16 max-w-lg leading-relaxed">
          Every project started with a real problem. Here&apos;s the story behind each one.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group bg-[#12131e] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div>
                  <p className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">
                    {project.category}
                  </p>
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-5xl font-black bg-gradient-to-r ${project.gradientText} bg-clip-text text-transparent opacity-25 group-hover:opacity-40 transition-opacity`}
                    >
                      {project.number}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Impact callout */}
                <div className="text-right shrink-0">
                  <div
                    className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${project.gradientText} bg-clip-text text-transparent leading-tight`}
                  >
                    {project.metric}
                  </div>
                  <div className="text-slate-500 text-xs mt-1 uppercase tracking-widest">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              {/* Case study columns */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "The Problem", text: project.problem },
                  { label: "The Solution", text: project.solution },
                  { label: "The Outcome", text: project.outcome },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <p
                      className={`text-xs tracking-widest uppercase font-semibold mb-3 ${project.accentText}`}
                    >
                      {label}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/[0.04] text-slate-400 text-xs px-3 py-1.5 rounded-full border border-white/[0.06] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold bg-gradient-to-r ${project.gradientText} bg-clip-text text-transparent hover:opacity-70 transition-opacity`}
                  >
                    {"urlLabel" in project ? project.urlLabel : "Visit site →"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
