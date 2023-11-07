import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs'; // Import the ContactPage component
import Home from './Home'; 
import Registration from './Registration';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
  
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      <ToastContainer />
      </div>
   
  );
}

export default App;


