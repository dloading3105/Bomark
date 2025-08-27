const { useState } = React;

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">BOMARK</div>
        <a className="cta" href="#contact">Book a Call</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="home">
      <img src="./front page.png" alt="Hero background" />
      <div className="hero-overlay">
        <h1 className="hero-title">Crafting Brand Success</h1>
        <p className="hero-sub">We build high-performance websites, mobile apps, and provide ongoing maintenance to keep your digital presence fast, secure, and impactful.</p>
      </div>
    </header>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">From idea to execution and beyond — we partner with you across the full lifecycle.</p>
        <div className="services">
          <div className="card">
            <h3>Website Development</h3>
            <p></p>
          </div>
          <div className="card">
            <h3>Mobile App Development</h3>
            <p></p>
          </div>
          <div className="card">
            <h3>Website & App Maintenance</h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <div className={"accordion-item" + (open ? " open" : "") }>
      <button className="accordion-header" onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      <div className="accordion-content">
        {children}
      </div>
    </div>
  );
}

function LatestWork() {
  return (
    <section id="work">
      <div className="container">
        <h2 className="section-title">Latest Work</h2>
        <p className="section-sub">Tap each row to expand details.</p>
        <NumberedAccordion />
      </div>
    </section>
  );
}

function NumberedAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [hovering, setHovering] = useState(false);
  const items = [
    { title: "Brand design refresh", body: "Full visual system and responsive site with smooth motion and CMS.", img: "./1000065070.jpg" },
    { title: "Marketing site revamp", body: "Conversion-focused pages, analytics, and A/B testing setup.", img: "./1000064934.jpg" },
    { title: "Web app dashboard", body: "Role-based SaaS dashboard with charts and realtime updates.", img: "./1000065072.jpg" },
  ];
  return (
    <div className={"num-accordion" + (hovering ? " hovering" : "")}
         onMouseEnter={() => setHovering(true)}
         onMouseLeave={() => { setHovering(false); setOpenIndex(-1); }}>
      {items.map((it, i) => (
        <div key={i} className={"num-item" + (openIndex === i ? " open" : "") }
             onMouseEnter={() => setOpenIndex(i)}>
          <div className="num-head">
            <div className="num-thumb"><img src={it.img} alt="thumb" /></div>
            <div className="num-title">{it.title}</div>
            <div className="num-plus">{openIndex === i ? "−" : "+"}</div>
          </div>
          <div className="num-body">
            <p>{it.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section id="why">
      <div className="container">
        <h2 className="section-title">Why choose us</h2>
        <p className="section-sub">Results-focused, reliable, and designed for long-term scalability.</p>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Performance-first</h3>
            <p>We obsess over speed, accessibility, and SEO so your product converts better.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🧩</div>
            <h3>End‑to‑end partner</h3>
            <p>Design, build, and maintain—one accountable team from discovery to growth.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Secure & reliable</h3>
            <p>Modern stacks, best practices, and proactive maintenance to keep things running.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  React.useEffect(() => {
    const rows = document.querySelectorAll('.timeline-row');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio > 0.5) {
          e.target.classList.add('active');
        } else {
          e.target.classList.remove('active');
        }
      });
    }, { threshold: [0, 0.5, 1] });
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process">
      <div className="container">
        <h2 className="section-title">3 steps to get it done</h2>
        <p className="section-sub">A simple, collaborative process from kickoff to launch.</p>
        <div className="timeline">
          <div className="timeline-row">
            <div className="left timeline-image">
              <img src="./1000065070.jpg" alt="Book a meeting" />
            </div>
            <div className="right timeline-card">
              <h3>book a meeting</h3>
              <p>Kick off your journey with us by booking a meeting. Don't wait—let's get the creative juices flowing!</p>
            </div>
            <div className="timeline-marker">1</div>
          </div>
          <div className="timeline-row reverse">
            <div className="left timeline-card">
              <h3>finalise the scope</h3>
              <p>Let's nail down the details together. Collaboration is key, and your input is invaluable.</p>
            </div>
            <div className="right timeline-image">
              <img src="./1000064934.jpg" alt="Scope" />
            </div>
            <div className="timeline-marker">2</div>
          </div>
          <div className="timeline-row reverse">
            <div className="left timeline-image">
              <img src="./1000065072.jpg" alt="Build and launch" />
            </div>
            <div className="right timeline-card">
              <h3>build, test, launch</h3>
              <p>We develop, iterate quickly, and ship with confidence. Then we maintain and keep improving.</p>
            </div>
            <div className="timeline-marker">3</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section id="story" className="story">
      <div className="container">
        <h2 className="section-title">Our story</h2>
        <p>
          Bomark was founded on a simple belief: great digital products are crafted
          through thoughtful strategy, world‑class execution, and a commitment to
          long‑term partnership. We blend engineering rigor with design empathy to
          deliver experiences that advance your brand and your business.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" style={{padding: "48px 20px", borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: 32}}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
        <div style={{opacity: 0.8}}>© {new Date().getFullYear()} Bomark</div>
        <a className="cta" href="mailto:hello@bomark.agency">hello@bomark.agency</a>
      </div>
    </footer>
  );
}

function App() {
  React.useEffect(() => {
    if (window.gsap) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".hero-title", { y: 30, opacity: 0, duration: 1.1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
      gsap.utils.toArray("section").forEach((sec) => {
        gsap.from(sec.querySelectorAll(".section-title, .section-sub"), {
          scrollTrigger: { trigger: sec, start: "top 80%" },
          y: 20, opacity: 0, duration: 0.8, stagger: 0.05, ease: "power2.out"
        });
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <LatestWork />
      <WhyChooseUs />
      <Steps />
      <OurStory />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


