import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <a href="/" className="logo">
          <span className="logo-icon">🥖</span>
          <span className="logo-text">KD Baker's</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/918582820545?text=Hi%20KD%20Bakers%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Order on WhatsApp</button>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/918582820545?text=Hi%20KD%20Bakers%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn-primary full"
              onClick={() => setIsOpen(false)}
            >
              Order on WhatsApp
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}