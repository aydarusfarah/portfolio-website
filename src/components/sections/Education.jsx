import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { education } from "../../data/portfolio";
import { SectionHeading } from "../ui/AnimatedText";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title={t("education.title")}
        subtitle={t("education.subtitle")}
      />

      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent" />

          <div className="flex flex-col gap-6 pl-16">
            {education.map((item, i) => (
              <motion.div
                key={typeof item.title === "object" ? item.title.en : item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="transform-gpu relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.1 + 0.15, type: "spring", bounce: 0.4 }}
                  className="transform-gpu absolute -left-[42px] top-5 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)] ring-2 ring-[var(--bg-base)] ring-offset-0"
                >
                  <GraduationCap size={10} className="text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="transform-gpu group p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)] text-base group-hover:text-[var(--accent)] transition-colors duration-200">
                        {t(item.title)}
                      </h3>
                      {item.institution && (
                        <p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">
                          {item.institution}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 mt-2">
                        <CheckCircle2 size={13} className="text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">{t(item.status)}</span>
                      </div>
                      {item.description && (
                        <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                          {t(item.description)}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--accent-glow)] border border-[var(--border)] flex items-center justify-center">
                      <GraduationCap size={16} className="text-[var(--accent)]" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
