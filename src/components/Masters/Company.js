import React from 'react';
import Home from './Home';
import Box from '@mui/material/Box';

const Company = () => {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Home />
      </Box>
    </Box>
    </div>
  );
};

export default Company;
