import axios  from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Create_Product() {
  const [product_name, setProduct_name] = useState('')
  const [hsn_code, setHsn_code] = useState('')
  const [amount, setAmount] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/masters/Create',{product_name,hsn_code,amount})
        .then(res => {
           navigate('/masters/Product');
        }).catch(err => console.log(err));
    } 
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
    <div className='bg-white rounded w-50 p-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
            <label for="validationDefault01" class="form-label">PRODUCT NAME</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="Enter your first name"
            onChange={e => setProduct_name(e.target.value)}/>
        </div>

        <div className="mb-2">
            <label for="validationDefault02" class="form-label">HSN CODE</label>
            <input type="text" class="form-control" id="validationDefault02" placeholder="Enter Student Code"
              onChange={e => setHsn_code(e.target.value)}/>
        </div>

        <div className="mb-2">
            <label for="validationDefault03" class="form-label">AMOUNT</label>
            <input type="text" class="form-control" id="validationDefault03" placeholder="Enter Fees"
            onChange={e => setAmount(e.target.value)}/>
        </div>
        <button className='btn btn-success'>Submit</button>
     </form>
     </div>
    </div>
  )
}

export default Create_Product
