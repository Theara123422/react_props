import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar h-100 pt-4'>
        <h4 className='text-center'>Dashboard</h4>
        <ul className='menu d-flex mt-4 flex-column list-unstyled w-100 h-75 gap-4 align-items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Analytic</a></li>
            <li><a href="#">Tasks</a></li>
            <li><a href="#">Setting</a></li>
            <li><a href="#">Helps</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </div>
  )
}

export default Sidebar