"use client";

import styles from "../page.module.css";
import { services } from "../lib/siteData";

export function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <p className={styles.sectionIntro}>
          Frontend services designed to launch and maintain modern websites with a polished, user-first experience.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <article key={service.title} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
