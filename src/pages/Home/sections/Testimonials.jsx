import { Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Raj Kumar",
    text: "Best bakery in Dehradun! Their cakes are absolutely delicious and fresh.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    text: "Amazing quality and taste. The staff is very friendly and helpful.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    text: "Perfect for birthday cakes and special events. Highly recommended!",
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