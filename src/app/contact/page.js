import Link from 'next/link';
import { SITE_INFO } from '../../lib/data';

export const metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Contact Us
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <span className="subtitle">Get In Touch</span>
                <h2>We'd Love to Hear From You</h2>
                <p style={{ margin: '1rem 0 0' }}>
                  Have questions about our initiatives, want to volunteer, or need support? 
                  Reach out to us using the contact details below or fill out the form.
                </p>
              </div>

              <div className="contact-info-card">
                <div className="icon">📍</div>
                <div>
                  <h4>Our Location</h4>
                  <p>{SITE_INFO.address}</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon">📞</div>
                <div>
                  <h4>Phone Number</h4>
                  <p><a href={`tel:${SITE_INFO.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'inherit' }}>{SITE_INFO.phone}</a></p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon">✉️</div>
                <div>
                  <h4>Email Address</h4>
                  <p><a href={`mailto:${SITE_INFO.email}`} style={{ color: 'inherit' }}>{SITE_INFO.email}</a></p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="icon">💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p><a href={SITE_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Message us on WhatsApp</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form 
                action="https://formspree.io/f/mqkrpeoo" 
                method="POST" 
                className="contact-form"
              >
                <h3 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="How can we help you?" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div style={{ marginTop: '4rem', borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0039237258384!2d76.99446951540954!3d20.70775838617309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72f0b9f71bfb5%3A0xcabf0b07e5b61a49!2sZubaida%20Hospital!5e0!3m2!1sen!2sin!4v1624467389146!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
