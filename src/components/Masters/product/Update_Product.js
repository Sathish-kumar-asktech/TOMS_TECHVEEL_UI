/* eslint-disable react-hooks/exhaustive-deps */
// Update.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Update_Product() {
    const [product_name, setProduct_name] = useState('');
    const [hsn_code, setHsn_code] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`http://localhost:8081/products/${id}`)
            .then(res => {
                const data = res.data[0];
                setProduct_name(data.product_name);
                setHsn_code(data.hsn_code);
                setAmount(data.amount);
            })
            .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8081/masters/Update/${id}`, { product_name, hsn_code, amount })
            .then(res => {
                navigate('/masters/Product');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50 p-3'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="validationDefault01" className="form-label">Update Name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Enter product name"
                            value={product_name} onChange={e => setProduct_name(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="validationDefault02" className="form-label">Update HSN Code</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Enter HSN Code"
                            value={hsn_code} onChange={e => setHsn_code(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="validationDefault03" className="form-label">Update Amount</label>
                        <input type="text" className="form-control" id="validationDefault03" placeholder="Enter AMOUNT"
                            value={amount} onChange={e => setAmount(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Update_Product;
