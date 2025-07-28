import { useEffect } from 'react';
import "./contact.modules.css";

export default function Contact() {
  useEffect(() => {
    // Reset animations when component mounts
    const elements = document.querySelectorAll('#contact p, #contact .contact-form');
    elements.forEach(el => {
      if (el.style) {
        el.style.opacity = '0';
      }
    });
  }, []);

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Email: <a href="mailto:boutounada@gmail.com" className="contact-link">boutounada@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+16136010079" className="contact-link">+1 (613) 601-0079</a>
          </p>
          <p>
            Connect with me:
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nada-boutou-6290b1323/" target="_blank" rel="noreferrer">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/nadaboutou" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </p>
        </div>

        <form className="contact-form" action="https://formspree.io/f/xqalayyk" method="POST">
          <h3>Send Me a Message</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="_replyto" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit" className="submit-btn">Send Message</button>
          
          <div className="form-footer">
            <p>Feel free to reach out for collaborations, questions, or just to say hi!</p>
            <p>Looking forward to connecting with you!</p>
          </div>
        </form>
      </div>
    </section>
  );
}