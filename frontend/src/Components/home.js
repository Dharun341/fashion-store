import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './footer';

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSignout = () => {
        navigate('/Login');
    };

    const addCart = (product) => {
        navigate('/addcart', { state: product });
    };

    const handleExplore = () => {
        navigate('/tshirt'); // Navigates to the Tees section
    };

    const products = [
        // Add your product data here
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const cartitem = () => {
        navigate('/cart');
    };

    return (
        <div className="home">
            <div className='ads'>
                <p className='animate'>Welcome to Frenzy, your go-to boutique for the latest in fashion! Frenzy has been a cornerstone of style and trend-setting for many years. As the new owner, I'm thrilled to continue our legacy of offering unique, great-quality pieces that inspire confidence and individuality.</p>
            </div>

            <div className="navbar">
                <img className="logo" src="./logo3.png" alt="Logo" />
                <Navbar>
                    <Nav className="nav1">
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">Tees</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                    <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
                </Navbar>

                {/* Search Bar and Cart Button */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {searchTerm && (
                        <div className="search-term">
                            Searching for: <strong>{searchTerm}</strong>
                        </div>
                    )}
                    <button className='cartitem' onClick={cartitem}>Cart</button>
                </div>
            </div>
            <div className="mw">
                {filteredProducts.map((product) => (
                    <div className="img-container" key={product.id}>
                        <img className="product-img" src={product.imgSrc} alt={product.title} />
                        <a className="tit" href="#">{product.title}</a>
                        <p>{product.discount} {product.price}</p>
                        <button className="but" onClick={() => addCart(product)}>Add Cart</button>
                    </div>
                ))}
            </div>
              {/* Explore Button */}
              <div className="explore-section">
                <button className="explore-btn" onClick={handleExplore}>
                    Explore 
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
