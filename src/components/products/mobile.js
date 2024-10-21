import React, { useState } from 'react';

const MobileFilter = ({ onFilterSubmit }) => {
  const [brand, setBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range

  const handleApplyFilter = () => {
    const filterData = {
      brand,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    onFilterSubmit(filterData); // Pass the filter data to parent component
  };

  return (
    <div className="filter-form">
      <h3>Filter Mobiles</h3>
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

export default MobileFilter;
