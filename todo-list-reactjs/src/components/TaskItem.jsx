import React from 'react'
import { BookOpenIcon,TrashIcon } from '@heroicons/react/16/solid'

const TaskItem = ({task}) => {
  return (
    <li className='d-flex gap-3 mt-4 mb-2 bg-light py-3 px-3' style={{height : '20%'}}>
        <BookOpenIcon style={{width : '30px'}}/>
        <div>
            <p className='m-0'>{task.text}</p>
            <p>{task.id}</p>
        </div>
        <button 
            className='btn btn-outline-danger ms-auto' 
        >
            <TrashIcon style={{width : '20px'}}/>
            Remove
        </button>
    </li>
  )
}

export default TaskItem