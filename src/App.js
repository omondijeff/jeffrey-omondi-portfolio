import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  ChevronRight,
  ChevronLeft,
  Server,
  Code,
  Shield,
  Activity
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

  const products = [
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

  const works = [
    { title: "Remedy Logistics", desc: "Enterprise logistics automation scaling real-time delivery operations.", img: "/work-remedy.png" },
    { title: "BetterFlow SaaS", desc: "A Kubernetes-native workflow engine for high-traffic microservices.", img: "/work-betterflow.png" },
    { title: "Greenspoon Hub", desc: "Optimizing fresh grocery supply chains with resilient automation.", img: "/work-greenspoon.png" }
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

  const getArrowLabel = (section) => {
    if (section === 0) return "WORKS";
    if (section === 1) return "SERVICES";
    if (section === 2) return "ABOUT";
    return "";
  };

  const getPrevLabel = (section) => {
    if (section === 1) return "HOME";
    if (section === 2) return "WORKS";
    if (section === 3) return "SERVICES";
    return "";
  };

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

      {/* Persistent Portrait Layer */}
      <motion.div 
        className="persistent-subject-wrapper"
        animate={{ 
          x: currentSection === 0 ? "0%" : 
             currentSection === 1 ? "-30%" : 
             currentSection === 2 ? "65%" : "-52%",
          scale: currentSection === 0 ? 1 : 
                 currentSection === 2 ? 1.1 : 0.9,
          opacity: currentSection === 2 ? 0.2 : 1
        }}
        transition={{ type: "spring", stiffness: 45, damping: 12, mass: 0.8 }}
      >
        <img src="/subject_new.png" alt="Jeffrey Omondi" className="subject-img" />
      </motion.div>

      {/* Persistent Meta Overlay for Works section */}
      <motion.div 
        className="subject-sidebar-overlay"
        initial={{ opacity: 0, x: -30 }}
        animate={{ 
          opacity: currentSection === 1 ? 1 : 0, 
          x: currentSection === 1 ? 0 : -30,
          pointerEvents: currentSection === 1 ? 'auto' : 'none'
        }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="meta-stick mono">ROLES & TITLE</div>
        <h2 className="meta-titles">Senior Platform Engineer & Founder</h2>
        <div className="meta-spacer" />
        <blockquote className="meta-belief">
          "I believe in building infrastructure that is as resilient as the businesses it sustains."
        </blockquote>
      </motion.div>

      <motion.div 
        className="sections-container"
        animate={{ x: `-${currentSection * 100}%` }}
        transition={{ type: "spring", stiffness: 45, damping: 12, mass: 0.8 }}
      >
        {/* SECTION 0: HERO */}
        <div className="section">
          <section className="hero">
            <div className="halo" />
            
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
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  width={44} 
                  height={44}
                  style={{ width: 44, height: 44, objectFit: 'contain', filter: 'grayscale(80%) opacity(0.4)', display: 'block' }}
                />
              </motion.div>
            ))}

            <motion.div 
              className="hero-content"
              animate={{ opacity: currentSection === 0 ? 1 : 0, x: currentSection === 0 ? 0 : -50 }}
              transition={{ duration: 0.4 }}
            >
              <p className="hello">Hello, I'm</p>
              <h1 className="jeffrey-name">JEFFREY</h1>
              <p className="intro-text">Senior Platform Engineer & Founder with 5+ years experience sketching, scaling, and building resilient DevOps ecosystems.</p>
            </motion.div>

            <motion.div 
              className="right-floating-stack creative"
              animate={{ opacity: currentSection === 0 ? 1 : 0, x: currentSection === 0 ? 0 : 50 }}
              transition={{ duration: 0.4 }}
            >
              {products.map((p, idx) => (
                <div key={idx} className="p-card-dynamic" style={{ transform: `translateX(${p.offset}px)` }}>
                  <div className="p-thumb glass-style"><img src={p.img} alt={p.label} /></div>
                  <div className="p-badge mono">{p.label}</div>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Footers */}
          <div className="hero-footer-left">
            <div className="hall-of-fame">
              {officialBadges.map((badge, idx) => (
                <div key={idx} className="hall-item" style={{ width: 85, height: 85, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={badge.src}
                    alt={badge.label}
                    width={85}
                    height={85}
                    style={{ width: 85, height: 85, maxWidth: 85, maxHeight: 85, objectFit: 'contain', display: 'block' }}
                  />
                </div>
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

        {/* SECTION 1: WORKS */}
        <div className="section works-view">
          <div className="works-layout">
            <motion.div 
              className="works-grid-content"
              animate={{ opacity: currentSection === 1 ? 1 : 0, x: currentSection === 1 ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title mono">RECENT <span>WORKS</span></h2>
              <div className="works-gallery-shifted">
                {works.map((w, idx) => (
                  <motion.div 
                    key={idx} 
                    className="work-card-premium"
                    whileHover={{ y: -10 }}
                  >
                    <div className="work-thumb-p"><img src={w.img} alt={w.title} /></div>
                    <div className="work-info-p">
                      <h3 className="mono">{w.title}</h3>
                      <p>{w.desc}</p>
                      <div className="work-meta mono">CASE STUDY</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: SERVICES */}
        <div className="section services-view">
          <div className="services-container-inner">
             <motion.div 
               className="services-header"
               animate={{ opacity: currentSection === 2 ? 1 : 0, y: currentSection === 2 ? 0 : 20 }}
             >
               <h2 className="section-title mono">TECHNICAL <span>CAPABILITIES</span></h2>
               <p className="service-intro">Delivering resilient ecosystems through the lens of performance and security.</p>
             </motion.div>

             <div className="services-grid">
               {services.map((s, idx) => (
                 <motion.div 
                   key={idx} 
                   className="service-card glass-premium"
                   animate={{ opacity: currentSection === 2 ? 1 : 0, y: currentSection === 2 ? 0 : 40 }}
                   transition={{ delay: 0.1 * idx }}
                 >
                   <div className="service-icon-box">{s.icon}</div>
                   <h3 className="mono">{s.title}</h3>
                   <div className="service-labels">
                     {s.skills.map((skill, si) => <span key={si} className="s-pill">{skill}</span>)}
                   </div>
                   <p>{s.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>

        {/* SECTION 3: ABOUT ME */}
        <div className="section about-view">
          <div className="about-layout-split">
             <motion.div 
               className="about-content-right"
               animate={{ opacity: currentSection === 3 ? 1 : 0, x: currentSection === 3 ? 0 : 100 }}
               transition={{ duration: 0.8 }}
             >
               <h2 className="section-title mono">JEFFREY <span>OMONDI</span></h2>
               <div className="about-bio">
                 <p className="bio-highlight">Developer at heart, Platform Engineer by trade.</p>
                 <p>I specialize in building and scaling complex cloud ecosystems. From the very first line of a bespoke script to orchestrating multi-regional Kubernetes clusters, I focus on building software that lasts.</p>
                 <p>Founder of <span className="blue-t">TajiLabs</span>, where we build resilient automation foundations for growing startups.</p>
               </div>
               
               <div className="about-stats">
                 <div className="stat-item">
                   <div className="stat-val mono">5+</div>
                   <div className="stat-label">Years Exp</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-val mono">20+</div>
                   <div className="stat-label">Deployments</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-val mono">100%</div>
                   <div className="stat-label">Uptime Sync</div>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      {currentSection < 3 && (
        <motion.div className="arrow-nav next" onClick={nextSection} whileHover={{ x: 10 }}>
          <ChevronRight size={40} />
          <span className="mono">{getArrowLabel(currentSection)}</span>
        </motion.div>
      )}

      {currentSection > 0 && (
        <motion.div className="arrow-nav prev" onClick={prevSection} whileHover={{ x: -10 }}>
          <ChevronLeft size={40} />
          <span className="mono">{getPrevLabel(currentSection)}</span>
        </motion.div>
      )}
    </div>
  );
};

export default App;
