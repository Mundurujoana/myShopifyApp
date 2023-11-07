import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="section">
                    <h3>COMPANY</h3>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
                <div className="separator"></div>
                <div className="section">
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

export default Footer;
