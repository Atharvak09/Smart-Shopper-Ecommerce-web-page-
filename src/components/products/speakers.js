import React, { useState } from 'react';
import './headphones.css';

const HeadphonesFilter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    type: '',
    soundQuality: '',
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
    <div className="headphones-filter">
      <h1>Headphones Filter</h1>
      <section>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label><br />
            <select id="brand" name="brand" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Sony">Sony</option>
              <option value="Bose">Bose</option>
              <option value="Beats">Beats</option>
              <option value="Sennheiser">Sennheiser</option>
              <option value="Audio-Technica">Audio-Technica</option>
            </select>
            <br /><br />

            <label htmlFor="type">Type:</label><br />
            <select id="type" name="type" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Wired">Wired</option>
              <option value="Wireless">Wireless</option>
              <option value="Noise Cancelling">Noise Cancelling</option>
            </select>
            <br /><br />

            <label htmlFor="soundQuality">Sound Quality:</label><br />
            <div className="inline" onChange={handleChange}>
              <input type="radio" id="basic" name="soundQuality" value="Basic" required />
              <label htmlFor="basic">Basic</label>
              <input type="radio" id="good" name="soundQuality" value="Good" />
              <label htmlFor="good">Good</label>
              <input type="radio" id="excellent" name="soundQuality" value="Excellent" />
              <label htmlFor="excellent">Excellent</label>
            </div>
            <br /><br />

            <label htmlFor="battery">Battery Life:</label><br />
            <select id="battery" name="battery" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Below 10 hours">Below 10 hours</option>
              <option value="10 - 20 hours">10 - 20 hours</option>
              <option value="Above 20 hours">Above 20 hours</option>
            </select>
            <br /><br />

            <label htmlFor="price">Price Range:</label><br />
            <select id="price" name="price" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Below $50">Below $50</option>
              <option value="$50 - $100">$50 - $100</option>
              <option value="$100 - $200">$100 - $200</option>
              <option value="Above $200">Above $200</option>
            </select>
            <br /><br />

            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HeadphonesFilter;
