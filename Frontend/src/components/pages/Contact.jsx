import React, { useState } from 'react';
import '../css/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Save form data to backend
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Format WhatsApp message
      const message = `Hello Dhananjay, I am ${formData.name}. Phone: ${formData.phone}, Email: ${formData.email}. Message: ${formData.message}`;
      const url = `https://wa.me/919767839472?text=${encodeURIComponent(message)}`;

      // Redirect to WhatsApp with message
      window.open(url, '_blank');

      // Optionally clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } else {
      console.error('Failed to send contact data');
    }
  } catch (error) {
    console.error('Error saving contact:', error);
  }
};


  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <h2 className="main-heading">Contact Us</h2>
        <p className="text-center">
          Reach out to us and we will get back to you as soon as possible. Whether it's a query, suggestion, or feedback, we'd love to hear from you.
        </p>

        <div className="contact_section-container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="input_message"
                  />
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn_on-hover">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

