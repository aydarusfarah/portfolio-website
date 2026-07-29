import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";
import { SectionHeading } from "../ui/AnimatedText";
import BentoCard from "../ui/BentoCard";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    id: "contact-email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    id: "contact-phone",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    id: "contact-location",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/aydurusfarah",
    href: personalInfo.github,
    id: "contact-github",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/aydurusfarah",
    href: personalInfo.linkedin,
    id: "contact-linkedin",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6f0c9917-3be0-4d80-a01e-6d8a579b7aaa",
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio Contact Form Submission",
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        title="Get In Touch"
        subtitle="Open to IT apprenticeship opportunities and technical collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: contact info */}
        <BentoCard delay={0} className="lg:col-span-2">
          <div className="flex flex-col gap-6 h-full">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Let's connect!
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Whether you're looking for a motivated IT professional for your team or just want to
                talk tech — I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map(({ icon: Icon, label, value, href, id }) => (
                <motion.div
                  key={id}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[var(--accent-glow)] border border-[var(--border)] flex items-center justify-center">
                    <Icon size={14} className="text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide font-medium">
                      {label}
                    </p>
                    {href ? (
                      <a
                        id={id}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--text-secondary)] truncate">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability note */}
            <div className="mt-auto p-4 rounded-xl bg-[var(--accent-glow)] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-1">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <span className="text-xs font-semibold text-[var(--text-primary)]">
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">{personalInfo.availability}</p>
            </div>
          </div>
        </BentoCard>

        {/* Right: form */}
        <BentoCard delay={0.1} className="lg:col-span-3">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle size={30} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Message Sent!</h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => { setSent(false); setError(null); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-2 px-5 py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {error && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-400">
                  <AlertCircle size={16} className="shrink-0 text-rose-400" />
                  <span>{error}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    className="px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email-input" className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="contact-email-input"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Ausbildung Opportunity / Project Inquiry"
                  className="px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                id="contact-submit"
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </BentoCard>
      </div>
    </section>
  );
}
