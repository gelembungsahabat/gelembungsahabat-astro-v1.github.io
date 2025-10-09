import "./styles/about.css";
import { articleListData } from "../../data";

export function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About</h1>
        <p>
          I’m a Software Engineer passionate about crafting accessible,
          pixel-perfect user interfaces that blend thoughtful design with robust
          engineering.
        </p>
      </div>
      <div className="about-container">
        <h1>Experience</h1>
        <ul>
          <li>Product Engineer Zero One Group | Apr 2021 - Mar 2025</li>
          <li>
            Front-End Developer Aegis E-Sport Academy | Jan 2021 - Apr 2021
          </li>
          <li>Web Developer Nanas Media | Nov 2020 - Dec 2020</li>
          <li>Internship Aegis E-Sport Academy | Dec 2019 - Mar 2020</li>
        </ul>
      </div>
    </section>
  );
}
