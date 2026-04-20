import { ShoppingCart } from "lucide-react";
import "./Items.css";

const featuredItems = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: "₹400",
    image: "/cake-chocolate.jpg",
    description: "Rich chocolate cake with smooth truffle frosting",
    bestseller: true,
  },
  {
    id: 2,
    name: "Fresh Cream Pastry",
    price: "₹120",
    image: "/pastry-croissant.jpg",
    description: "Light and fluffy pastry with fresh cream layers",
    bestseller: true,
  },
  {
    id: 3,
    name: "Butter Bread Loaf",
    price: "₹80",
    image: "/bread-artisan.jpg",
    description: "Soft and fresh bread loaf baked daily",
    bestseller: false,
  },
  {
    id: 4,
    name: "Birthday Special Cake",
    price: "₹500",
    image: "/cake-chocolate.jpg",
    description: "Perfect custom cake for birthdays and celebrations",
    bestseller: false,
  },
];

export default function Items() {
  return (
    <section className="featured">
      <div className="featured-container">

        <h2 className="featured-title">
          Popular Items at My Oven Story
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
                    href="https://wa.me/919051011676?text=Hi%20I%20want%20to%20order"
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