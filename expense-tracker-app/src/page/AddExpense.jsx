import React, { useState } from 'react'

const AddExpense = ({expenses,setExpenses}) => {
  const [title,setTitle] = useState("");
  const [type,setType]   = useState("Income");
  const [category,setCategory] = useState("Trip");
  const [amount,setAmount] = useState(0);
  const [remark,setRemark] = useState("");
  const handleAddExpense = (event) => {
      event.preventDefault();

      const newExpense = {
            id : expenses.length + 1,
            title,
            type,
            category,
            amount,
            remark
        }

        setExpenses([...expenses,newExpense]);
        console.log(expenses);
  }
  return (
    <div className='page-size'>
        <h2 className='my-3'>Add Your New Expense Here</h2>
        <form onSubmit={handleAddExpense}  className='form-size '>
            <label htmlFor="" className='form-label'>Title : </label>
            <input 
                type="text" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className='form-control w-100 border border-2 border-primary'
                placeholder='Expenses Title'
            />
            <div className="w-100 my-3 d-flex gap-3">
                <div className='w-50'>
                    <label htmlFor="" className='form-label'>Type : </label>
                    <select 
                        className='w-100 form-select border border-2 border-primary '
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    >
                        <option value="Income">
                                Income
                        </option>
                        <option value="Outcome">
                                Outcome
                        </option>
                    </select>
                </div>
                <div className='w-50'>
                    <label htmlFor="" className='form-label'>Category : </label>
                    <select 
                        className='w-100 form-select border border-2 border-primary '
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option  value="Trip">
                                Trip
                        </option>
                        <option  value="Food & Supply">
                                Food & Supply
                        </option>
                        <option  value="Shopping">
                                Shopping
                        </option>
                    </select>
                </div>
            </div>
            <label htmlFor="" className='form-label'>Amount : </label>
            <input 
                type="number" 
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                className='form-control w-100 border border-2 border-primary'
                placeholder='Expenses Amount'
            />
            <label htmlFor="" className='form-label'>Remark : </label>
            <textarea 
                    className='form-control border border-2 border-primary'
                    value={remark}
                    onChange={(event) => setRemark(event.target.value)}
            >

            </textarea>
            <button type='submit' className='btn btn-outline-primary d-block mx-auto my-4 w-25'>Submit</button>
        </form>
    </div>
  )
}

export default AddExpense