import React from 'react'
import { Link } from 'react-router-dom'

const SportsPage = () => {
  return (
    <div>
        <Link to="/sportsnews"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default SportsPage