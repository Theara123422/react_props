import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'
import TaskContainer from './components/TaskContainer'

const App = () => {
  const quote = "Consistent is the key to success";
  return (
    <div className='app-container px-4'>
        <TodoTitle title="Todo Lists App with ReactJS"/>
        <TodoInput />
        <TaskContainer quote={quote}/>
    </div>
  )
}
export default App
