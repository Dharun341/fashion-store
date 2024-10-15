import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './navbarComponent.css'; // Import the CSS for Navbar component

function NavbarComponent() {
    const navigate = useNavigate();

    const handleSignout = () => {
        navigate('/Login');
    };

    return (
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
        </div>
    );
}

export default NavbarComponent;
