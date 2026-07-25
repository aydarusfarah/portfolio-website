import { motion } from "framer-motion";
import {
  Network,
  Monitor,
  Server,
  Cpu,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { skills } from "../../data/portfolio";
import BentoCard from "../ui/BentoCard";
import { SectionHeading } from "../ui/AnimatedText";
import { useTheme } from "../../context/ThemeContext";

const iconMap = {
  Network,
  Monitor,
  Server,
  Cpu,
  ShieldCheck,
  Globe,
};

// Dark / Cyber
const darkColors = {
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    chip: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  violet: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    chip: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  indigo: {
    icon: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    chip: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    chip: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  rose: {
    icon: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    chip: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    chip: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
};

// Light — saturated WCAG AA
const lightColors = {
  cyan: {
    icon: "text-sky-700",
    bg: "bg-sky-50 border-sky-200",
    chip: "bg-sky-100 text-sky-800 border-sky-200",
  },
  violet: {
    icon: "text-purple-700",
    bg: "bg-purple-50 border-purple-200",
    chip: "bg-purple-100 text-purple-900 border-purple-200",
  },
  indigo: {
    icon: "text-indigo-700",
    bg: "bg-indigo-50 border-indigo-200",
    chip: "bg-indigo-100 text-indigo-900 border-indigo-200",
  },
  emerald: {
    icon: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200",
    chip: "bg-emerald-100 text-emerald-900 border-emerald-200",
  },
  rose: {
    icon: "text-rose-700",
    bg: "bg-rose-50 border-rose-200",
    chip: "bg-rose-100 text-rose-900 border-rose-200",
  },
  amber: {
    icon: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
    chip: "bg-amber-100 text-amber-900 border-amber-200",
  },
};

export default function Skills() {
  const { theme } = useTheme();
  const colorClasses = theme === "light" ? lightColors : darkColors;
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="Technical Skills"
        subtitle="A broad toolkit built through certifications, self-study, and hands-on lab work."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon] || Server;
          const c = colorClasses[skill.color] || colorClasses.violet;
          return (
            <BentoCard key={skill.category} delay={i * 0.07}>
              <div className="flex flex-col gap-4 h-full">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${c.bg}`}
                  >
                    <Icon size={18} className={c.icon} />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm">
                    {skill.category}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: i * 0.04 + j * 0.03, duration: 0.3, ease: "easeOut" }}
                      className={`transform-gpu px-2.5 py-1 text-xs font-medium rounded-lg border ${c.chip}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
}
