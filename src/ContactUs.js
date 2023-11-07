import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to the server)

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  

  return (
    <div>
      <div className="welcome-section">
        <h1 className="welcome-text">Welcome To Jo-Store</h1>
      </div>

      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a href="/about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="nav-icons">
            <li className="nav-item">
              <a href="/logout">Logout</a>
            </li>
            <li className="nav-item">
              <a href="/search">
                <i className="fa fa-search nav-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/wishlist">
                <i className="fa fa-heart nav-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/cart">
                <i className="fa fa-shopping-cart nav-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

            <div className="contact-container">
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="contact-input"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-button">Submit</button>
            </form>
          </div>
        </div>
      

                <div className="footer">
                    <div className="section">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Contact</p>
                    </div>
                    <div className="separator"></div>
                    <div className= "section">
                        <h3>HELP</h3>
                        <p>Rwanda: (+250) 791 675 275</p>
                        <p>hello@aflimba.com</p>
                        <p>Kenya: +254 799 682759</p>
                        <p>ke@aflimba.com</p>
                    </div>
                    <div className="separator"></div>
                    <div className="section">
                        <h3>STORE</h3>
                        <p>Totes</p>
                        <p>For Laptop</p>
                        <p>Backpacks</p>
                    </div>
                    <div className="separator"></div>
                    <div className="section">
                        <h3>FOLLOW US</h3>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="copyright">
                    ©2023 AFLIMBA
                </div>
          
        </div>
    );
}

export default ContactUs;

