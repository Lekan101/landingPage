import image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* nav bar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}><a href="#">Dev. David</a></h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <a href="#contact" className={styles.contactButton}>Get in touch</a>
      </nav>
      {/* main content */}
      <main className={styles.mainContent} id='home'>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Frontend Developer • UI Designer</span>

          <h1>I build thoughtful digital experiences.</h1>
          <p>I’m David, a creative developer focused on clean interfaces, strong storytelling, and products that feel effortless to use.
          </p>
          <a href="#services" className={styles.contentButton}>Services</a>
        </div>
        <div className={styles.image}>
          <div className={styles.circle} />
          <div className={styles.orbit} />
          <div className={styles.heroCard}>
            <div className={styles.avatar}>✦</div>
            <h3>Available for freelance work</h3>
            <p className={styles.sectionCopy}>Design systems, landing pages, and polished web apps for modern brands.</p>
            <div className={styles.stats}>
              <div className={styles.stat}><strong>8+</strong><br />Years</div>
              <div className={styles.stat}><strong>40+</strong><br />Projects</div>
              <div className={styles.stat}><strong>100%</strong><br />Passion</div>
            </div>
          </div>
        </div>
      </main>
      {/*  services */}
      <aside className={styles.services} id="services">
        <div className={styles.servicesContent}>
          <h2>Why Choose US?</h2>
          <p>We are a team of passionate developers and designers who are dedicated to creating amazing digital experiences.</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>UI/UX Design</h3>
            <p>We create user-friendly and visually appealing designs that enhance the user experience.</p>
          </div>
          <div className={styles.card}>
            <h3>Web Development</h3>
            <p>We build responsive and high-performance websites that meet your business needs.</p>
          </div>
          <div className={styles.card}>
            <h3>Mobile App Development</h3>
            <p>We develop mobile applications that are intuitive, fast, and reliable for both iOS and Android platforms.</p>
          </div>
          <div className={styles.card}>
            <h3>Digital Marketing</h3>
            <p>We help you reach your target audience and grow your business through effective digital marketing strategies.</p>
          </div>
          <div className={styles.card}>
            <h3>SEO Optimization</h3>
            <p>We optimize your website to improve its visibility on search engines and drive more organic traffic.</p>
          </div>
          <div className={styles.card}>
            <h3>Content Creation</h3>
            <p>We create engaging and high-quality content that resonates with your audience and strengthens your brand.</p>
          </div>
        </div>
      </aside>
      {/* portfolio */}
      <section id="project" className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionCopy}>A few selected highlights from recent work.</p>
        <div className={styles.gridProjectsGrid}>
          <article className={styles.cardProject}>
            <div className={styles.thumb}></div>
            <h3>Northstar Studio</h3>
            <p>Created a premium landing experience with strong storytelling and conversion-focused sections.
            </p>
          </article>
          <article className={styles.cardProject}>
            <div className={styles.thumb}></div>
            <h3>Pulse Analytics</h3>
            <p>Built a product dashboard interface with clear data visualizations and a modern visual system.
            </p>
          </article>
          <article className={styles.cardProject}>
            <div className={styles.thumb}></div>
            <h3>Bright Market</h3>
            <p>Delivered a fast, responsive ecommerce site focused on clarity, trust, and mobile usability.</p>
          </article>
        </div>
      </section>

      {/* about us */}
      <section className={styles.about} id="about">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.sectionCopy}>
          <p id="contactInfo">I blend design and code to create experiences that are both beautiful and functional.</p>
          {/* <button className={styles.contactButton}>Get in Touch</button> */}
        </div>

        <div className={styles.gridAboutGrid}>
          <div className={styles.card}>
            <p>
              My journey started with curiosity for how simple interactions can shape powerful impressions.
              Today, I help founders and teams turn ideas into elegant websites, product interfaces, and
              digital stories.
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
              <h2 className={styles.sectionTitle}>Let’s create something memorable</h2>
              <p className={styles.sectionCopy}>I’m open to collaboration, freelance projects, and new ideas.</p>
            </div>
            <a className={styles.contentButton} href="mailto:david@example.com">Email Me</a>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className={styles.footer}>
        <h1 className={styles.logo}></h1>
        <p>&copy; 2023 Dev. David</p>
      </footer>
    </div>
  )
}