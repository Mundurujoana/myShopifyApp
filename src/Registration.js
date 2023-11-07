import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'; // Import the CSS file

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (name === 'username') {
      setErrors({ ...errors, username: value ? '' : 'Username is required' });
    }
  
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({ ...errors, email: emailRegex.test(value) ? '' : 'Invalid email format' });
    }
  
    if (name === 'password') {
      const passwordLength = value.length;
      if (passwordLength < 6 || passwordLength > 8) {
        setErrors({ ...errors, password: 'Password must be 6 to 8 characters long' });
      } else {
        setErrors({ ...errors, password: '' });
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    // Check for empty fields
    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
    }

    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
    }

    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
    }

    // Check for validation errors before submitting
    if (errors.username || errors.email || errors.password) {
      toast.error('Form has validation errors');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('User registered successfully'); // Show success toast
        navigate('/');
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-modal">
      <div className="login-content">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username"
          />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <button className="register-button">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>

      <ToastContainer />
      </div>
    </div>
  );
}

export default RegistrationForm;
