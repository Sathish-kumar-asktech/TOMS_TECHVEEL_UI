import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper, Button, Typography } from '@mui/material';

export default function Create1() {
  const [id, setId] = useState('');
  const [product_description, setProductDescription] = useState('');  // Corrected here
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/create1', { id, product_description, primary, secondary, price })
      .then((res) => {
        navigate('/masters/Home1');
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
          <label htmlFor="product_description">Product Description</label>  // Corrected here
          <OutlinedInput
            id="product_description"
            placeholder="Enter Product Description"
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="primary">Primary</label>
          <OutlinedInput
            id="primary"
            placeholder="Enter Primary"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
        </div>
        
        <div className='mb-2'>
          <label htmlFor="secondary">Secondary</label>
          <OutlinedInput
            id="secondary"
            placeholder="Enter Secondary"
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          </div>

          <div className='mb-2'>
          <label htmlFor="price">Price</label>
          <OutlinedInput
            id="price"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
