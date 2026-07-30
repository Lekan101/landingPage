"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../page.module.css";
import { skills, skillCounters } from "../lib/siteData";

export function Skills() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    technologies: 0,
    commitment: 0,
  });
  const sectionRef = useRef<HTMLElement | null>(null);
  const animatedBars = useRef(false);

  const skillsWithDelay = useMemo(
    () => skills.map((skill, index) => ({ ...skill, delay: index * 80 })),
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        if (!animatedBars.current) {
          animatedBars.current = true;
          const start = performance.now();
          const duration = 1200;

          const tick = (timestamp: number) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            setCounts({
              projects: Math.round(progress * skillCounters[0].value),
              years: Math.round(progress * skillCounters[1].value),
              technologies: Math.round(progress * skillCounters[2].value),
              commitment: Math.round(progress * skillCounters[3].value),
            });
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skillsSection} ref={sectionRef}>
      <div className={styles.skillSummaryColumn}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <p className={styles.sectionIntro}>
            Core frontend capabilities, design sensibilities, and the tools I use daily.
          </p>
        </div>

        <div className={styles.skillCountersGrid}>
          <article className={styles.counterCard}>
            <strong>{counts.projects}+ </strong>
            <span>Projects Completed</span>
          </article>
          <article className={styles.counterCard}>
            <strong>{counts.years}+ </strong>
            <span>Years Learning</span>
          </article>
          <article className={styles.counterCard}>
            <strong>{counts.technologies}+ </strong>
            <span>Technologies Used</span>
          </article>
          <article className={styles.counterCard}>
            <strong>{counts.commitment}% </strong>
            <span>Commitment</span>
          </article>
        </div>
      </div>

      <div className={styles.skillBarGrid}>
        {skillsWithDelay.map((skill) => (
          <div key={skill.name} className={styles.skillRow}>
            <div className={styles.skillLabel}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className={styles.skillTrack} aria-hidden="true">
              <div
                className={styles.skillFill}
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  transitionDelay: `${skill.delay}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
