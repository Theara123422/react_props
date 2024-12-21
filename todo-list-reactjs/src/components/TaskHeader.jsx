import React from 'react'

const TaskHeader = ({quote}) => {
  return (
    <div className='w-100 d-flex justify-content-between px-4 py-1 border-info border-bottom border-3'>
        <p>Tasks List</p>
        <p>{quote}</p>
    </div>
  )
}

export default TaskHeader