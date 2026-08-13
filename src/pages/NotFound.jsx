import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>The route you entered does not exist.</p>
      <Link className="primary-btn" to="/">Back to Home</Link>
    </section>
  );
}