

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch With Us</h1>
          <p>We're here to help and answer any question you might have</p>
        </div>
      </section>

      <section className="contact">
        <div className="contact-container">

          <div className="contact-info">
            <h2>Contact Information</h2>

            <p>
              Have questions about our furniture? Need design advice? Or just want to say hello? 
              We'd love to hear from you. Reach out using any of the methods below.
            </p>

            <div className="info-box">
              <h4>📍 Address</h4>
              <p>New Delhi, India</p>
            </div>

            <div className="info-box">
              <h4>📧 Email</h4>
              <p>hello@example.com</p>
            </div>

            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 9876543210</p>
            </div>
          </div>

          <form className="contact-form">
            <h2>Send us a Message</h2>

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Subject" required />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>
      </section>
    </>
  );
}