import { Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ankit Das",
    text: "One of the best bakeries in Liluah. The cakes are always fresh and taste amazing.",
    rating: 5,
  },
  {
    name: "Sohini Roy",
    text: "Loved the pastries and quick service. Perfect place for birthday cakes and small celebrations.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    text: "Good quality at reasonable prices. Their baked items are fresh and worth trying.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <h2 className="testimonials-title">
          What Our Customers Say
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">

              {/* Stars */}
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="star-icon" />
                ))}
              </div>

              {/* Text */}
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="testimonial-name">
                {testimonial.name}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}