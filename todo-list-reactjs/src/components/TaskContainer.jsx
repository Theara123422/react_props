import React from 'react'
import TaskHeader from './TaskHeader'
import TaskItemContainer from './TaskItemContainer'

const TaskContainer = ({quote}) => {
  return (
    <div className='task-container'>
        <TaskHeader quote={quote}/>
    </div>
  )
}

export default TaskContainer