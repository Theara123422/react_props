import React from 'react'

const AddExpense = () => {
  return (
    <div className='page-size'>
        <h2 className='my-3'>Add Your New Expense Here</h2>
        <form onSubmit={handleAddExpense} className='form-size '>
            <label htmlFor="" className='form-label'>Title : </label>
            <input 
                type="text" 
                className='form-control w-100 border border-2 border-primary'
                placeholder='Expenses Title'
            />
            <div className="w-100 my-3 d-flex gap-3">
                <div className='w-50'>
                    <label htmlFor="" className='form-label'>Type : </label>
                    <select className='w-100 form-select border border-2 border-primary '>
                        <option>
                                Income
                        </option>
                        <option>
                                Outcome
                        </option>
                    </select>
                </div>
                <div className='w-50'>
                    <label htmlFor="" className='form-label'>Category : </label>
                    <select className='w-100 form-select border border-2 border-primary '>
                        <option>
                                Trip
                        </option>
                        <option>
                                Food & Supply
                        </option>
                        <option>
                                Shopping
                        </option>
                    </select>
                </div>
            </div>
            <label htmlFor="" className='form-label'>Amount : </label>
            <input 
                type="number" 
                className='form-control w-100 border border-2 border-primary'
                placeholder='Expenses Amount'
            />
            <label htmlFor="" className='form-label'>Remark : </label>
            <textarea name="" id="" className='form-control border border-2 border-primary'></textarea>
            <button type='submit' className='btn btn-outline-primary d-block mx-auto my-4 w-25'>Submit</button>
        </form>
    </div>
  )
}

export default AddExpense