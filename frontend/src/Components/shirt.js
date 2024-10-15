import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './shirt.css';
import Footer from './footer';

const shirts = [
    { id: 1, title: "FINIVO FASHION Men's Cotton Regular Fit Full Sleeve Collared Neck Casual Shirt", price: "₹877", discount: "-57%", imgSrc: "./images/st/st1.jpeg" },
    { id: 2, title: "Ethnic basket", price: "₹847", discount: "-45%", imgSrc: "./images/st/st2.jpeg" },
    { id: 3, title: "Men Regular Fit Printed Spread Collar Casual Shirt", price: "₹625", discount: "-23%", imgSrc: "./images/st/st5.jpeg" },
    { id: 4, title: "Men Printed Regular Fit Shirt with Spread-Collar", price: "₹324", discount: "-85%", imgSrc: "./images/st/st3.jpeg" },
    { id: 5, title: "LookMark Men's Cotton Blend Printed Stitched Half Sleeve Regular Fit Shirt", price: "₹273", discount: "-84%", imgSrc: "./images/st/st4.jpeg" },
    { id: 6, title: "Men Printed Casual Shirt", price: "₹743", discount: "-45%", imgSrc: "./images/st/st6.jpeg" },
    { id: 7, title: "Lymio Casual Shirt for Men", price: "₹982", discount: "-76%", imgSrc: "./images/st/st7.jpeg" },
    { id: 8, title: "Men Spread Collar Striped Casual Shirt", price: "₹656", discount: "-32%", imgSrc: "./images/st/st8.jpeg" },
    { id: 9, title: "Men Slim Fit Solid Slim Collar Formal Shirt", price: "₹679", discount: "-21%", imgSrc: "./images/st/s9.jpg" }
];

function Shirt() {
    const navigate = useNavigate();

    const addCart = (shirt) => {
        // Retrieve the current cart from localStorage, or initialize an empty array if it doesn't exist
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the selected shirt to the cart
        cart.push(shirt);

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Navigate to the cart page
        navigate('/cart');
    };

    return (
        <div>
            <div className='ads'>
                <p className='animate'>Free Shipping to India on All Orders ₹9,210.00+</p>
            </div>
            <div className='navbar'>
                <img className='logo' src='./logo3.png' alt="Logo" />
                <h1 className='sst'>Shirt</h1>
                <Navbar>
                    <Nav className='nav1'>
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">Tees</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>

            <div className='sh'>
                {shirts.map((shirt) => (
                    <div className={`cont-${shirt.id}`} key={shirt.id}>
                        <img className={`img-${shirt.id}`} src={shirt.imgSrc} alt={shirt.title} />
                        <a className='tit' href='#'>{shirt.title}</a> 
                        <p>{shirt.discount} {shirt.price}</p>
                        <button className='but' onClick={() => addCart(shirt)}>Add Cart</button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Shirt;