/* EDIT THIS FILE to update your portfolio content. Keep HTML in page files and design rules in assets/css/. */
window.portfolioData = {
  site: {
    name: "Sai Jayanth",
    fullName: "Chinnamsetti Sai Jayanth",
    role: "Cybersecurity Analyst | VAPT & Penetration Testing",
    description: "Cybersecurity graduate with hands-on training in vulnerability assessment and penetration testing, plus cyber-forensics internship experience.",
    email: "jayanth.cyber0@gmail.com",
    github: "https://github.com/IamZer01-ai",
    linkedin: "https://www.linkedin.com/in/sai-jayanth-b3a48322/",
    location: "Telangana, India",
    siteUrl: "https://iamzer01-ai.github.io/Website/",
    resumePath: ""
  },
  about: {
    intro: "I am a Computer Science and Cybersecurity graduate interested in identifying security weaknesses, investigating technical issues, and helping make systems more resilient.",
    interests: ["Vulnerability assessment", "Web application security", "Network security", "Digital forensics", "Security monitoring"],
    summary: "I value careful analysis, repeatable testing workflows, evidence integrity, and clear technical documentation."
  },
  experience: [
    {
      role: "VAPT & Penetration Testing Trainee",
      organization: "Prikus Private Limited",
      location: "Hyderabad, India",
      dates: "May 2026 – September 2026",
      type: "Training",
      highlights: [
        "Monitored security event streams and system logs to identify suspicious activity and potential policy violations.",
        "Triaged security alerts, correlated relevant data points, and escalated higher-severity findings in line with incident-response procedures.",
        "Performed root-cause analysis on anomalous network behavior and documented indicators of compromise (IoCs).",
        "Supported incident containment and eradication activities and prepared investigation reports with impact and remediation details."
      ]
    },
    {
      role: "Cyber Forensics Intern",
      organization: "Central Forensic Science Laboratory (CFSL), Hyderabad",
      location: "Hyderabad, Telangana, India",
      dates: "April 2025 – May 2025",
      type: "Internship",
      highlights: [
        "Supported cybercrime investigations through forensic extraction and evidence analysis using FTK and MOBILedit.",
        "Extracted and reviewed artifacts including application logs, call detail records (CDRs), and deleted files.",
        "Used MySQL and Python scripts to support investigation-data filtering and evidence processing.",
        "Followed forensic integrity practices and maintained chain-of-custody documentation."
      ]
    }
  ],
  skills: {
    "Vulnerability assessment": ["Nessus", "Qualys", "OpenVAS", "Nikto"],
    "Penetration testing": ["Burp Suite Professional", "OWASP ZAP", "Metasploit", "Nmap", "SQLmap", "Hydra"],
    "Web & API security": ["Web application security", "OWASP Top 10", "API testing (Postman)", "Active Directory basics"],
    "Network & systems": ["Wireshark", "Log analysis", "Network traffic inspection", "TCP/IP", "Port scanning", "RBAC"],
    "Forensics & analysis": ["FTK", "MOBILedit", "MySQL", "Python", "Data validation", "Root-cause analysis"],
    "Foundations": ["Linux", "Git & GitHub", "Operating systems", "Database concepts", "Data structures & algorithms"]
  },
  projects: [
    {
      name: "Web Application Vulnerability Assessment & Penetration Testing",
      category: "Security assessment",
      dates: "June 2026",
      description: "Black-box web application assessment mapped to the OWASP Top 10 framework.",
      highlights: [
        "Intercepted and examined HTTP/S requests using Burp Suite.",
        "Assessed access-control and input-handling weaknesses, including IDOR/BOLA, SQL injection, and stored XSS.",
        "Prepared a remediation report with CVSS 3.1 severity ratings, proof-of-concept notes, and developer guidance."
      ],
      technologies: ["Burp Suite", "OWASP Top 10", "CVSS 3.1", "Web security"],
      status: "Completed",
      github: "",
      demo: ""
    },
    {
      name: "SDN Botnet Detection & Mitigation via Deep Learning",
      category: "Academic project",
      dates: "February 2025 – June 2025",
      description: "Academic project exploring network-traffic classification for botnet detection and SDN-based mitigation.",
      highlights: [
        "Designed a traffic-classification workflow using CNN and RNN architectures to identify botnet command-and-control patterns.",
        "Preprocessed and labeled packet-capture datasets for detection experiments involving DDoS and scanning traffic.",
        "Connected the detection workflow with SDN controllers to support dynamic network-rule updates."
      ],
      technologies: ["Python", "CNN", "RNN", "Packet captures", "Software-Defined Networking"],
      status: "Academic project",
      github: "",
      demo: ""
    },
    {
      name: "Digital Gate Pass System – Secure Web Portal with RBAC",
      category: "Academic project",
      dates: "September 2024 – January 2025",
      description: "Full-stack approval application with authentication, authorization, and input-handling safeguards.",
      highlights: [
        "Built an approval workflow using PHP, PostgreSQL, and JavaScript.",
        "Applied role-based access control and defensive measures such as parameterized SQL queries and input sanitization.",
        "Automated credential-verification workflows; the project report recorded a reduction in administrative approval overhead."
      ],
      technologies: ["PHP", "PostgreSQL", "JavaScript", "RBAC", "SQL"],
      status: "Academic project",
      github: "",
      demo: ""
    }
  ],
  education: [
    {
      degree: "B.Tech – Computer Science & Cybersecurity",
      institution: "Pallavi Engineering College (affiliated to JNTUH)",
      location: "Hayathnagar, Hyderabad, India",
      dates: "June 2022 – September 2025"
    },
    {
      degree: "Intermediate",
      institution: "MJPTBCWREIS – Mahatma Jyotiba Phule Telangana Backward Classes Welfare Residential Educational Institutions Society",
      location: "Siddipet, Telangana, India",
      dates: "June 2019 – April 2022"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Green Grove International School",
      location: "Choutuppal, Telangana, India",
      dates: "June 2017 – April 2019"
    }
  ],
  repositories: [
    {
      name: "IamZer01 Sentinel",
      category: "SOC engineering lab",
      description: "A personal SOC lab for event normalization, rule-based detections, alert correlation, and investigation workflows. The repository includes a FastAPI backend, normalized event and incident models, simulation scenarios, storage adapters, monitoring configuration, and a responsive console.",
      highlights: [
        "Implements a rule-based detection and alert-correlation workflow with incident models.",
        "Includes labelled demo fixtures and an optional same-origin alert API; the dashboard is not presented as a live production SOC.",
        "Documents deployment limitations, credential handling, and the need for authentication and network hardening before exposure."
      ],
      technologies: ["Python", "FastAPI", "JavaScript", "Elasticsearch", "Prometheus", "Grafana", "Docker"],
      status: "Active development",
      url: "https://github.com/IamZer01-ai/IamZer01-Sentinel"
    },
    {
      name: "Security Lab — SOC Dashboard",
      category: "Security operations portfolio",
      description: "A browser-based SOC-themed portfolio and dashboard that organizes security monitoring concepts, analyst workflows, investigation notes, and threat-intelligence documentation.",
      highlights: [
        "Provides dashboard, profile, skills, projects, reports, cases, intelligence, and network-analysis sections.",
        "Uses HTML, CSS, JavaScript, a live clock, and a lightweight animated interface.",
        "Best understood as a portfolio/demo interface rather than a connected SIEM deployment."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      status: "Portfolio project",
      url: "https://github.com/IamZer01-ai/security-lab"
    },
    {
      name: "Ethical Hacking Learning Lab",
      category: "Cybersecurity learning repository",
      description: "A structured learning repository documenting the security assessment lifecycle, lab exercises, technical notes, and reporting practices for authorized environments.",
      highlights: [
        "Organizes learning into reconnaissance concepts, scanning and enumeration, vulnerability assessment, controlled validation, and reporting/remediation.",
        "Documents tools and learning objectives alongside a clear authorized-use disclaimer.",
        "Emphasizes verification, risk assessment, documentation, and remediation rather than tool output alone."
      ],
      technologies: ["Linux", "Nmap", "Wireshark", "Burp Suite Community", "OpenVAS", "OWASP ZAP"],
      status: "Active learning repository",
      url: "https://github.com/IamZer01-ai/Ethical-Hacking-Lab"
    },
    {
      name: "Network Engineering Notes",
      category: "Technical knowledge base",
      description: "A structured reference covering networking fundamentals, protocols, routing, switching, traffic analysis, troubleshooting, and network security.",
      highlights: [
        "Covers OSI and TCP/IP models, IP addressing, subnetting, DNS, DHCP, routing, and switching.",
        "Includes network monitoring, wireless networking, troubleshooting, automation, and cloud networking topics.",
        "References tools such as Wireshark, Cisco Packet Tracer, GNS3, and Nmap."
      ],
      technologies: ["TCP/IP", "Wireshark", "Cisco Packet Tracer", "GNS3", "Linux networking"],
      status: "Learning resource",
      url: "https://github.com/IamZer01-ai/Network-Engineering-Notes"
    },
    {
      name: "HACKer RoadMAPS",
      category: "Curated learning roadmap",
      description: "A cybersecurity learning map that organizes foundations, networking and Linux, SOC and blue-team concepts, ethical VAPT, digital forensics, secure development, and career preparation into progressive tracks.",
      highlights: [
        "Provides a suggested learning order and role-oriented tracks for building fundamentals before specialization.",
        "Connects learning topics with practical projects and external reference repositories.",
        "Identifies external resources and their original authors rather than presenting third-party material as original work."
      ],
      technologies: ["Cybersecurity fundamentals", "Networking", "Linux", "SOC", "VAPT", "Digital forensics"],
      status: "Curated resource",
      url: "https://github.com/IamZer01-ai/HACKer-RoadMAPS"
    }
  ],
  certifications: [],
  labs: [],
  blog: [],
  languages: ["English", "Telugu", "Hindi"]
};