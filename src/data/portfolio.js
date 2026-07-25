export const personalInfo = {
  name: "Aydarus Farah Hassan",
  title: "IT Support Specialist & Systems Aspirant",
  subtitle: "Specializing in System Integration, Virtualization Labs, Network Administration, and Local AI Environments.",
  location: "Hamburg, Germany",
  email: "aydurusfarah297@gmail.com",
  phone: "+49 176 75912499",
  availability: "Available for IT Apprenticeship (Ausbildung zum Fachinformatiker für Systemintegration)",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const certifications = [
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "Nov 2025",
    badge: "Professional Cert",
    icon: "ShieldCheck",
    description:
      "6-course series covering hardware, networking, operating systems, system administration, and IT security.",
  },
  {
    title: "IBM IT Support Professional Certificate",
    issuer: "IBM",
    date: "Dec 2025",
    badge: "Professional Cert",
    icon: "Cpu",
    description:
      "9-course specialization in technical support, cloud computing, database basics, and CompTIA preparation.",
  },
  {
    title: "Cisco Certified Support Technician (CCST) IT Support",
    issuer: "Pearson / Cisco",
    date: "Nov 2025",
    badge: "Networking",
    icon: "Network",
    description:
      "10-unit comprehensive specialization in technical support operations and network troubleshooting.",
  },
  {
    title: "Cisco CCNA (200-301) Specialization",
    issuer: "Packt",
    date: "Nov 2025",
    badge: "CCNA Prep",
    icon: "Server",
    description:
      "In-depth training on IPv4/IPv6, VLANs, EtherChannel, VPNs, AAA Security, DHCP, DNS, and NTP.",
  },
  {
    title: "Cyber Security – Technology and Governance",
    issuer: "University of London",
    date: "Dec 2025",
    badge: "Security",
    icon: "Lock",
    description:
      "Specialized training in computer system security, incident response, network defense, and governance.",
  },
];

export const projects = [
  // --- Personal Projects ---
  {
    id: "blueprint-app",
    title: "Blueprint App – AI Knowledge Base",
    category: "Software Development",
    badge: "Personal Project",
    description:
      "Designed and developed a custom software application for structured knowledge management, workflow automation, and local AI model integration.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "AI Workflows", "Knowledge Systems"],
    highlights: [
      "Built custom UI components for structured note-taking and documentation.",
      "Integrated local AI endpoints for privacy-focused data processing.",
    ],
  },
  {
    id: "local-llm-ollama",
    title: "Local LLM Environment (Ollama)",
    category: "AI & Local Systems",
    badge: "Hardware & AI",
    description:
      "Configured open-weight LLMs (Qwen 2.5/3.5, Gemma) locally using Ollama on custom hardware (40GB RAM / 1TB SSD) for privacy-focused automation.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    tags: ["Ollama", "Qwen", "Linux", "Hardware Tuning"],
    highlights: [
      "Optimized model quantization for local inference on 40GB RAM setup.",
      "Configured local REST APIs for desktop software integration.",
    ],
  },

  // --- Certification Capstone & Lab Projects ---
  {
    id: "ccna-enterprise-network",
    title: "Enterprise Network Infrastructure Simulation",
    category: "Networking & Cisco",
    badge: "Cisco CCNA (Packt)",
    description:
      "Designed and configured a multi-site enterprise network featuring VLAN routing, EtherChannel trunks, VPN tunnels, and AAA security protocols.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    tags: ["Cisco IOS", "VLANs", "EtherChannel", "VPNs", "DHCP/DNS"],
    highlights: [
      "Configured IPv4 and IPv6 dual-stack routing across switches and routers.",
      "Implemented access control lists (ACLs) and network service management (NTP, DNS, DHCP).",
    ],
  },
  {
    id: "google-sysadmin-lab",
    title: "Enterprise Systems Administration & Directory Services",
    category: "System Administration",
    badge: "Google IT Support",
    description:
      "Managed multi-platform operating systems (Linux/Windows) including user access management, Active Directory policies, and CLI shell scripting.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Active Directory", "Linux CLI", "Bash", "PowerShell", "Permissions"],
    highlights: [
      "Automated routine maintenance tasks using Bash and PowerShell scripts.",
      "Managed user groups, organizational units (OUs), and network security policies.",
    ],
  },
  {
    id: "ibm-itsm-ticketing",
    title: "IT Helpdesk & Service Desk Operations Lab",
    category: "IT Service Management",
    badge: "IBM IT Support",
    description:
      "Executed end-to-end incident handling, ticket logging, escalation workflows, and SLA compliance based on real-world IT service desk case studies.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["ITSM", "Ticketing Systems", "Troubleshooting", "SLA", "Remote Desktop"],
    highlights: [
      "Resolved hardware, OS, and cloud connectivity issues through structured troubleshooting.",
      "Utilized remote desktop protocols and diagnostic logging tools for rapid resolution.",
    ],
  },
  {
    id: "cybersecurity-incident-defense",
    title: "Network Perimeter Defense & Incident Governance",
    category: "Cybersecurity",
    badge: "Univ. of London",
    description:
      "Analyzed network security threats, perimeter vulnerabilities, and implemented incident response frameworks aligned with security governance.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Cybersecurity", "Network Security", "Risk Mitigation", "Incident Response"],
    highlights: [
      "Evaluated system logs to detect potential unauthorized access and network threats.",
      "Formulated security incident response protocols and governance best practices.",
    ],
  },
];


export const education = [
  {
    title: "eESA Certificate",
    institution: "Berufliche Schule Hamburg",
    status: "Completed Successfully",
    description: "German vocational secondary school leaving certificate.",
  },
  {
    title: "High School Diploma",
    institution: "Secondary School, Somalia",
    status: "Completed Successfully",
    description: "General Secondary Education Certificate.",
  },
  {
    title: "DSD I PRO German Language Certificate",
    institution: null,
    status: "Passed (B1 Professional Level)",
    description: "Certified German language proficiency for vocational training (Ausbildung).",
  },
];

export const skills = [
  {
    category: "Networking",
    icon: "Network",
    color: "cyan",
    items: ["TCP/IP", "DNS", "DHCP", "VLANs", "VPNs", "Firewalls", "Wireshark", "Cisco IOS"],
  },
  {
    category: "Operating Systems",
    icon: "Monitor",
    color: "violet",
    items: ["Ubuntu Linux", "Windows 10/11 Pro", "Windows Server", "Bash CLI", "PowerShell"],
  },
  {
    category: "Virtualization",
    icon: "Server",
    color: "indigo",
    items: ["VMware Workstation", "VirtualBox", "Hyper-V", "VM Snapshots", "NAT Networking"],
  },
  {
    category: "AI & Automation",
    icon: "Cpu",
    color: "emerald",
    items: ["Ollama", "Qwen 2.5/3.5", "Gemma", "Open-Weight LLMs", "Prompt Engineering"],
  },
  {
    category: "Security",
    icon: "ShieldCheck",
    color: "rose",
    items: ["Incident Response", "Network Defense", "CompTIA Sec+ Prep", "Vulnerability Analysis"],
  },
  {
    category: "Languages",
    icon: "Globe",
    color: "amber",
    items: ["Somali (Native)", "German (B1 Professional)", "English (Fluent)", "Arabic (Conversational)"],
  },
];
