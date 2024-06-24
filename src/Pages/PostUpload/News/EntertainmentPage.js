import React from 'react'
import { Link } from 'react-router-dom'

const EntertainmentPage = () => {
  return (
    <div>
        <Link to="/entertainmentnews"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default EntertainmentPage;