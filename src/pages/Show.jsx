import {React, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './Show.css';


function Show({budgetItems, setBudgetItems}) {

    const [theBudgetItem, setTheBudgetItem] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const API = import.meta.env.VITE_BASE_URL;
    const { id } =useParams()

    useEffect(() => {

        fetch(`${API}/${id}`)

            .then(res => res.json())
            .then(res => {
                setTheBudgetItem(res); 
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []); 

    const handleDelete = (e) => {
    if(window.confirm("Are you sure you want to delete this transaction?")){
        fetch(`${API}/${id}`, {
            method: "DELETE"    
        })
        .then(res => res.json())
        .then(res => {
            navigate("/")
        })
        .catch(err => console.error(err))
        budgetItems.splice(id, 1)
        setBudgetItems(budgetItems)
    }
    }

    const handleEdit = () => {
        navigate(`/budgetitem/:id/edit`);
    };
    
  return (
    <div className='card'>

      <div className='slot'>
        <h3> Transaction Name:</h3><h2><span>{theBudgetItem.item_name}</span>
        </h2>
     </div>

     <div className='slot'>
         <h3>Amount:</h3> <span>{theBudgetItem.amount}</span>
      </div>

      <div className='slot'>
        <h3>Date:</h3> <span>{theBudgetItem.date}</span>
      </div>
      
      

      <div className='slot'>
      <h3>Party Involved:</h3><span> {theBudgetItem.to ? theBudgetItem.to : theBudgetItem.from}</span>
      </div>

      <div className='slot'>
      <h3>Category:</h3> <span>{theBudgetItem.category}</span>
      </div>

      <div className='slot' id='notesection'>
      <h2>Note:</h2> <span>{theBudgetItem.message}</span>
     
      </div>
      <div className='bottom'>
        <button onClick={handleDelete}> Delete</button> 
        <button onClick={handleEdit}>Edit Item</button>
        </div>
      

    

    </div>
  )
}

export default Show
