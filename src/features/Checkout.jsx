import { useState } from "react";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    paymentMethod: "card"
  });

  const cartItems = [
    { id: 1, name: "Modern Sofa", price: 899, quantity: 1 },
    { id: 2, name: "Coffee Table", price: 299, quantity: 1 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 0;
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="checkout-hero">
        <div className="checkout-hero-content">
          <h1>Complete Your Purchase</h1>
          <p>Secure checkout in just a few steps</p>
        </div>
      </section>

      <section className="checkout-section">
        <div className="checkout-container">
          <div className="checkout-main">
            {/* Progress Steps */}
            <div className="checkout-steps">
              <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <div className="step-number">1</div>
                <div className="step-label">Shipping</div>
              </div>
              <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <div className="step-number">2</div>
                <div className="step-label">Payment</div>
              </div>
              <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                <div className="step-number">3</div>
                <div className="step-label">Review</div>
              </div>
            </div>

            {/* Step 1: Shipping */}
            {currentStep === 1 && (
              <div className="checkout-step">
                <h2>Shipping Address</h2>
                <form className="checkout-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Furniture Street"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Delhi"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Delhi"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>ZIP Code *</label>
                      <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        placeholder="110001"
                        required
                      />
                    </div>
                  </div>

                  <div className="shipping-options">
                    <h4>Shipping Method</h4>
                    <div className="option">
                      <input type="radio" id="standard" name="shipping" defaultChecked />
                      <label htmlFor="standard">
                        <strong>Standard Shipping</strong> - 5-7 business days
                        <span className="price">FREE</span>
                      </label>
                    </div>
                    <div className="option">
                      <input type="radio" id="express" name="shipping" />
                      <label htmlFor="express">
                        <strong>Express Shipping</strong> - 2-3 business days
                        <span className="price">$50</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <div className="checkout-step">
                <h2>Payment Method</h2>
                <form className="checkout-form">
                  <div className="payment-options">
                    <div className={`payment-option ${formData.paymentMethod === "card" ? "active" : ""}`}>
                      <input
                        type="radio"
                        id="card"
                        name="payment"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="card">Credit/Debit Card</label>
                    </div>
                    <div className={`payment-option ${formData.paymentMethod === "wallet" ? "active" : ""}`}>
                      <input
                        type="radio"
                        id="wallet"
                        name="payment"
                        value="wallet"
                        checked={formData.paymentMethod === "wallet"}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="wallet">Digital Wallet</label>
                    </div>
                    <div className={`payment-option ${formData.paymentMethod === "bank" ? "active" : ""}`}>
                      <input
                        type="radio"
                        id="bank"
                        name="payment"
                        value="bank"
                        checked={formData.paymentMethod === "bank"}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="bank">Bank Transfer</label>
                    </div>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="card-form">
                      <div className="form-group">
                        <label>Cardholder Name *</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label>Card Number *</label>
                        <input type="text" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Expiry Date *</label>
                          <input type="text" placeholder="MM/YY" required />
                        </div>
                        <div className="form-group">
                          <label>CVV *</label>
                          <input type="text" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="checkout-step">
                <h2>Review Your Order</h2>
                <div className="review-section">
                  <h4>Shipping Address</h4>
                  <p>
                    {formData.firstName} {formData.lastName}<br />
                    {formData.address}<br />
                    {formData.city}, {formData.state} {formData.zipcode}
                  </p>
                </div>
                <div className="review-section">
                  <h4>Payment Method</h4>
                  <p>{formData.paymentMethod === "card" ? "Credit/Debit Card" : formData.paymentMethod === "wallet" ? "Digital Wallet" : "Bank Transfer"}</p>
                </div>
                <button className="place-order-btn">Place Order</button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="checkout-navigation">
              <button
                className="prev-btn"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <button
                className="next-btn"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === 3}
              >
                Continue
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="checkout-sidebar">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="security-info">
              <p>✓ Secure checkout with SSL encryption</p>
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Free returns on all orders</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
