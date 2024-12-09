import React from "react";
import Home1 from "./Home1";
import Box from '@mui/material/Box';

const UOM = () => {
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Home1 />
    </Box>
  </Box>
  </div>
  );
};

export default UOM;
