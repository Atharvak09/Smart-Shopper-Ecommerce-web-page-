import React, { useState } from 'react';
import './earbuds.css';

const EarbudsFilter = ({ onFilterSubmit }) => {
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]); // Default price range for earbuds

  const handleApplyFilter = () => {
    const filterData = {
      brand,
      color,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    onFilterSubmit(filterData); // Pass the filter data to parent component
  };

  return (
    <div className="filter-form">
      <h3>Filter Earbuds</h3>
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Enter brand name"
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color"
        />
      </label>
      <label>
        Price Range:
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          placeholder="Min price"
        />
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          placeholder="Max price"
        />
      </label>
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default EarbudsFilter;
