

export default function AboutDeatil() {
  return (
    <>
      {/* ==================== MAIN ABOUT SECTION ==================== */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=800"
              alt="Modern Furniture Store"
            />
          </div>

          <div className="about-content">
            <span className="about-tag">Welcome to Mywoods</span>

            <h1>Discover Premium Furniture for Your Dream Home</h1>

            <p>
              Mywoods is your one-stop destination for high-quality, contemporary furniture that transforms spaces into beautiful sanctuaries. With over a decade of experience, we curate the finest collection of sofas, beds, dining sets, and accessories designed for modern living.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h2>500+</h2>
                <p>Products</p>
              </div>

              <div className="stat">
                <h2>10K+</h2>
                <p>Happy Customers</p>
              </div>

              <div className="stat">
                <h2>12+</h2>
                <p>Years Experience</p>
              </div>
            </div>

            <button onClick={() => window.location.href = '/woods'}>Shop Now</button>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VALUES ==================== */}
      <section className="about-mission">
        <div className="mission-container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p>
              We believe that quality furniture should be accessible to everyone. Our mission is to provide exceptional, affordable, and sustainable furniture solutions that enhance your living space and lifestyle.
            </p>
            <p>
              Every piece in our collection is carefully selected from trusted manufacturers who share our commitment to craftsmanship, durability, and design excellence.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Design Excellence</h3>
              <p>Modern, stylish furniture that complements any interior aesthetic.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Quality Assured</h3>
              <p>Premium materials and expert craftsmanship in every product.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>Sustainability</h3>
              <p>Eco-friendly materials and ethical manufacturing practices.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Customer First</h3>
              <p>Dedicated support and hassle-free service always.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FURNITURE COLLECTIONS ==================== */}
      <section className="collections-section">
        <h2 className="section-title">Our Collections</h2>

        <div className="collections-grid">
          <div className="collection-card">
            <img 
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=400" 
              alt="Living Room Collection"
            />
            <div className="collection-info">
              <h3>Living Room</h3>
              <p>Comfortable sofas, coffee tables, and entertainment units designed for relaxation.</p>
              <a href="/woods" className="collection-link">Explore →</a>
            </div>
          </div>

          <div className="collection-card">
            <img 
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=400" 
              alt="Dining Collection"
            />
            <div className="collection-info">
              <h3>Dining</h3>
              <p>Elegant dining tables and chairs perfect for gatherings and memorable meals.</p>
              <a href="/woods" className="collection-link">Explore →</a>
            </div>
          </div>

          <div className="collection-card">
            <img 
              src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?w=400" 
              alt="Bedroom Collection"
            />
            <div className="collection-info">
              <h3>Bedroom</h3>
              <p>Luxurious beds and bedroom furniture for your ultimate comfort and style.</p>
              <a href="/woods" className="collection-link">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STORE EXPERIENCE ==================== */}
      <section className="store-experience">
        <div className="experience-container">
          <h2 className="section-title">Why Choose Mywoods</h2>

          <div className="experience-grid">
            <div className="experience-item">
              <div className="experience-number">1</div>
              <h3>Wide Selection</h3>
              <p>Browse from 500+ carefully curated furniture pieces for every room and style.</p>
            </div>

            <div className="experience-item">
              <div className="experience-number">2</div>
              <h3>Best Prices</h3>
              <p>Premium quality at competitive prices with frequent discounts and offers.</p>
            </div>

            <div className="experience-item">
              <div className="experience-number">3</div>
              <h3>Expert Guidance</h3>
              <p>Our furniture consultants help you find the perfect pieces for your space.</p>
            </div>

            <div className="experience-item">
              <div className="experience-number">4</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping with white-glove delivery service available.</p>
            </div>

            <div className="experience-item">
              <div className="experience-number">5</div>
              <h3>Easy Returns</h3>
              <p>30-day hassle-free return policy for complete peace of mind.</p>
            </div>

            <div className="experience-item">
              <div className="experience-number">6</div>
              <h3>Warranty</h3>
              <p>Comprehensive warranty coverage on all furniture items.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}