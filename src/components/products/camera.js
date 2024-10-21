import React, { useState } from 'react';
import './camera.css';

const CameraFilter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    type: '',
    resolution: '',
    lens: '',
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
    <div className="camera-filter">
      <h1>Camera Filter</h1>
      <section>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label><br />
            <select id="brand" name="brand" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="Canon">Canon</option>
              <option value="Nikon">Nikon</option>
              <option value="Sony">Sony</option>
              <option value="Fujifilm">Fujifilm</option>
              <option value="Olympus">Olympus</option>
            </select>
            <br /><br />

            <label htmlFor="type">Type:</label><br />
            <select id="type" name="type" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="DSLR">DSLR</option>
              <option value="Mirrorless">Mirrorless</option>
              <option value="Point and Shoot">Point and Shoot</option>
            </select>
            <br /><br />

            <label>Resolution:</label><br />
            <div className="inline">
              <input type="radio" id="12mp" name="resolution" value="12MP" onChange={handleChange} required />
              <label htmlFor="12mp">12MP</label>
              <input type="radio" id="16mp" name="resolution" value="16MP" onChange={handleChange} />
              <label htmlFor="16mp">16MP</label>
              <input type="radio" id="24mp" name="resolution" value="24MP" onChange={handleChange} />
              <label htmlFor="24mp">24MP</label>
            </div>
            <br /><br />

            <label htmlFor="lens">Lens Type:</label><br />
            <select id="lens" name="lens" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="Kit Lens">Kit Lens</option>
              <option value="Prime Lens">Prime Lens</option>
              <option value="Zoom Lens">Zoom Lens</option>
            </select>
            <br /><br />

            <label htmlFor="price">Price Range:</label><br />
            <select id="price" name="price" required onChange={handleChange}>
              <option value="" disabled>Select</option>
              <option value="Below $200">Below $200</option>
              <option value="$200 - $500">$200 - $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="Above $1000">Above $1000</option>
            </select>
            <br /><br />

            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CameraFilter;
