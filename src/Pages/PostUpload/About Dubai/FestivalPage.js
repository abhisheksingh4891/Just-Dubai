import React from 'react'
import { Link } from 'react-router-dom'

const FestivalPage = () => {
  return (
    <div>
        <Link to="/festival"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default FestivalPage