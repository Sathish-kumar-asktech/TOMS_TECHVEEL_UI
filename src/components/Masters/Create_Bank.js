import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_Bank() {
  const [id, setId] =useState('')
  const [account_no , setNo] = useState('');
  const [account_name, setName] = useState('');
  const [ifsc_code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { id,account_no ,account_name,ifsc_code, phone, email,branch, city, address };
    console.log('Submitting form data:', formData);  // Log form data
    axios.post('http://localhost:8081/add', formData)
      .then(res => {
        console.log('Response:', res.data);  // Log response data
        navigate('/');
      }).catch(err => {
        console.error('Error:', err);  // Log error
      });
  };
  
  return (
    <div className='d-flex vh-80 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-success rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">ADD TABLE</h2>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Id</label>
            <input type="text" id="id" placeholder="Enter Id" className="form-control" onChange={e => setId(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="account_no" className="form-label">Account No</label>
            <input type="text" id="account_no" placeholder="Enter No" className="form-control" onChange={e => setNo(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="account_name" className="form-label">Name</label>
            <input type="text" id="account_name" placeholder="Enter Name" className="form-control" onChange={e => setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="ifsc_code" className="form-label">Code</label>
            <input type="text" id="ifsc_code" placeholder="Enter Code" className="form-control" value={ifsc_code} onChange={e => setCode(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" id="phone" placeholder="Enter Phone" className="form-control" onChange={e => setPhone(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" id="email" placeholder="Enter Email" className="form-control" onChange={e => setEmail(e.target.value)} required/>
          </div> <div className="mb-3">
            <label htmlFor="branch" className="form-label">Branch</label>
            <input type="text" id="phone" placeholder="Enter Branch" className="form-control" value={branch} onChange={e => setBranch(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" placeholder="Enter City" className="form-control" onChange={e => setCity(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" id="address" placeholder="Enter Address" className="form-control" onChange={e => setAddress(e.target.value)} required/>
          </div>
          <button variant="contained" color="success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create_Bank;

