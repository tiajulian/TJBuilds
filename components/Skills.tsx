"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewport } from "@/lib/motion";

const groups = [
  {
    label: "Data & Analytics",
    headerClass: "text-indigo-400",
    badgeClass: "bg-indigo-500/5 text-indigo-300 border-indigo-500/15",
    skills: ["SQL", "Snowflake", "dbt", "Tableau", "MS SQL Server"],
  },
  {
    label: "Data Engineering",
    headerClass: "text-violet-400",
    badgeClass: "bg-violet-500/5 text-violet-300 border-violet-500/15",
    skills: ["Fivetran", "Stitch", "PushMetrics", "ETL / ELT", "Data Pipelines"],
  },
  {
    label: "AI & Machine Learning",
    headerClass: "text-pink-400",
    badgeClass: "bg-pink-500/5 text-pink-300 border-pink-500/15",
    skills: ["Computer Vision", "Object Detection", "Image Recognition", "AI / OCR", "ML Tuning"],
  },
  {
    label: "Dev & Tools",
    headerClass: "text-amber-400",
    badgeClass: "bg-amber-500/5 text-amber-300 border-amber-500/15",
    skills: ["Python", "Web Development", "Next.js", "Git", "API Integration"],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="h-px w-10 bg-indigo-500" />
          <span className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold">
            Skills
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-16 leading-tight"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          The tools{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            I reach for
          </span>
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerFast}
        >
          {groups.map((group) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="bg-[#12131e] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors duration-300"
            >
              <h3 className={`text-sm font-bold tracking-wide mb-5 ${group.headerClass}`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium ${group.badgeClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
