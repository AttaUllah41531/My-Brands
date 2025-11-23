import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open default mail client
    window.location.href = `mailto:attaullah41531@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Contact Us</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-5 mb-4">
          <div className="p-4 border rounded shadow-sm">
            <h4 className="fw-bold mb-3">Get in Touch</h4>
            <p><strong>Email:</strong> <a href="mailto:attaullah41531@gmail.com">attaullah41531@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:03013241531">03013241531</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/03013241531" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
            <p><strong>Facebook:</strong> <a href="https://facebook.com/03013241531" target="_blank" rel="noopener noreferrer">Profile Link</a></p>
            <p><strong>Location:</strong> Islamabad, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <h4 className="fw-bold mb-3">Send Us a Message</h4>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>

            <button type="submit" className="btn btn-info text-dark fw-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Lower Footer Info */}
      <div className="text-center mt-5 text-muted">
        <p>Email: attaullah41531@gmail.com | Phone: 03013241531 | WhatsApp: 03013241531</p>
      </div>
    </div>
  );
}

export default Contact;
