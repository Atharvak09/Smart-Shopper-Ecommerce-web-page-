import React, { useEffect, useState } from 'react';
import LaptopFilter from './products/laptop';
import MobileFilter from './products/mobile';
import EarbudsFilter from './products/earbuds';
import SpeakersFilter from './products/speakers';
import TabletFilter from './products/tablet';
import HeadphonesFilter from './products/headphones';
import CameraFilter from './products/camera';
import TVFilter from './products/tv';
import { useParams } from 'react-router-dom';
import './CSS/productlist.css';
import axios from 'axios'; // Import axios for making HTTP requests

const ProductList = () => {
  const { category } = useParams(); // Get category from URL params
  const [productList, setProductList] = useState([]); // Initialize state for product list
  const [filters, setFilters] = useState({}); // State for filters
  const [loading, setLoading] = useState(true); // State for loading status

  // Function to fetch products based on category and filters
  const fetchProducts = async (appliedFilters = {}) => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.post(`/api/products/filter`, { filters: appliedFilters });
      setProductList(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Automatically fetch the products when the category changes or filters change
  useEffect(() => {
    fetchProducts(filters); // Fetch products based on category and filters
  }, [category, filters]);

  // Handle filter submit
  const handleFilterSubmit = (filterData) => {
    setFilters(filterData); // Update filters state
  };

  // Mapping of categories to respective filter components
  const renderFilterComponent = () => {
    switch (category) {
      case 'laptop':
        return <LaptopFilter onFilterSubmit={handleFilterSubmit} />;
      case 'mobile':
        return <MobileFilter onFilterSubmit={handleFilterSubmit} />;
      case 'earbuds':
        return <EarbudsFilter onFilterSubmit={handleFilterSubmit} />;
      case 'speakers':
        return <SpeakersFilter onFilterSubmit={handleFilterSubmit} />;
      case 'tablet':
        return <TabletFilter onFilterSubmit={handleFilterSubmit} />;
      case 'headphones':
        return <HeadphonesFilter onFilterSubmit={handleFilterSubmit} />;
      case 'camera':
        return <CameraFilter onFilterSubmit={handleFilterSubmit} />;
      case 'tv':
        return <TVFilter onFilterSubmit={handleFilterSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="product-list-page">
      <div className="filter-section">
        {/* Render the respective filter component dynamically */}
        {renderFilterComponent()}
      </div>

      <div className="product-list">
        <h2>{category.toUpperCase()} Products</h2>
        {loading ? (
          <p>Loading products...</p> // Loading state message
        ) : (
          <ul>
            {productList.length > 0 ? (
              productList.map((product, index) => (
                <li key={index}>
                   {product.image && <img src={product.image} alt={product.name} />} {/* Display image if available */}
                  <p>{product.name}</p>
                  <p className="price">Price: ${product.price}</p>
                  <p>Brand: {product.brand}</p>
                  <p>Specifications: {JSON.stringify(product.specifications)}</p> {/* Display specifications */}
                </li>
              ))
            ) : (
              <p>No products found.</p> // Display a message if no products are found
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;
