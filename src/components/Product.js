import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CSS/product.css';
import laptopImage from "./CSS/images/laptops.jpg";
import mobileImage from "./CSS/images/mobile.jpg";
import earbudsImage from "./CSS/images/earbuds.jpg";
import SpeakersImage from "./CSS/images/Speakers.jpg";
import ipadImage from "./CSS/images/ipad.png";
import TVImage from "./CSS/images/TV.jpeg";
import headImage from "./CSS/images/headphones.jpeg";
import camImage from "./CSS/images/Camera.jpg";

// Product data
const products = [
  { image: laptopImage, alt: "Laptops", description: "Laptops", category: "laptop" },
  { image: mobileImage, alt: "Mobiles", description: "Mobiles", category: "mobile" },
  { image: earbudsImage, alt: "Earbuds", description: "Earbuds", category: "earbuds" },
  { image: SpeakersImage, alt: "Speakers", description: "Speakers", category: "speakers" },
  { image: ipadImage, alt: "Tablets", description: "Tablets", category: "tablet" },
  { image: headImage, alt: "Headphones", description: "Headphones", category: "headphones" },
  { image: camImage, alt: "Camera", description: "Camera", category: "camera" },
  { image: TVImage, alt: "TV", description: "TV", category: "tv" }
];

const Product = ({ handleProductListRedirect }) => {
  return (
    <section id="product1" className="section-p1">
      <h2 style={{ color: 'black' }}>Featured Products</h2>
      <div className="pro-container">
        {products.map((product, index) => (
          <div key={index} className="pro">
            {/* Clicking on the product image redirects to the product-list route */}
            <Link to={`/product-list/${product.category}`} onClick={() => handleProductListRedirect(product.category)}>
              <img 
                src={product.image} 
                alt={product.alt} 
              />
            </Link>
            <div className="des">
              <h5>{product.description}</h5>
            </div>
            {/* Link for redirecting to the product-list page */}
            <Link 
              to={`/product-list/${product.category}`} 
              title="View More Details"
            >
              <i className="fa fa-search" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
