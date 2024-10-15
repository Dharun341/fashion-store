import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    const navigate = useNavigate();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [showPopup, setShowPopup] = useState(false);
    const [notification, setNotification] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input fields
        if (!name || !address) {
            setNotification('Please fill in all required fields.');
            return; // Exit the function if validation fails
        }

        // Check if the cart is empty
        if (cart.length === 0) {
            setNotification('Your cart is empty. Please add products to your cart before placing an order.');
            return; // Exit the function if cart is empty
        }

        const orderDetails = {
            userId: name, // Use the name as userId (assuming it's the email)
            name,
            address,
            paymentMethod,
            items: cart.map(item => ({
                productId: item.id || item.productId, // Adjust according to your cart structure
                name: item.title,
                quantity: 1, // Adjust as needed
                price: parseFloat(item.price.replace('₹', '').replace(',', '')),
                imageUrl: item.imgSrc,
            })),
            total: calculateTotal(),
        };

        setLoading(true); // Set loading to true while processing the order
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetails),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error placing order:', errorData);
                throw new Error(errorData.message || 'Failed to place order.'); // Adjust error message as needed
            }

            const data = await response.json();
            console.log('Order placed:', data);
            localStorage.removeItem('cart');
            setShowPopup(true);
            setNotification(''); // Clear notification on successful order placement
        } catch (error) {
            console.error('Error:', error);
            setNotification(error.message || 'Failed to place order. Please try again.');
        } finally {
            setLoading(false); // Set loading to false after processing
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate('/home');
    };

    const contshop = () => {
        navigate('/home');
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="address">Address with Ph.No:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="payment">Payment Method:</label>
                    <select
                        id="payment"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="Google Pay">Online payment</option>
                        <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                </div>
                
                <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
                
                <button type="submit" className="checkout-button" disabled={loading}>
                    {loading ? 'Placing Order...' : 'Place Order'}
                </button>
                
                <button type="button" className="checkout-btn" onClick={contshop}>Continue Shopping</button>
            </form>
            
            {notification && <div className="notification">{notification}</div>} {/* Notification for empty cart */}
            
            {showPopup && (
                <div className="popup">
                    <h3>Order Placed Successfully!</h3>
                    <p>Your order has been successfully placed. Thank you!</p>
                    <button onClick={handleClosePopup}>Go to Home</button>
                </div>
            )}
        </div>
    );
}

export default Checkout;
