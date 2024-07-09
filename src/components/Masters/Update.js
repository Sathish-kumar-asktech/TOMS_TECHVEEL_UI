import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [formData, setFormData] = useState({
    account_no: '',
    account_name: '',
    ifsc_code: '',
    phone: '',
    email: '',
    branch: '',
    city: '',
    address: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch existing data
    axios.get(`http://localhost:8081/data/${id}`)
      .then(res => {
        setFormData(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8081/update/${id}`, formData)
      .then(res => {
        console.log('Response:', res.data); // Log response data
        navigate('/');
      }).catch(err => {
        console.error('Error:', err); // Log error
      });
  };

  return (
    <div className='d-flex vh-80 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Update User</h2>
          <div className="mb-3">
            <label htmlFor="account_no" className="form-label">Account No</label>
            <input type="text" id="account_no" placeholder="Enter Account No" className="form-control" value={formData.account_no} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="account_name" className="form-label">Account Name</label>
            <input type="text" id="account_name" placeholder="Enter Name" className="form-control" value={formData.account_name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" id="phone" placeholder="Enter Phone" className="form-control" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="ifsc_code" className="form-label">IFSC Code</label>
            <input type="text" id="ifsc_code" placeholder="Enter IFSC Code" className="form-control" value={formData.ifsc_code} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" id="email" placeholder="Enter Email" className="form-control" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="branch" className="form-label">Branch</label>
            <input type="text" id="branch" placeholder="Enter Branch" className="form-control" value={formData.branch} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" placeholder="Enter City" className="form-control" value={formData.city} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" id="address" placeholder="Enter Address" className="form-control" value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
