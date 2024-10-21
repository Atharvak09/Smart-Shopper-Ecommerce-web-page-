import React, { useState } from 'react';
import './headphones.css';

const HeadphonesFilter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    type: '',
    soundQuality: '',
    frequency: '',
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
    e.preventDefault(); // Prevent the default form submission
    onFilterSubmit(formData); // Pass the form data back to the parent
  };

  return (
    <div className="headphones-filter">
      <h1>Headphones Filter</h1>
      <section>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label><br />
            <select id="brand" name="brand" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="Sony">Sony</option>
              <option value="Bose">Bose</option>
              <option value="Beats">Beats</option>
              <option value="Sennheiser">Sennheiser</option>
              <option value="Audio-Technica">Audio-Technica</option>
            </select>
            <br /><br />

            <label htmlFor="type">Type:</label><br />
            <select id="type" name="type" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="Wired">Wired</option>
              <option value="Wireless">Wireless</option>
              <option value="Noise Cancelling">Noise Cancelling</option>
            </select>
            <br /><br />

            <label>Sound Quality:</label><br />
            <div className="inline">
              <input type="radio" id="basic" name="soundQuality" value="Basic" required onChange={handleChange} />
              <label htmlFor="basic">Basic</label>
              <input type="radio" id="good" name="soundQuality" value="Good" onChange={handleChange} />
              <label htmlFor="good">Good</label>
              <input type="radio" id="excellent" name="soundQuality" value="Excellent" onChange={handleChange} />
              <label htmlFor="excellent">Excellent</label>
            </div>
            <br /><br />

            <label htmlFor="frequency">Frequency Response:</label><br />
            <select id="frequency" name="frequency" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="20Hz - 20kHz">20Hz - 20kHz</option>
              <option value="15Hz - 28kHz">15Hz - 28kHz</option>
              <option value="10Hz - 40kHz">10Hz - 40kHz</option>
            </select>
            <br /><br />

            <label htmlFor="price">Price Range:</label><br />
            <select id="price" name="price" required onChange={handleChange}>
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
