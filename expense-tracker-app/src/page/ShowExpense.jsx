import React from 'react'
import { TrashIcon, InformationCircleIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

const ShowExpense = ({expenses,setExpenses}) => {
  return (
    <div className='page-size'>
        <h2>Expenses List</h2>
        <table className='table w-75 my-4 align-middle table-hover' style={{tableLayout : 'fixed'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map(expense => {
                        return (
                            <tr>
                                <td>{expense.id}</td>
                                <td>{expense.title}</td>
                                <td>{expense.type}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount}</td>
                                <td className='d-flex gap-1'>
                                    <Link to={`/expense/${expense.id}`}>
                                        <button className='btn btn-outline-info'>
                                            <InformationCircleIcon width={'20px'} />
                                            Details
                                        </button>
                                    </Link>
                                    <button className='btn btn-outline-danger'>
                                        <TrashIcon width={'20px'} className='mb-1 '/>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowExpense