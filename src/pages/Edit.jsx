import {React, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './Edit.css'


function Edit({ budgetItems, setBudgetItems }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const API = import.meta.env.VITE_BASE_URL;

    const [theBudgetItem, setTheBudgetItem] = useState({
        item_name: '',
        amount: '',
        date: '',
        to: '',
        from: '',
        category: '',
        message: ''
    });

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
    }, [id, API]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTheBudgetItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(theBudgetItem)
        })
        .then(res => res.json())
        .then(res => {
            const updatedItems = budgetItems.map(item => 
                item.id === id ? res : item
            );
            setBudgetItems(updatedItems);
            navigate(`/show/${id}`);
        })
        .catch(err => console.error(err));
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (

    <form className='formm'   onSubmit={handleSubmit}>
    <label>
        Transaction Name:
        <input
            type="text"
            name="item_name"
            value={theBudgetItem.item_name}
            onChange={handleChange}
        />
    </label>
    <label>
        Amount:
        <input
            type="text"
            name="amount"
            value={theBudgetItem.amount}
            onChange={handleChange}
        />
    </label>
    <label>
        Date:
        <input
            type="text"
            name="date"
            value={theBudgetItem.date}
            onChange={handleChange}
        />
    </label>
    <label>
        Party Involved:
        <input
            type="text"
            name="to"
            value={theBudgetItem.to || theBudgetItem.from}
            onChange={handleChange}
        />
    </label>
    <label>
        Category:
        <input
            type="text"
            name="category"
            value={theBudgetItem.category}
            onChange={handleChange}
        />
    </label>
    <label>
        Note:
        <textarea
            name="message"
            value={theBudgetItem.message}
            onChange={handleChange}
        ></textarea>
    </label>
    <button type="submit">Save</button>
</form>
);
}


export default Edit;