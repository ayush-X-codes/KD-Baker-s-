import { MapPin, Phone, Clock } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">
              <span className="logo-icon">🥖</span> KD Baker's
            </h3>
            <p className="footer-text">
              Taste 'n' Treat - Freshly baked happiness in every bite
            </p>
            <p className="footer-subtext">Women-owned bakery & cake shop</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={18} className="icon-top" />
                <span>
                  51/2/I/A, Rabindra Sarani, Shree Mani Bagan Ln, Liluah,
                  Howrah, West Bengal 711204
                </span>
              </div>

              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+918582820545" className="link">
                  +91 85828 20545
                </a>
              </div>

              <div className="contact-item">
                <Clock size={18} />
                <span>Open daily till 10 PM</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-heading">Connect With Us</h4>

            <div className="footer-social">
              <a
                href="https://wa.me/918582820545"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
            </div>

            <div className="footer-note">
              <p>🎯 Drive-through & No-contact delivery available</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 KD Baker's – Taste 'n' Treat. All rights reserved. 🍰</p>
        </div>
      </div>
    </footer>
  );
}
