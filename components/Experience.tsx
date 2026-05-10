const experiences = [
  {
    company: "Brighte",
    role: "Data Analyst",
    period: "Dec 2024 – Present",
    current: true,
    description:
      "Design and maintain scalable dbt models across staging, mart, and reporting layers — transforming raw data from product, finance, and marketing into trusted datasets used across the business. Write complex SQL in Snowflake, build Tableau dashboards, automate report distribution via PushMetrics, and support pipeline migrations from Stitch to Fivetran.",
    tags: ["dbt", "Snowflake", "SQL", "Tableau", "Fivetran", "PushMetrics"],
  },
  {
    company: "Lumachain",
    role: "Computer Vision & ML Engineer",
    period: "Jun 2022 – Oct 2024",
    current: false,
    description:
      "Worked on computer vision and ML — tuning AI algorithms for image recognition and object detection. 2+ years at the intersection of data and AI, building and iterating on production ML systems.",
    tags: ["Python", "Computer Vision", "ML", "Image Recognition", "Object Detection"],
  },
  {
    company: "McGirr Technologies",
    role: "Junior Data Analyst",
    period: "Jul 2021 – Jun 2022",
    current: false,
    description:
      "Started my analytics career building SQL Server reports for enterprise clients. Learned to translate business questions into clear, reliable data outputs.",
    tags: ["SQL Server", "Reporting", "Data Analysis", "Enterprise"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.2em] uppercase font-semibold">
            Experience
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 leading-tight">
          4+ years of{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            real data work
          </span>
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-7 w-2 h-2 rounded-full -translate-x-[3.5px] hidden md:block transition-colors ${
                    exp.current ? "bg-amber-400 shadow-[0_0_8px_#f59e0b80]" : "bg-slate-700"
                  }`}
                />

                <div className="bg-[#12131e] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-white font-black text-xl">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-0.5 rounded-full border border-amber-500/20 font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 font-medium">{exp.role}</p>
                    </div>
                    <span className="text-slate-500 text-sm shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-sm mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/[0.04] text-slate-400 text-xs px-3 py-1.5 rounded-full border border-white/[0.06] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
