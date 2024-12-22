import React from 'react'
import { BookOpenIcon,TrashIcon,CheckCircleIcon,ArrowPathIcon } from '@heroicons/react/16/solid'

const TaskItem = ({task,setTask,tasks}) => {
  const handleMarkAsDone = () => {
    //   console.log(tasks);
      task.completed = !task.completed;
    //   console.log(tasks);   
      setTask([...tasks]);
  }
  const handleRemoveTask = () => {
      const taskAfterDeleted = tasks.filter(item => {
          return item.id != task.id;
      });
      setTask(taskAfterDeleted);
  }
  return (
    <li className='d-flex gap-3 mt-4 mb-2 bg-light py-2 px-3' style={{height : '10%'}}>
        <BookOpenIcon style={{width : '30px'}}/>
        <div className='mt-2 h-100'>
            <p className={task.completed ? 'text-decoration-line-through' : 'text-decoration-none'}>{task.text}</p>
            <p>{task.created_at}</p>
        </div>
        <div className="btn-group ms-auto">
              <button 
                  className='btn ms-auto my-3 btn-outline-success' 
                  onClick={handleMarkAsDone}
              >
                  {
                        task.completed ? <ArrowPathIcon width={'20px'}/>  : <CheckCircleIcon width={'20px'} /> 
                         
                  }  
                  {
                        task.completed ? '  Undo'  : '  Mark as Done' 
                  }
              </button>
              <button 
                  className='btn btn-outline-danger ms-auto my-3' 
                  onClick={handleRemoveTask}
              >
                  <TrashIcon style={{width : '20px',marginRight : '5px'}}/>
                  Remove
              </button>
        </div>
    </li>
  )
}

export default TaskItem