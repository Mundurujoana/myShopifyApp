// Login.js
import React, { useState, useEffect } from 'react';
import './style.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      const userCredentials = JSON.parse(rememberedUser);
      setFormData(userCredentials);
      setRememberMe(true);
    }
  }, []);

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear any previous errors for this field
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Check for empty fields
    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username or Email is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    }

    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    // Check for validation errors before submitting
    if (errors.username || errors.password) {
      toast.error('Username and password are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Login successful');
        navigate('/ecommerce');
      } else if (response.status === 401) {
        toast.error('User not registered');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }

    if (rememberMe) {
      localStorage.setItem('rememberedUser', JSON.stringify(formData));
    } else {
      localStorage.removeItem('rememberedUser');
    }
  };

  return (
          <>
    <div className="login-modal">
      <div className="login-content">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />{' '}
            Remember Me
          </label>
        </div>
        <button className="login-button">Login</button>
      </form>
      <p>
        Already have an account? <a href="/register">Register</a>
      </p>
      <ToastContainer />
    </div>
    </div>

    
    </>
 
  );
}

export default Login;
