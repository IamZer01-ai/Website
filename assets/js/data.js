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
  certifications: [],
  labs: [],
  blog: [],
  languages: ["English", "Telugu", "Hindi"]
};