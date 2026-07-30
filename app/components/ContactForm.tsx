"use client";

import { useState } from "react";
import styles from "../page.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("✓ Message sent successfully!");
        form.reset();
      } else {
        setStatus("error");
        setMessage("✗ Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("✗ Failed to send message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactHeader}>
          <h2 className={styles.sectionTitle}>Let’s create something memorable</h2>
          <p className={styles.sectionIntro}>
            I’m open to collaboration, freelance work, and new product ideas.
          </p>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="How can I help you?" rows={5} required />

          <button type="submit" disabled={status === "sending"} className={styles.submitButton}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {message && <p className={`${styles.formStatus} ${status === "success" ? styles.statusSuccess : styles.statusError}`}>{message}</p>}
        </form>
      </div>
    </section>
  );
}
