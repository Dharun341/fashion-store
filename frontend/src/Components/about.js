import { Navbar, Nav} from 'react-bootstrap';
import './about.css';
import Footer from './footer'

function about(){
    return(
        <div className='about'>
            <div className='navbar'>
                <img className='logo' src='./logo3.png' alt="Logo" />
                <h1 className="about-title">About Frenzy Fashion</h1>
                <Navbar>
                    <Nav className='nav1'> 
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">Tees</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                    
                </Navbar>
            </div>
            

            <div className="about-us">
    <h1 className="about-title">About</h1>
    <p className="about-intro">
    At Frenzy Fashion, we prioritize not just the latest trends, but also comfort and quality. Each piece is crafted with care, ensuring that you look good and feel confident. Our team is constantly scouting for new inspirations from global fashion hotspots, delivering fresh and exciting collections that keep you ahead of the style curve.
    </p>

    <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
        Welcome to Frenzy, your go-to boutique for the latest in fashion! Frenzy has been a cornerstone of style and trend-setting for many years. As the new owner, I'm thrilled to continue our legacy of offering unique, great-quality pieces that inspire confidence and individuality
        </p>
    </div>

    <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
            We envision a world where everyone can express their individuality through style. By providing customizable options, we hope to inspire creativity and confidence in our customers.
        </p>
    </div>

    <div className="about-values">
        <h2>Our Values</h2>
        <ul className="values-list">
            <li><strong>Quality:</strong> We prioritize high-quality materials and craftsmanship.</li>
            <li><strong>Innovation:</strong> We constantly seek new ways to enhance your shopping experience.</li>
            <li><strong>Community:</strong> We believe in building a supportive community of fashion enthusiasts.</li>
            <li><strong>Sustainability:</strong> We are committed to ethical practices and reducing our environmental footprint.</li>
        </ul>
    </div>

    <div className="about-commitment">
        <h2>Our Commitment</h2>
        <p>
            We are dedicated to ensuring a seamless shopping experience. From our user-friendly website to our responsive customer service, we are here to help you every step of the way. Your satisfaction is our top priority!
        </p>
    </div>

    <div className="about-contact">
        <h2>Contact Us</h2>
        <p>
            Have questions or feedback? We’d love to hear from you! Reach out to us at <a href="mailto:frency fashion.in">hello@frencyfashion.in</a>.
        </p>
    </div>
</div>


            <Footer />
        </div>
    )
}
export default about;