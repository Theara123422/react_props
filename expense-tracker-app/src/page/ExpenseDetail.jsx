import React from 'react'
import { useParams } from 'react-router-dom'

const ExpenseDetail = ({expenses}) => {
  const { id } = useParams();
  console.log(expenses);
  
  const detailInfo = expenses.filter(expense => {
      return expense.id == id;
  });
  return (
    <div className='page-size'>
        <h1>The Detail Page of Expense : # {detailInfo[0].id}</h1>
        <h2>Title = {detailInfo[0].title}</h2>
        <h2>Type  = {detailInfo[0].type}</h2>
        <h2>Category = {detailInfo[0].category}</h2>
        <h2>Amount = {detailInfo[0].amount}</h2>
        <h2>Remark = {detailInfo[0].remark}</h2>
    </div>
  )
}

export default ExpenseDetail