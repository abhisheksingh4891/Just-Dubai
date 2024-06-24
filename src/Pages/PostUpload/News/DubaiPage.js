import React from 'react'
import { Link } from 'react-router-dom'

const DubaiPage = () => {
  return (
    <div>
        <Link to="/dubainews"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default DubaiPage