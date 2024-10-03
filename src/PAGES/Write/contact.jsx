const Contact = () => {
    return (
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            Wed love to hear from you. Fill out the form or reach us via social media.
          </p>
  
          <div className="contact-details">
            <h2>Contact Information</h2>
            <p>Email: jaydarji033@gamil.com</p>
            <p>Phone: +91 9510273667</p>
            <p>Address: 1234,RED & WHITE , AHMEDABAD, GUJRAT</p>
          </div>
  
          <div className="social-media">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
  
        <div className="contact-form">
          <h2 className="form-title">Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
  
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;