import Footer from './footer';
import './terms.css';
import { Navbar, Nav} from 'react-bootstrap';

function terms(){
    return(
        <div className="privacy">

            <div className='navbar'>
                <img className='logo' src='./logo3.png' alt="Logo" />
                <Navbar>
                    <Nav className='nav1'> 
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">T-shirt</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>
            <br></br>

            <h1 classname="terms-title">Terms and Services</h1>
                <hr></hr>
                    <div classname="terms-introduction">
                        <h2 classname="section-title">Introduction</h2>
                        <p>Welcome to Starstyle! These Terms and Services govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
                    </div>

                    <div classname="terms-definitions">
                        <h2 classname="section-title">Definitions</h2>
                        <ul classname="definitions-list">
                            <li><strong>"Company," "we," "us,"</strong> or <strong>"our"</strong> refers to Starstyle, operated by AVC eVentures.</li>
                            <li><strong>"Services"</strong> refers to all products and services offered through our website, including customizable clothing.</li>
                            <li><strong>"User," "you,"</strong> or <strong>"your"</strong> refers to any individual or entity accessing our Services.</li>
                        </ul>
                    </div>

                    <div classname="terms-acceptance">
                        <h2 classname="section-title">Acceptance of Terms</h2>
                        <p>By using our Services, you affirm that you are at least 18 years of age or have the consent of a parent or guardian. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</p>
                    </div>

                    <div classname="terms-customization">
                        <h2 classname="section-title">Customization of Products</h2>
                        <ul classname="customization-list">
                            <li>Starstyle offers customizable clothing products. The customization options available will be specified on the product pages.</li>
                            <li>Once an order is placed, the customization cannot be changed or canceled.</li>
                        </ul>
                    </div>

                    <div classname="terms-orders">
                        <h2 classname="section-title">Orders and Payment</h2>
                        <ul classname="orders-list">
                            <li>All orders are subject to acceptance by Starstyle. We reserve the right to refuse or cancel any order for reasons including but not limited to product availability, errors in pricing, or fraudulent transactions.</li>
                            <li>Payment must be made at the time of order through our secure payment processor.</li>
                        </ul>
                    </div>

                    <div classname="terms-shipping">
                        <h2 classname="section-title">Shipping and Delivery</h2>
                        <ul classname="shipping-list">
                            <li>We aim to process and ship orders promptly. Delivery times may vary based on location and customization requirements.</li>
                            <li>Starstyle is not responsible for delays caused by shipping carriers or unforeseen circumstances.</li>
                        </ul>
                    </div>

                    <div classname="terms-returns">
                        <h2 classname="section-title">Returns and Exchanges</h2>
                        <ul classname="returns-list">
                            <li>Customized products are non-returnable unless defective or incorrect due to our error.</li>
                            <li>If you receive a damaged or incorrect item, please contact us within 7 days for a resolution.</li>
                        </ul>
                    </div>

                    <div classname="terms-intellectual-property">
                        <h2 classname="section-title">Intellectual Property</h2>
                        <p>All content, trademarks, and other intellectual property on our website are owned by or licensed to Starstyle. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
                    </div>

                    <div classname="terms-user-conduct">
                        <h2 classname="section-title">User Conduct</h2>
                        <p>You agree not to use the Services for any unlawful or prohibited purpose. You are responsible for your interactions and communications while using the Services.</p>
                    </div>

                    <div classname="terms-limitation-of-liability">
                        <h2 classname="section-title">Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, Starstyle is not liable for any indirect, incidental, or consequential damages arising from your use of our Services.</p>
                    </div>

                    <div classname="terms-changes">
                        <h2 classname="section-title">Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms and Services at any time. Changes will be effective immediately upon posting on our website. Your continued use of the Services after changes have been made constitutes your acceptance of the new terms.</p>
                    </div>

                    <div classname="terms-governing-law">
                        <h2 classname="section-title">Governing Law</h2>
                        <p>These Terms and Services shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
                    </div>

                    <div classname="terms-contact">
                        <h2 classname="section-title">Contact Us</h2>
                        <p>If you have any questions about these Terms and Services, please contact us at <a href="mailto:hello@starstyle.in">hello@starstyle.in</a>.</p>
                    </div>


            <div>
            <Footer />
            </div>
        </div>
    )
}

export default terms;