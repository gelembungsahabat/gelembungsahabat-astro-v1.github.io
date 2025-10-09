import "./styles/articles.css";
import { articleListData } from "../../data";

export function Articles() {
  return (
    <section className="articles">
      <h1>Fun Articles* </h1>
      <h2>[Still on Progress]</h2>
      <div className="articles-container">
        {articleListData.map((val, idx) => {
          return (
            <a href={val.href} className="article-card" key={idx}>
              <div className="content-wrapper">
                <h1 className="title">{val.title}</h1>
                <h2 className="subtitle">{val.subtitle}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
