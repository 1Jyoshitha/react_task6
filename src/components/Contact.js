import React from 'react';
import 'C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/styles/style.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch or have any inquiries, feel free to contact me.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <br /><br />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <br /><br />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <br /><br />
            </div>
            <div className="form-button">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
