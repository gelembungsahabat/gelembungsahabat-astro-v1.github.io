import "./styles/hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero(props: { setCurrentSection: (section: number) => void }) {
  const { setCurrentSection } = props;
  return (
    <section className="hero">
      <div className="hero-page-container">
        <div>
          <h1>Hi, I'm Muhammad Wildan</h1>
          <h2>Welcome to my personal blog!</h2>
          <div className="icons-div">
            <a
              href="https://github.com/gelembungsahabat"
              target="_blank"
              className="icon-link"
            >
              <FaGithub size={"1.5rem"} />
            </a>
            <a
              href="https://www.linkedin.com/in/gelembungsahabat/"
              target="_blank"
              className="icon-link"
            >
              <FaLinkedin size={"1.5rem"} />
            </a>
          </div>
        </div>
        <div className="card-container">
          <span
            className="card has-bg-img anime-recommendation-img"
            onClick={() => setCurrentSection(1)}
            tabIndex={0}
          >
            <div className="card-title-container">
              <span className="card-title">Anime Recommendation</span>
            </div>
          </span>
          <span
            className="card has-bg-img fun-things-img"
            onClick={() => setCurrentSection(2)}
            tabIndex={0}
          >
            <div className="card-title-container">
              <span className="card-title">Hiragana Quiz</span>
            </div>
          </span>
          <span
            onClick={() => setCurrentSection(3)}
            className="card has-bg-img project-list-img"
          >
            <div className="card-title-container">
              <span className="card-title">Fun Articles</span>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
