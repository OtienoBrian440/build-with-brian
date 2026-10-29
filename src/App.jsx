
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">
          BUILD<span>WITH</span>BRIAN<span className="dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">FULL-STACK DEVELOPER · KENYA</p>

          <h1>
            I BUILD
            <br />
            DIGITAL
            <br />
            <span>EXPERIENCES.</span>
          </h1>

          <p className="hero-description">
            I’m Brian Otieno — a developer turning ambitious ideas into
            fast, modern, and reliable web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore My Work <span>↗</span>
            </a>
            <a href="#contact" className="button-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-meta">
            <span>REACT</span>
            <span>NODE.JS</span>
            <span>REST APIs</span>
            <span>MONGODB</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer introduction">
          <div className="visual-grid"></div>
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="visual-card">
            <div className="card-top">
              <span>BRIAN OTIENO</span>
              <span className="card-symbol">✳</span>
            </div>

            <div className="code-window">
              <div className="code-dots">
                <i></i><i></i><i></i>
              </div>
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="indent">
                name: <span className="code-green">'Brian'</span>,
              </p>
              <p className="indent">
                focus: <span className="code-green">'Full-stack'</span>,
              </p>
              <p className="indent">
                mindset: <span className="code-green">'Build & grow'</span>
              </p>
              <p>{'}'}</p>
              <p className="code-comment">// Turning ideas into reality.</p>
            </div>

            <div className="card-bottom">
              <span>DESIGN. DEVELOP. DELIVER.</span>
              <span>001 / 026</span>
            </div>
          </div>

          <div className="floating-badge badge-top">{"</>" } CODE</div>
          <div className="floating-badge badge-bottom">
            <span className="status-dot"></span> BUILDING THE FUTURE
          </div>
        </div>

        <div className="hero-index">01 — INTRODUCTION</div>
      </section>

      
      <section className="about-section" id="about">
        <div className="about-label">
          <p className="eyebrow">01 — ABOUT ME</p>
          <span className="about-line"></span>
        </div>

        <div className="about-content">
          <h2>
            More than code.
            <br />
            <span>A partner in building</span>
            <br />
            what comes next.
          </h2>

          <p>
            I'm Brian Otieno, a full-stack developer with a Computer Science
            background and around three years of development experience.
            I build modern web applications that help businesses work
            smarter, serve customers better, and bring ideas to life.
          </p>

          <p>
            From customer-facing experiences to backend APIs and admin
            dashboards, I enjoy turning complex requirements into practical,
            reliable digital products.
          </p>

          <div className="about-highlights">
            <div>
              <strong>03+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>Full-stack</strong>
              <span>Development focus</span>
            </div>
            <div>
              <strong>Kenya</strong>
              <span>Available remotely</span>
            </div>
          </div>
        </div>
      </section>


    
      <section className="skills-section" id="skills">
        <div className="skills-heading">
          <p className="eyebrow">02 — MY TOOLKIT</p>
          <h2>Skills that turn ideas <span>into products.</span></h2>
          <p>
            The technologies I use to design, develop, connect, and deliver
            modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <span className="skill-number">01</span>
            <div className="skill-icon">⌘</div>
            <h3>Frontend Development</h3>
            <p>Building responsive, accessible, user-friendly interfaces.</p>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">02</span>
            <div className="skill-icon">{'{ }'}</div>
            <h3>Backend Development</h3>
            <p>Developing reliable server-side applications and business logic.</p>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>REST APIs</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">03</span>
            <div className="skill-icon">◈</div>
            <h3>Databases</h3>
            <p>Structuring and managing application data efficiently.</p>
            <div className="skill-tags">
              <span>MongoDB</span>
              <span>PostgreSQL</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">04</span>
            <div className="skill-icon">↗</div>
            <h3>Deployment & Tools</h3>
            <p>Version control, production builds, and application deployment.</p>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Vite</span>
              <span>Render</span>
            </div>
          </article>
        </div>
      </section>

      
      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 — SELECTED WORK</p>
            <h2>Things I've <span>built.</span></h2>
          </div>
          <p className="section-intro">
            Real projects. Practical solutions. Built to solve real business
            problems.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-visual lumati-visual">
              <span className="project-number">PROJECT / 01</span>
              <div className="project-art">
                <span className="flower-symbol">✿</span>
                <span className="flower-wordmark">lumati</span>
                <span className="flower-caption">FLOWERS & THOUGHTFUL GIFTS</span>
              </div>
              <span className="project-type">E-COMMERCE</span>
            </div>

            <div className="project-info">
              <div className="project-title-row">
                <h3>Lumati</h3>
                <span className="project-arrow">↗</span>
              </div>
              <p>
                A flower shop platform designed to make browsing, gifting,
                ordering, and delivery management simple.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>REST API</span>
                <span>MongoDB</span>
              </div>
            </div>
          </article>

          <a
  href="https://rosswood-customer.onrender.com/"
  target="_blank"
  rel="noreferrer"
  className="project-card project-link"
>
            <div className="project-visual rosswood-visual">
              <span className="project-number">PROJECT / 02</span>
              <div className="restaurant-art">
                <span className="restaurant-kicker">FOOD · ORDER · ENJOY</span>
                <span className="restaurant-wordmark">ROSSWOOD</span>
                <span className="restaurant-caption">A BETTER WAY TO ORDER</span>
                <div className="restaurant-line"></div>
              </div>
              <span className="project-type">RESTAURANT TECH</span>
              <span className="live-project-label">LIVE PROJECT ↗</span>
            </div>

            <div className="project-info">
              <div className="project-title-row">
                <h3>Rosswood / Fikisha</h3>
                <span className="project-arrow">↗</span>
              </div>
              <p>
                A restaurant ordering platform with separate customer and
                admin experiences, menu management, and WhatsApp ordering.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Admin Dashboard</span>
              </div>
            </div>
          </a>
        </div>
      </section>

    
      <section className="contact-section" id="contact">
        <div className="contact-panel">
          <p className="eyebrow">03 — LET'S WORK TOGETHER</p>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p className="contact-description">
            Have a business that needs a website, an application to build,
            or a team looking for a developer? I'd love to hear about it.
          </p>

          <div className="contact-actions">
            <a
              className="button-primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=BrianOtieno11941@gmail.com&su=Project%20Enquiry"
            >
              Email Me <span>↗</span>
            </a>

            
            <a
              className="button-secondary whatsapp-button"
              href="https://wa.me/254708397639?text=Hi%20Brian%2C%20I%27m%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Me <span>↗</span>
            </a>


            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/brianotieno440/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span>↗</span>
            </a>
          </div>

          <div className="contact-bottom">
            <span>BASED IN KENYA · WORKING WORLDWIDE</span>
            <span>OPEN TO FREELANCE & REMOTE ROLES</span>
          </div>
        </div>
      </section>

    <Footer />
    
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#" className="logo">
        BUILD<span>WITH</span>BRIAN<span className="dot">.</span>
      </a>

      <p>Building useful digital experiences, one project at a time.</p>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="https://www.linkedin.com/in/brianotieno440/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/OtienoBrian440"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Build With Brian</span>
        <span>DESIGNED & BUILT WITH PURPOSE.</span>
      </div>
    </footer>
  )
}

export default App
