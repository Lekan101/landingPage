"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { navItems } from "../lib/siteData";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const SunIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </g>
    </svg>
  );

  const MoonIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
      <path
        d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 0 0 0 14A9 9 0 0 1 21 12.79z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <header className={styles.navbar} role="banner">
      <div className={styles.brandGroup}>
        <Link href="#home" className={styles.brand} onClick={closeMenu}>
          Dev. David
        </Link>
      </div>

      <button
        type="button"
        className={styles.navToggle}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
      </button>

      <nav
        id="primary-navigation"
        className={`${styles.navContainer} ${menuOpen ? styles.navOpen : ""}`}
        aria-label="Primary"
      >
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.navActions}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? SunIcon : MoonIcon}
        </button>
        <Link href="#contact" className={styles.navCta} onClick={closeMenu}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
