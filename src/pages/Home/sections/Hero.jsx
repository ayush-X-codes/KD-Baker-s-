import { Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT → TEXT */}
          <div className="hero-content">
            <h1 className="hero-title">
              Freshly Baked <span className="text-primary">Delights</span>
            </h1>

            <p className="hero-description">
              Welcome to My Oven Story — your neighborhood bakery in Liluah, Howrah.
              Enjoy freshly baked cakes, pastries, and breads made with love,
              perfect for every occasion.
            </p>

            <div className="hero-buttons">
              <a
                href="https://wa.me/919051011676?text=Hi%20My%20Oven%20Story%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">
                  Order on WhatsApp
                </button>
              </a>

              <a href="/menu">
                <button className="btn-outline">
                  Browse Menu
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="stats">
              <div className="stat-item">
                <div className="stat-rating">
                  <Star className="star-icon" size={20} />
                  <span className="stat-value">4.4</span>
                </div>
                <p className="stat-label">380+ Reviews</p>
              </div>

              <div className="stat-item">
                <p className="stat-value">₹200–400</p>
                <p className="stat-label">Avg. Price</p>
              </div>

              <div className="stat-item">
                <p className="stat-value">10 PM</p>
                <p className="stat-label">Open Till</p>
              </div>
            </div>
          </div>

          {/* RIGHT → IMAGE */}
          <div className="hero-image">
            <img
              src="/hero-image.png"
              alt="Fresh bakery items"
              className="hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}