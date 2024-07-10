import { useState , useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Show from './pages/Show';
import Form from './pages/InputForm';
import Edit from './pages/Edit';
//import,giving our name to be referenced 
function App() {

  const [budgetItems, setBudgetItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    console.log(API)
    fetch(API)
      .then(res => res.json())
      .then(res => {
        setBudgetItems(res); 
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []); 

  return (
    <>
      <NavBar/>
      <Routes>
              <Route path="/" element={<Home budgetItems={budgetItems} setBudgetItems={setBudgetItems} isLoading={isLoading} error={error}/>}/>

              <Route path = "/budgetitem/:id" element = {<Show budgetItems={budgetItems} setBudgetItems={setBudgetItems}/>}/>

              <Route path ="/InputForm" element ={
                <Form setBudgetItems={setBudgetItems}/>}/> 

             <Route path ="/budgetitem/:id/edit" element = {<Edit />}/>



      </Routes>

    </>
  )
}

export default App
