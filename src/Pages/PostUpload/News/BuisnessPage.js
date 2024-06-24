import React from 'react'
import { Link } from 'react-router-dom'

const BuisnessPage = () => {
  return (
    <div>
        <Link to="/buisnessnews"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default BuisnessPage