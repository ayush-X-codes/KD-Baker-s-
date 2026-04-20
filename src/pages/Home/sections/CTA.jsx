import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-box">
        
        <h2 className="cta-title">
          Craving Something Fresh & Delicious?
        </h2>

        <p className="cta-text">
          Order directly from My Oven Story on WhatsApp for quick service in Liluah, Howrah
        </p>

        <a
          href="https://wa.me/919051011676?text=Hi%20My%20Oven%20Story%20I%20would%20like%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary">
            💬 Order on WhatsApp
          </button>
        </a>

      </div>
    </section>
  );
}