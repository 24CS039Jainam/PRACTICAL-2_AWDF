import { NavLink } from "react-router-dom";

export default function NavBar({ darkMode, setDarkMode }) {
  const navClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark">JK</span>
          <span>Jainam Khetani</span>
        </NavLink>

        <nav>
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark/light mode"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}