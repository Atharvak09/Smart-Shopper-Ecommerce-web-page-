import React, { useState } from 'react';
import './tablets.css';

const TabletsFilter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    size: '',
    ram: '',
    os: '',
    storage: '',
    battery: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onFilterSubmit(formData); // Pass the form data back to the parent
  };

  return (
    <div className="tablets-filter">
      <h1>Tablets Filter</h1>
      <section>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label><br />
            <select id="brand" name="brand" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Amazon">Amazon</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Asus">Asus</option>
            </select>
            <br /><br />

            <label htmlFor="size">Screen Size:</label><br />
            <select id="size" name="size" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="7 inch">7 inch</option>
              <option value="8 inch">8 inch</option>
              <option value="9 inch">9 inch</option>
              <option value="10 inch">10 inch</option>
              <option value="12 inch">12 inch</option>
            </select>
            <br /><br />

            <label htmlFor="ram">RAM:</label><br />
            <select id="ram" name="ram" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="2GB">2GB</option>
              <option value="4GB">4GB</option>
              <option value="8GB">8GB</option>
              <option value="16GB">16GB</option>
            </select>
            <br /><br />

            <label>Operating System:</label><br />
            <div className="inline" onChange={handleChange}>
              <input type="radio" id="ios" name="os" value="iOS" required />
              <label htmlFor="ios">iOS</label>
              <input type="radio" id="android" name="os" value="Android" />
              <label htmlFor="android">Android</label>
              <input type="radio" id="windows" name="os" value="Windows" />
              <label htmlFor="windows">Windows</label>
            </div>
            <br /><br />

            <label htmlFor="storage">Storage:</label><br />
            <select id="storage" name="storage" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
            </select>
            <br /><br />

            <label htmlFor="battery">Battery Capacity:</label><br />
            <select id="battery" name="battery" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Below 3000mAh">Below 3000mAh</option>
              <option value="3000mAh - 5000mAh">3000mAh - 5000mAh</option>
              <option value="Above 5000mAh">Above 5000mAh</option>
            </select>
            <br /><br />

            <label htmlFor="price">Price Range:</label><br />
            <select id="price" name="price" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Below $200">Below $200</option>
              <option value="$200 - $400">$200 - $400</option>
              <option value="$400 - $600">$400 - $600</option>
              <option value="Above $600">Above $600</option>
            </select>
            <br /><br />

            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TabletsFilter;
