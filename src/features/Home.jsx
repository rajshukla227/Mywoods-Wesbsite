import { Link } from "react-router-dom";
import Card from "../components/molecule/card";
import CardData from "../sampleData/cardData";

const HomeDetail = () => {
    return (
        <>
            {/* ==================== HERO SECTION ==================== */}
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Our Furniture Store</h1>
                    <p className="hero-subtitle">Discover Premium Furniture for Your Beautiful Home</p>
                    <Link to="/woods" className="hero-btn">Shop Now</Link>
                </div>
            </div>

            {/* ==================== FEATURED SECTION ==================== */}
            <section className="featured-section">
                <div className="section-header">
                    <h2 className="section-title">Featured Furniture</h2>
                    <p className="section-subtitle">Handpicked items for your lifestyle</p>
                </div>

                <div className="featured-grid">
                    {CardData.slice(0, 3).map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

                <div className="view-all-btn">
                    <Link to="/woods" className="btn-view-all">View All Products</Link>
                </div>
            </section>

            {/* ==================== FEATURES SECTION ==================== */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Free Shipping</h3>
                        <p>On all orders over $500. Delivery to your doorstep.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">✅</div>
                        <h3>Quality Assured</h3>
                        <p>Premium materials and expert craftsmanship guaranteed.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💳</div>
                        <h3>Easy Payment</h3>
                        <p>Secure checkout with multiple payment options.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔄</div>
                        <h3>Easy Returns</h3>
                        <p>30-day return policy for your peace of mind.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeDetail;