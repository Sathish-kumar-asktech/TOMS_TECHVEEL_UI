import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper }from '@mui/material';
import { Button, Typography } from '@mui/material';

export default function Update1() {
  const [id, setId] = useState('');
  const [product_description, setProductDescription] = useState('');
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { id, product_description, primary, secondary, price };
    console.log('Submitting form data:', formData); // Log form data
    axios.put(`http://localhost:8081/update1/${id}`, formData)
      .then(res => {
        console.log('Response:', res.data); // Log response data
        navigate('/masters/Home1');
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
              <label htmlFor="pr">product Decription</label>
              <OutlinedInput
                id="product_decription"
                placeholder="Enter product Decription"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor="primary">primary</label>
              <OutlinedInput
                id="primary"
                placeholder="Enter primary"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            </div>
            
            <div className='mb-2'>
              <label htmlFor="secondary">secondary</label>
              <OutlinedInput
                id="secondary"
                placeholder="Enter secondary"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              
            </div>
            <div className='mb-2'>
              <label htmlFor="price">price</label>
              <OutlinedInput
                id="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              
            </div>

      
      <Button variant="contained" color="success" type="submit">Submit</Button>
    </form>
  </Paper>
    
    
  )
}
