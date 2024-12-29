import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className='page-size' style={{width: '85%',alignItems : 'center',justifyContent : 'center'}}>
        <h2>Show Detail of blog #{id}</h2>
    </div>
  )
}

export default BlogDetails