import "./styles/article.css";
export function GitSetupArticle() {
  return (
    <div className="content-wrapper">
      <h1>Git Setup</h1>
      <p>
        Git is the most important things on software development these days.
        Because of it, you need to learn how to use Git properly.
      </p>
      <h2>Install Git</h2>
      <p>
        You can go to terminal (on linux) or cmd (with wsl), and run this
        command:{" "}
      </p>
      <code>sudo apt install git</code>
      <h2>What's next?</h2>
      <p>
        After installing your Git locally, you can setup global name and email
        from your github or gitlab account to store your code on them.
      </p>
    </div>
  );
}
