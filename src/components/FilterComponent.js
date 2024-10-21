import React from 'react';

const FilterComponent = ({ onFilterChange }) => {
  const handleApplyFilter = () => {
    const filters = {
      minPrice: 100, // Get from user input
      maxPrice: 500, // Get from user input
      brand: 'BrandX' // Get from user input
    };
    onFilterChange(filters); // Notify parent component with the filters
  };

  return (
    <div>
      {/* Your filter inputs */}
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default FilterComponent;
