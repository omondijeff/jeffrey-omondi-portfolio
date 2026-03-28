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
        <div className="section services-view scroll-y">
          <div className="halos"><div className="halo big" /><div className="halo small" /></div>
          <div className="grain-overlay" />
          <div className="services-container-inner">
             <motion.div className="services-header" animate={{ opacity: currentSection === 2 ? 1 : 0, x: currentSection === 2 ? 0 : -30 }}>
               <h2 className="section-title grad-text">TECHNICAL <span>CAPABILITIES</span></h2>
               <p className="service-intro">Highly categorized expertise across the full engineering stack.</p>
             </motion.div>
             <div className="expertise-grid">
               {expertiseCategories.map((cat, idx) => (
                 <motion.div 
                   key={idx} 
                   className="expertise-card glass-premium" 
                   transition={{ delay: 0.1 + idx * 0.1 }}
                   animate={currentSection === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                   whileHover={{ y: -10, scale: 1.02 }}
                 >
                   <div className="expertise-header">
                     {cat.icon}
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

        {/* SECTION 3: ABOUT ME */}
        <div className="section about-view scroll-y">
          <div className="halo top-right" />
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
                        <span className="v-date mono">{job.date}</span>
                        <h4>{job.role}</h4>
                        <p className="v-company">{job.company}</p>
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
