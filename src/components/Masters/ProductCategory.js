import * as React from 'react'; //productcategory.js
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useEffect, useState } from "react";
import { TextField, MenuItem, Box } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Pricing() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getProductData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/products");
      const data = response.data;
      setProducts(data);

      const uniqueCategories = [...new Set(data.map(product => product.type))];
      setCategories(uniqueCategories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <TableContainer component={Paper} style={{ padding: '20px' }}>
        <h2 className="mb-4">Products Category</h2>
      <Box display="flex" justifyContent="space-between" mb={2}>
      
        <TextField
          type="text"
          label="Search by Product Name or HSN Code"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: '20px', flex: 1, marginRight: '10px' }}
        />
        <TextField
          select
          label="Select Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginBottom: '20px', flex: 1, marginLeft: '10px' }}
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">HSN Code</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            .filter((item) => {
              if (selectedCategory && item.type !== selectedCategory) {
                return false;
              }
              if (search === "") {
                return true;
              } else if (
                item.product_name.toLowerCase().includes(search.toLowerCase()) ||
                String(item.hsn_code).toLowerCase().includes(search.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.product_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.hsn_code}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.amount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
