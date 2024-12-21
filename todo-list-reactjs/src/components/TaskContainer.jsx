import React from 'react'
import TaskHeader from './TaskHeader'
import TaskItemContainer from './TaskItemContainer'

const TaskContainer = ({quote,tasks}) => {
  return (
    <div className='task-container'>
        <TaskHeader quote={quote}/>
        <TaskItemContainer tasks={tasks} />
    </div>
  )
}

export default TaskContainer