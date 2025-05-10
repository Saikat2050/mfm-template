import React, { useState } from 'react';
import './contact.css';
import toast from 'react-hot-toast';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/send-email`, {
        "emailType": 1,
        "payload": {
            "name": formData.name,
            "mobile": formData.mobile,
            "email": formData.email,
            "message": formData.message
        }
    }, {
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PRIVATE_KEY}`
      }
    })

      return true
    } catch (err) {
      console.error("Error is sending email", err)
      throw err
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let alreadyToasted = false;
  
    if (!(/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, '').trim().slice(-10)))) {
      alreadyToasted = true;
      toast.error("Not a valid mobile number.")
    }

    if ((formData.message ?? '').toString().trim() === '') {
      alreadyToasted = true;
      toast.error("Message is empty.")
    }

    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test((formData.email ?? '').trim()))) {
      alreadyToasted = true;
      toast.error("Not a valid email address.")
    }

    // You could add a success message here
    if (!alreadyToasted) {
      toast.promise(
        sendEmail(e),
         {
           loading: 'Saving...',
           success: <b>Response saved successfully!</b>,
           error: <b>Something went wrong.</b>,
         }
       );
      // toast.success('Response sent successfully!')
      alreadyToasted = true
    }

    if (alreadyToasted) {
      // Reset form after submission
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subheading">
          Whether you're looking to collaborate, inquire about our products, or just say
          hello — we'd love to hear from you.
        </p>
      </div>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <span className="info-icon">📍</span>
          <span className="info-text">Head Office: Delhi, India</span>
        </div>
        <div className="info-item">
          <span className="info-icon">✉️</span>
          <span className="info-text">Email: mfmdelhi24@gmail.com</span>
        </div>
        <div className="info-item">
          <span className="info-icon">📞</span>
          <span className="info-text">Phone: 8595964802</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;