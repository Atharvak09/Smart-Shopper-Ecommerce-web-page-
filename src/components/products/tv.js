import React, { useState } from 'react';
import './tv.css';

const TVFilter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    size: '',
    resolution: '',
    smart: '',
    hdmi: '',
    refreshRate: '',
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
    <div className="tv-filter">
      <h1>TV Filter</h1>
      <section>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label><br />
            <select id="brand" name="brand" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Samsung">Samsung</option>
              <option value="LG">LG</option>
              <option value="Sony">Sony</option>
              <option value="Vizio">Vizio</option>
              <option value="TCL">TCL</option>
            </select>
            <br /><br />

            <label htmlFor="size">Screen Size:</label><br />
            <select id="size" name="size" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="32 inch">32 inch</option>
              <option value="40 inch">40 inch</option>
              <option value="49 inch">49 inch</option>
              <option value="55 inch">55 inch</option>
              <option value="65 inch">65 inch</option>
              <option value="75 inch">75 inch</option>
            </select>
            <br /><br />

            <label>Resolution:</label><br />
            <div className="inline" onChange={handleChange}>
              <input type="radio" id="hd" name="resolution" value="HD" required />
              <label htmlFor="hd">HD</label>
              <input type="radio" id="fullhd" name="resolution" value="Full HD" />
              <label htmlFor="fullhd">Full HD</label>
              <input type="radio" id="4k" name="resolution" value="4K" />
              <label htmlFor="4k">4K</label>
            </div>
            <br /><br />

            <label htmlFor="smart">Smart TV:</label><br />
            <select id="smart" name="smart" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <br /><br />

            <label htmlFor="hdmi">HDMI Ports:</label><br />
            <select id="hdmi" name="hdmi" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4 or more">4 or more</option>
            </select>
            <br /><br />

            <label htmlFor="refreshRate">Refresh Rate:</label><br />
            <select id="refreshRate" name="refreshRate" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="60Hz">60Hz</option>
              <option value="120Hz">120Hz</option>
              <option value="240Hz">240Hz</option>
            </select>
            <br /><br />

            <label htmlFor="price">Price Range:</label><br />
            <select id="price" name="price" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Below $300">Below $300</option>
              <option value="$300 - $600">$300 - $600</option>
              <option value="$600 - $1000">$600 - $1000</option>
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

export default TVFilter;
