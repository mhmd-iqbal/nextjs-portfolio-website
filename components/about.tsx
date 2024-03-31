"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated from <span className="font-bold">Politeknik Negeri Sriwijaya</span> in 2020 with a major in <span className="font-bold">D3 Computer Engineering</span>. After completing my studies, I started my career as a freelance web developer. Currently, I work  as IT Staff at PT. Cermat Pratama Sejahtera.
      </p>
      <p className="mb-3">
        I am familiar with the concepts of MVC and OOP. I'm used to collaborating using GitHub. With my 3 years of experience in using PHP and JavaScript, I am capable of creating responsive websites using the Laravel CodeIgniter, and ReactJS frameworks. I am confident that with my skills, I can make a valuable contribution wherever I am.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
