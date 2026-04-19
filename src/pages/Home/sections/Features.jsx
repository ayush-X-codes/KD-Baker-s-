import "./Features.css";

export default function Features() {
  const features = [
    {
      icon: "🥖",
      title: "Fresh Daily",
      description: "All items baked fresh every morning with premium ingredients",
    },
    {
      icon: "🚗",
      title: "Drive-Through Available",
      description: "Convenient drive-through ordering for busy customers",
    },
    {
      icon: "👩‍🍳",
      title: "Women-Owned",
      description: "Proudly owned and operated by women entrepreneurs",
    },
    {
      icon: "📱",
      title: "No-Contact Delivery",
      description: "Safe, hygienic delivery options available",
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