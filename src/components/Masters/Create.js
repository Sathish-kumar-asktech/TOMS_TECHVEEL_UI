import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper, Button, Typography } from '@mui/material';

export default function Create() {
  const [id, setId] = useState('');
  const [company_name, setCompany_name] = useState('');
  const [Address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/create', { id, company_name, Address, phone })
      .then((res) => {
        navigate('/masters/Home');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Paper sx={{ width: '100%', p: 3, justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" gutterBottom>Add user</Typography>
        
        <div className='mb-2'>
          <label htmlFor="id">ID</label>
          <OutlinedInput
            id="id"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
        </div>
        
        <div className='mb-2'>
          <label htmlFor="company_name">Company Name</label>
          <OutlinedInput
            id="company_name"
            placeholder="Enter Company Name"
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
        
        {error && <div style={{ color: 'red' }}>{error}</div>}
        
      </form>
    </Paper>
  );
}
