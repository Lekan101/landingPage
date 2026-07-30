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
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <Link href="#contact" className={styles.navCta} onClick={closeMenu}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
