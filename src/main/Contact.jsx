import React from 'react';
import '../style.css'; // import shared style.css

export default function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <h2 style={{ color: '#555', marginBottom: '20px' }}>
        Reach out to us for any questions or support!
      </h2>

      {/* Contact Information */}
      <p className="contact-info"><strong>Phone:</strong> 9876543210</p>
      <p className="contact-info"><strong>Email:</strong> quizbuilder@gmail.com</p>

      {/* Description */}
      <p className="contact-description">
        We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.
        Our team is always ready to assist you.
      </p>
    </div>
  );
}
