"use client";

import styles from "../page.module.css";

export function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionIntro}>
          I build accessible, responsive, and performance-minded web interfaces that feel polished and effortless.
        </p>
      </div>

      <div className={styles.aboutGrid}>
        <article className={styles.aboutCard}>
          <p>
            I’m passionate about frontend development and clean UI systems. I enjoy turning design ideas into interactive experiences that are fast, accessible, and easy to use.
          </p>
        </article>
        <article className={styles.aboutCard}>
          <h3>Focus Areas</h3>
          <ul className={styles.aboutList}>
            <li>Responsive design across devices</li>
            <li>Accessibility-first markup and interactions</li>
            <li>Performance optimization for modern web apps</li>
            <li>Continuous learning through tools, patterns, and code reviews</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
