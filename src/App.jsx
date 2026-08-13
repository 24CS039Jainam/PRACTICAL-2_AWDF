import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// ==================== HOME PAGE ====================
function Home() {
  const [show, setShow] = useState(false);

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <p style={styles.badge}>AWDF PRACTICAL 2</p>

        <h1 style={styles.title}>
          Hi, I'm <span style={styles.green}>Jainam Khetani</span>
        </h1>

        <h2 style={styles.subtitle}>
          React State Management & Routing
        </h2>

        <p style={styles.description}>
          Welcome to my portfolio. This application demonstrates React
          Router, useState, controlled form inputs, UI state management,
          and client-side navigation.
        </p>

        <div style={styles.buttons}>
          <Link to="/projects" style={styles.primaryButton}>
            View Projects
          </Link>

          <Link to="/contact" style={styles.secondaryButton}>
            Contact Me
          </Link>
        </div>

        <button
          onClick={() => setShow(!show)}
          style={styles.toggleButton}
        >
          {show ? "Hide Skills ↑" : "Show Skills ↓"}
        </button>

        {show && (
          <div style={styles.skillsBox}>
            <span style={styles.skill}>React</span>
            <span style={styles.skill}>JavaScript</span>
            <span style={styles.skill}>Python</span>
            <span style={styles.skill}>Node.js</span>
            <span style={styles.skill}>FastAPI</span>
            <span style={styles.skill}>Git & GitHub</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== PROJECTS PAGE ====================
function Projects() {
  const projects = [
    {
      name: "WAYMATE",
      description:
        "A smart and secure ride-sharing platform connecting people through affordable and verified shared rides.",
      technology: "React • Node.js • PostgreSQL • Prisma",
    },
    {
      name: "INTELLINOTES",
      description:
        "An AI-powered handwritten document digitization and knowledge management platform.",
      technology: "Python • PyTorch • FastAPI • OCR",
    },
    {
      name: "Portfolio Website",
      description:
        "A responsive portfolio website developed using reusable React components and client-side routing.",
      technology: "React • JavaScript • CSS • React Router",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <p style={styles.badge}>MY WORK</p>

        <h1 style={styles.pageTitle}>Projects</h1>

        <p style={styles.pageDescription}>
          Some of my academic and personal projects.
        </p>

        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <div style={styles.projectCard} key={index}>
              <div style={styles.projectNumber}>
                0{index + 1}
              </div>

              <h2 style={styles.projectTitle}>
                {project.name}
              </h2>

              <p style={styles.projectDescription}>
                {project.description}
              </p>

              <p style={styles.technology}>
                {project.technology}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== CONTACT PAGE ====================
function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <div style={styles.page}>
      <div style={styles.contactContainer}>
        <div>
          <p style={styles.badge}>GET IN TOUCH</p>

          <h1 style={styles.pageTitle}>
            Let's Talk.
          </h1>

          <p style={styles.pageDescription}>
            Have a project idea or collaboration opportunity?
            Send me a message.
          </p>

          <div style={styles.emailBox}>
            <strong>Email</strong>
            <p>jainamkhetani@gmail.com</p>
          </div>
        </div>

        <div style={styles.formCard}>
          <h2 style={styles.formTitle}>
            Contact Form
          </h2>

          <label style={styles.label}>
            Your Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
          />

          <label style={styles.label}>
            Your Message
          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows="7"
            maxLength="300"
            style={styles.textarea}
          />

          <p style={styles.characterCount}>
            {message.length}/300 characters
          </p>

          <div style={styles.preview}>
            <strong>Live Preview</strong>

            <p>
              <strong>
                {name || "Your Name"}:
              </strong>{" "}
              {message || "Your message will appear here..."}
            </p>
          </div>

          <button
            style={styles.primaryButton}
            onClick={() =>
              alert("Message submitted successfully!")
            }
          >
            Send Message →
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== 404 PAGE ====================
function NotFound() {
  return (
    <div style={styles.notFound}>
      <h1 style={styles.errorCode}>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/" style={styles.primaryButton}>
        Back to Home
      </Link>
    </div>
  );
}

// ==================== MAIN APP ====================
export default function App() {
  return (
    <div style={styles.app}>

      {/* NAVIGATION BAR */}
      <nav style={styles.navbar}>

        <Link to="/" style={styles.logo}>
          <span style={styles.logoBox}>JK</span>
          Jainam Khetani
        </Link>

        <div style={styles.navLinks}>

          <Link
            to="/"
            style={styles.navLink}
          >
            Home
          </Link>

          <Link
            to="/projects"
            style={styles.navLink}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            style={styles.navLink}
          >
            Contact
          </Link>

        </div>

      </nav>

      {/* ROUTING */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>
          © 2026 Jainam Khetani
        </p>

        <p>
          AWDF ITUE301 • Practical 2
        </p>
      </footer>

    </div>
  );
}

// ==================== STYLES ====================
const styles = {

  app: {
    minHeight: "100vh",
    backgroundColor: "#f5f8fc",
    color: "#10233f",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  navbar: {
    height: "72px",
    backgroundColor: "#ffffff",
    borderBottom:
      "1px solid #dce5ef",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: "#10233f",
    fontWeight: "bold",
    fontSize: "18px",
  },

  logoBox: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#147d62",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
  },

  navLink: {
    textDecoration: "none",
    color: "#174f7a",
    fontWeight: "600",
  },

  page: {
    minHeight: "650px",
    padding: "80px 60px",
  },

  hero: {
    maxWidth: "1000px",
    margin: "auto",
    paddingTop: "70px",
  },

  badge: {
    color: "#147d62",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "13px",
  },

  title: {
    fontSize: "60px",
    margin: "15px 0",
    lineHeight: "1.1",
  },

  green: {
    color: "#147d62",
  },

  subtitle: {
    fontSize: "25px",
    marginBottom: "20px",
  },

  description: {
    maxWidth: "700px",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#60748b",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
  },

  primaryButton: {
    display: "inline-block",
    backgroundColor: "#174f7a",
    color: "white",
    padding: "13px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },

  secondaryButton: {
    display: "inline-block",
    border: "1px solid #174f7a",
    color: "#174f7a",
    padding: "13px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  toggleButton: {
    marginTop: "25px",
    border: "none",
    background: "transparent",
    color: "#147d62",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },

  skillsBox: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  skill: {
    padding: "9px 15px",
    borderRadius: "20px",
    backgroundColor: "#dff1eb",
    color: "#12664f",
    fontWeight: "bold",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
  },

  pageTitle: {
    fontSize: "55px",
    margin: "15px 0",
  },

  pageDescription: {
    color: "#60748b",
    fontSize: "18px",
    lineHeight: "1.6",
  },

  projectGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "25px",
    marginTop: "40px",
  },

  projectCard: {
    backgroundColor: "white",
    border: "1px solid #dbe5ee",
    borderRadius: "15px",
    padding: "25px",
    minHeight: "280px",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.05)",
  },

  projectNumber: {
    width: "45px",
    height: "45px",
    backgroundColor: "#174f7a",
    color: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  projectTitle: {
    marginTop: "20px",
  },

  projectDescription: {
    color: "#60748b",
    lineHeight: "1.6",
    marginTop: "12px",
  },

  technology: {
    marginTop: "20px",
    color: "#147d62",
    fontWeight: "bold",
    fontSize: "14px",
  },

  contactContainer: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns:
      "0.8fr 1.2fr",
    gap: "60px",
  },

  emailBox: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#e5f2ee",
    borderRadius: "10px",
  },

  formCard: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    border: "1px solid #dbe5ee",
  },

  formTitle: {
    marginBottom: "25px",
  },

  label: {
    display: "block",
    fontWeight: "bold",
    marginTop: "15px",
    marginBottom: "8px",
  },

  input: {
    width: "100%",
    padding: "13px",
    border:
      "1px solid #cbd8e6",
    borderRadius: "8px",
    fontSize: "16px",
  },

  textarea: {
    width: "100%",
    padding: "13px",
    border:
      "1px solid #cbd8e6",
    borderRadius: "8px",
    fontSize: "16px",
    resize: "vertical",
  },

  characterCount: {
    textAlign: "right",
    color: "#7b8da2",
    fontSize: "13px",
  },

  preview: {
    margin: "20px 0",
    padding: "15px",
    border:
      "1px dashed #b9c9d9",
    borderRadius: "8px",
  },

  notFound: {
    minHeight: "650px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },

  errorCode: {
    fontSize: "120px",
    color: "#174f7a",
    margin: 0,
  },

  footer: {
    borderTop:
      "1px solid #dce5ef",
    padding: "25px 60px",
    display: "flex",
    justifyContent: "space-between",
    color: "#72849a",
  },
};