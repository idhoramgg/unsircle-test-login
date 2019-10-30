import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  console.log(props, 'props');
  return(
    <div>
      <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link to="/" className="nav-link active" >Logout</Link>
  </li>
 
</ul>
    </div>
  )
}
export default Header