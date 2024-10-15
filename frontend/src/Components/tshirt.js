import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './tshirt.css';
import Footer from './footer'

const tshirts = [
    { id: 1, title: "Women Typography Round Neck Polyester White T-Shirt", price: "₹433", discount: "-45%", imgSrc: "./images/t/1.jpg" },
    { id: 2, title: "ATICX Men's Slim Fit Polyester Sleeveless", price: "₹765", discount: "-54%", imgSrc:  "./images/t/2.jpg" },
    { id: 3, title: "Dika Sports", price: "₹876", discount: "-34%", imgSrc:  "./images/t/3.jpg" },
    { id: 4, title: "Oversized T Shirt For Women", price: "₹654", discount: "-38%", imgSrc:  "./images/t/4.jpg" },
    { id: 5, title: "Cool Black Customized Women Polo T-Shirt", price: "₹909", discount: "-45%", imgSrc:  "./images/t/5.jpg" },
    { id: 6, title: "Tommy Hilfiger Men's Full Sleeve", price: "₹963", discount: "-23%", imgSrc:  "./images/t/6.jpg" },
    { id: 7, title: "Softwear Womens Long Sleeve Bottle Green Plain T-Shirt", price: "₹865", discount: "-67%", imgSrc:  "./images/t/7.jpg" },
    { id: 8, title: "Pink Custom T Shirts for Women", price: "₹758", discount: "-34%", imgSrc:  "./images/t/8.jpg" },
    { id: 9, title: "Yellow Polo T-Shirt", price: "₹234", discount: "-64%", imgSrc:  "./images/t/9.jpg" }
];

function Tshirt() {
    const navigate = useNavigate();

    const addCart = (tshirt) => {
        // Retrieve the current cart from localStorage, or initialize an empty array if it doesn't exist
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the selected T-shirt to the cart
        cart.push(tshirt);

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
                <h1 className='tst'>Tees</h1>
                <Navbar>
                    <Nav className='nav1'>
                        <a className="a1" href="/home">Home</a>
                        <a className="a2" href="/shirt">Shirt</a>
                        <a className="a3" href="/tshirt">Tees</a>
                        <a className="a4" href="/about">About</a>
                    </Nav>
                </Navbar>
            </div>
            
            <div className='ts'>
                {tshirts.map((tshirt) => (
                    <div className={`cont-tshirt-${tshirt.id}`} key={tshirt.id}>
                        <img className={`tshirt-${tshirt.id}`} src={tshirt.imgSrc} alt={tshirt.title} />
                        <a className="tit" href="#">{tshirt.title}</a>
                        <p>{tshirt.discount} {tshirt.price}</p>
                        <button className='but' onClick={() => addCart(tshirt)}>Add Cart</button>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Tshirt;
