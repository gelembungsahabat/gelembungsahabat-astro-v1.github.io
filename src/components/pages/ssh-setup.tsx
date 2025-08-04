import "./styles/article.css";
import { CodeBlock } from "../code-block";
export function SSHSetupArticle() {
  return (
    <div className="content-wrapper">
      <h1>SSH Setup</h1>
      <p>
        SSH setup for Git remote is one of important things on software
        development these days. Because of it, you need to learn how to setup
        SSH properly.
      </p>
      <h2>Generate SSH Key</h2>
      <p>
        You can go to terminal (on linux or windows with wsl), and run this
        command:{" "}
      </p>
      <CodeBlock consoleName="Terminal">
        <code>ssh keygen</code>
      </CodeBlock>
      <h2>What's next?</h2>
    </div>
  );
}
