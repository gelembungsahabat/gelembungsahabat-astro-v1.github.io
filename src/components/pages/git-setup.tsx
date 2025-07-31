import "./styles/article.css";
export function GitSetupArticle() {
  return (
    <div className="content-wrapper">
      <h1>Git Setup</h1>
      <p>
        Now developers can access the power of both Windows and Linux at the
        same time on a Windows machine. The Windows Subsystem for Linux (WSL)
        lets developers install a Linux distribution (such as Ubuntu, OpenSUSE,
        Kali, Debian, Arch Linux, etc) and use Linux applications, utilities,
        and Bash command-line tools directly on Windows, unmodified, without the
        overhead of a traditional virtual machine or dualboot setup.
      </p>
      <h2>Prerequisites</h2>
      <p>
        You must be running Windows 10 version 2004 and higher (Build 19041 and
        higher) or Windows 11 to use the commands below. If you are on earlier
        versions, you can see{" "}
        <a
          target="_blank"
          href="https://learn.microsoft.com/en-us/windows/wsl/install-manual"
        >
          the manual install page.
        </a>
      </p>
      <h2>Install WSL command</h2>
      <p>
        You can now install everything you need to run WSL with a single
        command. Open PowerShell or Windows Command Prompt in administrator mode
        by right-clicking and selecting "Run as administrator", enter the
        <br />
        <code>wsl --install</code> command, then restart your machine.
        <br /> <br />
        This command will enable the features necessary to run WSL and install
        the Ubuntu distribution of Linux. (This default distribution can be
        changed).
      </p>
    </div>
  );
}
