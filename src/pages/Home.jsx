import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = ({budgetItems, setBudgetItems, isLoading, error}) => {
    

    return (
        <div className='container'>
            
            {isLoading && <h4>Loading...</h4>}
            {error && <p>Error: {error}</p>}
            {(!isLoading && !error) && budgetItems.map((budgetItem, i) => (
            
                <div className="transactions" 
                     key={i}>
                    <Link to={`/budgetitem/${i}`}>{budgetItem.item_name}</Link>
                </div>
  
            ))}
        </div>
    );
}

export default Home;
