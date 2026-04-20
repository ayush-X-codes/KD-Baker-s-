import "./About.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">

        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">About My Oven Story</h2>
          <p className="about-subtitle">
            Freshly baked delights crafted with care in Liluah, Howrah
          </p>
        </div>

        {/* Content */}
        <div className="about-grid">

          {/* Text */}
          <div>
            <h3 className="about-heading">Our Story</h3>

            <p className="about-text">
              My Oven Story is a neighborhood bakery in Liluah, Howrah,
              known for its fresh cakes, pastries, and baked treats.
            </p>

            <p className="about-text">
              Every item is prepared with attention to quality and taste,
              making it a go-to place for everyday cravings and special occasions.
            </p>

            <p className="about-text">
              With hundreds of happy customers and strong local reviews,
              we continue to serve delicious baked goods every day.
            </p>
          </div>

          {/* Image */}
          <div className="about-image">
            <img
              src="/about-image.png"
              alt="Bakery preparing fresh cakes"
              className="about-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}