"use client";

import { useEffect, useRef } from "react";
import styles from "../page.module.css";
import { contactEmail, contactWhatsApp } from "../lib/siteData";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MAILTO_SUBJECT = "Portfolio Inquiry";
const MAILTO_BODY = "Hello David, I found your portfolio and would like to discuss a project.";
const WHATSAPP_MESSAGE = "Hello David, I found your portfolio and I'm interested in working with you.";

function buildMailtoUrl() {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${encodeURIComponent(MAILTO_BODY)}`;
}

function buildWhatsAppUrl() {
  const phone = contactWhatsApp.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      previousFocus.current?.focus();
      return;
    }

    previousFocus.current = document.activeElement as HTMLElement;

    const body = document.body;
    body.style.overflow = "hidden";

    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      "button:not([disabled]), [href], input, textarea, select, [tabindex]:not([tabindex='-1'])"
    );

    const firstElement = focusableElements?.[0];
    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && focusableElements?.length) {
        const focusable = Array.from(focusableElements);
        const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);

        if (event.shiftKey && currentIndex === 0) {
          event.preventDefault();
          focusable[focusable.length - 1].focus();
        } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
          event.preventDefault();
          focusable[0].focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modalContent} ref={modalRef}>
        <header className={styles.modalHeader}>
          <div>
            <h2 id="contact-modal-title" className={styles.modalTitle}>
              Contact Options
            </h2>
            <p id="contact-modal-description" className={styles.modalDescription}>
              Choose the best way to reach out for a professional project discussion.
            </p>
          </div>
          <button
            type="button"
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close contact options"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        <div className={styles.contactOptions}>
          <a
            className={styles.contactOption}
            href={buildMailtoUrl()}
            aria-label="Email David"
          >
            <span className={styles.optionIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3 5.75C3 4.7835 3.7835 4 4.75 4h14.5c.9665 0 1.75.7835 1.75 1.75v12.5c0 .9665-.7835 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 18.25V5.75Zm1.5.3862v11.8636l5.6791-5.0905L4.5 6.1362Zm1.8712-.8862h10.2576l-5.1288 4.5956L6.3712 5.25Zm12.1288.1362-5.6791 5.0905L19.5 17.9998V5.3862Z" />
              </svg>
            </span>
            <span className={styles.optionText}>
              <strong className={styles.optionTitle}>Email Me</strong>
              <span className={styles.optionHint}>Open your email app with message ready</span>
            </span>
          </a>

          <a
            className={styles.contactOption}
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Chat with David on WhatsApp"
          >
            <span className={styles.optionIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.5 3.5A10.463 10.463 0 0 0 12 1.5 10.5 10.5 0 0 0 1.5 12 10.353 10.353 0 0 0 3.486 17.954L1.5 22.5l4.75-1.295A10.444 10.444 0 0 0 12 22.5c5.799 0 10.5-4.701 10.5-10.5 0-2.806-1.073-5.443-3-7.5Zm-8.5 14a8.452 8.452 0 0 1-4.334-1.198l-.31-.184-2.827.772.764-2.756-.201-.315A8.427 8.427 0 0 1 3.5 12c0-4.694 3.806-8.5 8.5-8.5S20.5 7.306 20.5 12 16.694 17.5 12 17.5Zm4.598-5.204c-.2-.1-1.179-.582-1.361-.649-.182-.068-.315-.1-.448.1s-.513.649-.626.782c-.114.132-.229.148-.428.05-.2-.1-.848-.313-1.615-.994-.597-.532-1-1.19-1.118-1.39-.118-.2-.012-.308.086-.408.089-.089.2-.229.299-.343.1-.114.133-.2.2-.333.067-.132.033-.249-.016-.349-.05-.099-.448-1.081-.614-1.484-.162-.39-.326-.337-.448-.343-.115-.005-.248-.006-.381-.006-.132 0-.349.05-.533.249-.184.199-.7.684-.7 1.667s.72 1.933.821 2.066c.1.132 1.418 2.164 3.434 3.032.48.207.854.33 1.145.423.481.153.92.132 1.267.08.387-.056 1.179-.482 1.345-.948.166-.466.166-.866.116-.948-.05-.082-.182-.132-.382-.232Z" />
              </svg>
            </span>
            <span className={styles.optionText}>
              <strong className={styles.optionTitle}>Chat on WhatsApp</strong>
              <span className={styles.optionHint}>Open WhatsApp with a message ready</span>
            </span>
          </a>
        </div>

        <p className={styles.modalFooter}>
          Prefer the contact form? <a href="#contact" onClick={onClose}>Scroll down to send me a message.</a>
        </p>
      </div>
    </div>
  );
}
