import "./ConnectGitHub.css";

function ConnectGitHub() {
  return (
    <div className="connect-page">
      <header className="header">
        <a href="/" className="brand">
          <span className="brand-icon">P</span>
          <span>PortfolioGenie</span>
        </a>

        <a href="/" className="back-link">
          Back to home
        </a>
      </header>

      <main className="main-content">
        <section className="connect-section">
          <div className="step-label">STEP 1 OF 4</div>

          <h1>Connect your GitHub</h1>

          <p className="description">
            Let's start by connecting your GitHub account to discover your
            projects and build your portfolio.
          </p>

          <button className="github-button" type="button">
            Continue with GitHub
          </button>

          <div className="divider">
            <span>or use a username</span>
          </div>

          <form className="username-form">
            <label htmlFor="github-username">GitHub username</label>

            <input
              id="github-username"
              type="text"
              placeholder="e.g. octocat"
            />

            <button type="submit">Analyze</button>
          </form>

          <p className="terms">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>

          <p className="login">
            Already have an account? <a href="#">Log in</a>
          </p>
        </section>

        <aside className="info-section">
          <div className="info-card">
            <h2>What we read</h2>
            <p>Public repositories, README files, and project details.</p>
          </div>

          <div className="info-card">
            <h2>What we never do</h2>
            <p>We never modify your repositories or commit code.</p>
          </div>

          <div className="info-card next-card">
            <h2>What happens next</h2>
            <p>
              We'll analyze your projects and help you create a developer
              portfolio that showcases your work.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default ConnectGitHub;
