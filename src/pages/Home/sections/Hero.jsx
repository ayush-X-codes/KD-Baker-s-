import { Star } from "lucide-react";
import "./Hero.css";
import heroImage from "../../../../public/hero-image.png"
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-grid">

                    {/* Text Content */}
                    <div>
                        <h1 className="hero-title">
                            Freshly Baked <span className="text-primary">Happiness</span>
                        </h1>

                        <p className="hero-description">
                            Welcome to KD Baker's – Taste 'n' Treat. Experience the warmth of handcrafted cakes, pastries, breads, and delicious snacks, baked fresh every day.
                        </p>

                        <div className="hero-buttons">
                            <a
                                href="https://wa.me/918582820545?text=Hi%20KD%20Bakers%20I%20would%20like%20to%20place%20an%20order"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn-primary">
                                    Order Now on WhatsApp
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
                                    <span className="stat-value">5.0</span>
                                </div>
                                <p className="stat-label">300+ Reviews</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-value">15+</p>
                                <p className="stat-label">Years Experience</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-value">100%</p>
                                <p className="stat-label">Fresh Daily</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="hero-image">
                        <img src={heroImage} alt="Fresh bakery items" className="hero-img" />
                    </div>

                </div>
            </div>
        </section>
    );
}