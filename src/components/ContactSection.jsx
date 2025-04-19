import { useState } from "react";
import "./ContactSection.css"

function ContactSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formspree.io/f/mkgjedpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus("Message sent!");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };
  

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {status && <p className="success-message">{status}</p>}
      </form>
    </section>
  );
}

export default ContactSection;
