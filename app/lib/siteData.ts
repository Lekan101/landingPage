export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#project", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Build clean, maintainable interfaces with React, modern CSS, and performance-first best practices.",
  },
  {
    title: "React & Next.js Development",
    description:
      "Deliver production-ready components, page transitions, and dynamic user experiences using React and Next.js.",
  },
  {
    title: "Responsive Website Design",
    description:
      "Create layouts that adapt beautifully across desktop, tablet, and mobile with pixel-perfect detail.",
  },
  {
    title: "UI Implementation",
    description:
      "Translate design systems into accessible, interactive interfaces with polished motion and structure.",
  },
  {
    title: "Landing Page Development",
    description:
      "Launch high-conversion landing pages with fast load times, clean hierarchy, and clear calls to action.",
  },
  {
    title: "Website Maintenance",
    description:
      "Keep websites up to date with performance, accessibility, and content updates that support growth.",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "CareClinic Landing",
    description:
      "Designed and developed a modern dental practice landing page with a clean information flow and mobile-first experience.",
    image: "/image.png",
    alt: "CareClinic landing page preview",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    demoUrl: "https://dentist-home-page.vercel.app/",
    repoUrl: "https://github.com/lekan101",
  },
  {
    title: "Pulse Analytics Dashboard",
    description:
      "Built a dashboard interface for analytics insights with modular components and data-driven UI elements.",
    image: "/Screenshot_1.png",
    alt: "Pulse Analytics dashboard preview",
    tech: ["React", "TypeScript", "CSS Modules", "API Integration"],
    demoUrl: "https://predictify-frontend.vercel.app/",
    repoUrl: "https://github.com/lekan101",
  },
  {
    title: "PetChain Marketplace",
    description:
      "Delivered a responsive marketplace experience focused on product clarity, accessibility, and fast interactions.",
    image: "/Screenshot_2.png",
    alt: "PetChain marketplace preview",
    tech: ["React", "TypeScript", "Responsive Design", "UX Optimization"],
    demoUrl: "https://petchain.vercel.app/",
    repoUrl: "https://github.com/lekan101",
  },
];

export type Skill = {
  name: string;
  level: number;
};

export const skills: Skill[] = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 82 },
  { name: "Tailwind CSS", level: 84 },
  { name: "Responsive Design", level: 92 },
  { name: "REST APIs", level: 86 },
  { name: "Figma", level: 80 },
  { name: "Accessibility", level: 88 },
];

export type CounterCard = {
  label: string;
  value: number;
  suffix: string;
};

export const heroStats: CounterCard[] = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Years Learning", value: 2, suffix: "+" },
  { label: "Dedication", value: 100, suffix: "%" },
];

export const skillCounters: CounterCard[] = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Years Learning", value: 2, suffix: "+" },
  { label: "Technologies Used", value: 15, suffix: "+" },
  { label: "Commitment", value: 100, suffix: "%" },
];

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const contactEmail = "hello@devdavid.dev";
