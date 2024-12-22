import React from 'react'
import TaskHeader from './TaskHeader'
import TaskItemContainer from './TaskItemContainer'

const TaskContainer = ({quote,tasks,setTask}) => {
  return (
    <div className='task-container'>
        <TaskHeader quote={quote}/>
        <TaskItemContainer tasks={tasks} setTask={setTask} />
    </div>
  )
}

export default TaskContainer