import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="content-section contact-layout">
      <div className="contact-info">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Let's talk.</h1>
        <p>
          Have a project idea, collaboration opportunity or just want to say
          hello? Send me a message.
        </p>

        <div className="contact-detail">
          <span>✉</span>
          <div>
            <small>Email</small>
            <strong>jainamkhetani@gmail.com</strong>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Your Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Message
          <textarea
            rows="7"
            maxLength="300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
          />
          <span className="char-count">{message.length}/300 characters</span>
        </label>

        <div className="live-preview">
          <strong>Live Preview</strong>
          <p>{name || "Your name"}: {message || "Your message will appear here..."}</p>
        </div>

        <button className="primary-btn" type="submit">Send Message →</button>
      </form>
    </section>
  );
}