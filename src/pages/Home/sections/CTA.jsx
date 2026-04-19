import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-box">
        
        <h2 className="cta-title">
          Ready to Taste Our Creations?
        </h2>

        <p className="cta-text">
          Order directly through WhatsApp for quick and convenient service
        </p>

        <a
          href="https://wa.me/918582820545?text=Hi%20KD%20Bakers%20I%20would%20like%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary">
            💬 WhatsApp Us Now
          </button>
        </a>

      </div>
    </section>
  );
}