import { useState } from "react";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "What are your shipping options?",
          a: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping on orders over $500."
        },
        {
          q: "Do you ship internationally?",
          a: "Currently, we ship within India. We're expanding to international shipping soon. Subscribe to our newsletter for updates."
        },
        {
          q: "Can I track my order?",
          a: "Yes! Once your order ships, you'll receive a tracking number via email. You can track your package in real-time."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What's your return policy?",
          a: "We offer a 30-day return policy on all items. Products must be in original condition with packaging intact."
        },
        {
          q: "How long do refunds take?",
          a: "Refunds are processed within 5-7 business days after we receive your returned item."
        },
        {
          q: "Do I pay for return shipping?",
          a: "We provide free return shipping for defective items. For change of mind returns, shipping cost is borne by the customer."
        }
      ]
    },
    {
      category: "Product Information",
      questions: [
        {
          q: "Are your products made from sustainable materials?",
          a: "Yes! We prioritize eco-friendly materials. Most of our furniture is made from sustainably sourced wood and recycled materials."
        },
        {
          q: "Do you offer customization options?",
          a: "Absolutely! We offer custom colors, sizes, and materials for most furniture pieces. Contact our team for details."
        },
        {
          q: "What warranty do you provide?",
          a: "All furniture comes with a 2-year warranty covering manufacturing defects. Extended warranty options are available."
        }
      ]
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept credit/debit cards, digital wallets (Apple Pay, Google Pay), UPI, and bank transfers."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer EMI options on purchases above $200. Zero interest for 3-6 months with select partners."
        },
        {
          q: "Are there any hidden charges?",
          a: "No hidden charges! All taxes and fees are clearly displayed before checkout. You'll always know the final price."
        }
      ]
    },
    {
      category: "Assembly & Installation",
      questions: [
        {
          q: "Do you provide assembly service?",
          a: "Yes, we offer free assembly in metro areas. For other locations, assembly charges start from $50."
        },
        {
          q: "Do you provide installation guides?",
          a: "Absolutely! Each product comes with detailed installation guides and video tutorials. Our support team is always ready to help."
        },
        {
          q: "Can I assemble it myself?",
          a: "Yes! All products come with easy-to-follow assembly instructions. Most items take 30-60 minutes to assemble."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our products and services</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-intro">
            <h2>We're Here to Help</h2>
            <p>Can't find the answer you're looking for? Contact our support team.</p>
          </div>

          {faqs.map((section, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h3 className="category-title">{section.category}</h3>
              <div className="faq-items">
                {section.questions.map((item, index) => {
                  const uniqueIndex = `${categoryIndex}-${index}`;
                  return (
                    <div key={uniqueIndex} className="faq-item">
                      <button
                        className={`faq-question ${
                          activeIndex === uniqueIndex ? "active" : ""
                        }`}
                        onClick={() => toggleFAQ(uniqueIndex)}
                      >
                        <span>{item.q}</span>
                        <span className="faq-icon">+</span>
                      </button>
                      {activeIndex === uniqueIndex && (
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="faq-contact">
            <h3>Still have questions?</h3>
            <p>Our support team is available Monday-Friday, 9 AM to 6 PM IST</p>
            <div className="contact-options">
              <a href="mailto:hello@example.com" className="contact-btn">
                Email Us
              </a>
              <a href="tel:+919876543210" className="contact-btn">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
