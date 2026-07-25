import { motion } from "framer-motion";
import { Tag, CheckCircle2 } from "lucide-react";
import { projects } from "../../data/portfolio";
import { SectionHeading } from "../ui/AnimatedText";
import Badge from "../ui/Badge";

const categoryColors = {
  "Software Development": "violet",
  "AI & Local Systems": "emerald",
  "Networking & Cisco": "cyan",
  "System Administration": "indigo",
  "IT Service Management": "blue",
  Cybersecurity: "rose",
};

const badgeColors = {
  "Personal Project": "violet",
  "Hardware & AI": "emerald",
  "Cisco CCNA (Packt)": "cyan",
  "Google IT Support": "blue",
  "IBM IT Support": "indigo",
  "Univ. of London": "rose",
};

// Split projects into sections
const personalProjects = projects.filter((p) => p.badge === "Personal Project" || p.badge === "Hardware & AI");
const certProjects = projects.filter((p) => p.badge !== "Personal Project" && p.badge !== "Hardware & AI");

function ProjectCard({ project, index }) {
  const catColor = categoryColors[project.category] || "accent";
  const badgeColor = badgeColors[project.badge] || "accent";

  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="transform-gpu group relative flex flex-col rounded-2xl border overflow-hidden bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--border-hover)] hover:shadow-xl hover:shadow-[var(--accent-glow)] transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
        {/* Badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge label={project.badge} color={badgeColor} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category line */}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {project.category}
        </p>

        <h3 className="font-bold text-[var(--text-primary)] text-base leading-snug group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="flex flex-col gap-1.5 pt-1">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle2
                  size={12}
                  className="text-[var(--accent)] mt-0.5 flex-shrink-0"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Animated left accent bar on hover */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 bottom-0 w-0.5 origin-top"
        style={{ background: "linear-gradient(to bottom, var(--accent), var(--accent-2))" }}
      />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="Projects & Labs"
        subtitle="Personal builds and 240+ hours of hands-on certification capstone projects."
      />

      {/* Personal Projects */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="transform-gpu flex items-center gap-3 mb-5"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent)] to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            Personal Projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-[var(--accent)] to-transparent" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {personalProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Certification Labs */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="transform-gpu flex items-center gap-3 mb-5"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-2)] to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-2)]">
            Certification Capstone & Lab Projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-[var(--accent-2)] to-transparent" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {certProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
