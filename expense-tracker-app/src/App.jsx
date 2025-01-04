import Navbar from './components/Navbar'
import Home from './page/Home'
import AddExpense from './page/AddExpense'
import ShowExpense from './page/ShowExpense'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [expenses,setExpenses] = useState(() => {

      const expenses_item = JSON.parse(localStorage.getItem('expenses'));

      return (expenses_item) ? expenses_item : [];

  })
  return (
     <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/add-expense' element={<AddExpense expenses={expenses} setExpenses={setExpenses} />}/>
            <Route path='/show-expense' element={<ShowExpense />}/>
        </Routes>
     </>
  )
}

export default App
