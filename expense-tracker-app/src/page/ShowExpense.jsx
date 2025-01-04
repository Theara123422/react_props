import React from 'react'
import { TrashIcon } from '@heroicons/react/16/solid'

const ShowExpense = () => {
  return (
    <div className='page-size'>
        <h2>Expenses List</h2>
        <table className='table w-75 my-4 align-middle' style={{tableLayout : 'fixed'}}>
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
                <tr>
                    <td>1001</td>
                    <td>Open Salary</td>
                    <td>Income</td>
                    <td>Monthly Income</td>
                    <td>$1000.00</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                            <TrashIcon width={'20px'} className='mb-1 '/>
                            Remove
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Open Salary</td>
                    <td>Income</td>
                    <td>Monthly Income</td>
                    <td>$1000.00</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                            <TrashIcon width={'20px'} className='mb-1 '/>
                            Remove
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Open Salary</td>
                    <td>Income</td>
                    <td>Monthly Income</td>
                    <td>$1000.00</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                            <TrashIcon width={'20px'} className='mb-1 '/>
                            Remove
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Open Salary</td>
                    <td>Income</td>
                    <td>Monthly Income</td>
                    <td>$1000.00</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                            <TrashIcon width={'20px'} className='mb-1 '/>
                            Remove
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Open Salary</td>
                    <td>Income</td>
                    <td>Monthly Income</td>
                    <td>$1000.00</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                            <TrashIcon width={'20px'} className='mb-1 '/>
                            Remove
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1001</td>
                    <td>Open Salary</td>
                    <td>Income</td>
                    <td>Monthly Income</td>
                    <td>$1000.00</td>
                    <td>
                        <button className='btn btn-outline-danger'>
                            <TrashIcon width={'20px'} className='mb-1 '/>
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ShowExpense