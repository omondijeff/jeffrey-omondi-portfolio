import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  ChevronRight,
  ChevronLeft,
  Server,
  Code,
  Shield,
  Activity,
  Globe,
  ShoppingCart,
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
  Briefcase
} from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const BrainIcon = Brain;

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const techLogos = [
    { name: "AWS", src: "/logo-aws.svg", top: "15%", left: "10%" },
    { name: "Docker", src: "/logo-docker.png", top: "20%", right: "12%" },
    { name: "Kubernetes", src: "/logo-k8s.svg", bottom: "25%", left: "15%" },
    { name: "Terraform", src: "/logo-terraform.svg", bottom: "18%", right: "18%" },
    { name: "Python", src: "/logo-python.svg", top: "35%", right: "8%" },
    { name: "Node.js", src: "/tech-node.png", top: "40%", left: "5%" },
  ];

  const experienceStats = [
    { label: "Platform Engineer", img: "/pillar-cloud.png", offset: -20 },
    { label: "DevOps Consultant", img: "/pillar-consultant.png", offset: 15 },
    { label: "Full Stack Dev", img: "/pillar-workflow.png", offset: -40 },
  ];

  const officialBadges = [
    { src: "/badge-aws-sap.png", label: "AWS Certified" },
    { src: "/badge-cka.png", label: "CKA Certified" },
  ];

  const allProjects = [
    { id: 1, title: "Tajilabs Kenya Website", cat: "WEB", year: "2024", desc: "Modern web development company website built with responsive design principles.", img: "/images/projects/tajilabs.png", tech: ["WordPress", "WooCommerce", "DevOps", "CI/CD"] },
    { id: 2, title: "Loan Clients Onboard Automation", cat: "AUTOMATION", year: "2023", desc: "Automated client onboarding system that streamlined the loan application process.", img: "/images/projects/lendbucks.png", tech: ["Node.js", "Express", "PostgreSQL", "Docker"] },
    { id: 3, title: "N8N Workflow Automation", cat: "AUTOMATION", year: "2024", desc: "Business process automation platform that connects various services.", img: "/images/projects/n8n.png", tech: ["N8N", "API Integration", "Workflow Automation"] },
    { id: 4, title: "Hala Nairobi Website", cat: "WEB", year: "2023", desc: "Restaurant and hospitality website with online ordering and reservation system.", img: "/images/projects/hala.png", tech: ["React", "Node.js", "MongoDB", "Payment Gateway"] },
    { id: 5, title: "MSGN & Partners Website", cat: "WEB", year: "2023", desc: "Professional services company website with client portal and document management.", img: "/images/projects/msgn.png", tech: ["Laravel", "Vue.js", "MySQL", "AWS"] },
    { id: 6, title: "Nelson Haus", cat: "WEB", year: "2024", desc: "Real estate platform featuring property listings and virtual tours.", img: "/images/projects/nelson-haus.png", tech: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary"] },
    { id: 7, title: "JK Ventures Website", cat: "WEB", year: "2024", desc: "Investment platform with portfolio management and analytics dashboard.", img: "/images/projects/jk-vantures.png", tech: ["React", "Node.js", "MongoDB", "Chart.js"] },
    { id: 8, title: "Qwetu Sacco Website", cat: "WEB", year: "2023", desc: "Financial cooperative website with member portal and loan management.", img: "/images/projects/qwetu-sacco.png", tech: ["PHP", "Laravel", "MySQL", "Bootstrap"] },
    { id: 9, title: "Tikvah Center", cat: "WEB", year: "2023", desc: "Educational institution website with course management and student portal.", img: "/images/projects/tikvah.png", tech: ["WordPress", "LMS Plugin", "Custom Themes", "SEO"] },
    { id: 10, title: "Gap Talent Partners", cat: "AUTOMATION", year: "2024", desc: "HR recruitment platform with cloud hosting and workflow automation.", img: "/images/projects/gap-talent-partners.png", tech: ["WordPress", "Cloud Hosting", "Automation", "CI/CD"] },
    { id: 12, title: "Amrutt Kenya E-Commerce", cat: "WEB", year: "2023", desc: "WooCommerce store with bulk SMS and WhatsApp retail integration.", img: "/images/projects/amrutt-kenya.png", tech: ["WordPress", "WooCommerce", "Bulk SMS", "WhatsApp API"] },
    { id: 13, title: "Liafro Store", cat: "SHOPIFY", year: "2023", desc: "Shopify store with DHL and Fargo logistics integrations.", img: "/images/projects/liafro-kenya.png", tech: ["Shopify", "Liquid", "Logistics APIs", "DHL"] },
    { id: 14, title: "Pension Pilot Platform", cat: "DEVOPS", year: "2024", desc: "Pension consolidation platform for tracking multiple retirement accounts.", img: "/images/projects/pension-pilot.png", tech: ["React", "Node.js", "PostgreSQL", "APIs"] },
    { id: 15, title: "Zuri Boilerplate", cat: "PRODUCTS", year: "2024", desc: "Headless WordPress starter with Vue.js, Docker, and CI/CD.", img: "/images/products/zuri.png", tech: ["Vue.js 3", "WP REST API", "Docker", "GitHub Actions"] },
    { id: 16, title: "Errorlytic", cat: "PRODUCTS", year: "2024", desc: "Automotive diagnostic system: fault codes, quotes, and insurance.", img: "/images/products/errorlytic.png", tech: ["Fault Detection", "Quotation", "Insurance", "Inventory"] },
    { id: 17, title: "AJiri Automation", cat: "PRODUCTS", year: "2024", desc: "HR interview automation: scheduling and candidate tracking.", img: "/images/products/ajiri.png", tech: ["Scheduling", "Calendar Sync", "Pipeline", "Tracking"] },
    { id: 18, title: "Remedy School OS", cat: "PRODUCTS", year: "2024", desc: "Full school operating system: admissions, fees, and grading.", img: "/images/products/remedy.png", tech: ["Admissions", "M-Pesa", "Timetabling", "Grades"] },
    { id: 19, title: "TajiRent", cat: "PRODUCTS", year: "2024", desc: "Property management: tenants, rent collection, and maintenance.", img: "/images/products/taji-rent.png", tech: ["Tenant Mgmt", "M-Pesa", "Maintenance", "Reports"] },
    { id: 20, title: "Pipo Payroll", cat: "PRODUCTS", year: "2024", desc: "KRA compliant automated payroll: PAYE, NHIF, and NSSF.", img: "/images/products/pipo.png", tech: ["PAYE", "NHIF", "NSSF", "Payslips", "Tax"] },
    { id: 21, title: "DevLog", cat: "PRODUCTS", year: "2024", desc: "Standups that write themselves: GitHub activity surfaced in Slack.", img: "/images/products/devlog.png", tech: ["GitHub", "Slack", "PR Tracking", "Summaries"] },
    { id: 22, title: "Amrutt Kenya Headless", cat: "WEB", year: "2024", desc: "Headless e‑commerce with Elasticsearch and Cloudflare Workers.", img: "/images/projects/amrutt-headless.png", tech: ["WordPress", "Elasticsearch", "Cloudflare Workers"] },
    { id: 23, title: "AI-SDR by BetterQA", cat: "AUTOMATION", year: "2025", desc: "AI-powered sales development and outreach tooling.", img: "/images/projects/ai-sdr-betterqa.png", tech: ["AI", "Sales Automation", "BetterQA"] },
    { id: 24, title: "Betterflow", cat: "AUTOMATION", year: "2025", desc: "Workflow and process automation platform at BetterQA.", img: "/images/projects/betterflow-betterqa.png", tech: ["Workflow", "Automation", "BetterQA"] },
    { id: 25, title: "Remedy Dashboard", cat: "PRODUCTS", year: "2024", desc: "Grafana monitoring and dashboards for the Remedy platform.", img: "/images/projects/remedy-grafana.png", tech: ["Grafana", "Monitoring", "Remedy", "Metrics"] },
    { id: 26, title: "Mensbestbasics", cat: "SHOPIFY", year: "2024", desc: "UK Shopify store with custom theme and backend extensions.", img: "/images/projects/mensbestbasics-shopify.png", tech: ["Shopify", "Liquid", "E‑commerce", "Retail"] },
    { id: 27, title: "Purity Sang Advocates", cat: "WEB", year: "2024", desc: "Professional website for a Kenyan law firm.", img: "/images/projects/puritysangadvocates.png", tech: ["WordPress", "Responsive", "SEO", "Inquiry"] }
  ];

  const [activeFilter, setActiveFilter] = useState("ALL");
  const filteredProjects = activeFilter === "ALL" 
    ? allProjects 
    : allProjects.filter(p => p.cat === activeFilter);

  const expertiseCategories = [
    { id: "devops", title: "DevOps & Cloud", icon: <Server size={28} />, skills: ["Jenkins", "Terraform", "Docker", "GitLab CI", "GitHub Actions", "Ansible", "AWS", "Kubernetes"] },
    { id: "backend", title: "Backend Development", icon: <Cpu size={28} />, skills: ["Node.js", "Express.js", "REST APIs", "Python", "PHP", "Laravel"] },
    { id: "ai-ml", title: "AI & Machine Learning", icon: <Brain size={28} />, skills: ["LLM Apps", "RAG & Vector DBs", "Prompt Engineering", "scikit-learn", "Pandas", "MLOps"] },
    { id: "automation", title: "Automation", icon: <Zap size={28} />, skills: ["Bash", "Python Scripting", "Go", "CI/CD Pipelines"] },
    { id: "data", title: "Data & Databases", icon: <Database size={28} />, skills: ["PostgreSQL", "MySQL", "MongoDB", "DB Tuning"] },
    { id: "frontend", title: "Frontend", icon: <Layout size={28} />, skills: ["Vue.js", "Next.js", "TypeScript", "React"] }
  ];

  const fullExperience = [
    { role: "DevOps Engineer Consultant", company: "BetterQA | Remote (Romania)", date: "Sept 2025 – Present", desc: "Building scalable test automation frameworks and optimizing CI/CD pipelines.", points: ["Reduced manual QA by 65%", "Cut build cycles by 70%", "Fixed 30+ vulnerabilities"] },
    { role: "Software Engineer – DevOps", company: "Greenspoon Kenya", date: "2022 – 2025", desc: "Led DevOps projects including loyalty plugins, CI/CD adoption, and infrastructure monitoring.", points: ["Built Greenspoon Loyalty Plugin", "Reduced deployment errors by 80%", "Optimized site load speed by 45%"] },
    { role: "DevOps & Cloud Engineer", company: "Turality | Remote (US)", date: "2024 – 2025", desc: "Data-driven AI/ML startup support.", points: ["Cut hosting costs by 40% via AWS ECS", "Automated infra with Terraform", "Reduced diagnosis time via ELK stack"] },
    { role: "Founder & DevOps Engineer", company: "TajiLabs", date: "2019 – 2022", desc: "Scaled a DevOps consultancy delivering solutions to 15+ organizations.", points: ["Partnered with 15+ organizations", "Migrated workloads to AWS/GCP", "Boosted client revenue by 40%"] },
    { role: "Full Stack Software Engineer", company: "OboTech Solutions", date: "2019 – 2022", desc: "Built request management and fleet dispatch systems.", points: ["Request Management (500+ daily)", "Apollo Tours Dispatch System", "Fintech Sacco Automation"] },
    { role: "IT Support Specialist Intern", company: "ICT Authority", date: "2019", desc: "Delivered ICT support under the Digital Literacy Program.", points: ["Supported 200+ staff", "Deployed 1,000+ devices", "Improved county workflows by 40%"] }
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
          x: currentSection === 0 ? "15%" : 
             currentSection === 1 ? "-32%" : 
             currentSection === 2 ? "120%" : "-52%",
          scale: currentSection === 0 ? 1 : 
                 currentSection === 2 ? 0.8 : 0.85,
          opacity: currentSection === 2 ? 0 : 
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
            <h3 className="belief-text">"Sharing knowledge is as important as gaining it."</h3>
            
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

      <div className="sections-container" style={{ transform: `translateX(-${currentSection * 100}%)`, transition: 'transform 0.8s cubic-bezier(0.83, 0, 0.17, 1)' }}>
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
                <p className="intro-text">Senior Platform Engineer dedicated to building high-performance, resilient cloud ecosystems.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hero-footer-left">
            <div className="hall-of-fame glass-premium">
              <div className="hall-item mono uppercase small">Platform & DEVOPS Engineer</div>
            </div>
          </div>

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
               <h2 className="section-title grad-text">RECENT <span>WORKS</span></h2>
               
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
        <div className="section services-view scroll-y">
          <div className="grain-overlay" />
          <div className="services-scroll-container">
            <div className="services-header-sticky">
               <span className="works-count mono uppercase">Capabilities ({expertiseCategories.length})</span>
               <h2 className="section-title grad-text">TECHNICAL <span>EXPERTISE</span></h2>
               <p className="service-intro">Highly categorized engineering stack across the full software lifecycle.</p>
            </div>
             
             <div className="services-full-grid">
               {expertiseCategories.map((cat, idx) => (
                 <motion.div 
                   key={idx} 
                   className="expertise-card glass-premium" 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 + idx * 0.05 }}
                   whileHover={{ y: -10, scale: 1.02 }}
                 >
                   <div className="expertise-header">
                     <div className="expertise-icon-wrapper">{cat.icon}</div>
                     <h3 className="mono">{cat.title}</h3>
                   </div>
                   <div className="skills-pill-cloud">
                     {cat.skills.map((skill, si) => <span key={si} className="skill-pill">{skill}</span>)}
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        {/* SECTION 3: ABOUT */}
        <div className="section about-view scroll-y">
          <div className="grain-overlay" />
          
          <div className="about-modern-layout">
            <div className="about-hero-section">
              <h2 className="section-title grad-text">Building <span>Foundations</span></h2>
              <div className="about-intro-grid">
                <div className="main-bio">
                  <p className="bio-large">
                    I'm <strong>Jeffrey Omondi</strong>, a Senior Platform Engineer bridging software and infrastructure to build systems that matter.
                  </p>
                  <p className="bio-sub">
                    Specializing in CI/CD, cloud infrastructure, and developer productivity, I help teams ship faster, safer, and smarter.
                  </p>
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
                          <h4>{job.role}</h4>
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
      </div>

      {/* Navigation Arrows */}
      <AnimatePresence>
        {currentSection < 3 && (
          <motion.div className="arrow-nav next" onClick={nextSection} whileHover={{ x: 10, color: '#38bdf8' }} animate={{ opacity: currentSection === 1 ? 0.3 : 1 }}>
            <ChevronRight size={40} />
            <span className="mono">{currentSection === 0 ? "WORKS" : currentSection === 1 ? "SERVICES" : "ABOUT"}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSection > 0 && (
          <motion.div className="arrow-nav prev" onClick={prevSection} whileHover={{ x: -10, color: '#38bdf8' }}>
            <ChevronLeft size={40} />
            <span className="mono">{currentSection === 1 ? "HOME" : currentSection === 2 ? "WORKS" : "SERVICES"}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
