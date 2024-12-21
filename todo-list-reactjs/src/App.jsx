import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'
import TaskContainer from './components/TaskContainer'
import { useState } from 'react'

const App = () => {
  const quote = "Consistent is the key to success";
  const [tasks,setTask] = useState(() => {
      const savedItem = localStorage.getItem("task-item");

      return (savedItem) ? JSON.parse(savedItem) : [];
  });
  return (
    <div className='app-container px-4'>
        <TodoTitle title="Todo Lists App with ReactJS"/>
        <TodoInput />
        <TaskContainer quote={quote} tasks={tasks}/>
    </div>
  )
}
export default App
