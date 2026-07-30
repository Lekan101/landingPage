"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";
import { heroStats } from "../lib/siteData";

export function Hero() {
  const [stats, setStats] = useState({ projects: 0, years: 0, dedication: 0 });
  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!statsRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        hasAnimated.current = true;
        observer.disconnect();

        const start = performance.now();
        const duration = 1200;

        const update = (timestamp: number) => {
          const progress = Math.min((timestamp - start) / duration, 1);

          setStats({
            projects: Math.round(progress * heroStats[0].value),
            years: Math.round(progress * heroStats[1].value),
            dedication: Math.round(progress * heroStats[2].value),
          });

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };

        requestAnimationFrame(update);
      },
      { threshold: 0.4 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <div className={styles.heroIntro}>
          <span className={styles.heroEyebrow}>Frontend Developer • UI Designer</span>
          <h1 className={styles.heroTitle}>
            Frontend Developer building fast, responsive, and user-focused web applications.
          </h1>
          <p className={styles.heroDescription}>
            I create polished digital experiences that balance visual clarity, accessibility, and performance. My focus is clean interfaces, thoughtful interactions, and frontend solutions that help brands connect with users.
          </p>

          <div className={styles.heroActions}>
            <Link href="#project" className={styles.primaryButton}>
              View Projects
            </Link>
            <a href="/resume.pdf" download className={styles.secondaryButton}>
              Download CV
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/lekan101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/David-Lekan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.panelShape} aria-hidden="true" />
          <div className={styles.panelContent}>
            <div className={styles.panelBadge}>Available for freelance work</div>
            <p className={styles.panelText}>
              I partner with startups and design teams to deliver websites that are intuitive, performant, and built to scale.
            </p>

            <div className={styles.heroStats} ref={statsRef}>
              <div className={styles.heroStat}>
                <strong>{stats.projects}{heroStats[0].suffix}</strong>
                <span>{heroStats[0].label}</span>
              </div>
              <div className={styles.heroStat}>
                <strong>{stats.years}{heroStats[1].suffix}</strong>
                <span>{heroStats[1].label}</span>
              </div>
              <div className={styles.heroStat}>
                <strong>{stats.dedication}{heroStats[2].suffix}</strong>
                <span>{heroStats[2].label}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
