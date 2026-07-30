"use client";

import Image from "next/image";
import styles from "./page.module.css"
import { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, passion: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsRef.current || hasCounted.current) return;
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        hasCounted.current = true;
        statsObserver.disconnect();
        const duration = 1200;
        const steps = 30;
        const stepTime = duration / steps;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          setCounts({
            years: Math.min(Math.round((8 / steps) * step), 8),
            projects: Math.min(Math.round((40 / steps) * step), 40),
            passion: Math.min(Math.round((100 / steps) * step), 100),
          });
          if (step >= steps) clearInterval(timer);
        }, stepTime);
      },
      { threshold: 0.5 }
    );
    statsObserver.observe(statsRef.current);
    return () => statsObserver.disconnect();
  }, []);

  return (
    <div className={styles.main}>
      {/* nav bar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <a href="#">Dev. David</a>
        </h1>

        <ul id="main-nav" className={menuOpen ? styles.showMenu : undefined}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#project" onClick={() => setMenuOpen(false)}>
              Project
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
        </ul>
        <a href="#contact" className={styles.contactButton}>
          Get in touch
        </a>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
      {/* main content */}
      <main className={styles.mainContent} id="home">
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Frontend Developer • UI Designer
          </span>

          <h1>I build thoughtful digital experiences.</h1>
          <p>
            I’m David, a creative developer focused on clean interfaces, strong
            storytelling, and products that feel effortless to use.
          </p>

           <a href="#services" className={styles.contentButton}>
              Services
            </a>

          <div className={styles.socialButtons}>
           
            <a
              href="https://github.com/lekan101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://linkedin.com/in/David-Lekan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.circle} />
          <div className={styles.orbit} />
          <div className={styles.heroCard}>
            <div className={styles.avatar}>✦</div>
            <h3>Available for freelance work</h3>
            <p className={styles.sectionCopy}>
              Design systems, landing pages, and polished web apps for modern
              brands.
            </p>
            <div className={styles.stats} ref={statsRef}>
              <div className={styles.stat}>
                <strong>{counts.years}+</strong>
                <br />
                <span>Years</span>
              </div>
              <div className={styles.stat}>
                <strong>{counts.projects}+</strong>
                <br />
                <span>Projects</span>
              </div>
              <div className={styles.stat}>
                <strong>{counts.passion}%</strong>
                <br />
                <span>Passion</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*  services */}
      <aside className={styles.services} id="services">
        <div className={styles.servicesContent}>
          <h2>Why Choose Me?</h2>
          <p>I craft clean, functional digital experiences with a focus on quality.</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>UI/UX Design</h3>
            <p>
              We create user-friendly and visually appealing designs that
              enhance the user experience.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Web Development</h3>
            <p>
              We build responsive and high-performance websites that meet your
              business needs.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Mobile App Development</h3>
            <p>
              We develop mobile applications that are intuitive, fast, and
              reliable for both iOS and Android platforms.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Digital Marketing</h3>
            <p>
              We help you reach your target audience and grow your business
              through effective digital marketing strategies.
            </p>
          </div>
          <div className={styles.card}>
            <h3>SEO Optimization</h3>
            <p>
              We optimize your website to improve its visibility on search
              engines and drive more organic traffic.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Content Creation</h3>
            <p>
              We create engaging and high-quality content that resonates with
              your audience and strengthens your brand.
            </p>
          </div>
        </div>
      </aside>
      {/* portfolio */}
      <section id="project" className={`${styles.container} ${styles.projectSection}`} ref={sectionRef}>
        <h2 className={`${styles.sectionTitle} ${styles.animateTitle}`}>Featured Projects</h2>
        <p className={`${styles.sectionCopy} ${styles.animateText}`}>
          A few selected highlights from recent work.
        </p>
        <div className={styles.gridProjectsGrid}>
          <a
            href="https://dentist-home-page.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
            ref={(el) => { cardRefs.current[0] = el; }}
          >
            <article className={styles.cardProject}>
              <div className={styles.thumb}>
              <div className={styles.thumbOverlay} />
              <Image
              src="/image.png"
              alt="Northstar Studio thumbnail"
              fill
              sizes="(max-width: 740px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
              />
              </div>
              <h3>Northstar Studio</h3>
              <p>
                Created a premium landing experience with strong storytelling
                and conversion-focused sections.
              </p>
            </article>
          </a>
          <a
            href="https://predictify-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
            ref={(el) => { cardRefs.current[1] = el; }}
          >
            <article className={styles.cardProject}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay} />
                <Image
                  src="/Screenshot_1.png"
                  alt="Pulse Analytics thumbnail"
                  fill
                  sizes="(max-width: 740px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <h3>Pulse Analytics</h3>
              <p>
                Built a product dashboard interface with clear data
                visualizations and a modern visual system.
              </p>
            </article>
          </a>
          <a
            href="https://petchain.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
            ref={(el) => { cardRefs.current[2] = el; }}
          >
            <article className={styles.cardProject}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay} />
                <Image
                  src="/Screenshot_2.png"
                  alt="Bright Market thumbnail"
                  fill
                  sizes="(max-width: 740px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <h3>Bright Market</h3>
              <p>
                Delivered a fast, responsive ecommerce site focused on clarity,
                trust, and mobile usability.
              </p>
            </article>
          </a>
        </div>
      </section>

      {/* about us */}
      <section className={styles.about} id="about">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.sectionCopy}>
          <p id="contactInfo">
            I blend design and code to create experiences that are both
            beautiful and functional.
          </p>
          {/* <button className={styles.contactButton}>Get in Touch</button> */}
        </div>

        <div className={styles.gridAboutGrid}>
          <div className={styles.card}>
            <p>
              My journey started with curiosity for how simple interactions can
              shape powerful impressions. Today, I help founders and teams turn
              ideas into elegant websites, product interfaces, and digital
              stories.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Core Skills</h3>
            <div className={styles.skillsList}>
              <span className={styles.chip}>HTML</span>
              <span className={styles.chip}>CSS</span>
              <span className={styles.chip}>JavaScript</span>
              <span className={styles.chip}>React</span>
              <span className={styles.chip}>Figma</span>
              <span className={styles.chip}>Accessibility</span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContactBox}>
            <div>
              <h2 className={styles.sectionTitle}>
                Let’s create something memorable
              </h2>
              <p className={styles.sectionCopy}>
                I’m open to collaboration, freelance projects, and new ideas.
              </p>
            </div>
            <form
              className={styles.contactForm}
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = {
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  email: (form.elements.namedItem('email') as HTMLInputElement).value,
                  message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
                };
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  if (res.ok) {
                    alert('Thanks for your message!');
                    form.reset();
                  } else {
                    alert('Failed to send. Try again later.');
                  }
                } catch {
                  alert('Failed to send. Check your connection.');
                }
              }}
            >
              <input type="text" name="name" placeholder="Your Name" required />

              <input type="email" name="email" placeholder="Email" required />

              <textarea name="message" placeholder="Message" required />

              <button>Send Message</button>
            </form>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className={styles.footer}>
        <h2>Dev. David</h2>

        <p>Frontend Developer</p>

        <div className={styles.footerLinks}>
          <a href="#home">Home</a>
          <a href="#project">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/lekan101"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/David-Lekan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>
        </div>

        <p>© 2026 David. All rights reserved.</p>
      </footer>
    </div>
  );
}
