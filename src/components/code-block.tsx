import { type JSX } from "react";
import "./code-block.css";

interface CodeBarData {
  consoleName: string;
  children: JSX.Element;
}

export const CodeBlock = (props: CodeBarData) => {
  return (
    <div className="code-bar">
      {props.consoleName}
      <br />
      {props.children}
    </div>
  );
};
