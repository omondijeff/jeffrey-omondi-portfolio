import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  ChevronRight,
  ChevronLeft,
  Server,
  Zap,
  GraduationCap,
  Cpu,
  Database,
  Layout,
  Car,
  Music,
  MapPin,
  Smartphone,
  Award,
  Users,
  Mic,
  Brain,
  Briefcase,
  Bot
} from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Typewriter = ({ texts, speed = 100, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="typewriter-text">
      {texts[index].substring(0, subIndex)}
      <span className={`typewriter-cursor ${blink ? 'visible' : ''}`}>|</span>
    </span>
  );
};



/** When showing ALL works: PRODUCTS → AUTOMATION → DEVOPS first, then other categories. */
const PORTFOLIO_CATEGORY_ORDER = ["PRODUCTS", "AUTOMATION", "DEVOPS"];
const portfolioCategoryRank = (cat) => {
  const i = PORTFOLIO_CATEGORY_ORDER.indexOf(cat);
  return i === -1 ? PORTFOLIO_CATEGORY_ORDER.length : i;
};

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isWorksMobile, setIsWorksMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 900px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const onChange = () => setIsWorksMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  
  const techLogos = [
    { name: "AWS", src: "/logo-aws.svg", top: "15%", left: "10%" },
    { name: "Docker", src: "/logo-docker.png", top: "20%", right: "12%" },
    { name: "Kubernetes", src: "/logo-k8s.svg", bottom: "25%", left: "15%" },
    { name: "Terraform", src: "/logo-terraform.svg", bottom: "18%", right: "18%" },
    { name: "Python", src: "/logo-python.svg", top: "35%", right: "8%" },
    { name: "Node.js", src: "/tech-node.png", top: "40%", left: "5%" },
  ];

  const experienceStats = [
    { label: "Senior DevOps Engineer", img: "/pillar-cloud.png", offset: -20 },
    { label: "Software Engineer", img: "/pillar-consultant.png", offset: 15 },
    { label: "AI Engineer", img: "/pillar-workflow.png", offset: -40 },
    { label: "Workflow Automation Specialist", img: "/pillar-cloud.png", offset: 10 },
  ];



  const allProjects = [
    { id: 1, title: "Tajilabs Kenya Website", cat: "WEB", year: "2024", desc: "Modern web development company website built with responsive design principles.", img: "/images/projects/tajilabs.png", tech: ["WordPress", "WooCommerce", "DevOps", "CI/CD"] },
    { id: 2, title: "Lendbucks", cat: "AUTOMATION", year: "2023", desc: "Automated client onboarding system that streamlined the loan application process. | lendbucks.co.ke", img: "/images/projects/lendbucks.png", tech: ["Node.js", "Express", "PostgreSQL", "Docker"] },
    { id: 3, title: "N8N Workflow Automation", cat: "AUTOMATION", year: "2024", desc: "Business process automation platform that connects various services.", img: "/images/projects/n8n.png", tech: ["N8N", "API Integration", "Workflow Automation"] },
    { id: 4, title: "Hala Nairobi", cat: "WEB", year: "2023", desc: "Restaurant and hospitality website with online ordering and reservation system. | halanairobi.com", img: "/images/projects/hala.png", tech: ["React", "Node.js", "MongoDB", "Payment Gateway"] },
    { id: 5, title: "MSGN & Partners Website", cat: "WEB", year: "2023", desc: "Professional services company website with client portal and document management.", img: "/images/projects/msgn.png", tech: ["Laravel", "Vue.js", "MySQL", "AWS"] },
    { id: 6, title: "Nelson Haus", cat: "WEB", year: "2024", desc: "Real estate platform featuring property listings and virtual tours.", img: "/images/projects/nelson-haus.png", tech: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary"] },
    { id: 7, title: "JK Ventures Website", cat: "WEB", year: "2024", desc: "Investment platform with portfolio management and analytics dashboard.", img: "/images/projects/jk-vantures.png", tech: ["React", "Node.js", "MongoDB", "Chart.js"] },
    { id: 8, title: "Qwetu Sacco", cat: "WEB", year: "2023", desc: "Financial cooperative website with member portal and loan management. | qwetusacco.com", img: "/images/projects/qwetu-sacco.png", tech: ["PHP", "Laravel", "MySQL", "Bootstrap"] },
    { id: 9, title: "Tikvah Center", cat: "WEB", year: "2023", desc: "Educational institution website with course management and student portal.", img: "/images/projects/tikvah.png", tech: ["WordPress", "LMS Plugin", "Custom Themes", "SEO"] },
    { id: 10, title: "Gap Talent Partners", cat: "AUTOMATION", year: "2024", desc: "HR recruitment platform with cloud hosting and workflow automation.", img: "/images/projects/gap-talent-partners.png", tech: ["WordPress", "Cloud Hosting", "Automation", "CI/CD"] },
    { id: 12, title: "Amrutt Kenya E-Commerce", cat: "WEB", year: "2023", desc: "WooCommerce store with bulk SMS and WhatsApp retail integration.", img: "/images/projects/amrutt-kenya.png", tech: ["WordPress", "WooCommerce", "Bulk SMS", "WhatsApp API"] },
    { id: 13, title: "Liafro Store", cat: "SHOPIFY", year: "2023", desc: "Shopify store with DHL and Fargo logistics integrations.", img: "/images/projects/liafro-kenya.png", tech: ["Shopify", "Liquid", "Logistics APIs", "DHL"] },
    { id: 14, title: "Pension Pilot Platform", cat: "DEVOPS", year: "2024", desc: "Pension consolidation platform for tracking multiple retirement accounts.", img: "/images/projects/pension-pilot.png", tech: ["React", "Node.js", "PostgreSQL", "APIs"] },
    { id: 16, title: "Errorlytic", cat: "PRODUCTS", year: "2024", desc: "Automotive diagnostic system: fault codes, quotes, and insurance.", img: "/images/products/errorlytic.png", tech: ["Fault Detection", "Quotation", "Insurance", "Inventory"] },
    { id: 17, title: "AJiri Automation", cat: "PRODUCTS", year: "2024", desc: "HR interview automation: scheduling and candidate tracking.", img: "/images/products/ajiri.png", tech: ["Scheduling", "Calendar Sync", "Pipeline", "Tracking"] },
    { id: 18, title: "Remedy School OS", cat: "PRODUCTS", year: "2024", desc: "Full school operating system: admissions, fees, and grading.", img: "/images/products/remedy.png", tech: ["Admissions", "M-Pesa", "Timetabling", "Grades"] },
    { id: 19, title: "TajiRent", cat: "PRODUCTS", year: "2024", desc: "Property management: tenants, rent collection, and maintenance.", img: "/images/products/taji-rent.png", tech: ["Tenant Mgmt", "M-Pesa", "Maintenance", "Reports"] },
    { id: 20, title: "Verifay", cat: "PRODUCTS", year: "2024", desc: "High-integrity Kenyan payroll SaaS automating Finance Act compliance (NSSF, SHIF, Housing Levy) with enterprise-grade accuracy and immutable audit trails.", img: "/images/products/verifay.jpg", tech: ["Node.js", "Fastify", "MongoDB", "Redis", "Compliance"] },
    { id: 21, title: "DevLog", cat: "PRODUCTS", year: "2024", desc: "Standups that write themselves: GitHub activity surfaced in Slack.", img: "/images/products/devlog.png", tech: ["GitHub", "Slack", "PR Tracking", "Summaries"] },
    { id: 22, title: "Amrutt Kenya Headless", cat: "WEB", year: "2024", desc: "Headless e‑commerce with Elasticsearch and Cloudflare Workers.", img: "/images/projects/amrutt-headless.png", tech: ["WordPress", "Elasticsearch", "Cloudflare Workers"] },
    { id: 23, title: "AI-SDR by BetterQA", cat: "AUTOMATION", year: "2025", desc: "AI-powered sales development and outreach tooling.", img: "/images/projects/ai-sdr-betterqa.png", tech: ["AI", "Sales Automation", "BetterQA"] },
    { id: 24, title: "Betterflow", cat: "AUTOMATION", year: "2025", desc: "Workflow and process automation platform at BetterQA.", img: "/images/projects/betterflow-betterqa.png", tech: ["Workflow", "Automation", "BetterQA"] },
    { id: 25, title: "Remedy Dashboard", cat: "PRODUCTS", year: "2024", desc: "Grafana monitoring and dashboards for the Remedy platform.", img: "/images/projects/remedy-grafana.png", tech: ["Grafana", "Monitoring", "Remedy", "Metrics"] },
    { id: 26, title: "Mensbestbasics", cat: "SHOPIFY", year: "2024", desc: "UK Shopify store with custom theme and backend extensions.", img: "/images/projects/mensbestbasics-shopify.png", tech: ["Shopify", "Liquid", "E‑commerce", "Retail"] },
    { id: 27, title: "Purity Sang Advocates", cat: "WEB", year: "2024", desc: "Professional website for a Kenyan law firm.", img: "/images/projects/puritysangadvocates.png", tech: ["WordPress", "Responsive", "SEO", "Inquiry"] },
    { id: 28, title: "Fintech Group", cat: "WEB", year: "2024", desc: "Secure, data-driven financial platform. | fintech-group.com", img: "/images/projects/fintech-group.png", tech: ["WordPress", "Fintech", "Security"] },
    { id: 29, title: "Obotech Solutions", cat: "WEB", year: "2024", desc: "Corporate platform for technology solutions. | obotechsolutions.co.ke", img: "/images/projects/obotech.png", tech: ["WordPress", "Corporate", "Custom UI"] },
    { id: 30, title: "OESAI (Insurance)", cat: "WEB", year: "2024", desc: "Insurance portal for cross-border industry solutions. | oesai.org", img: "/images/projects/oesai.png", tech: ["WordPress", "Portal", "Insurance"] },
    { id: 31, title: "Likoni Freighters", cat: "WEB", year: "2024", desc: "Logistics and freight management portal. | likonifreighters.com", img: "/images/projects/likoni.png", tech: ["WordPress", "Logistics", "Freight"] },
    { id: 32, title: "Compact Hydro Solutions", cat: "WEB", year: "2024", desc: "Engineering solutions for hydro-power infrastructure. | compacthydrosolutions.com", img: "/images/projects/hydro.png", tech: ["WordPress", "Engineering", "Hydro"] },
    { id: 33, title: "Clifton Gas", cat: "WEB", year: "2024", desc: "Energy and gas distribution portal. | cliftongas.com", img: "/images/projects/clifton.png", tech: ["WordPress", "Energy", "Infrastructure"] },
    { id: 34, title: "Mahan Road", cat: "WEB", year: "2024", desc: "Civil engineering and road construction corporate site. | mahanroad.com", img: "/images/projects/mahan.png", tech: ["WordPress", "Engineering", "Construction"] },
    { id: 35, title: "Edgescope", cat: "WEB", year: "2024", desc: "Technical solutions and IT consulting portal. | edgescope.co.ke", img: "/images/projects/edgescope.png", tech: ["WordPress", "Consulting", "IT"] },
    { id: 36, title: "Great Rift Coffee", cat: "WEB", year: "2024", desc: "E-commerce platform for premium coffee retail. | greatriftcoffee.com", img: "/images/projects/coffee.png", tech: ["WooCommerce", "E-commerce", "Retail"] },
    { id: 37, title: "Diro Kenya", cat: "WEB", year: "2024", desc: "Performance-optimized storefront for retail. | dirokenya.com", img: "/images/projects/diro.png", tech: ["WooCommerce", "E-commerce", "Conversion"] },
    { id: 38, title: "Maridady Motors", cat: "WEB", year: "2024", desc: "Automotive retail and import platform. | maridadymotors.com", img: "/images/projects/maridady.png", tech: ["WordPress", "Automotive", "Retail"] },
    { id: 39, title: "Chirowa Online", cat: "WEB", year: "2024", desc: "Digital marketplace and e-commerce portal. | chirowaonline.com", img: "/images/projects/chirowa.png", tech: ["WooCommerce", "Marketplace", "E-commerce"] },
    { id: 40, title: "Phenomenal Imports Global", cat: "WEB", year: "2024", desc: "Global trade and imports management platform. | phenomenalimportsglobal.com", img: "/images/projects/phenomenal.png", tech: ["WordPress", "Import", "Global Trade"] },
    { id: 41, title: "Kitali Suppliers Ltd", cat: "WEB", year: "2024", desc: "Industrial and retail supply chain portal. | kitalisuppliersltd.com", img: "/images/projects/kitali.png", tech: ["WordPress", "Supply Chain", "B2B"] },
    { id: 42, title: "Mercy and Love Foundation", cat: "WEB", year: "2024", desc: "NGO platform for community outreach and engagement. | mercyandlovefoundation.org", img: "/images/projects/mercyandlove.png", tech: ["WordPress", "NGO", "Community"] },
    { id: 43, title: "Jilinde", cat: "WEB", year: "2024", desc: "Social impact and accessibility focused portal. | jilinde.org", img: "/images/projects/jilinde.png", tech: ["WordPress", "Accessibility", "NGO"] },
    { id: 44, title: "SymbioCity Kenya", cat: "WEB", year: "2024", desc: "Sustainable urban development platform. | symbiocitykenya.org", img: "/images/projects/symbiocity.png", tech: ["WordPress", "Sustainability", "Urban"] },
    { id: 45, title: "AUSPA Kenya", cat: "WEB", year: "2024", desc: "Public sector engagement and standards gateway. | auspakenya.com", img: "/images/projects/auspa.png", tech: ["WordPress", "Public Sector", "Standards"] },
    { id: 46, title: "Heavenly Manna Kenya", cat: "WEB", year: "2024", desc: "Community engagement and outreach foundation site. | heavenlymannakenya.co.ke", img: "/images/projects/heavenlymanna.png", tech: ["WordPress", "NGO", "Foundation"] },
    { id: 47, title: "Homeground Hospital", cat: "WEB", year: "2024", desc: "Healthcare service portal with structured data and clean UI. | homegroundhospital.org", img: "/images/projects/homeground.png", tech: ["WordPress", "Healthcare", "UI/UX"] },
    { id: 48, title: "Vast Inner Potential", cat: "WEB", year: "2024", desc: "Professional growth and potential development portal. | vastinnerpotential.com", img: "/images/projects/vip.png", tech: ["WordPress", "Professional", "Coaching"] },
    { id: 49, title: "Chemagro Portal", cat: "WEB", year: "2024", desc: "Specialized subdomain for agricultural chemicals. | chemagro.obotechsolutions.com", img: "/images/projects/chemagro.png", tech: ["WordPress", "Agriculture", "Portal"] },
    { id: 50, title: "Faras Portal", cat: "WEB", year: "2024", desc: "Subdomain extension for specialized logistical services. | faras.obotechsolutions.com", img: "/images/projects/faras.png", tech: ["WordPress", "Logistics", "Portal"] },
    { id: 51, title: "Qvideodata", cat: "WEB", year: "2024", desc: "Video data management and architecture portal. | qvideodata.com", img: "/images/projects/qvideodata.png", tech: ["WordPress", "Video Data", "Architecture"] }
  ];


  const [activeFilter, setActiveFilter] = useState("ALL");

  const projectsMatchingFilter =
    activeFilter === "ALL"
      ? allProjects
      : allProjects.filter((p) => p.cat === activeFilter);
  const filteredProjects = [...projectsMatchingFilter].sort((a, b) => {
    const ra = portfolioCategoryRank(a.cat);
    const rb = portfolioCategoryRank(b.cat);
    if (ra !== rb) return ra - rb;
    const ya = parseInt(a.year, 10) || 0;
    const yb = parseInt(b.year, 10) || 0;
    if (yb !== ya) return yb - ya;
    return (a.id ?? 0) - (b.id ?? 0);
  });

  const expertiseCategories = [
    { id: "agentic-ai", title: "Agentic AI & Automation", icon: <Bot size={28} />, skills: ["Multi-Agent Orchestration", "Autonomous Workflows", "AI Tooling (Claude, Cursor, Antigravity)", "LLM Agents", "Agentic RAG"] },
    { id: "devops", title: "DevOps & Cloud", icon: <Server size={28} />, skills: ["Jenkins", "Terraform", "Docker", "GitLab CI", "GitHub Actions", "Ansible", "AWS", "Kubernetes"] },
    { id: "backend", title: "Backend Development", icon: <Cpu size={28} />, skills: ["Node.js", "Express.js", "REST APIs", "Python", "PHP", "Laravel"] },
    { id: "ai-ml", title: "AI & Machine Learning", icon: <Brain size={28} />, skills: ["LLM Apps", "RAG & Vector DBs", "Prompt Engineering", "scikit-learn", "Pandas", "MLOps"] },
    { id: "automation", title: "Automation", icon: <Zap size={28} />, skills: ["Bash", "Python Scripting", "Go", "CI/CD Pipelines"] },
    { id: "data", title: "Data & Databases", icon: <Database size={28} />, skills: ["PostgreSQL", "MySQL", "MongoDB", "DB Tuning"] },
    { id: "frontend", title: "Frontend", icon: <Layout size={28} />, skills: ["Vue.js", "Next.js", "TypeScript", "React"] }
  ];

  const fullExperience = [
    { 
      role: "Senior DevOps Engineer", 
      company: "BetterQA", 
      logo: "assets/logos/betterqa.svg",
      date: "May 2025 – Present", 
      desc: "Leading DevOps architecture for BetterFlow—global multi-tenant SaaS for parallel browser test orchestration.", 
      points: ["Architected Kubernetes-native test runners with auto-scaling capabilities on AWS/GCP", "Implemented enterprise-grade observability utilizing Prometheus, Grafana, and Loki", "Established standardized CI/CD deployment patterns for global infrastructure"] 
    },
    { 
      role: "Software Engineer DevOps", 
      company: "Greenspoon Kenya", 
      logo: "assets/logos/greenspoon.svg",
      date: "Nov 2022 – April 2025", 
      desc: "Directed platform engineering strategy reporting directly to CTO during 96% growth phase.", 
      points: ["Architected and delivered Internal Developer Platform (IDP) with automated 'Golden Paths'", "Led end-to-end logistics, procurement, and transport/dispatch systems digitizing the entire ecosystem", "Managed AWS infrastructure lifecycle, reducing deployment lead time from hours to minutes"] 
    },
    { 
      role: "DevOps Engineer AI/ML", 
      company: "Turality LLC", 
      logo: "assets/logos/turality.png",
      date: "Nov 2023 – Feb 2024", 
      desc: "Engineered high-performance infrastructure for social automation and AI inference.", 
      points: ["Architected specialized LLM inference pipelines with GPU resource orchestration via Python/Boto3", "Implemented resilient, auto-scaling data pipelines for real-time generative AI inference", "Partnered with Data Science to standardize MLOps workflows and automated drift detection"] 
    },
    { 
      role: "Founder & DevOps Engineer", 
      company: "TajiLabs", 
      logo: "assets/logos/tajilabs.png",
      date: "Jan 2019 – Present", 
      desc: "Founded and scaling a DevOps consultancy focused on cloud architecture and SRE strategy.", 
      points: ["Directed cloud architecture and SRE strategy for 15+ organizations across East Africa", "Architected TajiTrack: cloud-native GPS tracking/fleet management for financial institutions", "Built secure Edtech SaaS for Remedy and digitized supply chains using Python/n8n automation"] 
    },
    { 
      role: "Full Stack Software Engineer", 
      company: "OboTech Solutions", 
      logo: "assets/logos/obotech.png",
      date: "July 2019 – April 2022", 
      desc: "Architected digital-first platforms for fintech and government institutions.", 
      points: ["Led development of government Request Management Systems for NTSA Kenya", "Automated procurement and reconciliation workflows for high-volume SACCO/MFI platforms", "Deployed containerized microservices and CI/CD pipelines for mission-critical apps"] 
    },
    { 
      role: "IT Support Specialist", 
      company: "ICT Authority", 
      logo: "assets/logos/icta.png",
      date: "2019", 
      desc: "Supported Digital Literacy Program under the Ministry of ICT, Government of Kenya.", 
      points: ["Coordinated deployment of 1,000+ devices and provisioned bare metal server infrastructure", "Supported 200+ staff at the ground level, maintaining 99% uptime for learning platforms", "Developed hardware and network deployment strategies for the national ICT initiative"] 
    }
  ];

  const fullEducation = [
    { degree: "MSc. Computing & Info Systems", school: "Strathmore University", date: "Ongoing", desc: "Focus on cloud infrastructure, DevOps automation, and applied AI." },
    { degree: "DevOps Engineering", school: "Moringa School", date: "2022 – 2023", desc: "Intensive program covering CI/CD, cloud architecture, and containerization." },
    { degree: "BSc. Computer Science", school: "Kibabii University", date: "2017 – 2022", desc: "Core focus on Software Engineering; co-led Google Developer Student Club." }
  ];

  const certificationsData = [
    "AWS Solutions Architect (Candidate)",
    "Certified DevSecOps Engineer (Candidate)",
    "AI & LLMs Self-Driven Learning (Turality)",
    "DevOps Engineering (Moringa School)"
  ];

  const communityEngagement = [
    { title: "Infrastructure as Code Webinar", org: "Nairobi DevOps", date: "2024", icon: <Mic size={16} /> },
    { title: "DevOps Workshop", org: "Technical University of Kenya", date: "2025", icon: <Users size={16} /> },
    { title: "Google DSC Co-Lead", org: "Kibabii University", date: "2020-2021", icon: <Award size={16} /> }
  ];

  const lifestyleInterests = [
    { item: "Cars & Turbo Builds", icon: <Car size={16} /> },
    { item: "Piano & Music Composition", icon: <Music size={16} /> },
    { item: "Tech for Social Impact", icon: <Zap size={16} /> }
  ];

  const personalContact = {
    phone: "+254 706 673 348",
    email: "me@omondijeff.dev",
    location: "Nairobi, Kenya"
  };

  const certificationBadges = [
    { id: 'aws-sap', src: '/badge-aws-sap.png', label: 'AWS Certified Solutions Architect – Professional' },
    { id: 'azure-sa', src: '/badge-azure-sa.png', label: 'Microsoft Certified: Azure Solutions Architect Expert' },
    { id: 'terraform', src: '/badge-terraform.png', label: 'HashiCorp Certified: Terraform Associate' },
    { id: 'cka', src: '/badge-cka.png', label: 'Certified Kubernetes Administrator (CKA)' },
    { id: 'kcna', src: '/badge-kcna.png', label: 'Kubernetes and Cloud Native Associate (KCNA)' }
  ];

  const nextSection = () => currentSection < 3 && setCurrentSection(c => c + 1);
  const prevSection = () => currentSection > 0 && setCurrentSection(c => c - 1);

  const springConfig = { type: "spring", stiffness: 60, damping: 15, mass: 0.8 };

  return (
    <div className="main-canvas">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo mono" onClick={() => setCurrentSection(0)} style={{ cursor: 'pointer' }}>
            jeff<span>.</span>
          </div>
          <div className="nav-menu">
            <span onClick={() => setCurrentSection(0)} className={currentSection === 0 ? "active" : ""}>Home</span>
            <span onClick={() => setCurrentSection(1)} className={currentSection === 1 ? "active" : ""}>Works</span>
            <span onClick={() => setCurrentSection(2)} className={currentSection === 2 ? "active" : ""}>Services</span>
            <span onClick={() => setCurrentSection(3)} className={currentSection === 3 ? "active" : ""}>About me</span>
          </div>
          <button className="btn-blue mono">LET'S TALK</button>
        </div>
      </nav>

      <motion.div 
        className="persistent-subject-wrapper"
        animate={{ 
          x: (isWorksMobile && currentSection === 0) ? "0" : 
             (isWorksMobile && (currentSection === 1 || currentSection === 2)) ? '-130%' : 
             currentSection === 0 ? "15%" : 
             (currentSection === 1 || currentSection === 2) ? "-32%" : 
             "-52%",
          scale: (currentSection === 0) ? 1 : 
                 (currentSection === 2) ? 0.72 : 0.85,
          opacity: (isWorksMobile && currentSection !== 0) ? 0 :
                   (isWorksMobile && currentSection === 0) ? 0.5 :
                    currentSection === 1 ? 0.85 : 
                    currentSection === 2 ? 0.9 : 
                    currentSection === 3 ? 0.25 : 1
        }}
        style={{ originY: 1 }}
        transition={springConfig}
      >
        <img src="/subject_new.png" alt="Jeffrey Omondi" className="subject-img" />
      </motion.div>

      <AnimatePresence>
        {currentSection === 1 && (
          <motion.div 
            className="works-subject-overlay"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.3 }}
          >
            <div className="belief-tag">I believe</div>
            <h3 className="belief-text">"I believe in building systems that don't just work, but evolve—bridging the gap between robust infrastructure and intelligent software."</h3>
            
            <div className="roles-floating-list">
              {experienceStats.map((role, idx) => (
                <div key={idx} className="role-floating-item glass-premium mono">
                  {role.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSection === 2 && !isWorksMobile && (
          <motion.div 
            className="services-badges-overlay"
            initial={{ opacity: 0, y: 30, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, x: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="badge-grid">
              {certificationBadges.map((badge, bidx) => (
                <motion.div 
                  key={badge.id}
                  className="badge-item glass-premium"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + bidx * 0.1 }}
                >
                  <img src={badge.src} alt={badge.label} title={badge.label} />
                </motion.div>
              ))}
            </div>
            <div className="badge-tag mono uppercase">Certified Engineering</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="sections-container"
        drag={isWorksMobile ? "x" : false}
        dragDirectionLock={true}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        onDragEnd={(e, { offset, velocity }) => {
          const swipeThreshold = 50;
          if (offset.x < -swipeThreshold) {
            nextSection();
          } else if (offset.x > swipeThreshold) {
            prevSection();
          }
        }}
        animate={{ x: `-${currentSection * 100}%` }}
        transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
      >
        {/* SECTION 0: HERO */}
        <section className="section hero">
          <div className="grain-overlay" />
          
          {techLogos.map((logo, idx) => (
            <motion.div 
              key={idx}
              style={{ 
                position: 'absolute', 
                top: logo.top, 
                left: logo.left, 
                right: logo.right, 
                zIndex: 3,
                width: 44,
                height: 44,
                overflow: 'hidden',
                pointerEvents: 'none'
              }}
              animate={{ y: [0, idx % 2 === 0 ? -12 : 12, 0], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 8 + idx, ease: "easeInOut" }}
            >
              <img src={logo.src} alt={logo.name} width={44} height={44} style={{ width: 44, height: 44, objectFit: 'contain', filter: 'grayscale(80%) opacity(0.4)', display: 'block' }} />
            </motion.div>
          ))}

          <AnimatePresence>
            {currentSection === 0 && (
              <motion.div 
                className="hero-content" 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <p className="hello">Hello, I'm</p>
                <h1 className="jeffrey-name grad-text">JEFFREY<br/>OMONDI</h1>
                <div className="intro-text">
                  <div className="typewriter-container">
                    <Typewriter texts={["Senior DevOps Engineer", "Software Engineer", "AI Engineer", "Workflow Automation Specialist"]} />
                  </div>
                  <p className="intro-sub">Building high-performance, resilient cloud ecosystems.</p>
                </div>
                
                <div className="hero-logos-ribbon">
                  <span className="mono uppercase small opacity-50">Proven Impact At</span>
                  <div className="hero-logos-mask">
                    <div className="hero-logos-scroll">
                      {[...fullExperience, ...fullExperience].map((job, idx) => (
                        <img key={idx} src={job.logo} alt={job.company} className="hero-logo-item" title={job.company} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>


          <div className="hero-footer-right">
            <div className="socials">
              <a href="mailto:jeffomondi.eng@gmail.com" className="social-circle blue"><Mail size={24} /></a>
              <a href="https://github.com/omondijeff" className="social-circle"><GithubIcon size={24} /></a>
              <a href="https://linkedin.com/in/omondijeff" className="social-circle"><LinkedinIcon size={24} /></a>
            </div>
          </div>
        </section>

        <div className="section works-view">
          <div className="works-scroll-container scroll-y">
            <div className="works-header-sticky">
               <span className="works-count mono uppercase">Archive ({filteredProjects.length})</span>
               <h2 className="section-title grad-text works-section-title">RECENT <span>WORKS</span></h2>
               
               <div className="works-filter-bar">
                 {["ALL", "WEB", "PRODUCTS", "AUTOMATION", "DEVOPS", "SHOPIFY"].map(f => (
                   <span 
                    key={f} 
                    className={`filter-pill mono ${activeFilter === f ? 'active' : ''}`}
                    onClick={() => setActiveFilter(f)}
                   >
                     {f}
                   </span>
                 ))}
               </div>
            </div>

            <div className="works-full-grid">
              {filteredProjects.map((w, idx) => (
                <motion.div 
                  key={w.id || idx} 
                  layout
                  className="work-card-premium" 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                >
                  <div className="work-thumb-p">
                    <img src={w.img} alt={w.title} />
                  </div>
                  <div className="work-info-p">
                    <div className="work-top">
                      <span className="work-year mono">{w.year}</span>
                      <span className="work-meta mono uppercase">{w.cat}</span>
                    </div>
                    <h3 className="mono">{w.title}</h3>
                    <p>{w.desc}</p>
                    <div className="work-tech-tags">
                      {w.tech?.map((t, tidx) => (
                        <span key={tidx} className="w-tech-tag mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: SERVICES */}
        <div className="section services-view">
          <div className="services-scroll-container scroll-y">
            <div className="services-header-sticky">
              <div className="services-header-lead">
                <span className="works-count mono uppercase">Capabilities ({expertiseCategories.length})</span>
                <h2 className="section-title grad-text services-section-title">TECHNICAL <span>EXPERTISE</span></h2>
              </div>
              <p className="service-intro">Highly categorized engineering stack across the full software lifecycle.</p>
            </div>
             
             <div className="services-full-grid">
               {expertiseCategories.map((cat, idx) => (
                 <motion.div 
                   key={idx} 
                   className={`expertise-card horizontal${idx === 0 ? ' expertise-card--lead' : ''}`}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 + idx * 0.05 }}
                   whileHover={{ y: -5, x: 5, scale: 1.01 }}
                 >
                   <div className="expertise-icon-side">
                     <div className="expertise-icon-wrapper">{cat.icon}</div>
                   </div>
                   <div className="expertise-content-side">
                     <h3 className="mono">{cat.title}</h3>
                     <div className="skills-pill-cloud">
                       {cat.skills.map((skill, si) => <span key={si} className="skill-pill">{skill}</span>)}
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        {/* SECTION 3: ABOUT */}
        <div className="section about-view scroll-y">
          <div className="grain-overlay" />
          
          <div className="about-header-sticky">
            <div className="about-header-lead">
              <span className="works-count mono uppercase">Perspective</span>
              <h2 className="section-title grad-text">BUILDING <span>FOUNDATIONS</span></h2>
            </div>
            <p className="service-intro">
              My career began in the literal infrastructure of the ICT Authority—deploying 1,000+ devices and provisioning bare metal servers.
            </p>
          </div>

          <div className="about-modern-layout">
            <div className="about-intro-grid">
              <div className="main-bio">
                <div className="bio-sub">
                    <p>
                      Supporting 200+ staff at the ground level taught me a fundamental truth: <strong>software is only as reliable as the foundation it’s built on.</strong> 
                      Seeing the gap between user frustration and technical debt inspired me to stop just fixing systems and start engineering them for resilience.
                    </p>
                    <p>
                      That drive fueled the creation of <strong>TajiLabs</strong>, where I spent three years scaling cloud architecture for 15+ organizations. 
                      This founder-led journey was my sandbox for diversification—from architecting secure <strong>Edtech SaaS for Remedy</strong> to leading digital transformation for SMEs across East Africa. 
                      It taught me that DevOps isn't just a technical role; it's a <strong>business strategy</strong> for speed and stability.
                    </p>
                    <p>
                      This converged at <strong>Greenspoon</strong>, where I reported directly to the CTO to lead platform strategy during a period of 96% operational growth. 
                      I led the architecture of end-to-end <strong>logistics, procurement, and transport/dispatch systems</strong> while building an <strong>Internal Developer Platform (IDP)</strong> to standardize our engineering "Golden Paths."
                    </p>
                    <p>
                      Today, I continue to build at <strong>TajiLabs</strong> while providing strategic support for <strong>BetterQA’s</strong> multi-tenant SaaS. 
                      Having worn the hats of a <strong>Software, AI, and DevOps Engineer</strong>, I am always open to new challenges that require bridging the gap between code, infrastructure, and intelligent automation.
                    </p>
                  </div>
                </div>
                <div className="about-stats-bento">
                  <div className="a-stat-bento glass-premium">
                    <span className="stat-num grad-text">5+</span>
                    <span className="stat-label-b">Years Exp</span>
                  </div>
                  <div className="a-stat-bento glass-premium">
                    <span className="stat-num grad-text">89+</span>
                    <span className="stat-label-b">Projects</span>
                  </div>
                  <div className="a-stat-bento glass-premium">
                    <span className="stat-num grad-text">77+</span>
                    <span className="stat-label-b">Clients</span>
                  </div>
              </div>
            </div>

            <div className="about-content-main">
              <div className="about-timeline-column">
                <h3 className="column-title mono uppercase"><Briefcase size={20} /> Professional Journey</h3>
                <div className="vertical-timeline">
                  {fullExperience.map((job, idx) => (
                    <div key={idx} className="v-timeline-item">
                      <div className="v-marker"></div>
                      <div className="v-content glass-premium">
                        <div className="v-header">
                          <span className="v-date mono">{job.date}</span>
                          <div className="v-role-brand">
                            <h4>{job.role}</h4>
                            <img src={job.logo} alt={job.company} className="v-company-logo" />
                          </div>
                          <p className="v-company">{job.company}</p>
                        </div>
                        <ul className="v-points">
                          {job.points.map((p, pi) => <li key={pi}>{p}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-secondary-column">
                <div className="edu-section-block">
                  <h3 className="column-title mono uppercase"><GraduationCap size={20} /> Education</h3>
                  {fullEducation.map((edu, idx) => (
                    <div key={idx} className="edu-item-compact glass-premium">
                      <h5>{edu.degree}</h5>
                      <p>{edu.school}</p>
                      <span className="edu-date mono">{edu.date}</span>
                    </div>
                  ))}
                </div>

                <div className="cert-section-block">
                  <h3 className="column-title mono uppercase"><Award size={20} /> Certifications</h3>
                  <div className="cert-grid-compact">
                    {certificationsData.map((cert, idx) => (
                      <div key={idx} className="cert-item-tag glass-premium">{cert}</div>
                    ))}
                  </div>
                </div>

                <div className="comm-section-block">
                  <h3 className="column-title mono uppercase"><Users size={20} /> Community</h3>
                  {communityEngagement.map((comm, idx) => (
                    <div key={idx} className="comm-item-compact border-left-grad">
                      <div className="comm-head">{comm.icon} <span>{comm.org}</span></div>
                      <p>{comm.title}</p>
                    </div>
                  ))}
                </div>

                <div className="lifestyle-section-block">
                  <h3 className="column-title mono uppercase"><Zap size={20} /> Beyond Code</h3>
                  <div className="lifestyle-grid-compact">
                    {lifestyleInterests.map((life, idx) => (
                      <div key={idx} className="life-item-compact glass-premium">
                        {life.icon} <span>{life.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="about-footer-connect glass-premium">
               <h3 className="grad-text">Let's connect and build the future.</h3>
               <div className="contact-pills">
                 <span className="c-pill"><Mail size={16} /> {personalContact.email}</span>
                 <span><Smartphone size={16} /> {personalContact.phone}</span>
                 <span><MapPin size={16} /> {personalContact.location}</span>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <AnimatePresence>
        {currentSection < 3 && (
          <motion.div 
            className="nav-control next" 
            onClick={nextSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="nav-control-btn">
              <ChevronRight size={24} />
            </div>
            <div className="nav-control-label mono uppercase small">
              Next: {currentSection === 0 ? "WORKS" : currentSection === 1 ? "SERVICES" : "ABOUT"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSection > 0 && (
          <motion.div 
            className="nav-control prev" 
            onClick={prevSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="nav-control-btn">
              <ChevronLeft size={24} />
            </div>
            <div className="nav-control-label mono uppercase small">
              Back: {currentSection === 1 ? "HOME" : currentSection === 2 ? "WORKS" : "SERVICES"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Navigation Hint */}
      <AnimatePresence>
        {isWorksMobile && currentSection === 0 && (
          <motion.div 
            className="mobile-nav-hint mono uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            <span>Swipe or Tap Dots</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Dots */}
      {isWorksMobile && (
        <div className="mobile-nav-dots">
          {[0, 1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`nav-dot ${currentSection === i ? 'active' : ''}`}
              onClick={() => setCurrentSection(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
