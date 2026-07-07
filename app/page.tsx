import image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* nav bar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}><p></p> Dev. David</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#project">Our Project</a></li>
          <li><a href="#about">About us</a></li>
        </ul>
        <button className={styles.contactButton}>Get in Touch</button>
      </nav>
      {/* main content */}
      <main className={styles.mainContent}>
        <div className={styles.content}>
          <h1>Build Your Awesome Platform</h1>
          <p>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
          <button className={styles.contentButton}>Our Services</button>
        </div>
        <div className={styles.image}>
          <div className={styles.circle}/>
          <div className={styles.orbit}/>
        </div>
      </main>
      {/*  services */}
      <section className={styles.services} id="services">
        <div className={styles.servicesContent}>
        <h2>Why Choose Us?</h2>
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
      </section>
      {/* portfolio */}
      <section className={styles.portfolio} id="project">
        <h2>Our Awesome Project</h2>
        <p>We have worked on a variety of projects for clients across different industries, delivering exceptional results.</p>
      </section>
      {/* about us */}
      <section className={styles.about} id="about">
        <h2>Contact us for the service you want to use</h2>
        <div className={styles.aboutContent}>
        <p id="contactInfo"></p>
        <button className={styles.contactButton}>Get in Touch</button>
        </div>
      </section>
      {/* footer */}
      <footer className={styles.footer}>
        <h1 className={styles.logo}><p></p> Dev. David</h1>
        <ul>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
        </ul>
        <p>&copy; 2023 Enver Studio. All rights reserved.</p>
      </footer>
    </div>
  )
}