import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/16/solid'

const TodoInput = () => {
  return (
    <div className='input-container d-flex justify-content-center py-2 gap-3 my-3'>
        <input 
            type="text" 
            className='form-control w-50 border border-2 border-primary'
            placeholder='Enter your tasks'
        />
        <button
            className='btn btn-outline-primary'
        >
            <PlusCircleIcon style={{width : '20px',marginBottom : '3px',marginRight : '3px'}}/>
            Add Tasks
        </button>
    </div>
  )
}

export default TodoInput