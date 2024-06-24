import React from 'react'
import { Link } from 'react-router-dom'

const CulturePage = () => {
  return (
    <div>
        <Link to="/culturepage"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default CulturePage