"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="pageWrapper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
