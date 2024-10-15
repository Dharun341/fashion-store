import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:5000/api/orders', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handle order deletion
  const handleRemoveOrder = async (orderId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to remove the order');
      }

      // Remove the order from the state
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle viewing order details
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="admin-orders-container">
      <h2>All Orders</h2>
      {loading && <p className="loading-message">Loading orders...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Logout button */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User Name</th> {/* Display user's name */}
            <th>Items</th>
            <th>View</th>
            <th>Total</th>
            <th>Status</th>
            <th>Remove</th> {/* Remove button with image */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.userId || 'N/A'}</td>
              <td>
                {order.items.map((item, index) => (
                  <div key={item.productId}>
                    {item.name} (x{item.quantity})
                  </div>
                ))}
              </td>
              <td>
                <button
                  className="view-item-button"
                  onClick={() => handleOrderClick(order)}
                >
                  View
                </button>
              </td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="remove-item-button"
                  onClick={() => handleRemoveOrder(order._id)}
                >
                  <img
                    src="/images/custom/rem.png"
                    alt="Remove"
                    className="remove-icon"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for viewing order details */}
      {selectedOrder && (
        <div className="item-details-modal">
          <h3>Order Details</h3>
          {selectedOrder.items.map((item, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.name} className="item-image" />
              )}
            </div>
          ))}
          <button className="close-button" onClick={() => setSelectedOrder(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
