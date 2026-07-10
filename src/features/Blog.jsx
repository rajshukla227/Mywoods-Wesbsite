import { Link } from "react-router-dom";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Perfect Sofa for Your Living Room",
      category: "Furniture Guide",
      date: "July 8, 2026",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Learn the key factors to consider when selecting a sofa that fits your style and comfort needs. From size to material, we cover everything.",
      content: "Finding the right sofa can transform your living space. Consider your room layout, color scheme, and lifestyle needs before making a purchase."
    },
    {
      id: 2,
      title: "Furniture Maintenance Tips: Keep Your Pieces Looking New",
      category: "Care & Maintenance",
      date: "July 5, 2026",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Discover best practices for maintaining your furniture to ensure longevity and keep it looking beautiful for years to come.",
      content: "Regular maintenance is key to preserving your furniture's beauty. Learn about cleaning methods, fabric care, and wood treatment."
    },
    {
      id: 3,
      title: "Small Space Living: Furniture Solutions That Save Space",
      category: "Interior Design",
      date: "July 1, 2026",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Maximize your small space with our expert tips on multifunctional furniture and smart storage solutions.",
      content: "Living in a small space doesn't mean compromising on style. Discover furniture pieces designed for compact living."
    },
    {
      id: 4,
      title: "Color Schemes That Work: A Guide to Interior Harmony",
      category: "Design Tips",
      date: "June 28, 2026",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Explore color palettes and combinations that create a cohesive and welcoming atmosphere in any room.",
      content: "Color plays a crucial role in interior design. Learn how to combine colors to create harmony and balance in your home."
    },
    {
      id: 5,
      title: "Eco-Friendly Furniture: Making Sustainable Choices",
      category: "Sustainability",
      date: "June 24, 2026",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Learn about sustainable furniture options and how to make eco-conscious decisions for your home.",
      content: "Sustainability matters. Discover how our eco-friendly furniture choices can benefit both your home and the environment."
    },
    {
      id: 6,
      title: "Trending Furniture Styles for 2026",
      category: "Trends",
      date: "June 20, 2026",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt: "Stay updated with the latest furniture trends and styles that are dominating interior design this year.",
      content: "From minimalist to maximalist, explore the furniture styles that are trending in 2026 and how to incorporate them into your space."
    }
  ];

  const categories = ["All Posts", "Furniture Guide", "Care & Maintenance", "Interior Design", "Design Tips", "Sustainability", "Trends"];

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Furniture & Design Blog</h1>
          <p>Tips, inspiration, and insights for creating your perfect home</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <div>
              <h2>Latest Articles</h2>
              <p>Expert advice and inspiration for your home</p>
            </div>
          </div>

          <div className="blog-categories">
            {categories.map((cat, index) => (
              <button key={index} className={`category-btn ${index === 0 ? "active" : ""}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category-badge">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-separator">•</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more-btn">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get weekly tips and inspiration delivered to your inbox</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
