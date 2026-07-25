import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Network, Server, Lock, Award, Calendar } from "lucide-react";
import { certifications } from "../../data/portfolio";
import BentoCard from "../ui/BentoCard";
import Badge from "../ui/Badge";
import { SectionHeading } from "../ui/AnimatedText";

const iconMap = { ShieldCheck, Cpu, Network, Server, Lock };

const badgeColors = {
  "Professional Cert": "violet",
  Networking: "cyan",
  "CCNA Prep": "indigo",
  Security: "rose",
};

const issuerAccent = {
  Google: "from-blue-500 to-green-500",
  IBM: "from-blue-600 to-blue-400",
  "Pearson / Cisco": "from-teal-500 to-cyan-400",
  Packt: "from-indigo-500 to-violet-500",
  "University of London": "from-rose-500 to-orange-500",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="Certifications"
        subtitle="Industry-recognised credentials validating expertise in IT support, networking, and security."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] || Award;
          const badgeColor = badgeColors[cert.badge] || "accent";
          const gradient = issuerAccent[cert.issuer] || "from-violet-500 to-pink-500";

          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`
                transform-gpu group relative rounded-2xl border overflow-hidden cursor-default
                bg-[var(--bg-card)] border-[var(--border)]
                hover:border-[var(--border-hover)]
                hover:shadow-xl hover:shadow-[var(--accent-glow)]
                transition-colors duration-300
                ${i === 0 ? "xl:col-span-2" : ""}
              `}
            >
              {/* Top gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

              <div className="p-6 flex flex-col gap-4">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[var(--bg-card)] flex items-center justify-center">
                      <Icon size={20} className="text-[var(--text-primary)]" />
                    </div>
                  </div>
                  <Badge label={cert.badge} color={badgeColor} />
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-base leading-snug group-hover:text-[var(--accent)] transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--text-muted)] mt-1 uppercase tracking-wide">
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {cert.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mt-auto pt-2 border-t border-[var(--border)]">
                  <Calendar size={11} />
                  Issued {cert.date}
                </div>
              </div>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, var(--accent-glow) 0%, transparent 60%)" }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
