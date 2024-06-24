import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <form>
                      <div className="p-5 mt-5">
                        <div>
                          <Link to="/festival">Festivals</Link>
                        </div>
                        <div>
                          <Link to="/attraction">Attractions</Link>
                        </div>
                        <div>
                          <Link to="/culture">Cultures</Link>
                        </div>
                        <div>
                          <Link to="/interestingfact">Interesting Facts</Link>
                        </div>
                      </div>
                    </form>
    </div>
  )
}

export default Navigation