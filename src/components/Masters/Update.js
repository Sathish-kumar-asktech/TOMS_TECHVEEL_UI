import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper }from '@mui/material';
import { Button, Typography } from '@mui/material';

export default function Update() {
  const [id, setId] = useState('');
  const [company_name, setCompany_name] = useState('');
  const [Address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { id, company_name, Address ,phone };
    console.log('Submitting form data:', formData); // Log form data
    axios.put(`http://localhost:8081/update/${id}`, formData)
      .then(res => {
        console.log('Response:', res.data); // Log response data
        navigate('/masters/Home');
      }).catch(err => {
        console.error('Error:', err); // Log error
      });
  };
  return (
    <Paper sx={{ width: '100%', p: 3, justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default' }}>
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" gutterBottom>Add user</Typography>
      <div className='mb-2'>
              <label htmlFor="id">id</label>
              <OutlinedInput
                id="id"
                placeholder="Enter id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </div>
            
            <div className='mb-2'>
              <label htmlFor="company_name">Company_name</label>
              <OutlinedInput
                id="company_name"
                placeholder="Enter Company_name"
                value={company_name}
                onChange={(e) => setCompany_name(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor="Address">Address</label>
              <OutlinedInput
                id="Address"
                placeholder="Enter Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </div>
            
            <div className='mb-2'>
              <label htmlFor="phone">Phone</label>
              <OutlinedInput
                id="phone"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </div>

      
      <Button variant="contained" color="success" type="submit">Submit</Button>
    </form>
  </Paper>
    
    
  )
}
