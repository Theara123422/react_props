import React from 'react'

const Home = ({expenses}) => {
    const incomeFiltered = expenses.filter(income => {
        return income.type == "Income";
    }).length;
    const outcomeFiltered = expenses.filter(outcome => {
        return outcome.type == "Outcome";
    }).length;
  return (
    <div 
        className='page-size'
    >
        <h2>Welcome to Expense Tracker App</h2>
        <div className="summary-expense-container">
            <div className='income-summary'>
                <h1>Income</h1>
                <h1>=</h1>
                <h1>{incomeFiltered}</h1>
            </div>
            <div className='outcome-summary'>
                <h1>Outcome</h1>
                <h1>=</h1>
                <h1>{outcomeFiltered}</h1>
            </div>
        </div>
    </div>
  )
}

export default Home