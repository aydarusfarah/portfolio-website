import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Award } from "lucide-react";
import Badge from "./Badge";
import { useLanguage } from "../../context/LanguageContext";

const badgeColors = {
  "Professional Cert": "violet",
  Networking: "cyan",
  "CCNA Prep": "indigo",
  Security: "rose",
};

export default function CertificateModal({ cert, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!cert) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // ESC key press handler
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  const badgeColor = cert ? badgeColors[cert.badge] || "accent" : "accent";

  return (
    <AnimatePresence>
      {cert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 p-5 md:p-6 border-b border-[var(--border)] bg-[var(--bg-surface)]">
              <div className="space-y-1.5 pr-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge label={cert.badge} color={badgeColor} />
                  <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>
                <h2
                  id="cert-modal-title"
                  className="text-lg md:text-xl font-bold text-[var(--text-primary)] leading-tight"
                >
                  {cert.title}
                </h2>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                type="button"
                className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] border border-transparent hover:border-[var(--border)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body - High-Res Image Display */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/40">
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg border border-[var(--border)] shadow-xl"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:px-6 md:py-4 border-t border-[var(--border)] bg-[var(--bg-surface)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <Calendar size={13} className="text-[var(--accent)]" />
                <span>{t("certifications.issued")} {cert.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <Award size={13} className="text-[var(--accent)]" />
                <span>{t("certifications.officialVerified")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
