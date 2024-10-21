import React, { useState } from 'react';
import './laptops.css';

const LaptopFilter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    brand: '',
    processor: '',
    RAM: '',
    storage: '',
    screen: '',
    graphics: '',
    battery: '',
    os: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Filter submitted:', formData);
    // Here you can handle the submitted filter values, e.g., sending them to a parent component
    onFilterSubmit(formData); 
  };

  return (
    <div className="laptop-filter">
      <h1>Laptop Filter</h1>
      <section>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand:</label><br />
            <select id="brand" name="brand" value={formData.brand} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
              <option value="Apple">Apple</option>
              <option value="Asus">Asus</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Acer">Acer</option>
            </select>
            <br /><br />

            <label htmlFor="processor">Processor Type:</label><br />
            <select id="processor" name="processor" value={formData.processor} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Intel i3">Intel i3</option>
              <option value="Intel i5">Intel i5</option>
              <option value="Intel i7">Intel i7</option>
              <option value="Intel i9">Intel i9</option>
              <option value="AMD Ryzen 3">AMD Ryzen 3</option>
              <option value="AMD Ryzen 5">AMD Ryzen 5</option>
              <option value="AMD Ryzen 7">AMD Ryzen 7</option>
            </select>
            <br /><br />

            <label>RAM:</label><br />
            <div className="inline">
              {['4GB', '8GB', '16GB', '32GB'].map(ram => (
                <div key={ram}>
                  <input 
                    type="radio" 
                    id={ram} 
                    name="RAM" 
                    value={ram} 
                    checked={formData.RAM === ram} 
                    onChange={handleChange} 
                    required 
                  />
                  <label htmlFor={ram}>{ram}</label>
                </div>
              ))}
            </div>
            <br /><br />

            <label htmlFor="storage">Storage:</label><br />
            <select id="storage" name="storage" value={formData.storage} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="128GB SSD">128GB SSD</option>
              <option value="256GB SSD">256GB SSD</option>
              <option value="512GB SSD">512GB SSD</option>
              <option value="1TB SSD">1TB SSD</option>
              <option value="1TB HDD">1TB HDD</option>
              <option value="2TB HDD">2TB HDD</option>
            </select>
            <br /><br />

            <label htmlFor="screen">Screen Size:</label><br />
            <select id="screen" name="screen" value={formData.screen} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="13 inch">13 inch</option>
              <option value="14 inch">14 inch</option>
              <option value="15 inch">15 inch</option>
              <option value="17 inch">17 inch</option>
            </select>
            <br /><br />

            <label htmlFor="graphics">Graphics Card:</label><br />
            <select id="graphics" name="graphics" value={formData.graphics} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Integrated">Integrated</option>
              <option value="NVIDIA GTX Series">NVIDIA GTX Series</option>
              <option value="NVIDIA RTX Series">NVIDIA RTX Series</option>
              <option value="AMD Radeon Series">AMD Radeon Series</option>
            </select>
            <br /><br />

            <label htmlFor="battery">Battery Life:</label><br />
            <select id="battery" name="battery" value={formData.battery} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Up to 4 hours">Up to 4 hours</option>
              <option value="5 - 7 hours">5 - 7 hours</option>
              <option value="8 - 10 hours">8 - 10 hours</option>
              <option value="More than 10 hours">More than 10 hours</option>
            </select>
            <br /><br />

            <label htmlFor="os">Operating System:</label><br />
            <select id="os" name="os" value={formData.os} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Windows">Windows</option>
              <option value="MacOS">MacOS</option>
              <option value="Linux">Linux</option>
              <option value="Chrome OS">Chrome OS</option>
            </select>
            <br /><br />

            <label htmlFor="price">Price Range:</label><br />
            <select id="price" name="price" value={formData.price} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option value="Below $500">Below $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000 - $1500">$1000 - $1500</option>
              <option value="Above $1500">Above $1500</option>
            </select>
            <br /><br />

            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LaptopFilter;
