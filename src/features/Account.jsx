import { useState } from "react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "123 Furniture Street, Delhi, India"
  });

  const orders = [
    { id: "ORD001", date: "July 5, 2026", items: 3, total: "$2,499", status: "Delivered" },
    { id: "ORD002", date: "June 28, 2026", items: 1, total: "$899", status: "Delivered" },
    { id: "ORD003", date: "June 15, 2026", items: 2, total: "$1,298", status: "Delivered" }
  ];

  const addresses = [
    { id: 1, type: "Home", address: "123 Furniture St, Delhi, India", default: true },
    { id: 2, type: "Office", address: "456 Business Ave, Mumbai, India", default: false }
  ];

  const wishlist = [
    { id: 1, name: "Modern Sofa", price: "$899", image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, name: "Dining Table Set", price: "$1,299", image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  return (
    <>
      <section className="account-hero">
        <div className="account-hero-content">
          <h1>My Account</h1>
          <p>Manage your profile, orders, and preferences</p>
        </div>
      </section>

      <section className="account-section">
        <div className="account-container">
          <div className="account-sidebar">
            <div className="account-user">
              <div className="user-avatar">JD</div>
              <h3>{profile.name}</h3>
              <p>{profile.email}</p>
            </div>

            <nav className="account-nav">
              <button
                className={`account-nav-item ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                Profile Info
              </button>
              <button
                className={`account-nav-item ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => setActiveTab("orders")}
              >
                My Orders
              </button>
              <button
                className={`account-nav-item ${activeTab === "addresses" ? "active" : ""}`}
                onClick={() => setActiveTab("addresses")}
              >
                Addresses
              </button>
              <button
                className={`account-nav-item ${activeTab === "wishlist" ? "active" : ""}`}
                onClick={() => setActiveTab("wishlist")}
              >
                Wishlist
              </button>
              <button
                className={`account-nav-item ${activeTab === "settings" ? "active" : ""}`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </button>
            </nav>
          </div>

          <div className="account-content">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="account-panel">
                <h2>Profile Information</h2>
                <form className="profile-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" value={profile.name} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" value={profile.email} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" value={profile.phone} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea readOnly>{profile.address}</textarea>
                  </div>
                  <button type="button" className="edit-btn">Edit Profile</button>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="account-panel">
                <h2>My Orders</h2>
                <div className="orders-grid">
                  {orders.map((order) => (
                    <div key={order.id} className="order-card">
                      <div className="order-header">
                        <div>
                          <h4>Order {order.id}</h4>
                          <p>{order.date}</p>
                        </div>
                        <span className={`status-badge status-${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="order-details">
                        <div>
                          <strong>{order.items}</strong> items
                        </div>
                        <div className="order-total">
                          <strong>{order.total}</strong>
                        </div>
                      </div>
                      <button className="view-details-btn">View Details</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div className="account-panel">
                <div className="addresses-header">
                  <h2>Saved Addresses</h2>
                  <button className="add-btn">+ Add New Address</button>
                </div>
                <div className="addresses-grid">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="address-card">
                      <div className="address-header">
                        <h4>{addr.type}</h4>
                        {addr.default && <span className="default-badge">Default</span>}
                      </div>
                      <p className="address-text">{addr.address}</p>
                      <div className="address-actions">
                        <button className="edit-link">Edit</button>
                        <button className="delete-link">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="account-panel">
                <h2>My Wishlist</h2>
                <div className="wishlist-grid">
                  {wishlist.map((item) => (
                    <div key={item.id} className="wishlist-item">
                      <div className="wishlist-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <h4>{item.name}</h4>
                      <p className="price">{item.price}</p>
                      <div className="wishlist-actions">
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="remove-btn">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="account-panel">
                <h2>Account Settings</h2>
                <div className="settings-group">
                  <div className="setting-item">
                    <div>
                      <h4>Email Notifications</h4>
                      <p>Receive updates about your orders and promotions</p>
                    </div>
                    <label className="toggle">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div>
                      <h4>SMS Notifications</h4>
                      <p>Get SMS updates on order status</p>
                    </div>
                    <label className="toggle">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div>
                      <h4>Newsletter</h4>
                      <p>Subscribe to our weekly newsletter</p>
                    </div>
                    <label className="toggle">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                <div className="settings-actions">
                  <button className="change-password-btn">Change Password</button>
                  <button className="logout-btn">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
