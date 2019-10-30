import React from 'react'
// import {Link} from 'react-router-dom'
// import Home from './Home'
import '../App.css'
import Swal from 'sweetalert2'


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      isSignIn:false
    }
  }

   handleChange = (event) => {
     this.setState({
       ...this.state,
       [event.target.name]: event.target.value
     })
   }
  

   handleSubmit= (event) => {
    let emailAdmin = 'unsircle@gmail.com'
    let passwordAdmin = 'unsircle@gmail.com'

    event.preventDefault();
     if(this.state.email === emailAdmin && this.state.password === passwordAdmin) {
      this.setState({
        ...this.state,
        isSignIn:true
      })
      Swal.fire('Welcome', `${emailAdmin}`, 'success')

      this.props.history.push('/dashboard')
    } else if(this.state.password.length < 5){
      Swal.fire('Error', 'Password should be min 6 characters', 'error')

    } else{
      Swal.fire('Error', 'You are trying to Login to Admin Dashboard', 'error')
    }
  }
  render(){
    return(
      
      <div className="container relative">
          <div className="row">
            <div className="col xs=auto ">
          <form onSubmit={this.handleSubmit} className="form-group login">
          <h3>Login</h3>
            <label for="email"> Email</label><br/>
            <input type="email"
              name="email"
              placeholder="email"
              required
              onChange={this.handleChange}
              defaultValue={this.state.email}
              className="form-control"
              autoFocus
            />
            <br/>
            <label for="password">Password</label><br/>
            <input type="password"
            name="password"
            placeholder="type ur password"
            required
            onChange={this.handleChange}
            defaultValue={this.state.password}
            autoFocus
            className="form-control"/>
          <br/>
          <button className="btn btn-block btn-login" type="submit">Login</button>
          </form>
          </div>
          </div>
         
        </div>
      )
    
  }
}


export default Login