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
  Calendar,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const App = () => {
  const [currentSection, setCurrentSection] = useState(0); 
  const [aboutTabIndex, setAboutTabIndex] = useState(0);

  const experienceStats = [
    { label: "Business Process & Workflow Automation", img: "/pillar-workflow.png", offset: -30 },
    { label: "Software & Cloud Solutions Architect", img: "/pillar-cloud.png", offset: 40 },
    { label: "Senior IT Consultant", img: "/pillar-consultant.png", offset: -10 }
  ];

  const techLogos = [
    { src: "/logo-k8s.svg", name: "K8s", top: '10%', left: '5%' },
    { src: "/logo-docker.png", name: "Docker", top: '8%', left: '40%' },
    { src: "/logo-prometheus.svg", name: "Prometheus", top: '60%', left: '3%' },
    { src: "/logo-aws.svg", name: "AWS", top: '78%', left: '25%' },
    { src: "/logo-grafana.svg", name: "Grafana", top: '7%', left: '58%' },
    { src: "/logo-azure.svg", name: "Azure", top: '42%', left: '3%' },
    { src: "/logo-oci.png", name: "OCI", top: '80%', right: '18%' },
    { src: "/logo-go.svg", name: "Go", top: '10%', right: '6%' },
    { src: "/logo-python.svg", name: "Python", top: '68%', right: '30%' },
    { src: "/logo-js.png", name: "JS", top: '85%', left: '48%' }
  ];

  const officialBadges = [
    { src: "/badge-kcna.png", label: "KCNA" },
    { src: "/badge-lfs250.png", label: "LFS250" }
  ];

  const allProjects = [
    { title: "Betterflow by BetterQA", cat: "AUTOMATION", year: "2025", desc: "Enterprise workflow and process automation platform at BetterQA.", img: "/images/projects/betterflow-betterqa.png" },
    { title: "AI-SDR Outreach Tool", cat: "AUTOMATION", year: "2025", desc: "AI-powered sales development and outreach tooling built at BetterQA.", img: "/images/projects/ai-sdr-betterqa.png" },
    { title: "Tajilabs Kenya Website", cat: "DEVOPS", year: "2024", desc: "Modern web development company website with integrated CI/CD and WooCommerce.", img: "/images/projects/tajilabs.png" },
    { title: "Remedy School OS", cat: "PRODUCTS", year: "2024", desc: "Full-stack school operating system (Admissions, Fees, M-Pesa, Parent Portal).", img: "/images/products/remedy.png" },
    { title: "Liafro International Store", cat: "SHOPIFY", year: "2023", desc: "Shopify store with DHL and Fargo logistics integrations and duties calculations.", img: "/images/projects/liafro-kenya.png" },
    { title: "Hala Nairobi", cat: "WEB", year: "2023", desc: "Restaurant hospitality platform with online ordering and table reservations.", img: "/images/projects/hala.png" },
    { title: "DevLog Standups", cat: "PRODUCTS", year: "2024", desc: "Async standups that surface GitHub activity and blockers in Slack.", img: "/images/products/devlog.png" },
    { title: "Gap Talent Partners", cat: "AUTOMATION", year: "2024", desc: "HR recruitment platform with website, cloud hosting, and workflow automation.", img: "/images/projects/gap-talent-partners.png" },
    { title: "Remedy – Grafana", cat: "PRODUCTS", year: "2024", desc: "Operational dashboards for metrics, health checks, and usage visibility.", img: "/images/projects/remedy-grafana.png" },
    { title: "Errorlytic Diagnostics", cat: "PRODUCTS", year: "2024", desc: "Smart diagnostic system for garages: fault codes, quotes, and vehicle history.", img: "/images/products/errorlytic.png" },
    { title: "Amrutt Kenya Headless", cat: "WEB", year: "2024", desc: "Headless e-commerce with Elasticsearch and Cloudflare Workers.", img: "/images/projects/amrutt-headless.png" },
    { title: "Zuri Boilerplate", cat: "PRODUCTS", year: "2024", desc: "Production-ready headless WordPress starter with Vue.js and Docker.", img: "/images/products/zuri.png" },
    { title: "Nelson Haus Real Estate", cat: "WEB", year: "2024", desc: "Modern real estate platform with property listings and virtual tours.", img: "/images/projects/nelson-haus.png" },
    { title: "Loan Onboard Automation", cat: "AUTOMATION", year: "2023", desc: "Automated client onboarding system for financial institutions.", img: "/images/projects/lendbucks.png" },
    { title: "N8N Workflow Platform", cat: "AUTOMATION", year: "2024", desc: "Business process automation platform connecting 200+ services.", img: "/images/projects/n8n.png" },
    { title: "MSGN & Partners", cat: "WEB", year: "2023", desc: "Professional firm website with client portal and document management.", img: "/images/projects/msgn.png" },
    { title: "AJiri Interview Auto", cat: "PRODUCTS", year: "2024", desc: "HR interview automation: scheduling, calendar sync, and tracking.", img: "/images/products/ajiri.png" },
    { title: "TajiRent Management", cat: "PRODUCTS", year: "2024", desc: "Property management system with rent collection and landlord reporting.", img: "/images/products/taji-rent.png" },
    { title: "Pipo Payroll System", cat: "PRODUCTS", year: "2024", desc: "KRA-compliant automated payroll with statutory exports and payslips.", img: "/images/products/pipo.png" },
    { title: "Mensbestbasics UK", cat: "SHOPIFY", year: "2024", desc: "Shopify store for UK retail with custom theme and backend extensions.", img: "/images/projects/mensbestbasics-shopify.png" },
    { title: "Purity Sang Advocates", cat: "WEB", year: "2024", desc: "Law firm website for Purity Sang Advocates in Kenya.", img: "/images/projects/puritysangadvocates.png" },
    { title: "JK Ventures Portfolios", cat: "WEB", year: "2024", desc: "Investment consulting platform with portfolio analytics dashboard.", img: "/images/projects/jk-vantures.png" },
    { title: "Qwetu Sacco Member Portal", cat: "WEB", year: "2023", desc: "Financial cooperative portal with member management and loans.", img: "/images/projects/qwetu-sacco.png" },
    { title: "Tikvah Center LMS", cat: "WEB", year: "2023", desc: "Educational website with course management and student portal.", img: "/images/projects/tikvah.png" },
    { title: "Pension Pilot Platform", cat: "AUTOMATION", year: "2024", desc: "Pension consolidation platform for tracking multiple retirement accounts.", img: "/images/projects/pension-pilot.png" },
    { title: "Amrutt Kenya E-Commerce", cat: "WEB", year: "2023", desc: "WooCommerce store with bulk SMS and WhatsApp retail integration.", img: "/images/projects/amrutt-kenya.png" }
  ];

  const experience = [
    { title: "DevOps Engineer Consultant", company: "BetterQA | Cluj, Romania", date: "Sept 2025 – Present", desc: "Building scalable test automation frameworks and optimizing CI/CD pipelines for enterprise clients." },
    { title: "Software Engineer – DevOps", company: "Greenspoon Kenya", date: "Nov 2022 – Sept 2025", desc: "Led DevOps projects including loyalty plugins, CI/CD adoption, and infrastructure monitoring." },
    { title: "DevOps & Cloud Engineer", company: "Turality | US (Remote)", date: "Aug 2024 – Mar 2025", desc: "Migrated services to AWS ECS Fargate, automated infra with Terraform, and built Grafana dashboards." },
    { title: "Founder & DevOps Engineer", company: "TajiLabs, Nairobi", date: "Jan 2019 – Nov 2022", desc: "Scaled a DevOps consultancy delivering cloud and e-commerce solutions to 15+ organizations." },
    { title: "Full Stack Software Engineer", company: "OboTech Solutions", date: "Jul 2019 – Apr 2022", desc: "Built request management and fleet dispatch systems for logistics and fintech groups." }
  ];

  const education = [
    { degree: "MSc. Computing & Info Systems", school: "Strathmore University", date: "Ongoing", desc: "Focus on cloud infrastructure, DevOps automation, and applied AI in enterprise systems." },
    { degree: "DevOps Engineering", school: "Moringa School", date: "2022 – 2023", desc: "Intensive program covering CI/CD, cloud architecture, and containerization." },
    { degree: "BSc. Computer Science", school: "Kibabii University", date: "2017 – 2022", desc: "Core focus on Software Engineering; co-led Google Developer Student Club." }
  ];

  const services = [
    { 
      title: "Cloud Infrastructure", 
      icon: <Server size={32} />, 
      skills: ["Multi-cloud Architect", "Kubernetes", "Scalability"],
      desc: "Building backbone infrastructure that glides as your user base explodes. Pure resilience."
    },
    { 
      title: "DevOps Automation", 
      icon: <Code size={32} />, 
      skills: ["CI/CD Mastery", "GitOps", "Provisioning"],
      desc: "Zero-touch deployment pipelines that turn complex releases into a non-event."
    },
    { 
      title: "Resilient Security", 
      icon: <Shield size={32} />, 
      skills: ["IAM Hardening", "Compliance", "Observability"],
      desc: "Hardening every node. From encryption-at-rest to real-time threat detection."
    }
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
          x: currentSection === 0 ? "0%" : 
             currentSection === 1 ? "-32%" : 
             currentSection === 2 ? "65%" : "-52%",
          scale: currentSection === 0 ? 1 : 
                 currentSection === 2 ? 1.05 : 0.85,
          opacity: currentSection === 2 ? 0.2 : 
                   currentSection === 3 ? 0.3 : 1
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

      <motion.div 
        className="sections-container"
        animate={{ x: `-${currentSection * 100}%` }}
        transition={springConfig}
      >
        {/* SECTION 0: HERO (NO CHANGE) */}
        <div className="section">
          <section className="hero">
            <div className="halo" />
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
                  <h1 className="jeffrey-name grad-text">JEFFREY</h1>
                  <p className="intro-text">Senior Platform Engineer & Founder with 5+ years experience building and scaling resilient cloud ecosystems and automation foundations.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="right-floating-stack creative" animate={{ opacity: currentSection === 0 ? 1 : 0, x: currentSection === 0 ? 0 : 30 }}>
              {experienceStats.map((p, idx) => (
                <div key={idx} className="p-card-dynamic" style={{ transform: `translateX(${p.offset}px)` }}>
                  <div className="p-thumb glass-style"><img src={p.img} alt={p.label} /></div>
                  <div className="p-badge mono">{p.label}</div>
                </div>
              ))}
            </motion.div>
          </section>

          <div className="hero-footer-left">
            <div className="hall-of-fame">
              {officialBadges.map((badge, idx) => (
                <div key={idx} className="hall-item" style={{ width: 85, h: 85 }}><img src={badge.src} alt={badge.label} width={85} height={85} style={{ objectFit: 'contain' }} /></div>
              ))}
            </div>
          </div>

          <div className="hero-footer-right">
            <div className="socials">
              <a href="mailto:jeffomondi.eng@gmail.com" className="social-circle blue"><Mail size={24} /></a>
              <a href="https://github.com/omondijeff" className="social-circle"><GithubIcon size={24} /></a>
              <a href="https://linkedin.com/in/omondijeff" className="social-circle"><LinkedinIcon size={24} /></a>
            </div>
          </div>
        </div>

        {/* SECTION 1: WORKS - COMPREHENSIVE VIEW WITH ALL 26+ PROJECTS */}
        <div className="section works-view scrollable">
          <div className="grain-overlay" />
          
          <div className="works-scroll-container">
            <div className="works-header-sticky">
              <h2 className="section-title grad-text">Recent <span>Works</span></h2>
               <span className="works-count mono">OVER 26+ PROJECTS DELIVERED</span>
            </div>
            
            <div className="works-full-grid">
              {allProjects.map((w, idx) => (
                <motion.div 
                  key={idx} 
                  className="work-card-premium large"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={currentSection === 1 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ y: -10, rotateZ: idx % 2 === 0 ? 1 : -1 }}
                >
                  <div className="work-thumb-p">
                    <img 
                       src={w.img} 
                       alt={w.title} 
                       onError={(e) => { e.target.src = "/work-betterflow.png"; e.target.style.filter = "grayscale(100%)"; }}
                    />
                  </div>
                  <div className="work-info-p">
                    <div className="work-top">
                      <span className="work-year mono">{w.year}</span>
                      <span className="work-meta mono">{w.cat}</span>
                    </div>
                    <h3 className="mono">{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: SERVICES (NO CHANGE) */}
        <div className="section services-view">
          <div className="halos"><div className="halo big" /><div className="halo small" /></div>
          <div className="grain-overlay" />
          <div className="services-container-inner">
             <motion.div className="services-header" animate={{ opacity: currentSection === 2 ? 1 : 0, x: currentSection === 2 ? 0 : -30 }}>
               <h2 className="section-title mono grad-text">TECHNICAL <span>CAPABILITIES</span></h2>
               <p className="service-intro">Delivering resilient ecosystems through the lens of performance and security.</p>
             </motion.div>
             <div className="services-grid-asym">
               {services.map((s, idx) => (
                 <motion.div key={idx} className={`service-card glass-premium item-${idx}`} transition={{ delay: 0.2 + idx * 0.2 }} whileHover={{ y: -15, scale: 1.02 }} animate={currentSection === 2 ? { opacity: 1, y: 0 } : {}}>
                   <div className="service-icon-box">{s.icon}</div>
                   <h3 className="mono">{s.title}</h3>
                   <div className="service-labels">
                     {s.skills.map((skill, si) => <span key={si} className="s-pill">{skill}</span>)}
                   </div>
                   <p className="service-desc">{s.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        {/* SECTION 3: ABOUT ME - TABBED EXPERIENCE & EDUCATION */}
        <div className="section about-view">
          <div className="halo top-right" />
          <div className="grain-overlay" />
          
          <div className="about-detailed-container">
            <div className="about-fixed-side">
               <h2 className="section-title mono grad-text">JEFFREY <span>OMONDI</span></h2>
               <div className="about-bio-short">
                  <p className="bio-highlight">Developer at heart, Platform Engineer by trade.</p>
                  <div className="about-stat-row">
                    <div className="a-stat"><span className="mono">5+</span> Years</div>
                    <div className="a-stat"><span className="mono">100+</span> Deploys</div>
                    <div className="a-stat"><span className="mono">99.9%</span> SLA</div>
                  </div>
               </div>

               <div className="about-tabs">
                 <button className={`tab-btn mono ${aboutTabIndex === 0 ? 'active' : ''}`} onClick={() => setAboutTabIndex(0)}>
                   <Briefcase size={16} /> EXPERIENCE
                 </button>
                 <button className={`tab-btn mono ${aboutTabIndex === 1 ? 'active' : ''}`} onClick={() => setAboutTabIndex(1)}>
                   <GraduationCap size={16} /> EDUCATION
                 </button>
               </div>
            </div>

            <div className="about-details-content">
               <AnimatePresence mode="wait">
                 {aboutTabIndex === 0 ? (
                   <motion.div 
                     key="exp" 
                     className="exp-list"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                   >
                     {experience.map((job, idx) => (
                       <div key={idx} className="timeline-item">
                         <div className="time-marker mono">{job.date}</div>
                         <div className="time-content">
                           <h4>{job.title}</h4>
                           <h5>{job.company}</h5>
                           <p>{job.desc}</p>
                         </div>
                       </div>
                     ))}
                   </motion.div>
                 ) : (
                   <motion.div 
                     key="edu" 
                     className="exp-list"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                   >
                     {education.map((edu, idx) => (
                       <div key={idx} className="timeline-item education">
                         <div className="time-marker mono">{edu.date}</div>
                         <div className="time-content">
                           <h4>{edu.degree}</h4>
                           <h5>{edu.school}</h5>
                           <p>{edu.desc}</p>
                         </div>
                       </div>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

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
