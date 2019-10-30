import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = (props) => { 
  
  return(
    <div className="container"> 
    <div>
    <ul className="nav justify-content-end">
    <li className="nav-item">
      <Link to="/login" className="nav-link active" >Login</Link>
    </li>
    </ul>
      </div>
     
      
      <h2>Homepage</h2>
    </div>
  )
}
export default Homepage