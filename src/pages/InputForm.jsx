import React, { useEffect, useState } from 'react';
import './InputForm.css';
import {useNavigate} from "react-router-dom"
import { nanoid } from 'nanoid';

function InputForm({setBudgetItems}) {

 
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate()

  const[toOrFrom, setToOrFrom] = useState("")

  const [formData, setFormData] = useState({
    id: nanoid(6),
    item_name: '',
    amount: '',
    date: '', // 
    party_name: '', // new field for party name
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => { 
    if(e.target.name === "involved"){
        console.log(e.target.name)
        setFormData((prevState) => {
            return {...prevState, [toOrFrom]:  e.target.value}
        })
        
    }else {
  
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
}

  useEffect(() => {
    console.log(formData)
}, [formData])

  const handleSelect = (e) =>{
    e.preventDefault();
   if(toOrFrom === "to"){
    setToOrFrom("from")
 }else if(toOrFrom === "from"){
        setToOrFrom("to")
    }
 }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    //prevents over autosubmitting

    try {
      const response = await fetch( API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response failed');
      }

      const data = await response.json();
      setResponseMessage('Form submitted successfully!');
      console.log('Form data submitted:', data);

      
      // Reset form fields after successful submission
      setFormData({
        item_name: '',
        amount: '',
        date: '',
        [toOrFrom]: '',  // Reset to default 'to'
        party_name: '', // Reset party name
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Failed to submit form');
    }
    navigate("/")
    setBudgetItems((prevState) => {
        return [...prevState, formData]
    })
}

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Amount">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.Amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.Date}
            onChange={handleChange}
          />
        </div>
        <div>
         
          <div>
            
            <label htmlFor="Transaction">Party Involved:</label>
           <select
            id={toOrFrom}
            name="involved"
            value={formData.category}
            onChange={handleSelect}
             >

            <option value="to">To</option>
            <option value="from">From</option>


             </select>
            <input
            type="text"
            id="party_name"
            name="involved"
            value={formData.tofrom}
            onChange={handleChange}
            />
        
            
          </div>

        </div>
       
        <div>
             <label htmlFor="category">Category:</label>

             <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          /> 

        </div>
        <div>
          <label htmlFor="Message">Note:</label>
          <input
            type="text"
            id="note"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>

     
      
    </div>
  );

  
}
export default InputForm;
