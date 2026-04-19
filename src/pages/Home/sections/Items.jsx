import { ShoppingCart } from "lucide-react";
import "./Items.css";

const featuredItems = [
  {
    id: 1,
    name: "Premium Chocolate Cake",
    price: "₹450",
    image: "/cake-chocolate.jpg",
    description: "Rich, moist chocolate cake with ganache frosting",
    bestseller: true,
  },
  {
    id: 2,
    name: "Buttery Croissants",
    price: "₹150",
    image: "/pastry-croissant.jpg",
    description: "Flaky, golden croissants baked fresh daily",
    bestseller: true,
  },
  {
    id: 3,
    name: "Artisan Sourdough",
    price: "₹200",
    image: "/bread-artisan.jpg",
    description: "Traditional sourdough with perfect crust",
    bestseller: false,
  },
  {
    id: 4,
    name: "Vanilla Pastry",
    price: "₹100",
    image: "/pastry-croissant.jpg",
    description: "Soft vanilla-filled pastries",
    bestseller: false,
  },
];

export default function Items() {
  return (
    <section className="featured">
      <div className="featured-container">

        <h2 className="featured-title">
          Our Best Sellers
        </h2>

        <div className="featured-grid">
          {featuredItems.map((item) => (
            <div key={item.id} className="card">

              {/* Image */}
              <div className="card-image">
                <img src={item.image} alt={item.name} />

                {item.bestseller && (
                  <div className="badge">
                    Best Seller
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>

                <p className="card-text">
                  {item.description}
                </p>

                <div className="card-footer">
                  <span className="price">{item.price}</span>

                  <a
                    href="https://www.swiggy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cart-btn"
                  >
                    <ShoppingCart size={18} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}