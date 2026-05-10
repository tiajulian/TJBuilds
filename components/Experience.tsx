"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerSlow, viewport } from "@/lib/motion";

const experiences = [
  {
    company: "Brighte",
    role: "Data Analyst",
    period: "Dec 2024 – Present",
    current: true,
    description:
      "This is where analytics engineering really clicked for me. I design and own dbt models that teams across the business rely on every day, which means the pressure to get it right is real. I've migrated pipelines, built dashboards that get opened every morning, and learned that the most valuable thing I can do is make data feel trustworthy to people who aren't data people.",
    tags: ["dbt", "Snowflake", "SQL", "Tableau", "Fivetran", "PushMetrics"],
  },
  {
    company: "Lumachain",
    role: "Computer Vision & ML Engineer",
    period: "Jun 2022 – Oct 2024",
    current: false,
    description:
      "I joined Lumachain when computer vision felt like the frontier, and spent two years tuning AI algorithms for image recognition and object detection. It was deeply technical and genuinely fascinating work. It also gave me a different intuition about how machines make sense of information, which shapes how I think about data problems today.",
    tags: ["Python", "Computer Vision", "ML", "Image Recognition", "Object Detection"],
  },
  {
    company: "McGirr Technologies",
    role: "Junior Data Analyst",
    period: "Jul 2021 – Jun 2022",
    current: false,
    description:
      "My first data job. I was building SQL Server reports for enterprise clients and figuring out what it meant to turn a business question into something useful. The work was unglamorous, but it taught me the thing that still matters most: understanding what someone actually needs to know, not just what they asked for.",
    tags: ["SQL Server", "Reporting", "Data Analysis", "Enterprise"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="h-px w-10 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.2em] uppercase font-semibold">
            Experience
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-16 leading-tight"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          4+ years of{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            real data work
          </span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-white/[0.06] hidden md:block" />

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerSlow}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                className="md:pl-10 relative"
              >
                <div
                  className={`absolute left-0 top-7 w-2 h-2 rounded-full -translate-x-[3.5px] hidden md:block ${
                    exp.current ? "bg-amber-400 shadow-[0_0_8px_#f59e0b80]" : "bg-slate-700"
                  }`}
                />

                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="bg-[#12131e] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-white font-black text-xl">{exp.company}</h3>
                        {exp.current && (
                          <span className="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-0.5 rounded-full border border-amber-500/20 font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 font-medium">{exp.role}</p>
                    </div>
                    <span className="text-slate-500 text-sm shrink-0">{exp.period}</span>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-sm mb-5">{exp.description}</p>

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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
