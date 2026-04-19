import "./About.css";
import aboutImage from "../../../../public/about-image.png"
export default function AboutSection() {
    return (
        <section className="about">
            <div className="about-container">

                {/* Header */}
                <div className="about-header">
                    <h2 className="about-title">About KD Baker's</h2>
                    <p className="about-subtitle">
                        Taste 'n' Treat - Freshly baked happiness in every bite
                    </p>
                </div>

                {/* Content */}
                <div className="about-grid">

                    {/* Text */}
                    <div>
                        <h3 className="about-heading">Our Story</h3>

                        <p className="about-text">
                            Founded with passion and dedication, KD Baker's – Taste 'n' Treat is more than just a bakery. It's a celebration of tradition, quality, and the joy of freshly baked goods.
                        </p>

                        <p className="about-text">
                            As a women-owned business, we pride ourselves on crafting exceptional baked goods using the finest ingredients. Every loaf, every cake, and every pastry is made with care and love.
                        </p>

                        <p className="about-text">
                            With over 15 years of experience, we have earned the trust of thousands of happy customers.
                        </p>
                    </div>

                    {/* Visual */}
                    <div className="about-image">
                        <img src={aboutImage} alt="Baker crafting cake" className="about-img" />
                    </div>

                </div>
            </div>
        </section>
    );
}