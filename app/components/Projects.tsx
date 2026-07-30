"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { projects } from "../lib/siteData";

export function Projects() {
  return (
    <section id="project" className={styles.projectSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionIntro}>A selection of recent frontend work with strong layout, performance, and usability focus.</p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.projectCard}>
            <div className={styles.projectThumb}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techTags}>
                {project.tech.map((tag) => (
                  <span key={tag} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.projectActions}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                Live Demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLinkButton}>
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
