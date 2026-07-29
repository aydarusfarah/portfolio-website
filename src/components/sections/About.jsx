import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Star } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";
import BentoCard from "../ui/BentoCard";
import Badge from "../ui/Badge";
import { SectionHeading } from "../ui/AnimatedText";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const statItems = [
    { value: "5+", labelKey: "about.certificationsCount", icon: Star },
    { value: "6+", labelKey: "about.projectsCount", icon: Briefcase },
    { value: "B1", labelKey: "about.germanLevel", icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Bio card — spans 2 cols on lg */}
        <BentoCard delay={0} className="lg:col-span-2" glowAccent>
          <div className="flex flex-col h-full gap-5">
            <div className="flex items-start gap-4">
              {/* Avatar Photo */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden border border-[var(--border)] shadow-md shadow-[var(--accent-glow)] bg-[var(--bg-card)]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">{t(personalInfo.title)}</p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-[var(--text-muted)]">
                  <MapPin size={12} className="text-[var(--accent)]" />
                  {t(personalInfo.location)}
                </div>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {t("about.bio")}
            </p>

            <Badge label={t(personalInfo.availability)} color="emerald" className="self-start" />

            {/* Contact links */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                id="about-email-link"
                className="flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <Mail size={13} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                id="about-phone-link"
                className="flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <Phone size={13} />
                {personalInfo.phone}
              </a>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="about-github-link"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] hover:border-[var(--border-hover)] text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-200"
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="about-linkedin-link"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] hover:border-[var(--border-hover)] text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-200"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </BentoCard>

        {/* Stats card */}
        <BentoCard delay={0.1}>
          <div className="flex flex-col h-full gap-6">
            <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest">
              {t("about.atAGlance")}
            </h4>
            <div className="flex flex-col gap-5 flex-1 justify-center">
              {statItems.map(({ value, labelKey, icon: Icon }, i) => (
                <motion.div
                  key={labelKey}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                  className="transform-gpu flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-glow)] border border-[var(--border)] flex items-center justify-center">
                    <Icon size={16} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-[var(--text-primary)] leading-none">
                      {value}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{t(labelKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
