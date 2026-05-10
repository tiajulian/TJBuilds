"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const pillars = [
  {
    number: "01",
    title: "Live the problem first",
    description:
      "The best tools come from people who've felt the pain themselves. Every project I've built started with a real frustration, mine or someone I know.",
  },
  {
    number: "02",
    title: "Build with precision",
    description:
      "Years of data work taught me that the difference between a good solution and a great one is in the details. Clean models. Clear logic. Results that can be trusted.",
  },
  {
    number: "03",
    title: "Deliver something that sticks",
    description:
      "A dashboard no one opens, an app no one uses. That's not a solution. I care about adoption, outcomes, and building things that keep running long after I hand them over.",
  },
];


export default function Philosophy() {
  return (
    <section className="py-28 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="h-px w-10 bg-violet-500" />
          <span className="text-violet-400 text-xs tracking-[0.2em] uppercase font-semibold">
            How I Work
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            >
              Real problems.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Real solutions.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              Analytics engineer by day, builder by nature. The work I do at my
              day job: dbt models, complex SQL, dashboards people actually use.
              It feeds directly into what I build outside of it. The skills compound.
              The perspective stays grounded in real problems.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger}
          >
            {pillars.map((pillar) => (
              <motion.div key={pillar.number} variants={fadeUp} className="flex gap-6 group">
                <span className="text-4xl font-black text-indigo-500/20 leading-none mt-0.5 w-12 shrink-0 group-hover:text-indigo-500/40 transition-colors duration-300">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
