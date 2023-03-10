import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [formData, setFormData] = useState({ subject: "", message: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const url = `mailto:yulia.lavine@gmail.com?subject=${formData.subject}&body=${formData.message}`;
    window.open(url);
    
  };
  return (
    <div>
      <div className="contact-form-wrapper d-flex justify-content-center">
        <form action="#" className="contact-form" onSubmit={handleSubmit}>
          <h5 className="title">Contact Me</h5>
          <div>
            <input
              type="text"
              className="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
            />
          </div>
          <div>
            <textarea
              id="message"
              className="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              required
              value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
            ></textarea>
          </div>
          <div className="submit-button-wrapper">
            <input className="submit-button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
