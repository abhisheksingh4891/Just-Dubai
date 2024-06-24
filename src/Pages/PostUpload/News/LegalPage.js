import React from 'react'
import { Link } from 'react-router-dom'

const LegalPage = () => {
  return (
    <div>
        <Link to="/legalnews"><button className='btn btn-success'>New Post</button></Link>
    </div>
  )
}

export default LegalPage