import React from 'react'
import { Link } from 'react-router-dom'

const WorldPage = () => {
  return (
    <div>
        <Link to="/worldnews"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default WorldPage