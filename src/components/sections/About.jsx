import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Star } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";
import BentoCard from "../ui/BentoCard";
import Badge from "../ui/Badge";
import { SectionHeading } from "../ui/AnimatedText";

const statItems = [
  { value: "5+", label: "Certifications", icon: Star },
  { value: "6+", label: "Projects & Labs", icon: Briefcase },
  { value: "B1", label: "German Level", icon: GraduationCap },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="About Me"
        subtitle="IT professional with a passion for networks, virtualization, and AI systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Bio card — spans 2 cols on lg */}
        <BentoCard delay={0} className="lg:col-span-2" glowAccent>
          <div className="flex flex-col h-full gap-5">
            <div className="flex items-start gap-4">
              {/* Avatar monogram */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-[var(--accent-glow)]">
                AF
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">{personalInfo.title}</p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-[var(--text-muted)]">
                  <MapPin size={12} className="text-[var(--accent)]" />
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              I'm an IT Support Specialist based in Hamburg, Germany, holding multiple professional
              certifications from Google, IBM, and Cisco. I specialize in building and administering
              network infrastructure, virtualization labs (VMware, VirtualBox), and local AI
              environments using open-weight models. My goal is to bridge the gap between
              traditional IT support and modern AI-powered systems administration.
            </p>

            <Badge label={personalInfo.availability} color="emerald" className="self-start" />

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
              At a Glance
            </h4>
            <div className="flex flex-col gap-5 flex-1 justify-center">
              {statItems.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
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
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
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
