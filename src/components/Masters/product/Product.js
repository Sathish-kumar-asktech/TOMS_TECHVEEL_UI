// Products.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8081/products')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };
  
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                console.log(res.data);
                fetchData();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50 p-3'>
                <h2>Products List</h2>
                <div className="d-flex justify-content-between">
                    <input
                        type="text"
                        placeholder="Search here"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link to="/masters/Create" className='btn btn-success'>Add+</Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>HSN Code</th>
                            <th>AMOUNT</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.filter((h) => {
                            const searchData = search.toLowerCase();
                            return (
                                searchData === "" ||
                                (h.product_name && h.product_name.toLowerCase().includes(searchData)) ||
                                (h.hsn_code && h.hsn_code.toLowerCase().includes(searchData)) ||
                                (h.amount && String(h.amount).toLowerCase().includes(searchData))
                            );
                        }).map((h, i) => (
                            <tr key={i}>
                                <td>{h.product_name}</td>
                                <td>{h.hsn_code}</td>
                                <td>{String(h.amount)}</td>
                                <td>
                                    <Link to={`/masters/Update/${h.id}`} className='btn btn-sm btn-primary '>Update</Link>
                                    <button onClick={() => handleDelete(h.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Products;
