import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import Blog from './pages/dashboard/Blog'
import Comment from './pages/dashboard/Comment'
import BlogDetails from './pages/dashboard/BlogDetails'
import blogs from './data/blogs';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [blogLists,setBlockList] = useState(blogs);
  return (
    <>
        <Navbar />
        {/* Link or route */}
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dashboard' element={<Dashboard  />}>
                <Route path='/dashboard/blogs' element={<Blog  blogs={blogLists} />} ></Route>
                <Route path='/dashboard/blogs/:id' element={<BlogDetails />} />
                <Route path='/dashboard/comments' element={<Comment />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
