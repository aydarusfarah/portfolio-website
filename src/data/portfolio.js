export const personalInfo = {
  name: "Aydarus Farah Hassan",
  title: {
    en: "IT Support Specialist & Systems Aspirant",
    de: "IT-Support-Spezialist & Anwärter Systemintegration",
  },
  subtitle: {
    en: "Specializing in System Integration, Virtualization Labs, Network Administration, and Local AI Environments.",
    de: "Spezialisiert auf Systemintegration, Virtualisierungslabs, Netzwerkadministration und lokale KI-Umgebungen.",
  },
  location: {
    en: "Hamburg, Germany",
    de: "Hamburg, Deutschland",
  },
  email: "aydurusfarah297@gmail.com",
  phone: "+49 176 75912499",
  availability: {
    en: "Available for IT Apprenticeship (Ausbildung zum Fachinformatiker für Systemintegration)",
    de: "Suche Ausbildungsplatz (Ausbildung zum Fachinformatiker für Systemintegration)",
  },
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  profileImage: "/profile.jpg",
};

export const certifications = [
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "Nov 2025",
    badge: "Professional Cert",
    icon: "ShieldCheck",
    image: "/certs/Google IT Support Pro.jpeg",
    description: {
      en: "6-course series covering hardware, networking, operating systems, system administration, and IT security.",
      de: "6-teilige Kursreihe zu Hardware, Netzwerktechnik, Betriebssystemen, Systemadministration und IT-Sicherheit.",
    },
  },
  {
    title: "IBM IT Support Professional Certificate",
    issuer: "IBM",
    date: "Dec 2025",
    badge: "Professional Cert",
    icon: "Cpu",
    image: "/certs/IBM IT Support Pro.jpeg",
    description: {
      en: "9-course specialization in technical support, cloud computing, database basics, and CompTIA preparation.",
      de: "9-teilige Spezialisierung auf technischen Support, Cloud Computing, Datenbankgrundlagen und CompTIA-Vorbereitung.",
    },
  },
  {
    title: "Cisco Certified Support Technician (CCST) IT Support",
    issuer: "Pearson / Cisco",
    date: "Nov 2025",
    badge: "Networking",
    icon: "Network",
    image: "/certs/Cisco Certified Support Technician IT Support-100-140.jpeg",
    description: {
      en: "10-unit comprehensive specialization in technical support operations and network troubleshooting.",
      de: "10-teilige umfassende Spezialisierung auf technischen Support und Fehlersuche in Netzwerken.",
    },
  },
  {
    title: "Cisco CCNA (200-301) Specialization",
    issuer: "Packt",
    date: "Nov 2025",
    badge: "CCNA Prep",
    icon: "Server",
    image: "/certs/Cisco CCNA (200-301).jpeg",
    description: {
      en: "In-depth training on IPv4/IPv6, VLANs, EtherChannel, VPNs, AAA Security, DHCP, DNS, and NTP.",
      de: "Tiefgehendes Training zu IPv4/IPv6, VLANs, EtherChannel, VPNs, AAA-Sicherheit, DHCP, DNS und NTP.",
    },
  },
  {
    title: "Cyber Security – Technology and Governance",
    issuer: "University of London",
    date: "Dec 2025",
    badge: "Security",
    icon: "Lock",
    image: "/certs/Cybersecurity and Technology.jpeg",
    description: {
      en: "Specialized training in computer system security, incident response, network defense, and governance.",
      de: "Spezialtraining in Computersystemsicherheit, Incident Response, Netzwerkverteidigung und IT-Governance.",
    },
  },
];

export const projects = [
  // --- Personal Projects ---
  {
    id: "blueprint-app",
    title: "Blueprint App – AI Knowledge Base",
    category: "Software Development",
    badge: "Personal Project",
    description: {
      en: "Designed and developed a custom software application for structured knowledge management, workflow automation, and local AI model integration.",
      de: "Entwicklung einer maßgeschneiderten Softwareanwendung für strukturiertes Wissensmanagement, Workflow-Automatisierung und lokale KI-Integration.",
    },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "AI Workflows", "Knowledge Systems"],
    highlights: {
      en: [
        "Built custom UI components for structured note-taking and documentation.",
        "Integrated local AI endpoints for privacy-focused data processing.",
      ],
      de: [
        "Erstellung von UI-Komponenten für strukturierte Dokumentation.",
        "Einbindung lokaler KI-Endpunkte für datenschutzkonforme Verarbeitung.",
      ],
    },
  },
  {
    id: "local-llm-ollama",
    title: "Local LLM Environment (Ollama)",
    category: "AI & Local Systems",
    badge: "Hardware & AI",
    description: {
      en: "Configured open-weight LLMs (Qwen 2.5/3.5, Gemma) locally using Ollama on custom hardware (40GB RAM / 1TB SSD) for privacy-focused automation.",
      de: "Einrichtung von Open-Weight-LLMs (Qwen 2.5/3.5, Gemma) auf lokaler Hardware (40GB RAM / 1TB SSD) mit Ollama für datenschutzfreundliche Automatisierung.",
    },
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    tags: ["Ollama", "Qwen", "Linux", "Hardware Tuning"],
    highlights: {
      en: [
        "Optimized model quantization for local inference on 40GB RAM setup.",
        "Configured local REST APIs for desktop software integration.",
      ],
      de: [
        "Optimierte Modellquantisierung für lokale Inferenz auf 40GB RAM.",
        "Konfiguration lokaler REST-APIs zur Software-Integration.",
      ],
    },
  },

  // --- Certification Capstone & Lab Projects ---
  {
    id: "ccna-enterprise-network",
    title: "Enterprise Network Infrastructure Simulation",
    category: "Networking & Cisco",
    badge: "Cisco CCNA (Packt)",
    description: {
      en: "Designed and configured a multi-site enterprise network featuring VLAN routing, EtherChannel trunks, VPN tunnels, and AAA security protocols.",
      de: "Konzeption und Konfiguration einer Unternehmensnetzwerk-Infrastruktur mit VLAN-Routing, EtherChannel, VPN-Tunneln und AAA-Sicherheit.",
    },
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    tags: ["Cisco IOS", "VLANs", "EtherChannel", "VPNs", "DHCP/DNS"],
    highlights: {
      en: [
        "Configured IPv4 and IPv6 dual-stack routing across switches and routers.",
        "Implemented access control lists (ACLs) and network service management (NTP, DNS, DHCP).",
      ],
      de: [
        "Konfiguration von IPv4 & IPv6 Dual-Stack-Routing auf Switchen und Routern.",
        "Implementierung von Access Control Lists (ACLs) und Netzwerkdiensten (NTP, DNS, DHCP).",
      ],
    },
  },
  {
    id: "google-sysadmin-lab",
    title: "Enterprise Systems Administration & Directory Services",
    category: "System Administration",
    badge: "Google IT Support",
    description: {
      en: "Managed multi-platform operating systems (Linux/Windows) including user access management, Active Directory policies, and CLI shell scripting.",
      de: "Verwaltung plattformübergreifender Betriebssysteme (Linux/Windows) inklusive Benutzerverwaltung, Active Directory-Richtlinien und Shell-Scripting.",
    },
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Active Directory", "Linux CLI", "Bash", "PowerShell", "Permissions"],
    highlights: {
      en: [
        "Automated routine maintenance tasks using Bash and PowerShell scripts.",
        "Managed user groups, organizational units (OUs), and network security policies.",
      ],
      de: [
        "Automatisierung von Wartungsaufgaben mit Bash- und PowerShell-Skripten.",
        "Verwaltung von Benutzergruppen, Organisationseinheiten (OUs) und Sicherheitsrichtlinien.",
      ],
    },
  },
  {
    id: "ibm-itsm-ticketing",
    title: "IT Helpdesk & Service Desk Operations Lab",
    category: "IT Service Management",
    badge: "IBM IT Support",
    description: {
      en: "Executed end-to-end incident handling, ticket logging, escalation workflows, and SLA compliance based on real-world IT service desk case studies.",
      de: "Durchführung von Störungsbehebungen (Incident Handling), Ticket-Verwaltung, Eskalations-Workflows und SLA-Einhaltung im IT-Service-Desk.",
    },
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["ITSM", "Ticketing Systems", "Troubleshooting", "SLA", "Remote Desktop"],
    highlights: {
      en: [
        "Resolved hardware, OS, and cloud connectivity issues through structured troubleshooting.",
        "Utilized remote desktop protocols and diagnostic logging tools for rapid resolution.",
      ],
      de: [
        "Behebung von Hardware-, OS- und Cloud-Problemen durch strukturierte Fehlersuche.",
        "Einsatz von Remote-Desktop-Protokollen und Diagnose-Tools.",
      ],
    },
  },
  {
    id: "cybersecurity-incident-defense",
    title: "Network Perimeter Defense & Incident Governance",
    category: "Cybersecurity",
    badge: "Univ. of London",
    description: {
      en: "Analyzed network security threats, perimeter vulnerabilities, and implemented incident response frameworks aligned with security governance.",
      de: "Analyse von Netzwerksicherheitsbedrohungen und Implementierung von Incident-Response-Frameworks gemäß IT-Security-Governance.",
    },
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Cybersecurity", "Network Security", "Risk Mitigation", "Incident Response"],
    highlights: {
      en: [
        "Evaluated system logs to detect potential unauthorized access and network threats.",
        "Formulated security incident response protocols and governance best practices.",
      ],
      de: [
        "Auswertung von Systemprotokollen zur Erkennung unbefugter Zugriffe.",
        "Erstellung von Incident-Response-Protokollen und Sicherheitsrichtlinien.",
      ],
    },
  },
];

export const education = [
  {
    title: {
      en: "eESA Certificate",
      de: "eESA-Schulabschluss",
    },
    institution: "Berufliche Schule Hamburg",
    status: {
      en: "Completed Successfully",
      de: "Erfolgreich abgeschlossen",
    },
    description: {
      en: "German vocational secondary school leaving certificate.",
      de: "Erster Allgemeinbildender Schulabschluss in Hamburg.",
    },
  },
  {
    title: {
      en: "High School Diploma",
      de: "Sekundarschulabschluss (Abitur-Äquivalent)",
    },
    institution: "Secondary School, Somalia",
    status: {
      en: "Completed Successfully",
      de: "Erfolgreich abgeschlossen",
    },
    description: {
      en: "General Secondary Education Certificate.",
      de: "Allgemeines Sekundarschulabschlusszeugnis.",
    },
  },
  {
    title: {
      en: "DSD I PRO German Language Certificate",
      de: "Deutsches Sprachdiplom DSD I PRO",
    },
    institution: null,
    status: {
      en: "Passed (B1 Professional Level)",
      de: "Bestanden (B1 Berufsbezogen)",
    },
    description: {
      en: "Certified German language proficiency for vocational training (Ausbildung).",
      de: "Zertifizierte Deutschkenntnisse für die berufliche Ausbildung.",
    },
  },
];

export const skills = [
  {
    category: {
      en: "Networking",
      de: "Netzwerktechnik",
    },
    icon: "Network",
    color: "cyan",
    items: ["TCP/IP", "DNS", "DHCP", "VLANs", "VPNs", "Firewalls", "Wireshark", "Cisco IOS"],
  },
  {
    category: {
      en: "Operating Systems",
      de: "Betriebssysteme",
    },
    icon: "Monitor",
    color: "violet",
    items: ["Ubuntu Linux", "Windows 10/11 Pro", "Windows Server", "Bash CLI", "PowerShell"],
  },
  {
    category: {
      en: "Virtualization",
      de: "Virtualisierung",
    },
    icon: "Server",
    color: "indigo",
    items: ["VMware Workstation", "VirtualBox", "Hyper-V", "VM Snapshots", "NAT Networking"],
  },
  {
    category: {
      en: "AI & Automation",
      de: "KI & Automatisierung",
    },
    icon: "Cpu",
    color: "emerald",
    items: ["Ollama", "Qwen 2.5/3.5", "Gemma", "Open-Weight LLMs", "Prompt Engineering"],
  },
  {
    category: {
      en: "Security",
      de: "IT-Sicherheit",
    },
    icon: "ShieldCheck",
    color: "rose",
    items: ["Incident Response", "Network Defense", "CompTIA Sec+ Prep", "Vulnerability Analysis"],
  },
  {
    category: {
      en: "Languages",
      de: "Sprachen",
    },
    icon: "Globe",
    color: "amber",
    items: ["Somali (Native)", "German (B1 Professional)", "English (Fluent)", "Arabic (Conversational)"],
  },
];
