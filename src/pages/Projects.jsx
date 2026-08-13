const projects = [
  {
    title: "WAYMATE",
    type: "Ride-Sharing Platform",
    description:
      "A smart and secure ride-sharing platform connecting people through affordable and verified shared rides.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"]
  },
  {
    title: "INTELLINOTES",
    type: "AI Document Digitization",
    description:
      "An AI-powered platform for converting handwritten documents into searchable digital knowledge.",
    tech: ["Python", "PyTorch", "FastAPI", "OCR"]
  },
  {
    title: "Portfolio Website",
    type: "Frontend Application",
    description:
      "A responsive portfolio built with reusable React components, client-side routing and reactive state.",
    tech: ["React", "Vite", "CSS", "React Router"]
  }
];

export default function Projects() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">MY WORK</p>
        <h1>Projects</h1>
        <p>Selected academic and personal projects.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">{project.title.slice(0, 2)}</div>
            <p className="project-type">{project.type}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}