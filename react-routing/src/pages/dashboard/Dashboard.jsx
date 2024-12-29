import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='page-size'>
        <div className="sidebar d-flex flex-column align-items-center">
            <h2 className='mt-4'>LOGO</h2>
            <ul className='list-unstyled d-flex flex-column gap-3'>
                <li className='mt-3'>
                      <Link className="text-decoration-none navbar-txt" to='/dashboard/blogs'>
                            Blogs
                      </Link>
                </li>
                <li>
                      <Link className="text-decoration-none navbar-txt" to='/dashboard/comments'>
                            Comments
                      </Link>
                </li>
                <li>
                      Categories
                </li>
                <li>
                      Tag
                </li>
            </ul>
        </div>
        <Outlet />
    </div>
  )
}

export default Dashboard