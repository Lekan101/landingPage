import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import styles from "../page.module.css";
import { footerLinks, contactEmail } from "../lib/siteData";

export function Footer() {
  return (
    <footer className={styles.footerSection} aria-labelledby="footer-heading">
      <div className={styles.footerTop}>
        <div>
          <p className={styles.footerBrand}>Dev. David</p>
          <p className={styles.footerTagline}>Frontend developer focused on accessible, responsive web experiences.</p>
        </div>

        <div className={styles.footerNav}>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.footerContacts}>
          <a href="https://github.com/lekan101" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/David-Lekan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={`mailto:${contactEmail}`} aria-label="Send email">
            <FaEnvelope /> {contactEmail}
          </a>
          <a href="/resume.pdf" download aria-label="Download resume">
            Resume
          </a>
        </div>

        <Link href="#home" className={styles.backToTop} aria-label="Back to top">
          <FaArrowUp /> Back to Top
        </Link>
      </div>
    </footer>
  );
}
