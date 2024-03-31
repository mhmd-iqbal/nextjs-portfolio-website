import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import promptopiaImg from "@/public/projects/belajar-nextjs.png";
import SiKepegawaianImg from "@/public/projects/si-kepegawaian.png";
import SiKeuanganImg from "@/public/projects/si-keuangan.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Web Developer",
    location: "Self-employee, Palembang",
    description:
      'Creating dynamic and responsive web applications according to client requests. Focuses on projects that use the Laravel and CodeIgniter framework.',
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
  {
    title: "Back-end Web Developer",
    location: "Phylot Integrator System (Startup), Palembang",
    description:
      "As a Back-end Web Developer, I'm responsible for creating web applications using the PHP CodeIgniter framework to integrate with automated parking controllers.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2021 - Mar 2022",
  },
  {
    title: "IT Staff (Web Programmer)",
    location: "PT Cermat Pratama Sejahtera, Palembang",
    description:
      "Creating responsive, dynamic, and modern web-based applications using PHP (native, Laravel), JavaScript (vanilla, jQuery, ReactJS), and Bootstrap for internal company use. Designing and building databases for applications. Identifying and resolving internet network issues. Conducting computer hardware maintenance and repairs.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Promptopia - Fullstack NextJS with Next-Auth",
    description:
      "I made this project just for learning purposes.",
    tags: ["ReactJS", "Next.js", "MongoDB", "Tailwind", "Mongoose", "Next-Auth"],
    links: [
      {
        url: "https://belajar-nextjs-fullstack-iqbal.vercel.app/",
        name: "Demo",
      }
    ],
    imageUrl: promptopiaImg,
  },
  {
    title: "SiKeuangan",
    description:
      "Web app that helps company in viewing the company's financial position. Currently used by PT Cermat Pratama Sejahtera.",
    tags: ["Laravel", "Bootstrap", "MySQL", "DataTable", "jQuery"],
    links: [
      {
        url: "",
        name: "",
      }
    ],
    imageUrl: SiKeuanganImg,
  },
  {
    title: "SiKepegawaian",
    description:
      "Web app that helps administrator in collecting data on PT Cermat Pratama Sejahtera outsourcing employees.",
    tags: ["ReactJS", "Material UI", "MySQL", "Laravel", "Restful API", "Redux"],
    links: [
      {
        url: "",
        name: "",
      }
    ],
    imageUrl: SiKepegawaianImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "Laravel",
  "CodeIgniter",
  "ReactJS",
  "Next.js",
  "Node.js",
  "Git",
  "Bootstrap",
  "Tailwind",
  "Material UI",
  "Prisma",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Express",
  "Framer Motion",
] as const;
