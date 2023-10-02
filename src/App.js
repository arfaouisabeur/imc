import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.jpg';

import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    departmentReason: '',
    selectedOption: '',
  });

  const [message, setMessage] = useState(''); // State variable for the message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://mongo-saber.francecentral.cloudapp.azure.com/", formData);
      // Update the message when the request is successful
      setMessage('Request sent successfully!');
    } catch (error) {
      console.error(error);
      // Update the message when there's an error
      setMessage('Error: Request failed.');
    }
  };

  return (
    <div className='cont'>
      <div className="main-text">
        <h1><span>J</span>oin Us</h1>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-md-6">
          <br /><br />
          <div className="card">
            <img src={logo} className="loo" crossOrigin="anonymous" />
          </div>
        </div>
        <div className="col-md-6 py-3 py-md-0">
          <br /><br />
          {message ? ( // Conditionally render the message
            <div className="message">{message}</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            /><br />

            <select
              className="form-control"
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <br />

            <input
              type="text"
              className="form-control"
              placeholder="Why This Department"
              name="departmentReason"
              value={formData.departmentReason}
              onChange={handleChange}
              required
            /><br />
            
            
              
              <input
                type="submit"
                value="Join Us"
                className="submit"
                required
              />
            </form>
          )}
        </div>
      </div>
      {/* JavaScript */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;



/*import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.jpg';

import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    departmentReason: '',
    selectedOption: '', // Add a property for the <select> value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://mongo-saber.francecentral.cloudapp.azure.com/", formData);
      // Add code to handle success if needed
    } catch (error) {
      console.error(error);
      // Add code to handle errors if needed
    }
  };

  return (
    <div className='cont'>
      <div className="main-text">
        <h1><span>J</span>oin Us</h1>
      </div>
      <br /><br />
      <div className="row">
        <div className="col-md-6">
          <br /><br />
          <div className="card">
            <img src={logo} className="loo" crossOrigin="anonymous" />

          </div>
        </div>
        <div className="col-md-6 py-3 py-md-0">
          <br /><br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            /><br />

            <select
              className="form-control"
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <br />

            <input
              type="text"
              className="form-control"
              placeholder="Why This Department"
              name="departmentReason"
              value={formData.departmentReason}
              onChange={handleChange}
              required
            /><br />
            
            
            
            <input
              type="submit"
              value="Join Us"
              className="submit"
              required
            />
          </form>
        </div>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;*/
