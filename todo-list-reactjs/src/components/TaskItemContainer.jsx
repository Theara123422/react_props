import React from 'react'
import TaskItem from './TaskItem'

const TaskItemContainer = ({tasks}) => {
        return tasks.length > 0 ? 
            (
              <ul className='task-item-container px-4 list-unstyled'>
                  {
                      tasks.map((task) => {
                          return (
                              <TaskItem 
                                  key={task.id}
                                  task={task}
                              />
                          )
                      })
                  }
              </ul>
            ):
            (
                <p className='text-center mt-5 fs-3'>No to do list today</p>
            )
}

export default TaskItemContainer