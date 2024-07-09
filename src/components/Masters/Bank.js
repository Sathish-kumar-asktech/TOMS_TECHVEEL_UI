import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table,styled,TableBody,TableCell,TableRow,TableHead,TableContainer,Paper,tableCellClasses } from '@mui/material';
import TextField from '@mui/material/TextField';

function Bank() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8081/data")
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/delete/${id}`)
      .then(res => {
        console.log(res.data);
        fetchData(); 
      })
      .catch(err => console.log(err));
  };

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

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        
        <div>
          <h1>BANK DETAILS</h1>
         
          <div className="d-flex justify-content-between">
          <TextField
            id="outlined-basic" label="Search" variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
          />
           <Button variant="contained" color="success" onClick={() => navigate('/masters/Create')} sx={{ width: '70px', height: '58px' }}>ADD</Button>
          </div>
    <div>               
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">ACCOUNT NO</StyledTableCell>
            <StyledTableCell align="right">ACCOUNT NAME</StyledTableCell>
            <StyledTableCell align="right">IFSC CODE</StyledTableCell>
            <StyledTableCell align="right">PHONE NO</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
            <StyledTableCell align="right">BRANCH</StyledTableCell>
            <StyledTableCell align="right">CITY</StyledTableCell>
            <StyledTableCell align="right">ADDRESS</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                  {data.filter((product) => {
                    const searchData = search.toLowerCase();
                    return (
                      searchData === "" ||
                      (product.account_no && String(product.account_no).toLowerCase().includes(searchData)) ||
                      (product.account_name && product.account_name.toLowerCase().includes(searchData)) ||
                      (product.ifsc_code && String(product.ifsc_code).toLowerCase().includes(searchData)) ||
                      (product.phone && String(product.phone).toLowerCase().includes(searchData)) ||
                      (product.email && product.email.toLowerCase().includes(searchData)) ||
                      (product.branch && product.branch.toLowerCase().includes(searchData)) ||
                      (product.city && product.city.toLowerCase().includes(searchData)) ||
                      (product.address && product.address.toLowerCase().includes(searchData))
                    );
                  }).map((product, index) => (
                    <StyledTableRow key={index}>
                       <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                       <StyledTableCell align="right">{product.account_no}</StyledTableCell>
                       <StyledTableCell align="right">{product.account_name}</StyledTableCell>
                       <StyledTableCell align="right">{product.ifsc_code}</StyledTableCell>
                       <StyledTableCell align="right">{product.phone}</StyledTableCell>
                       <StyledTableCell align="right">{product.email}</StyledTableCell>
                       <StyledTableCell align="right">{product.branch}</StyledTableCell>
                       <StyledTableCell align="right">{product.city}</StyledTableCell>
                       <StyledTableCell align="right">{product.address}</StyledTableCell>
                       <StyledTableCell align="right">
                       <Button variant="contained" color="secondary" onClick={() => navigate(`/masters/Update/${product.id}`)}>Update</Button>
                        <Button variant="contained" color="error" onClick={() => handleDelete(product.id)}>Delete</Button>
                        </StyledTableCell>
                    </StyledTableRow>
                  ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
            </div>
          
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} />
      </Box>
    </>
  );
}

export default Bank;
