import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";
import { TypewriterText } from "../ui/AnimatedText";

const ROLES = [
  "IT Support Specialist",
  "Network Administrator",
  "Virtualization Engineer",
  "Local AI Enthusiast",
  "Systems Aspirant",
];

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Animated background blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "var(--gradient-hero)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent)" }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], rotate: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--accent-2)" }}
      />

      {/* Grid overlay texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="transform-gpu inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50"
          />
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="transform-gpu text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4"
        >
          <span className="text-[var(--text-primary)]">Aydarus</span>{" "}
          <span
            className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent)] bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
          >
            Farah
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
          className="transform-gpu text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6 h-10"
        >
          <TypewriterText words={ROLES} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
          className="transform-gpu text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="transform-gpu flex items-center justify-center gap-1.5 text-sm text-[var(--text-muted)] mb-10"
        >
          <MapPin size={14} className="text-[var(--accent)]" />
          {personalInfo.location}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65, ease: "easeOut" }}
          className="transform-gpu flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <a
            href="#projects"
            id="hero-cta-projects"
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          >
            <span className="relative z-10">View My Projects</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            id="hero-cta-contact"
            className="px-7 py-3.5 rounded-xl font-semibold border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)] transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          className="transform-gpu flex items-center justify-center gap-3 mb-16"
        >
          {[
            { href: personalInfo.github, Icon: GithubIcon, label: "GitHub", id: "hero-github" },
            { href: personalInfo.linkedin, Icon: LinkedinIcon, label: "LinkedIn", id: "hero-linkedin" },
            { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email", id: "hero-email" },
          ].map(({ href, Icon, label, id }) => (
            <a
              key={id}
              href={href}
              id={id}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)] transition-all duration-200 hover:scale-110 hover:shadow-md hover:shadow-[var(--accent-glow)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest font-medium uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
