import "./Features.css";

export default function Features() {
  const features = [
    {
      icon: "🥖",
      title: "Freshly Baked Daily",
      description: "Enjoy cakes, pastries, and breads baked fresh every day with quality ingredients.",
    },
    {
      icon: "📍",
      title: "Convenient Location",
      description: "Located in Liluah, Howrah — easy to visit for takeaway and quick orders.",
    },
    {
      icon: "📦",
      title: "Takeaway & Delivery",
      description: "Quick takeaway service with safe no-contact delivery options available.",
    },
    {
      icon: "🎂",
      title: "Custom Cakes",
      description: "Perfect cakes for birthdays, celebrations, and special occasions.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-heading">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}