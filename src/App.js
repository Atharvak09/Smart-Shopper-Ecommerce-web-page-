import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SmBanner from './components/SmBanner';
import Banner3 from './components/Banner3';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Product from './components/Product'; 
import LoginPopup from './components/LoginPopup'; 
import './style.css';
import axios from 'axios';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({}); // Corrected state declaration for filters
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for login popup
  const navigate = useNavigate();
  const [setLoading] = useState(false);

  const fetchProducts = async (category, appliedFilters = {}) => {
  setLoading(true);
  try {
    const response = await axios.post(`/api/products/filter`, { filters: appliedFilters });
    setProductList(response.data);  // Data should be set here
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setLoading(false);
  }
  };

  const handleProductListRedirect = (category) => {
    setSelectedCategory(category);
    fetchProducts(category, filters);
    navigate(`/product-list/${category}`);
  };

  const handleFilterChange = (filterData) => {
    setFilters(filterData);
    if (selectedCategory) {
      fetchProducts(selectedCategory, filterData); // Fetch products based on updated filters
    }
  };

  return (
    <div>
      <Header onLoginClick={() => setShowLoginPopup(true)} /> {/* Use setShowLoginPopup */}

      {/* Only render Hero on the home page */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Product handleProductListRedirect={handleProductListRedirect} />
              <SmBanner />
              <Banner3 />
              <Newsletter />
              <Footer />
            </>
          } 
        />

        <Route 
          path="/product-list/:category" 
          element={
            <>
              <ProductList
                category={selectedCategory}
                productList={productList}
                onFilterChange={handleFilterChange}
              />
              <Footer /> {/* Footer remains visible */}
            </>
          }
        />
      </Routes>

      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
    </div>
  );
};

export default App;
