import Footer from './footer';
import './privacy.css';
import { Navbar, Nav} from 'react-bootstrap';

function privacy(){
    return(
        <div className="privacy">
            <div className='navbar'>
                <img className='logo' src='./logo3.png' alt="Logo" />
                <h1 className="policy-title">Privacy Policy</h1>
                <Navbar>
                    <Nav className='nav1'> 
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">T-shirt</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>
            <div className="privacy-policy">
                
            <hr></hr>
                <div className="section introduction">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Frenzy, your go-to boutique for the latest in fashion! Frenzy has been a cornerstone of style and trend-setting for many years. As the new owner, I'm thrilled to continue our legacy of offering unique, great-quality pieces that inspire confidence and individuality.</p>
                </div>

                <div className="section information-collection">
                    <h2>2. Information We Collect</h2>
                    <ul className="custom-bullets">
                        <li><strong>Personal Information:</strong> Name, email, phone number, billing/shipping addresses, and payment info.</li>
                        <li><strong>Automatically Collected:</strong> IP address, browser type, operating system, and pages visited.</li>
                    </ul>
                </div>

                <div className="section use-of-information">
                    <h2>3. Use of Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="custom-bullets">
                        <li>Process orders and manage your account.</li>
                        <li>Communicate about orders and promotions.</li>
                        <li>Improve our services.</li>
                    </ul>
                </div>

                <div className="section disclosure-of-information">
                    <h2>4. Disclosure of Your Information</h2>
                    <p>We do not sell your personal information. We may share it with:</p>
                    <ul className="custom-bullets">
                        <li>Service providers assisting our business.</li>
                        <li>Authorities for legal compliance.</li>
                    </ul>
                </div>

                <div className="section data-security">
                    <h2>5. Data Security</h2>
                    <p>We implement measures to protect your information but cannot guarantee complete security.</p>
                </div>

                <div className="section your-rights">
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="custom-bullets">
                        <li>Access and request corrections to your personal information.</li>
                        <li>Request deletion under certain conditions.</li>
                    </ul>
                </div>

                <div className="section changes-to-policy">
                    <h2>7. Changes to This Policy</h2>
                    <p>We may update this policy occasionally. Changes will be posted with a new effective date.</p>
                </div>

                <div className="section contact-us">
                    <h2>8. Contact Us</h2>
                    <p>For questions, contact us at:</p>
                    <p>Email: <a href="mailto:hello@starstyle.in">hello@starstyle.in</a></p>
                    <p>Address: A26, Naraina, Delhi – 110028, India</p>
                </div>
            </div>

            <div>
            <Footer />
            </div>
        </div>
    )
}

export default privacy;