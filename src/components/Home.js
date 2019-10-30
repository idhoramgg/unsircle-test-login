import React from 'react'
import Header from './header'

import '../App.css'

class Home extends React.Component {
  
  render(){
    let email = 'unsircle@gmail.com'
    
  return(
    <div className="container">
    <Header/>
      <h3>Welcome {email}</h3>
      

    </div>
  )
}
  
}
export default Home