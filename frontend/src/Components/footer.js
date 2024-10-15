import React, { useState } from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log(`Subscribed with email: ${email}`);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Frenzy Fashion. All Rights Reserved.</p>
                    <ul className="footer-links">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-center">
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="newsletter">
                        <h4>Subscribe to our Newsletter</h4>
                        <form onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="contact-info">
                        <h4>Contact Us</h4>
                        <p>Email:frenzyfashion@store.com</p>
                        <p>Phone: +91 9843191670</p>
                    </div>

                    <div className="morals">
                        <h4>Our Values</h4>
                        <ul>
                            <li>Creativity & Individuality</li>
                            <li>Quality & Craftsmanship</li>
                            <li>Sustainability</li>
                            <li>Inclusivity</li>
                            <li>Customer Empowerment</li>
                        </ul>
                    </div>

                    <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
