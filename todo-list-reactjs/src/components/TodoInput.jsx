import React, { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/16/solid'

const TodoInput = ({tasks,setTask}) => {
  const [newTask,setNewTask] = useState("");
  const handleAddTask = () => {
      if(!newTask.trim()){
          alert("Task cannot be Null");
          return;
      }
      const task = {
          id   : Math.floor(Math.random()*100),
          text : newTask,
          created_at : (new Date().getDate() +'-'+ new Date().getMonth() +'-'+ new Date().getFullYear()),
          completed  : false
      }
      setTask([...tasks,task]);
      setNewTask("");
  }
  
  return (
    <div className='input-container d-flex justify-content-center py-2 gap-3 my-3'>
        <input 
            type="text" 
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            className='form-control w-50 border border-2 border-primary'
            placeholder='Enter your tasks'
        />
        <button
            className='btn btn-outline-primary'
            onClick={handleAddTask}
        >
            <PlusCircleIcon style={{width : '20px',marginBottom : '3px',marginRight : '3px'}}/>
            Add Tasks
        </button>
    </div>
  )
}

export default TodoInput