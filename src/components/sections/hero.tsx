import "./styles/hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero-title"
        >
          <h1>Hi, I'm Muhammad Wildan</h1>
          <h2>
            Software Engineer specializing in Front-End and Robotics — building
            fast, scalable, and reliable experiences.
          </h2>
          <div className="icons-div">
            <a
              href="https://github.com/gelembungsahabat"
              className="icon-link"
              aria-label="Github Wildan"
            >
              <FaGithub size={"1.5rem"} />
            </a>
            <a
              href="https://www.linkedin.com/in/gelembungsahabat/"
              className="icon-link"
              aria-label="LinkedIn Wildan"
            >
              <FaLinkedin size={"1.5rem"} />
            </a>
            <a
              href="https://www.instagram.com/gelembungsahabat_"
              className="icon-link"
              aria-label="Instagram Wildan"
            >
              <FaInstagram size={"1.5rem"} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
