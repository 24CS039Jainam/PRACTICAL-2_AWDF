import { useState } from "react";

export default function Home() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">B.Tech CSE · CHARUSAT</p>
        <h1>Hi, I'm <span>Jainam.</span></h1>
        <h2>Computer Science Student & Developer</h2>
        <p className="hero-text">
          I build modern web applications and explore software engineering,
          AI, backend development and scalable systems.
        </p>

        <div className="hero-actions">
          <a className="primary-btn" href="/projects">View Projects</a>
          <a className="secondary-btn" href="/contact">Contact Me</a>
        </div>

        <button
          className="text-btn"
          onClick={() => setShowSkills(!showSkills)}
        >
          {showSkills ? "Hide Skills ↑" : "Show Skills ↓"}
        </button>

        {showSkills && (
          <div className="skills-panel">
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>FastAPI</span>
            <span>Git & GitHub</span>
          </div>
        )}
      </div>

      <div className="profile-card">
        <div className="avatar">JK</div>
        <h3>Jainam Khetani</h3>
        <p>Full-Stack Developer in Progress</p>
        <div className="stats">
          <div><strong>03+</strong><small>Projects</small></div>
          <div><strong>02+</strong><small>Years Coding</small></div>
        </div>
      </div>
    </section>
  );
}