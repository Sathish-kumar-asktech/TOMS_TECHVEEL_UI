import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';



export default function Home() {
    const [data, setData] = useState([]);
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8082/users")
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    };
    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                console.log(res.data);
                fetchData();
            })
            .catch(err => console.log(err));
          
    };

    

    const handleChangePage = (event,newPage) => {
       setPage(newPage);
     };

    const handleChangeRowsPerPage = (event) => {
       setRowsPerPage(parseInt(event.target.value, 10));
       setPage(0);
    };

    

   


    return (
 
    
    
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
            <Paper sx={{ width: '80%', p: 3 }}>
            <Box sx={{display: 'flex',justifyContent: 'space-between',p: 1,m: 1,borderRadius: 1,}}>
            <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}/>

                <Button component={Link} to='/create' variant="contained" color="primary" sx={{ mb: 2 }}>
                    Add +
                </Button>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>COMPANY NAME</TableCell>
                            <TableCell>ADDRESS</TableCell>
                            <TableCell>PHONE</TableCell>
                            <TableCell>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((d, i) => (
                            <TableRow key={d.id}>
                                <TableCell>{d.id}</TableCell>
                                <TableCell>{d.company_name}</TableCell>
                                <TableCell>{d.Address}</TableCell>
                                <TableCell>{d.phone}</TableCell>

                                <TableCell>
                                    <Button component={Link} to='/update' variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                                        Update
                                    </Button>
                                    <Button onClick={() => handleDelete(d.id)} variant="contained" color="secondary" size="small">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination component="div" count={100} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}/>
            </Paper>
        </Box>
  );
}
