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
  pattern="[A-Za-z\s]+"
/><br />
<input
  type="email"
  className="form-control"
  placeholder="Email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
/><br />
<input
  type="tel"
  className="form-control"
  placeholder="Phone Number"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  required
  pattern="[0-9]{8}"
/><br />

<select
  className="form-control"
  name="selectedOption"
  value={formData.selectedOption}
  onChange={handleChange}
  required
>
  <option value="" disabled hidden>
    Select an option
  </option>
  <option value="Project Team">Project Team</option>
  <option value="Community Team">Community Team</option>
  <option value="Production Team">Production Team</option>
  <option value="Logistics Team">Logistics Team</option>
  <option value="Design Team">Design Team</option>

</select>
            <br />

            <textarea
  className="form-control"
  placeholder="Why This Department"
  name="departmentReason"
  value={formData.departmentReason}
  onChange={handleChange}
  required
></textarea>
<br />
            
            
              
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




