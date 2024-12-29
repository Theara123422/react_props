import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blogs}) => {
  return (
    <div className='page-size' style={{width: '85%',alignItems : 'flex-start',flexWrap:'wrap'}}>
        {
          blogs.map(e => {
             return (
              <div key={e.id} className="blog_card d-flex justify-content-center align-items-center ">
                  <Link to={`/dashboard/blogs/${e.id}`}>
                      <h2>Blog {e.id}</h2>
                  </Link>
              </div>
             )
          })
        }
    </div>
  )
}

export default Blog